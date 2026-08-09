# Imágenes de la página "Labio leporino" (`/labio-leporino`)

Ilustraciones médicas del recorrido completo. Se muestran **enteras, sin recortar**
(`object-contain`) sobre un panel claro, porque recortar una ilustración médica le
cambia el significado.

## Archivos esperados

| Archivo | Dónde aparece | Qué muestra |
|---|---|---|
| `tipos-de-fisura.jpg` | "¿Qué es una fisura de labio y/o paladar?" | Los distintos tipos de deformación del paladar y del labio |
| `reparacion-unilateral.jpg` | Cirugía → Operación del labio | Secuencia de la reparación quirúrgica de una fisura **unilateral** |
| `reparacion-bilateral.jpg` | Cirugía → Operación del labio | Secuencia de la reparación quirúrgica de una fisura **bilateral** |
| `operacion-paladar.jpg` | Cirugía → Operación del paladar | El cierre quirúrgico del paladar duro y blando |
| `alimentacion.jpg` | "¿Cómo alimentar a un bebé…?" | **Pendiente.** Foto de apoyo de un bebé alimentándose. Hoy muestra el placeholder de marca |

Las cuatro primeras ya están conectadas: **con dejar el archivo en esta carpeta, aparecen**.
Para la de alimentación, además hay que borrar la línea `pending: true` de esa entrada en
`src/lib/content/labio-leporino.ts`.

## Formato

- **Horizontales**, que es como están pensadas (secuencias de izquierda a derecha).
  El marco es 16:9; si la ilustración es más cuadrada se ve entera igual, centrada,
  con aire a los costados.
- **1600–2400 px de ancho.** Next.js las optimiza al servirlas.
- `.jpg` para ilustraciones con fondo claro; `.png` si necesitan fondo transparente
  (en ese caso, cambiar también la extensión en `labio-leporino.ts`).
- Si las ilustraciones tienen **texto o rótulos incrustados**, avisá: conviene que ese
  texto también esté en el epígrafe, porque un lector de pantalla no puede leerlo.

## Epígrafes

Cada imagen lleva un `figcaption` visible, definido en `src/lib/content/labio-leporino.ts`.
Están escritos como brief; PIEL puede reescribirlos cuando revise el material.
