# Donaciones con Mercado Pago

**Modelo que pidió PIEL (noviembre 2026): todo mensual, con montos fijos.**

- **Aporte mensual** → Suscripciones de Mercado Pago (`preapproval` sin plan, con el
  Access Token). La persona elige **uno de tres montos fijos** —$3.000, $6.000 o
  $12.000 por mes— y **cuánto tiempo**: 6 meses, 12 meses o sin fecha de fin. No hay
  campo para escribir otro monto. Mercado Pago cobra solo cada mes y, si eligió una
  duración, la suscripción termina sola.
- **Por única vez** → Checkout Pro. El código está completo pero **apagado**
  (`DONACION_UNICA_HABILITADA = false` en `lib/content/donar.ts`).
  TODO: confirmar con PIEL si la quieren o si es todo mensual.
- **Registro** de cada aporte y de cada cobro en `/panel/donaciones`.

**Estado: el código está escrito, esperando credenciales, base y webhook.** Mientras
no esté `MP_ACCESS_TOKEN`, la página de Donar muestra un aviso, no un formulario que no
puede cobrar.

> El sitio se migra de Vercel a **Azure App Service**. Toda la puesta en marcha se hace
> contra la **URL final de Azure**, y **no se configura nada en Vercel**. El resumen para
> quien sigue la migración está en **`HANDOFF.md`**.

Los montos y las duraciones salen de `donarContent` (`lib/content/donar.ts`). El servidor
(`api/donations/checkout`) acepta **solo** esos valores: cambiar el formulario no alcanza
para cobrar otro monto.

---

## Cómo funciona el aporte mensual

1. En `/se-parte/donar` la persona elige monto y duración, y completa nombre y email.
   El formulario le muestra el resumen ("$3.000 por mes durante 6 meses, $18.000 en total")
2. El servidor registra la **suscripción** como pendiente (tabla `suscripciones`, con su
   duración y su fecha de fin) y la crea en Mercado Pago
3. La persona la autoriza **ingresando con su cuenta de Mercado Pago**. Es un requisito de
   MP para los cobros recurrentes, y el formulario lo avisa antes de enviar
4. Vuelve a `/se-parte/donar/gracias?modalidad=mensual`, que consulta el estado real de la
   suscripción para mostrar el mensaje correcto
5. Por webhook llegan:
   - `subscription_preapproval`: el alta, la pausa o la baja → actualiza la suscripción
   - `subscription_authorized_payment` y `payment`: **cada cobro del mes** → se registra
     como una donación más, con modalidad *Cobro mensual*

**Duración fija.** Se manda a MP como `auto_recurring.end_date` = hoy + N meses − 1 día.
El primer cobro sale al autorizar y los siguientes, el mismo día de cada mes: con esa
fecha de fin entran exactamente N cobros. (`repetitions` solo existe para los planes de
MP; para una suscripción sin plan, la duración se da con la fecha de fin.)

**Cada cobro se registra una sola vez.** MP avisa cada cobro por dos vías; las dos se
identifican con el mismo id de pago, que es único en la base, así que la segunda
actualiza la fila de la primera en vez de duplicar la plata.

**La baja** la hace la persona desde su cuenta de Mercado Pago (sección Suscripciones), o
PIEL desde su panel de MP. En los dos casos llega por webhook y el panel se actualiza
solo. Cuando PIEL defina un correo para pedir la baja, se carga en
`bajaAporteMensualEmail` (`lib/content/donar.ts`) y el formulario lo muestra.

**Suscripciones hechas fuera del sitio** (por ejemplo, desde el link de un plan de MP):
el webhook también las registra, como "Sin nombre" (MP solo manda el email) y sin
duración. Solo llegan si se crearon en la misma aplicación de MP que tiene el webhook.

### Planes PADRINAZGO (a futuro)

PIEL tiene planes de suscripción creados en Mercado Pago. Hoy **no se usan**: el sitio crea
sus propias suscripciones con los montos fijos. TODO(PIEL): si quieren que las nuevas
suscripciones entren en esos planes, hacen falta sus links (o sus `preapproval_plan_id`).
Dos caminos, explicados en `crearSuscripcion` (`lib/donaciones/mercadopago.ts`):

- **Redirigir al link del plan**: no usa el Access Token, pero el monto y la duración los
  fija el plan y la persona no pasa por nuestro formulario.
- **Crear la suscripción por API con el plan**: MP exige tomar la tarjeta en el sitio con
  su SDK de JavaScript (`card_token_id`), y ahí sí hace falta la Public Key.

## Cómo funciona el aporte por única vez (apagado)

1. La persona completa nombre, email y monto
2. El servidor registra la donación como **pendiente** y crea una *preferencia* de
   Checkout Pro
3. Se la redirige al checkout de MP (tarjeta, débito, dinero en cuenta, efectivo)
4. Vuelve a `/se-parte/donar/gracias` con el resultado
5. **En paralelo**, MP llama al webhook y ahí se confirma el estado real

Si eligió efectivo o transferencia, el pago queda **pendiente** hasta que se acredita; MP
avisa por webhook y el estado cambia solo a **aprobada**.

---

## Puesta en marcha (en Azure)

### 1. Base de datos: Neon Postgres

Crear un proyecto en [neon.tech](https://neon.tech) (directo, no desde Vercel) y copiar la
**connection string** a `DATABASE_URL`. Las tablas (`donaciones` y `suscripciones`) se
crean solas la primera vez que se usan; si la base ya existía, las columnas nuevas se
agregan solas sin tocar lo registrado.

> El código usa el driver serverless de Neon (`@neondatabase/serverless`), que habla con
> el proxy de Neon. Con otro Postgres (por ejemplo, Azure Database for PostgreSQL) **no
> funciona** sin cambiar el driver en `lib/donaciones/db.ts`.

> **Por qué una base y no un JSON** como el resto del contenido del panel: si dos pagos
> se confirman al mismo tiempo, un ciclo "leer JSON → agregar → escribir JSON" pierde uno
> de los dos. Con fotos del equipo eso no importa; con plata, sí.

### 2. Credenciales de Mercado Pago

Con la **cuenta de Mercado Pago de la asociación**:

1. [mercadopago.com.ar/developers](https://www.mercadopago.com.ar/developers) →
   **Tus integraciones** → la aplicación (producto **Pagos online**: Checkout Pro y
   Suscripciones usan el mismo Access Token)
2. **Credenciales** → copiar el **Access Token** (`MP_ACCESS_TOKEN`). La Public Key no
   hace falta.

### 3. Webhook

En la misma aplicación → **Webhooks** → *Configurar notificaciones*:

- **URL:** `https://URL-FINAL-DE-AZURE/api/donations/webhook`
- **Eventos:** **Pagos** y **Planes y suscripciones**. Este último incluye
  `subscription_preapproval` y `subscription_authorized_payment`: sin él, los aportes
  mensuales no se actualizan en el panel.
- Al guardar, MP muestra una **clave secreta**: es `MP_WEBHOOK_SECRET`.

> Sin esa clave el webhook rechaza todas las llamadas: es lo que prueba que quien llama
> es Mercado Pago. Verificado: sin firma, con firma falsa o con una notificación vieja
> reenviada, responde 401.

### 4. Variables

| Variable | De dónde sale |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL final de Azure, sin barra al final. **Tiene que estar en el build** |
| `MP_ACCESS_TOKEN` | paso 2 |
| `MP_WEBHOOK_SECRET` | paso 3 |
| `DATABASE_URL` | paso 1 |

Lista completa (panel, formularios) en `HANDOFF.md`.

### 5. Probar

- Con credenciales de **producción**, MP no deja que la cuenta de PIEL se pague a sí
  misma: probar desde **otra cuenta** de MP, con el monto más chico ($3.000) y 6 meses.
- Verificar en `/panel/donaciones`: la suscripción aparece **activa**, con "6 meses ·
  hasta el …", y su primer cobro en la tabla de donaciones (una sola fila).
- Cancelarla desde la cuenta que donó: tiene que pasar a **cancelada** sin borrar el
  cobro ya registrado. Devolver el cobro de prueba desde el panel de MP.
- Para probar sin plata real: credenciales y **usuarios de prueba** de MP (un vendedor y
  un comprador, desde *Tus integraciones → Cuentas de prueba*); el email del formulario
  tiene que ser el del comprador de prueba.
- A verificar en la prueba: qué estado informa MP cuando una suscripción con duración
  **llega a su fecha de fin** (hoy un estado desconocido se muestra como "pendiente";
  si MP manda uno nuevo, sumarlo en `mapearEstadoSuscripcion`).

---

## El apartado Donaciones del panel

`/panel/donaciones` muestra:

- **Recaudado este mes**, cantidad de donaciones, total histórico y cuántas quedaron pendientes
- **Aportes mensuales activos** y cuánto suman por mes
- La tabla de las últimas 200 donaciones: fecha, donante, monto, modalidad (única o cobro
  mensual), estado, medio de pago e ID de MP (ese ID sirve para cruzar con el panel de
  Mercado Pago)
- La tabla de **aportes mensuales**: alta, donante, monto por mes, **duración** (meses y
  fecha de fin, o "Sin fecha de fin"), estado (pendiente, activa, pausada, cancelada) e
  ID de la suscripción
- **Exportar a CSV**, para pasarle el detalle al contador

---

## Cosas a resolver del lado de PIEL

- **Donación por única vez:** ¿la quieren, o es todo mensual?
- **Duraciones:** hoy 6 meses, 12 meses o sin fecha de fin. Confirmar cuáles ofrecer.
- **Planes PADRINAZGO:** ver arriba.
- **Comisiones:** Mercado Pago cobra un porcentaje por transacción; para organizaciones
  sin fines de lucro suele haber condiciones especiales.
- **Comprobantes de donación:** si PIEL emite recibos con validez fiscal, es un circuito
  aparte que hay que definir con el contador. El sitio registra la donación, no emite
  comprobantes.
- **Datos personales:** se guardan nombre y email de cada donante. Conviene que el sitio
  tenga una política de privacidad acorde.

---

## Qué está probado y qué no

- **Probado en local:** el formulario; la validación del servidor (acepta solo los tres
  montos y las tres duraciones, rechaza la donación única mientras esté apagada); el
  cálculo de la fecha de fin, incluidos fin de mes y años bisiestos; el armado de la
  suscripción y de la preferencia hasta la llamada a MP; la validación de firmas del
  webhook (incluidos ids alfanuméricos y avisos viejos); y la lógica de la base contra un
  Postgres real: cobros avisados dos veces, cobros que llegan antes que el alta, bajas y
  una base que ya existía.
- **Sin probar contra una base real:** las columnas nuevas de duración (`meses` y `fin`
  en `suscripciones`). Se agregan solas con `ADD COLUMN IF NOT EXISTS`.
- **Falta probar contra Mercado Pago** (paso 5): el recorrido completo, incluida una
  suscripción con fecha de fin.
