/**
 * "Colaboran con nosotros" (página Nosotros): los mismos logos del carrusel del
 * sitio actual, como pidió PIEL en las observaciones 2026. Los archivos están en
 * `public/colaboradores/`.
 *
 * Es la carga inicial: desde /panel → Logos se pueden sumar, editar o quitar.
 * El sitio viejo no enlazaba a ninguna organización, así que acá tampoco.
 */
export const colaboradores: { name: string; image: string }[] = [
  { name: "Smile Train", image: "/colaboradores/smile-train.png" },
  { name: "Fundación Navarro Viola", image: "/colaboradores/fundacion-navarro-viola.png" },
  { name: "Fundación BAF", image: "/colaboradores/fundacion-baf.jpg" },
  { name: "Latin American CranioFacial Association (LATICFA)", image: "/colaboradores/laticfa.png" },
  { name: "World of Children Award", image: "/colaboradores/world-of-children.jpg" },
  {
    name: "The Journal of Craniofacial Surgery",
    image: "/colaboradores/journal-of-craniofacial-surgery.jpg",
  },
  { name: "Hospital Sobrapar – Crânio e Face", image: "/colaboradores/hospital-sobrapar.jpg" },
  { name: "Fundación Gantz – Hospital del Niño con Fisura", image: "/colaboradores/fundacion-gantz.jpg" },
  {
    name: "Associação Brasileira de Fissuras Lábio Palatinas (ABFLP)",
    image: "/colaboradores/abflp.png",
  },
];
