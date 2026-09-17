# Imágenes de la página "Labio leporino" (`/labio-leporino`)

Ilustraciones médicas del recorrido. Se muestran **enteras, sin recortar**, porque
recortar una ilustración médica le cambia el significado.

A pedido de PIEL van **sin recuadro**, pegadas al texto y todas al mismo ancho (el de la
columna de lectura), cada una con su proporción real. El fondo blanco del archivo se
funde con el de la página, así que no se nota el corte.

## Archivos

| Archivo | Medidas | Dónde aparece | Qué muestra |
|---|---|---|---|
| `tipos-de-fisura.jpg` | 787 × 175 | "¿Qué es una fisura de labio y/o paladar?" | Los distintos tipos de fisura de labio y paladar |
| `reparacion-unilateral.jpg` | 763 × 147 | La cirugía | Secuencia de la reparación quirúrgica de una fisura **unilateral** |
| `reparacion-bilateral.jpg` | 760 × 140 | La cirugía | Secuencia de la reparación quirúrgica de una fisura **bilateral** |
| `operacion-paladar.jpg` | 763 × 222 | La cirugía | El cierre quirúrgico del paladar duro y blando |

## Para reemplazar o sumar una

1. Dejar el archivo en esta carpeta.
2. En `src/lib/content/labio-leporino.ts`, cargar **`width` y `height` con las medidas
   reales del archivo**. Con eso la imagen se muestra a su proporción, sin franjas
   vacías. Sin esas medidas cae en un marco 16:9 y vuelve a quedar aire arriba y abajo.

## Formato

- **Horizontales**, que es como están pensadas (secuencias de izquierda a derecha).
- **Fondo blanco** (o transparente, en `.png`): el blanco se funde con la página.
- Las actuales son chicas (~770 px de ancho). Si hay versiones de **1600 px o más**,
  conviene reemplazarlas: se van a ver más nítidas en pantallas de alta densidad.
- Si las ilustraciones tienen **texto o rótulos incrustados**, avisá: conviene que ese
  texto también esté en el epígrafe, porque un lector de pantalla no puede leerlo.

## Epígrafes

Cada imagen lleva un `figcaption` visible, definido en `src/lib/content/labio-leporino.ts`.
Están escritos como brief; PIEL puede reescribirlos cuando revise el material.
