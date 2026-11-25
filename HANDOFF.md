# HANDOFF — Web Asociación PIEL

Para quien sigue el proyecto y la **migración de Vercel a Azure App Service**.
Estado al 24/11/2026.

> **Regla de la migración:** el sitio va a vivir en Azure. `NEXT_PUBLIC_SITE_URL` y el
> webhook de Mercado Pago tienen que apuntar a la **URL final de Azure**, no a
> `web-piel.vercel.app`. Por eso **no se configura nada en Vercel**: ni variables, ni
> Storage, ni dominios.

---

## 1. Qué es

Next.js 15.5 (App Router) + TypeScript + Tailwind. Además del sitio público tiene:

- **API routes**: contacto, newsletter, donaciones (checkout + webhook de Mercado Pago) y
  el panel.
- **Panel de administración** en `/panel` (login propio, protegido por `src/middleware.ts`):
  edita equipo, premios, prensa, logos, coberturas e historias, y muestra las donaciones.
- **Contenido en archivos**: los textos viven en `src/lib/content/*.ts`, no en el JSX.

Documentación del repo:

| Archivo | Qué tiene |
|---|---|
| `HANDOFF.md` | Esto |
| `MERCADOPAGO-PIEL.md` | Donaciones: cómo funcionan, puesta en marcha y pruebas |
| `PANEL-PIEL.md` | Cómo se usa el panel |
| `PENDIENTES-PIEL.md` | Todo lo que depende de PIEL (textos, fotos, datos, confirmaciones) |
| `CONTENIDO-FUENTE-PIEL.md` | Texto original que entregó PIEL |
| `SISTEMA-DISEÑO-PIEL.md` | Sistema de diseño |
| `.env.local.example` | Variables de entorno, sin valores |

---

## 2. Qué está hecho y qué falta

### Hecho

- **Sitio completo**, con el contenido de todas las rondas de observaciones de PIEL.
- **Panel** (`/panel`) funcionando con login.
- **Donaciones con Mercado Pago, código completo:**
  - Todo **mensual** con **montos fijos** ($3.000 / $6.000 / $12.000) y **duración**
    (6 meses, 12 meses o sin fecha de fin). MP cobra solo cada mes y la suscripción termina
    sola. Se implementa con *Suscripciones* (`preapproval` sin plan) y el Access Token.
  - El servidor solo acepta esos montos y duraciones.
  - Donación **por única vez** (Checkout Pro): escrita pero apagada
    (`DONACION_UNICA_HABILITADA` en `src/lib/content/donar.ts`).
  - **Webhook** con validación de firma, y registro de cada aporte y cada cobro en
    Postgres, visible en `/panel/donaciones` con exportación a CSV.
- Build y lint limpios.

### Falta (infraestructura: Azure)

1. **Crear el App Service** y desplegar (sección 4).
2. **Conectar la base Neon Postgres** (sección 5): sin ella el pago funciona, pero no
   queda registrado en el panel.
3. **Decidir dónde guarda el panel su contenido** (sección 6): hoy es Vercel Blob.
4. **Cargar las variables** (sección 3) y **configurar el webhook de MP** (sección 7) con
   la URL final.
5. **Probar el recorrido de donación** contra Mercado Pago (sección 8). Nunca se probó
   de punta a punta porque no había credenciales.

### Falta (lado PIEL — no bloquea el deploy)

Detalle en `PENDIENTES-PIEL.md`. Lo relacionado con pagos:

- Confirmar si quieren la **donación por única vez** o si es todo mensual.
- Confirmar las **duraciones** a ofrecer (hoy 6, 12 o sin fecha de fin).
- **Planes PADRINAZGO**: PIEL tiene planes creados en MP que hoy no se usan. Si quieren que
  las suscripciones nuevas entren en esos planes, hacen falta sus links. Explicado en
  `MERCADOPAGO-PIEL.md` → "Planes PADRINAZGO".
- **Correo para la baja** del aporte mensual (`bajaAporteMensualEmail`), **datos bancarios**
  para transferencia (`datosBancarios`) y **número de WhatsApp** real (`src/lib/content/site.ts`:
  hoy es un placeholder y todos los botones de WhatsApp dependen de él).

---

## 3. Variables de entorno

Nombres exactos. Se cargan en **Azure App Service → Configuración → Variables de
aplicación**. Para desarrollo local, en `.env.local` (está en `.gitignore`). **Ningún
valor real va al repo.**

| Variable | Obligatoria | Qué es | Si falta |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sí | URL final de Azure, sin barra final (ej. `https://…azurewebsites.net` o el dominio propio) | MP manda la vuelta y los avisos a otro lado; además metadatos, sitemap y robots quedan mal |
| `MP_ACCESS_TOKEN` | Sí | Access Token de **producción** de la aplicación de MP de PIEL (`APP_USR-…`). Secreto | Donar muestra un aviso en vez del formulario |
| `MP_WEBHOOK_SECRET` | Sí | Clave secreta del webhook de MP (sección 7). Secreto | El webhook rechaza todo con 401: nada se confirma |
| `DATABASE_URL` | Sí | Connection string de Neon (sección 5). Secreto | Se cobra igual, pero no se registra en el panel |
| `ADMIN_USER` | Sí | Usuario del panel | No se puede entrar al panel |
| `ADMIN_PASSWORD` | Sí | Contraseña del panel. Secreto | Ídem |
| `ADMIN_SESSION_SECRET` | Sí | Firma de la cookie de sesión, 16+ caracteres (`openssl rand -base64 32`). Secreto | Ídem |
| `BLOB_READ_WRITE_TOKEN` | Según sección 6 | Token de Vercel Blob para el contenido del panel. Secreto | El sitio se ve con el contenido del código, pero el panel no puede guardar |
| `RESEND_API_KEY` | Para contacto | Envío del formulario de contacto | El formulario responde "no está configurado" |
| `MAILERLITE_API_KEY` | Para newsletter | Suscripción al newsletter | El newsletter responde con error |
| `MAILERLITE_GROUP_ID` | Para newsletter | Grupo de MailerLite | Ídem |

**No hacen falta:**

- `MP_PUBLIC_KEY`: el pago se arma en el servidor y se redirige al link que devuelve MP.
  Solo haría falta si algún día se toma la tarjeta en el sitio con el SDK de JS de MP.
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SPREADSHEET_ID`: restos de
  una versión vieja; `src/lib/googleSheets.ts` no se importa en ningún lado.

> ⚠️ **`NEXT_PUBLIC_SITE_URL` se incrusta al compilar.** Next.js reemplaza las variables
> `NEXT_PUBLIC_*` en el momento de `next build`. Tiene que estar definida en el entorno
> donde corre el **build** (pipeline de GitHub Actions / Azure DevOps, u Oryx si el build
> lo hace App Service), no solo en las variables de la app. Si cambia la URL, hay que
> **volver a compilar**.

---

## 4. Azure App Service

- **App Service Linux con Node 20 o 22 LTS.** No es un sitio estático: tiene API routes,
  middleware y páginas que se generan en cada visita, así que necesita un servidor de Node.
- Build: `npm ci && npm run build`. Arranque: `npm start` (`next start`; toma el puerto
  de la variable `PORT` que define App Service).
- `next.config.ts` no usa `output: "standalone"`. Se puede activar para desplegar un
  paquete más chico; en ese caso el arranque pasa a ser `node .next/standalone/server.js`
  y hay que copiar `public/` y `.next/static/` junto al paquete.
- `next.config.ts` permite imágenes remotas de `**.public.blob.vercel-storage.com` (las
  que sube el panel). Si el almacenamiento del panel cambia (sección 6), hay que agregar el
  host nuevo en `images.remotePatterns`.

---

## 5. Base de datos: Neon Postgres

**Falta conectarla.** Crear un proyecto en [neon.tech](https://neon.tech) (directo, no
desde Vercel), copiar la **connection string** y cargarla como `DATABASE_URL`. Las tablas
(`donaciones` y `suscripciones`) se crean solas la primera vez que se usan; no hay
migraciones que correr.

> ⚠️ El código usa `@neondatabase/serverless`, que habla con el proxy de Neon. Con
> **Azure Database for PostgreSQL no funciona tal cual**: habría que cambiar el driver por
> `pg` en `src/lib/donaciones/db.ts`. Si no hay un motivo para usar Postgres de Azure, lo
> más simple es Neon.

---

## 6. Almacenamiento del panel — decisión pendiente

El contenido editable del panel (equipo, premios, prensa, logos, coberturas, historias y
las fotos que se suben) se guarda en **Vercel Blob** (`src/lib/admin/store.ts`,
`src/app/api/panel/upload/route.ts`). Sin `BLOB_READ_WRITE_TOKEN`, el sitio se ve bien con
el contenido del código, pero el panel no puede guardar.

Choca con "no configurar nada en Vercel". Opciones:

- **a)** Crear igual un Blob Store en Vercel **solo como almacenamiento** y usar su token
  desde Azure. El SDK `@vercel/blob` funciona desde fuera de Vercel con el token. Es lo
  más rápido, pero deja una dependencia de Vercel.
- **b)** Pasar `store.ts` y la subida de imágenes a **Azure Blob Storage**
  (`@azure/storage-blob`), y agregar el host del contenedor en `images.remotePatterns`.

Hasta decidirlo, el panel se ve pero no guarda.

---

## 7. Webhook de Mercado Pago

En [mercadopago.com.ar/developers](https://www.mercadopago.com.ar/developers) → **Tus
integraciones** → la aplicación de PIEL → **Webhooks** → *Configurar notificaciones*
(modo **producción**):

- **URL:** `https://URL-FINAL-DE-AZURE/api/donations/webhook`
- **Eventos:**
  - **Pagos** (`payment`): cada cobro.
  - **Planes y suscripciones** (`subscription_preapproval` y
    `subscription_authorized_payment`): alta, pausa y baja de cada aporte mensual, y cada
    cobro del mes.
- Al guardar, MP muestra la **clave secreta** → `MP_WEBHOOK_SECRET`.

Las suscripciones no aceptan una URL de aviso propia: los avisos van **siempre** al
webhook configurado en la aplicación. Si la URL de Azure cambia (por ejemplo, al pasar a
un dominio propio), hay que actualizar el webhook en MP **y** `NEXT_PUBLIC_SITE_URL`
(y recompilar).

---

## 8. Cómo probar las donaciones

1. Con todo configurado, entrar a `/se-parte/donar` desde **otra cuenta de Mercado Pago**
   (MP no deja que la cuenta de PIEL se pague a sí misma).
2. Elegir $3.000 y 6 meses, autorizar en MP.
3. En `/panel/donaciones`: la suscripción aparece **activa**, con "6 meses · hasta el …", y
   su primer cobro en la tabla de donaciones, una sola vez.
4. Cancelarla desde la cuenta que donó: pasa a **cancelada**, el cobro queda registrado.
5. Devolver el cobro de prueba desde el panel de MP.

Si algo no aparece en el panel: revisar los logs del App Service (`[donaciones]`) y, en
MP, el historial de notificaciones del webhook (si responde 401, el secreto no coincide).

Pendiente de ver en la prueba: qué estado manda MP cuando una suscripción **llega a su
fecha de fin** (hoy un estado desconocido se muestra como "pendiente"; si es uno nuevo,
sumarlo en `mapearEstadoSuscripcion`, en `src/lib/donaciones/mercadopago.ts`).

---

## 9. Otros pendientes técnicos

- **Botón "Donar online" del hub Sé parte:** depende de `ONLINE_PAYMENTS_ENABLED = false`
  en `src/components/sections/DonateBand.tsx`. Ponerlo en `true` cuando MP esté andando.
- **Remitente del formulario de contacto:** `web@asociacion-piel.org.ar` en
  `src/app/api/contacto/route.ts`; tiene que ser un dominio verificado en Resend.
- **Contenido guardado desde el panel:** si una sección se guarda alguna vez desde el
  panel, desde ahí manda lo guardado y no el código. Ver `PENDIENTES-PIEL.md`, sección 5.
