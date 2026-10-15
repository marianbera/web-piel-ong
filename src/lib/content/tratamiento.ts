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
      // Listado final de PIEL: 15 especialidades (ver lib/content/especialidades.ts).
      title: "Las 15 especialidades",
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

// El doc 3.1 mencionaba 2 imágenes (tratamiento-1.png, tratamiento-2.png) que nunca
// llegaron; se usa una foto real de la sala de juegos de la sede.
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
    "**Más de 38 años de experiencia** y miles de pacientes tratados nos permitieron consolidar un **modelo de atención propio** para el abordaje integral de fisuras labio alvéolo palatinas.",
  ],
  // PIEL pidió una foto con una profesional en vez de la de la nena. Es la misma
  // que la de Kinesiología en Especialidades (las dos venían del mismo link).
  // Vertical en un marco 4:3: el encuadre baja hasta la profesional y el bebé.
  image: {
    src: "/especialidades/kinesiologia.jpg",
    alt: "Kinesióloga de Asociación PIEL trabajando con un bebé sobre la colchoneta del consultorio",
    position: "object-[center_70%]",
  },
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

// Los tres bloques son los que pide el diagrama del cliente (Cátedra UBA ·
// publicaciones · congresos). `pending` es la estructura "en preparación" que se
// muestra solo si `sections` queda vacío.
export const investigacionContent: DraftPageContent = {
  header: {
    title: "Investigación y academia",
    subtitle: "Formación, publicaciones y participación en congresos.",
  },
  intro:
    "Además de la asistencia, PIEL sostiene una **línea de trabajo académico y de formación**, encabezada por su fundador y director médico, el **Dr. Ricardo Bennun**.",
  // Textos corregidos por PIEL (observaciones, última ronda). Se respetan palabra por
  // palabra; los títulos que el documento pone en cursiva van en negrita, que es el
  // único énfasis que tiene el sitio.
  sections: [
    {
      title: "Cátedra UBA",
      body: "El Dr. Bennun es **Doctor en Medicina por la Universidad de Buenos Aires** y docente autorizado de su Facultad de Medicina. Completó su formación en cirugía craneofacial como Clinical Fellow en el Boston Children's Hospital, asociado a la Universidad de Harvard (1983–1984). En 2012 creó el **Posgrado en Cirugía Plástica Pediátrica y Craneofacial** del Hospital de Clínicas \"General San Martín\" (UBA). Antes fue vicedirector del posgrado en Cirugía Plástica del Hospital Garrahan (UBA), y fue profesor del posgrado en Ortodoncia de la Universidad Maimónides (2005–2019).",
    },
    {
      title: "Publicaciones",
      body: "Es editor del libro **Cleft Lip and Palate Management: A Comprehensive Atlas** (Wiley-Blackwell, 2015) y autor de capítulos en **Clinical Cases in Early Orthodontic Treatment** (Springer, 2017) y en \"Tratamiento interdisciplinario de las fisuras labio palatinas\" (2007). En 2023 publicó el capítulo \"Cleft Palate Repair\" en **The Embryologic Basis of Craniofacial Structure** (Springer-Verlag). Participó en un estudio de investigación genética sobre fisuras labio-alvéolo-palatinas publicado en el **European Journal of Human Genetics**, junto a investigadores de Johns Hopkins. Integra el consejo editorial de **The Journal of Craniofacial Surgery** desde 2016.",
    },
    {
      title: "Congresos y jornadas",
      body: "El equipo lleva su experiencia a encuentros científicos de todo el mundo. En 2012, el Dr. Bennun fue cofundador de **LATICFA** (Latin American Craniofacial Association), de la que luego fue tesorero (2016–2024). En 2022 fue también cofundador de **AFLAPyCRA** (Asociación de Fisuras Labio Alveolo Palatinas y Craneofacial de Argentina). Fue **profesor invitado del International Cleft Congress** (Chennai, India, 2017), **presidente del comité científico internacional** del VIII Congreso Brasileño de Fisuras Labio Palatinas (2016) y **presidente de honor** del VI Congreso Brasileño (2012).",
    },
  ],
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
