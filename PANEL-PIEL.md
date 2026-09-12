# Panel de contenido — Asociación PIEL

Panel para que PIEL mantenga por su cuenta el contenido que cambia con el tiempo,
sin depender del equipo de desarrollo.

---

## Cómo se entra

**La URL no está enlazada en ninguna parte del sitio.** No hay botón de "iniciar sesión",
no aparece en el menú ni en el footer, y está bloqueada en `robots.txt` para que no la
indexe Google. Hay que escribirla a mano:

```
https://web-piel.vercel.app/panel
```

Pide usuario y contraseña. La sesión dura **8 horas** y después hay que volver a entrar.

---

## ⚙️ Puesta en marcha (una sola vez)

### 1. Crear el Blob Store

El sitio corre en Vercel, que tiene **filesystem de solo lectura**: nada que se guarde en
disco sobrevive al siguiente despliegue. Por eso el contenido del panel —textos e
imágenes— vive en **Vercel Blob**.

1. En el dashboard de Vercel, proyecto **web-piel** → pestaña **Storage**.
2. **Create Database** → **Blob** → conectarlo a este proyecto.
3. Listo. Vercel inyecta sola la variable `BLOB_READ_WRITE_TOKEN`; no hay que escribirla.
4. **Redeploy** del proyecto para que la variable llegue al build.

> Blob está incluido en el plan Hobby. Para lo que usa este sitio (JSONs chicos y unas
> decenas de fotos) el consumo es mínimo.

### 2. Definir usuario y contraseña

En Vercel → proyecto → **Settings → Environment Variables**, agregar tres variables para
**Production** (y Preview, si querés probar ahí):

| Variable | Valor |
|---|---|
| `ADMIN_USER` | el usuario que quieras, por ejemplo `piel` |
| `ADMIN_PASSWORD` | una contraseña larga |
| `ADMIN_SESSION_SECRET` | cadena aleatoria de 16+ caracteres — generala con `openssl rand -base64 32` |

Después **Redeploy**.

> Cambiar `ADMIN_SESSION_SECRET` cierra todas las sesiones abiertas. Es la forma de
> "echar" a alguien que tuvo acceso.

### Mientras no esté configurado

El sitio **funciona igual**: cada sección muestra el contenido que ya está en el código
(los 22 profesionales, los premios, las obras sociales). El panel abre y se puede
navegar, pero al intentar guardar avisa que falta crear el Blob Store.

---

## Qué se puede editar

| Sección | Qué controla | Dónde se ve |
|---|---|---|
| **Equipo médico** | Áreas y profesionales: alta, baja, edición, orden y **foto** | `/quienes-somos/equipo` |
| **Prensa** | Notas y videos en medios | `/quienes-somos/prensa` |
| **Historias reales** | Testimonios de familias, con foto | `/historias` |
| **Logos** | Colaboradores y empresas que acompañan | `/quienes-somos/nosotros` y `/se-parte/empresas` |
| **Premios** | Reconocimientos, en el orden que se listen | `/quienes-somos/premios` |
| **Obras sociales** | Coberturas con las que trabaja PIEL | `/como-acceder/obras-sociales` |

Los cambios se publican **apenas se aprieta Guardar**. No hace falta avisarle a nadie,
ni redeployar, ni esperar.

### Qué NO se edita desde el panel (a propósito)

Los textos institucionales y de información médica (qué es PIEL, el enfoque, labio
leporino, cuidados, preguntas frecuentes) siguen viviendo en el código. Son textos
largos, con formato y revisados médicamente: un editor libre invita a romperlos sin
querer. Para cambiarlos, hay que pedírselo al equipo de desarrollo.

Tampoco se editan desde el panel el teléfono, la dirección ni las cifras
institucionales, porque aparecen en decenas de lugares del sitio a la vez.

---

## Imágenes

Se suben desde el mismo panel, con el botón de cada ficha.

- Formatos: **JPG, PNG o WEBP**. Máximo **5 MB**.
- **Fotos de profesionales:** retrato vertical 4:5 (por ejemplo 800 × 1000 px), encuadre
  de busto, fondo neutro. Sin foto, la ficha muestra las iniciales sobre el degradé de
  marca — nunca queda un hueco roto.
- **Logos:** preferentemente PNG con fondo transparente.
- Las fotos de personas necesitan **autorización de uso de imagen** antes de publicarse.

---

## Backup

Todo el contenido cargado desde el panel está en el Blob Store, en la carpeta
`contenido/` (los JSON) e `imagenes/` (las fotos). Se puede descargar desde la pestaña
**Storage** del proyecto en Vercel.

## Si en el futuro el sitio se muda de Vercel

Hay que reemplazar **un solo archivo**: `src/lib/admin/store.ts`, más el handler de
subida en `src/app/api/panel/upload/route.ts`. Todo el resto —el panel, las páginas
públicas, los tipos— lee y escribe a través de ese módulo y no se entera del cambio.
