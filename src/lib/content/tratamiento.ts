import type { DraftPageContent } from "@/types/common";
import type {
  EnfoqueContent,
  OtrasAreasContent,
  TratamientoHubContent,
} from "@/types/tratamiento";

export const tratamientoHub: TratamientoHubContent = {
  header: {
    title: "Tratamiento integral",
    subtitle: "Todo el equipo y todas las especialidades, coordinadas en un solo lugar.",
  },
  intro:
    "El tratamiento de las fisuras labio-álveolo-palatinas en PIEL combina cirugía, seguimiento médico y acompañamiento durante toda la infancia, con un **equipo interdisciplinario completo**.",
  sections: [
    {
      title: "Nuestro enfoque",
      description: "Cómo trabajamos y cuál es nuestro diferencial.",
      href: "/tratamiento/enfoque",
    },
    {
      title: "Las 14 especialidades",
      description: "Todas las especialidades médicas involucradas en el tratamiento.",
      href: "/tratamiento/especialidades",
    },
    {
      title: "Otras áreas",
      description: "Otras áreas de la cirugía plástica infantil que abordamos.",
      href: "/tratamiento/otras-areas",
    },
    {
      title: "Investigación",
      description: "Cátedra UBA, publicaciones y participación en congresos.",
      href: "/tratamiento/investigacion",
    },
  ],
};

// TODO(PIEL): el doc 3.1 tiene 2 imágenes (tratamiento-1.png, tratamiento-2.png) aún no entregadas → por ahora BrandPanel.
export const enfoqueContent: EnfoqueContent = {
  header: {
    title: "Nuestro enfoque",
    subtitle:
      "El tratamiento de una fisura labio alvéolo palatina requiere mucho más que una intervención quirúrgica. Cada paciente necesita seguimiento, coordinación entre especialidades y un acompañamiento sostenido a lo largo del tiempo.",
  },
  intro: [
    "En PIEL trabajamos con un **enfoque interdisciplinario** que permite evaluar y acompañar cada caso de manera integral, adaptando el tratamiento a cada etapa del crecimiento del paciente.",
    "**El mismo día y en un mismo lugar**, niños y familias pueden acceder a distintas especialidades, evitando la fragmentación habitual del sistema de salud y favoreciendo una mirada coordinada del tratamiento.",
    "Creemos en la importancia de la contención. Por eso, cada consulta se desarrolla en un **entorno cercano, humano y pensado para los niños** y sus familias.",
    // TODO(PIEL): actualizar años de experiencia a 2026 (los docs dicen "más de 35 años").
    "**Más de 35 años de experiencia** y miles de pacientes tratados nos permitieron consolidar un **modelo de atención propio** para el abordaje integral de fisuras labio alvéolo palatinas.",
  ],
  highlights: [
    {
      title: "Mismo día y mismo lugar",
      text: "Distintas especialidades coordinadas en un solo centro.",
    },
    {
      title: "Trabajo interdisciplinario",
      text: "Profesionales de diferentes áreas trabajando en conjunto.",
    },
    {
      title: "Contención y acompañamiento",
      text: "Apoyo médico, emocional y social durante todo el tratamiento.",
    },
    {
      title: "Entorno pensado para los niños",
      text: "Espacios de juego y un ambiente cálido para las familias.",
    },
  ],
};

export const otrasAreasContent: OtrasAreasContent = {
  header: {
    title: "Otras áreas de la cirugía plástica infantil",
    subtitle:
      "Además del tratamiento de fisuras labio-alvéolo-palatinas, en PIEL abordamos otras patologías vinculadas a la cirugía plástica infantil y craneofacial.",
  },
  areas: [
    {
      title: "Malformaciones craneofaciales",
      description: "Tratamiento de alteraciones congénitas del cráneo y la cara.",
    },
    {
      title: "Secuelas de quemaduras",
      description: "Reconstrucción y seguimiento funcional y estético.",
    },
    {
      title: "Secuelas de traumatismos y accidentes",
      description: "Abordaje reconstructivo de lesiones faciales y corporales.",
    },
    {
      title: "Malformaciones congénitas",
      description: "Evaluación y tratamiento de patologías reconstructivas infantiles.",
    },
  ],
};

// TODO(PIEL): sección SIN DOC entregado. Los tres bloques de abajo son los que pide el
// diagrama del cliente (Cátedra UBA · publicaciones · congresos); el texto de cada uno
// está pendiente de PIEL. Se publica la estructura, no contenido inventado.
export const investigacionContent: DraftPageContent = {
  header: {
    title: "Investigación y academia",
    subtitle: "Formación, publicaciones y participación en congresos.",
  },
  intro:
    "Además de la asistencia, PIEL sostiene una línea de trabajo académico y de formación. Estamos preparando esta sección para reunirla en un solo lugar.",
  sections: [],
  pending: [
    {
      title: "Cátedra UBA",
      hint: "La actividad docente y de formación de grado y posgrado vinculada a la Universidad de Buenos Aires.",
    },
    {
      title: "Publicaciones",
      hint: "Los trabajos y artículos publicados por los profesionales del equipo.",
    },
    {
      title: "Congresos y jornadas",
      hint: "La participación de PIEL en congresos y encuentros científicos, nacionales e internacionales.",
    },
  ],
  note: "Si sos profesional de la salud y buscás material académico o querés contactar al equipo, **escribinos** y te orientamos.",
};
