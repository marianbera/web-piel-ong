import type { ContentImage } from "@/lib/content/imagenes";

export { imageSrc } from "@/lib/content/imagenes";
export type { ContentImage } from "@/lib/content/imagenes";

/**
 * Huecos de imagen de las páginas de "Información para pacientes y familias".
 *
 * TODO(PIEL): los que siguen con `pending: true` todavía no tienen archivo.
 * Ver `public/pacientes/LEEME.md`.
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
    // La misma foto del Home (segunda imagen del banner): es la que muestra la postura.
    src: "/brand/hero/slide-2-sumate.jpg",
    alt: "Una mujer le da la mamadera a un recién nacido semisentado, con la cabeza sostenida, mientras sus padres miran",
    caption: "La posición semisentada para alimentar al bebé",
  },
  {
    src: "/pacientes/cuidados/estimulacion-temprana.jpg",
    alt: "Una mamá sostiene a su bebé en brazos y le sonríe, en Asociación PIEL",
    caption: "El contacto y el vínculo son la primera forma de estimulación.",
    // Foto vertical en un marco 3:2: se baja el encuadre para que entren las dos caras.
    position: "object-[center_35%]",
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

// El archivo ya viene recortado en franja 21:9, que es el marco donde se muestra.
export const acompanamientoImage: ContentImage = {
  src: "/pacientes/acompanamiento/sala-de-juegos.jpg",
  alt: "Chicos jugando en la sala de juegos de la sede de Asociación PIEL",
  caption: "Ninguna familia atraviesa este proceso sola.",
};
