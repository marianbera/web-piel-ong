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

/**
 * "Empresas que nos acompañan" (Sé parte → Empresas): las empresas que alguna vez
 * trabajaron con PIEL, en el orden de la última ronda de observaciones. Los archivos
 * están en `public/empresas/`, bajados de Wikimedia Commons o del sitio oficial.
 *
 * Las que tienen `image: ""` no tienen un logo publicado que se pueda bajar en buena
 * calidad (Ribeiro cerró su sitio; Raffo y Biosystems lo bloquean; de Sintyal no hay
 * sitio) o no se pudo confirmar cuál es la empresa (Grupo G.F.A.): la tarjeta muestra
 * el nombre. TODO(PIEL): mandar esos logos y cargarlos desde /panel → Logos.
 */
export const empresas: { name: string; image: string }[] = [
  { name: "Banco Macro", image: "/empresas/banco-macro.png" },
  { name: "Ribeiro", image: "" },
  { name: "Carl Zeiss", image: "/empresas/carl-zeiss.png" },
  { name: "PerkinElmer", image: "/empresas/perkinelmer.png" },
  { name: "Toyota", image: "/empresas/toyota.png" },
  { name: "Temis-Lostaló", image: "/empresas/temis-lostalo.png" },
  { name: "Bagó", image: "/empresas/bago.png" },
  { name: "Sintyal", image: "" },
  { name: "Raffo", image: "" },
  { name: "Colgate-Palmolive", image: "/empresas/colgate-palmolive.png" },
  { name: "Banco Galicia", image: "/empresas/banco-galicia.png" },
  { name: "Banco Provincia de Buenos Aires", image: "/empresas/banco-provincia.png" },
  { name: "Pinturas Alba", image: "/empresas/pinturas-alba.png" },
  { name: "Sheraton Hotel & Towers", image: "/empresas/sheraton.png" },
  { name: "Walmart", image: "/empresas/walmart.png" },
  { name: "Biosystems Argentina", image: "" },
  { name: "Grupo G.F.A. S.A.", image: "" },
  { name: "Cablevisión", image: "/empresas/cablevision.png" },
  { name: "Fibertel", image: "/empresas/fibertel.png" },
  { name: "Farmacity", image: "/empresas/farmacity.png" },
];
