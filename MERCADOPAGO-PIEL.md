# Donaciones con Mercado Pago

Integración de **Checkout Pro** (donación por única vez) más el registro de cada
donación en el panel.

**Estado: todo el código está escrito y probado, esperando las credenciales.**
Mientras no estén, la página de Donar muestra un mensaje y la transferencia bancaria,
no un formulario que no puede cobrar.

---

## Cómo funciona

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

---

## Puesta en marcha

### 1. Crear la base de datos

En Vercel, proyecto **web-piel** → pestaña **Storage** → *Create Database* →
**Neon Postgres** → conectar al proyecto. Vercel inyecta `DATABASE_URL` sola.

La tabla se crea sola la primera vez que se usa; no hay que correr ninguna migración.

> **Por qué no va en Vercel Blob** como el resto del contenido del panel: si dos pagos
> se confirman al mismo tiempo, un ciclo "leer JSON → agregar → escribir JSON" pierde
> uno de los dos. Con fotos del equipo eso no importa; con plata, sí.

### 2. Sacar las credenciales de Mercado Pago

Hace falta la **cuenta de Mercado Pago de la asociación** (cuenta vendedor).

1. Entrar a [mercadopago.com.ar/developers](https://www.mercadopago.com.ar/developers)
   con esa cuenta
2. **Tus integraciones** → *Crear aplicación* → producto **Pagos online / Checkout Pro**
3. Dentro de la aplicación, sección **Credenciales**. Vas a ver dos juegos:
   - **Credenciales de prueba** — para probar sin mover plata real
   - **Credenciales de producción** — para cobrar de verdad
4. Copiar el **Access Token** del juego que corresponda

### 3. Configurar el webhook

En la misma aplicación → **Webhooks** → *Configurar notificaciones*:

- **URL:** `https://web-piel.vercel.app/api/donations/webhook`
- **Evento:** solo **Pagos**
- Al guardar, MP muestra una **clave secreta**. Copiala: es `MP_WEBHOOK_SECRET`

> Sin esa clave el webhook rechaza todas las llamadas. Es lo que prueba que quien llama
> es Mercado Pago y no cualquiera que descubrió la URL. Está verificado: sin firma, con
> firma falsa o con una notificación vieja reenviada, responde 401.

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

Recién después cambiar `MP_ACCESS_TOKEN` por el de producción (y regenerar el webhook
secret si corresponde) y redeployar.

---

## El apartado Donaciones del panel

`/panel/donaciones` muestra:

- **Recaudado este mes**, cantidad de donaciones, total histórico y cuántas quedaron pendientes
- La tabla de las últimas 200: fecha, donante, monto, estado, medio de pago e ID de MP
  (ese ID sirve para cruzar con el panel de Mercado Pago)
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

## Lo que quedó afuera a propósito

**La donación mensual recurrente.** El formulario tiene el selector *Por única vez /
Todos los meses*, pero por ahora solo se procesa el pago único. El aporte mensual usa
otro producto de MP (Suscripciones) y suma manejo de altas, bajas y cobros fallidos.

Se decidió arrancar con el pago único, que cubre la mayoría de las donaciones, y sumar
la suscripción después. **La base de datos ya tiene la columna `frecuencia`**, así que
agregarlo no obliga a rehacer nada.
