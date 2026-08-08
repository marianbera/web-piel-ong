import type {
  AboutSummaryContent,
  AccessHelpContent,
  DonateBlockContent,
  DifferentiatorsContent,
  HeroSlide,
  HumanBlockContent,
} from "@/types/home";
import { siteExternalLinks } from "@/lib/content/site";

export const heroSlides: HeroSlide[] = [
  {
    image: {
      src: "/brand/hero/slide-1-que-es-piel.jpg",
      alt: "Profesional de Asociación PIEL auscultando a un bebé con un estetoscopio en el consultorio",
      // La foto es apaisada y las caras quedan en la franja superior: subimos el encuadre.
      position: "object-[center_35%]",
    },
    align: "left",
    title: "¿Qué es Asociación PIEL?",
    subtitle:
      "PIEL es un centro de cirugía plástica infantil de referencia en el tratamiento integral de fisuras labio-álveolo-palatinas. Un equipo interdisciplinario que acompaña a cada paciente desde el diagnóstico hasta la finalización del tratamiento.",
    cta: { label: "Conocenos", href: "/quienes-somos/nosotros" },
  },
  {
    image: {
      src: "/brand/hero/slide-2-sumate.jpg",
      alt: "Alimentación de un recién nacido con mamadera, acompañada por su familia, en Asociación PIEL",
    },
    title: "¡Súmate!",
    subtitle: "Tu aporte ayuda a que más niños accedan a su tratamiento.",
    cta: { label: "Donar", href: "/se-parte/donar", icon: "heart" },
  },
];

export const aboutSummary: AboutSummaryContent = {
  eyebrow: "Quiénes somos",
  title: "Más de 35 años de experiencia y miles de historias que nos eligen.",
  // Las palabras entre **dobles asteriscos** se renderizan en negrita (ver RichText).
  text: "PIEL es un **centro de cirugía plástica infantil de referencia** en el **tratamiento integral** de fisuras labio-álveolo-palatinas. Un **equipo interdisciplinario** que acompaña a cada paciente desde el diagnóstico hasta la finalización del tratamiento.",
  cta: { label: "Conocer más sobre PIEL", href: "/quienes-somos" },
  stats: [
    // TODO(PIEL): actualizar años de experiencia a 2026 (los docs dicen "más de 35 años").
    { icon: "hospital", value: "+35", label: "años de trayectoria" },
    // TODO(PIEL): cifra de pacientes a unificar — Home dice "5.000" y Nosotros "6.500".
    { icon: "patients", value: "+5.000", label: "pacientes tratados" },
    { icon: "team", label: "Equipo interdisciplinario completo" },
    { icon: "integral", label: "Tratamiento integral en un solo lugar" },
  ],
};

export const differentiators: DifferentiatorsContent = {
  eyebrow: "Nuestro diferencial",
  title: "Un enfoque que cambia el resultado",
  items: [
    {
      icon: "all-in-one",
      title: "Todo el tratamiento en un solo lugar",
      text: "Coordinación entre todas las especialidades para un abordaje integral y eficiente.",
    },
    {
      icon: "team",
      title: "Equipo interdisciplinario",
      text: "Profesionales especializados que trabajan en conjunto en cada etapa del proceso.",
    },
    {
      icon: "experience",
      // TODO(PIEL): actualizar años de experiencia a 2026 (los docs dicen "más de 35 años").
      title: "Más de 35 años de experiencia",
      text: "Un modelo desarrollado y perfeccionado a lo largo del tiempo.",
    },
    {
      icon: "support",
      title: "Acompañamiento integral",
      text: "Desde el diagnóstico prenatal hasta la inserción social del paciente.",
    },
  ],
};

export const humanBlock: HumanBlockContent = {
  title: "Cada tratamiento es una historia",
  // Las palabras entre **dobles asteriscos** se renderizan en negrita (ver RichText).
  text: "Detrás de cada diagnóstico hay **una familia, un proceso y un futuro por construir**. En PIEL acompañamos a cada paciente **en todo el camino**, con el **mismo compromiso en cada caso**.",
  cta: { label: "Conocé historias reales", href: siteExternalLinks.historias },
  images: [
    {
      src: "/brand/historias/cada-tratamiento-es-una-historia.jpg",
      alt: "Niña sonriendo mientras juega dando la mamadera a su muñeca en Asociación PIEL",
      // Es vertical: anclamos arriba para no recortarle la cara.
      position: "object-top",
    },
    {
      src: "/brand/historias/historias-2.png",
      alt: "Retrato de una niña sonriendo, paciente de Asociación PIEL",
    },
    {
      src: "/brand/historias/historias-3.png",
      alt: "Niño pequeño sentado en una sillita en la sala de juegos de Asociación PIEL",
    },
  ],
};

export const accessHelp: AccessHelpContent = {
  title: "¿Cómo podés acceder o ayudar?",
  cards: [
    {
      icon: "handshake",
      variant: "access",
      title: "Acceso al tratamiento",
      text: "Desarrollamos programas para que todos los pacientes puedan acceder al tratamiento, independientemente de sus posibilidades económicas.",
      cta: { label: "Conocer opciones de acceso", href: "/como-acceder/acceso" },
    },
    {
      icon: "heart",
      variant: "help",
      title: "Cómo ayudar",
      text: "Tu apoyo puede cambiar la vida de un niño. Sumate apadrinando un tratamiento o haciendo una donación.",
      cta: { label: "Conocer cómo ayudar", href: "/se-parte" },
    },
  ],
};

// Bloque de donación (fuente 1.4). Disponible para reutilizar (p. ej. en /se-parte/donar).
export const donateBlock: DonateBlockContent = {
  title: "Hacemos posible muchas sonrisas",
  text: "Gracias al apoyo de quienes acompañan a PIEL, cada día más niños con fisuras labio alvéolo palatinas pueden acceder a su tratamiento. Tu ayuda puede cambiar el futuro de un niño y su familia.",
  cta: { label: "Sumate", href: "/se-parte/donar" },
};
