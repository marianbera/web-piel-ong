# Imágenes de "Información para pacientes y familias"

Acá van las imágenes de las páginas del bloque de pacientes. **Mientras el archivo no
exista, la página no se rompe**: muestra un placeholder de marca con el epígrafe de la
imagen que falta.

## Cómo activar una imagen

1. Dejá el archivo en la ruta exacta que figura abajo (respetando el nombre).
2. Abrí `src/lib/content/pacientesImagenes.ts` y borrá la línea `pending: true` de esa entrada.

Eso es todo — no hay que tocar el código de las páginas.

## Archivos esperados

| Ruta | Página | Qué tiene que mostrar | Formato |
|---|---|---|---|
| `/brand/hero/slide-2-sumate.jpg` | Cuidados y alimentación | ✅ Postura semisentada para alimentar: se reusa la foto del Home, no hay archivo en esta carpeta | horizontal 3:2 |
| `cuidados/estimulacion-temprana.jpg` | Cuidados y alimentación | ✅ Cargada: mamá con su bebé en brazos | horizontal 3:2 |
| `acompanamiento/consultorio.jpg` | Acompañamiento | ✅ Cargada: profesional conversando con dos chicos en un consultorio (reemplaza a la sala de juegos, a pedido de PIEL; ya recortada en 21:9) | panorámica 21:9 |

> Las entradas `fisuraImages` y `alimentacionImages` de `pacientesImagenes.ts` quedaron de
> las páginas que se unificaron y hoy no se muestran en ningún lado. Las ilustraciones
> médicas viven en `public/labio-leporino/`.

Si una foto es vertical y va en un marco horizontal, se puede elegir qué parte queda
visible con `position` en `pacientesImagenes.ts` (por ejemplo `object-[center_35%]`).

## Recomendaciones técnicas

- **Ancho:** 2000–2560 px de lado mayor. Next.js las optimiza al servirlas, pero conviene
  no subir originales de 6000 px como pasó con las fotos del hero (ver `PENDIENTES-PIEL.md`).
- **Formato:** `.jpg` para fotos, `.png` solo si la ilustración necesita fondo transparente.
  Si cambiás la extensión, actualizá también la ruta en `pacientesImagenes.ts`.
- **Recorte:** las imágenes se muestran con `object-cover`, así que el sujeto tiene que
  estar centrado — los bordes se pueden recortar según el ancho de pantalla.
- **Consentimiento:** para fotos de pacientes o familias hace falta autorización de uso
  de imagen. No subas nada sin eso.
