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
  // Foto vertical en un marco 4:3: se baja el encuadre para que la nena quede entera.
  image: {
    src: "/tratamiento/enfoque-sala-de-juegos.jpg",
    alt: "Niña en la sala de juegos de Asociación PIEL, rodeada de juguetes",
    position: "object-[center_55%]",
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
  // Contenido armado con el CV del Dr. Bennun publicado en el sitio actual
  // (asociacion-piel.org.ar/web/dr-ricardo-bennun), que llega hasta 2017.
  // TODO(PIEL): revisar y actualizar con la actividad posterior a 2017 (cargos
  // vigentes, publicaciones y congresos recientes).
  sections: [
    {
      title: "Cátedra UBA",
      body: "El Dr. Bennun es **Doctor en Medicina por la Universidad de Buenos Aires** y docente autorizado de su Facultad de Medicina. Desde 2012 dirige el **Posgrado en Cirugía Plástica Pediátrica y Craneofacial** del Hospital de Clínicas José de San Martín (UBA). Antes fue vicedirector del posgrado en Cirugía Plástica del Hospital Garrahan (UBA), y es profesor del posgrado en Ortodoncia de la Universidad Maimónides.",
    },
    {
      title: "Publicaciones",
      body: "Es editor del libro **Cleft Lip and Palate Management: A Comprehensive Atlas** (Wiley-Blackwell, 2015) y autor de capítulos en “Clinical Cases in Early Orthodontic Treatment” (Springer, 2017) y “Tratamiento interdisciplinario de las fisuras labio palatinas” (2007). Integra el consejo editorial de **The Journal of Craniofacial Surgery**. Participó además en investigaciones genéticas junto al Johns Hopkins Hospital y al Children’s Hospital de Boston.",
    },
    {
      title: "Congresos y jornadas",
      body: "El equipo lleva su experiencia a encuentros científicos de todo el mundo. El Dr. Bennun fue **profesor invitado del International Cleft Congress** (Chennai, India, 2017), **presidente del comité científico internacional** del VIII Congreso Brasileño de Fisuras Labio Palatinas (2016) y **presidente de honor** del VI Congreso Brasileño (2012). También fue tesorero de la Latin American CranioFacial Association (LATICFA).",
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
