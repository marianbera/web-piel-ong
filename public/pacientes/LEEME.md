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
| `fisura/tipos-de-fisura.jpg` | Qué es la fisura | Ilustración médica de los distintos tipos de fisura de labio y paladar | horizontal 4:3 |
| `fisura/reparacion-quirurgica.jpg` | Qué es la fisura | Ilustración médica de las etapas de la reparación quirúrgica | horizontal 4:3 |
| `cuidados/postura-alimentacion.jpg` | Cuidados | Bebé alimentándose semisentado, sin flexión de la cabeza | horizontal 3:2 |
| `cuidados/estimulacion-temprana.jpg` | Cuidados | Momento de estimulación temprana (contacto, juego, masajes) | horizontal 3:2 |
| `alimentacion/lactancia.jpg` | Alimentación | Alimentación a pecho | horizontal 3:2 |
| `alimentacion/alimentos-solidos.jpg` | Alimentación | Bebé comiendo papilla con cuchara | horizontal 3:2 |
| `acompanamiento/familia.jpg` | Acompañamiento | **Destacada**: un niño o una familia en la sede de PIEL. Es la única imagen a todo el ancho, tiene que tener calidez y aire alrededor del sujeto | panorámica 21:9 |

## Recomendaciones técnicas

- **Ancho:** 2000–2560 px de lado mayor. Next.js las optimiza al servirlas, pero conviene
  no subir originales de 6000 px como pasó con las fotos del hero (ver `PENDIENTES-PIEL.md`).
- **Formato:** `.jpg` para fotos, `.png` solo si la ilustración necesita fondo transparente.
  Si cambiás la extensión, actualizá también la ruta en `pacientesImagenes.ts`.
- **Recorte:** las imágenes se muestran con `object-cover`, así que el sujeto tiene que
  estar centrado — los bordes se pueden recortar según el ancho de pantalla.
- **Consentimiento:** para fotos de pacientes o familias hace falta autorización de uso
  de imagen. No subas nada sin eso.
