# Donaciones con Mercado Pago

Dos modalidades, más el registro de cada donación en el panel:

- **Por única vez** → Checkout Pro.
- **Todos los meses** → Suscripciones (`preapproval` sin plan: el monto lo elige cada donante).

**Estado: todo el código está escrito y probado, esperando las credenciales.**
Mientras no estén, la página de Donar muestra un mensaje y la transferencia bancaria,
no un formulario que no puede cobrar.

---

## Cómo funciona

### Aporte por única vez

1. La persona completa nombre, email y monto en `/se-parte/donar`
2. El servidor registra la donación como **pendiente** en la base y crea una
   *preferencia* en Mercado Pago
3. Se la redirige al checkout de MP (tarjeta, débito, dinero en cuenta, efectivo)
4. Vuelve a `/se-parte/donar/gracias` con el resultado
5. **En paralelo**, MP llama a `/api/donations/webhook` y ahí se confirma el estado real

El paso 5 es el importante: **el registro no depende de que la persona vuelva al sitio**.
Aunque cierre la pestaña apenas paga, la donación queda asentada igual.

### Por qué una donación puede quedar "pendiente"

Si eligió efectivo (Rapipago, Pago Fácil) o transferencia, el pago se acredita horas o
días después. MP avisa por webhook cuando eso pasa y el estado cambia solo a **aprobada**.
No hay que hacer nada a mano.

### Aporte mensual

1. La persona elige *Todos los meses* y completa el formulario
2. El servidor registra la **suscripción** como pendiente (tabla `suscripciones`) y la
   crea en Mercado Pago
3. La persona la autoriza **ingresando con su cuenta de Mercado Pago**. Es un requisito de
   MP para los cobros recurrentes, y el formulario lo avisa antes de enviar
4. Vuelve a `/se-parte/donar/gracias?modalidad=mensual`, que consulta el estado real de la
   suscripción para mostrar el mensaje correcto
5. Por webhook llegan:
   - `subscription_preapproval`: el alta, la pausa o la baja → actualiza la suscripción
   - `subscription_authorized_payment` y `payment`: **cada cobro del mes** → se registra
     como una donación más, con modalidad *Cobro mensual*

**Cada cobro se registra una sola vez.** MP avisa cada cobro por dos vías; las dos se
identifican con el mismo id de pago, que es único en la base, así que la segunda
actualiza la fila de la primera en vez de duplicar la plata.

**La baja** la hace la persona desde su cuenta de Mercado Pago (sección Suscripciones), o
PIEL desde su panel de MP. En los dos casos llega por webhook y el panel se actualiza
solo. Cuando PIEL defina un correo para pedir la baja, se carga en
`bajaAporteMensualEmail` (`lib/content/donar.ts`) y el formulario lo muestra.

---

## Puesta en marcha

### 1. Crear la base de datos

En Vercel, proyecto **web-piel** → pestaña **Storage** → *Create Database* →
**Neon Postgres** → conectar al proyecto. Vercel inyecta `DATABASE_URL` sola.

Las tablas (`donaciones` y `suscripciones`) se crean solas la primera vez que se usan;
no hay que correr ninguna migración. Si la base ya existía, la columna nueva se agrega
sola sin tocar lo registrado.

> **Por qué no va en Vercel Blob** como el resto del contenido del panel: si dos pagos
> se confirman al mismo tiempo, un ciclo "leer JSON → agregar → escribir JSON" pierde
> uno de los dos. Con fotos del equipo eso no importa; con plata, sí.

### 2. Sacar las credenciales de Mercado Pago

Hace falta la **cuenta de Mercado Pago de la asociación** (cuenta vendedor).

1. Entrar a [mercadopago.com.ar/developers](https://www.mercadopago.com.ar/developers)
   con esa cuenta
2. **Tus integraciones** → *Crear aplicación* → producto **Pagos online** (Checkout Pro y
   Suscripciones usan el mismo Access Token)
3. Dentro de la aplicación, sección **Credenciales**. Vas a ver dos juegos:
   - **Credenciales de prueba** — para probar sin mover plata real
   - **Credenciales de producción** — para cobrar de verdad
4. Copiar el **Access Token** del juego que corresponda

### 3. Configurar el webhook

En la misma aplicación → **Webhooks** → *Configurar notificaciones*:

- **URL:** `https://web-piel.vercel.app/api/donations/webhook`
- **Eventos:** **Pagos** y **Planes y suscripciones**. Este último incluye
  `subscription_preapproval` y `subscription_authorized_payment`, que son los avisos del
  aporte mensual: sin él, los aportes mensuales no se actualizan en el panel.
- Al guardar, MP muestra una **clave secreta**. Copiala: es `MP_WEBHOOK_SECRET`

> Sin esa clave el webhook rechaza todas las llamadas. Es lo que prueba que quien llama
> es Mercado Pago y no cualquiera que descubrió la URL. Está verificado: sin firma, con
> firma falsa o con una notificación vieja reenviada, responde 401. Los ids alfanuméricos
> (los de suscripción) se validan en minúscula, como indica Mercado Pago.

### 4. Cargar las variables en Vercel

*Settings → Environments → Production*:

| Variable | De dónde sale |
|---|---|
| `MP_ACCESS_TOKEN` | paso 2 |
| `MP_WEBHOOK_SECRET` | paso 3 |
| `DATABASE_URL` | la inyecta Vercel sola (paso 1) |

Después **Redeploy**.

### 5. Probar antes de cobrar de verdad

Con las credenciales de **prueba**, MP da tarjetas de test que simulan aprobado,
rechazado y pendiente. Probar los tres y verificar que aparezcan en
`/panel/donaciones` con el estado correcto.

Para el **aporte mensual**, MP pide usar **usuarios de prueba** (un vendedor y un
comprador, desde *Tus integraciones → Cuentas de prueba*), y el email del formulario
tiene que ser el del comprador de prueba. Verificar:

- que al autorizarla aparezca en *Aportes mensuales* como **activa**, con su primer cobro
  en la tabla de donaciones (una sola fila)
- que al cancelarla desde la cuenta del comprador pase a **cancelada**, sin borrar el
  cobro ya registrado

Recién después cambiar `MP_ACCESS_TOKEN` por el de producción (y regenerar el webhook
secret si corresponde) y redeployar.

---

## El apartado Donaciones del panel

`/panel/donaciones` muestra:

- **Recaudado este mes**, cantidad de donaciones, total histórico y cuántas quedaron pendientes
- **Aportes mensuales activos** y cuánto suman por mes
- La tabla de las últimas 200 donaciones: fecha, donante, monto, modalidad (única o cobro
  mensual), estado, medio de pago e ID de MP (ese ID sirve para cruzar con el panel de
  Mercado Pago)
- La tabla de **aportes mensuales**: alta, donante, monto por mes, estado (pendiente,
  activa, pausada, cancelada) e ID de la suscripción
- **Exportar a CSV**, para pasarle el detalle al contador

---

## Cosas a resolver del lado de PIEL

- **Comisiones:** Mercado Pago cobra un porcentaje por transacción. Para organizaciones
  sin fines de lucro suele haber condiciones especiales — conviene averiguarlo antes de
  definir los montos sugeridos.
- **Comprobantes de donación:** si PIEL emite recibos con validez fiscal, eso es un
  circuito aparte que hay que definir con el contador. El sitio registra la donación,
  no emite comprobantes.
- **Datos personales:** se guardan nombre y email de cada donante. Conviene chequear que
  el sitio tenga una política de privacidad acorde.

---

## Qué está probado y qué no

- **Probado en local:** el formulario, el armado de la suscripción y de la preferencia
  hasta la llamada a MP, la validación de firmas del webhook (incluidos ids alfanuméricos
  y avisos viejos) y toda la lógica de la base contra un Postgres real: cobros avisados
  dos veces, cobros que llegan antes que el alta, bajas y una base que ya existía.
- **Falta probar con credenciales de prueba de MP** (paso 5): el recorrido completo contra
  Mercado Pago, que sin la cuenta de PIEL no se puede hacer.
