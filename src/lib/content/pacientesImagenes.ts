import type { ContentImage } from "@/lib/content/imagenes";

export { imageSrc } from "@/lib/content/imagenes";
export type { ContentImage } from "@/lib/content/imagenes";

/**
 * Huecos de imagen de las páginas de "Información para pacientes y familias".
 *
 * TODO(PIEL): faltan todos los archivos de esta lista. Ver `public/pacientes/LEEME.md`.
 */

export const fisuraImages: ContentImage[] = [
  {
    src: "/pacientes/fisura/tipos-de-fisura.jpg",
    alt: "Ilustración médica de los distintos tipos de fisura labio-alvéolo-palatina",
    caption: "Los distintos tipos de fisura de labio y paladar",
    pending: true,
  },
  {
    src: "/pacientes/fisura/reparacion-quirurgica.jpg",
    alt: "Ilustración médica de las etapas de la reparación quirúrgica del labio y el paladar",
    caption: "Las etapas de la reparación quirúrgica",
    pending: true,
  },
];

export const cuidadosImages: ContentImage[] = [
  {
    src: "/pacientes/cuidados/postura-alimentacion.jpg",
    alt: "Bebé alimentándose en posición semisentada, sin flexión de la cabeza",
    caption: "La posición semisentada para alimentar al bebé",
    pending: true,
  },
  {
    src: "/pacientes/cuidados/estimulacion-temprana.jpg",
    alt: "Momento de estimulación temprana entre una madre y su bebé",
    caption: "Estimulación temprana: contacto, juego y masajes",
    pending: true,
  },
];

export const alimentacionImages: ContentImage[] = [
  {
    src: "/pacientes/alimentacion/lactancia.jpg",
    alt: "Madre amamantando a su bebé",
    caption: "La succión a pecho ejercita los músculos de la boca",
    pending: true,
  },
  {
    src: "/pacientes/alimentacion/alimentos-solidos.jpg",
    alt: "Bebé comiendo papilla con cuchara",
    caption: "La incorporación de alimentos sólidos, alrededor del 6.º mes",
    pending: true,
  },
];

export const acompanamientoImage: ContentImage = {
  src: "/pacientes/acompanamiento/familia.jpg",
  alt: "Un niño acompañado por su familia en la sede de Asociación PIEL",
  caption: "Ninguna familia atraviesa este proceso sola.",
  pending: true,
};
