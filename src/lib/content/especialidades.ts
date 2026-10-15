import type { EspecialidadesContent } from "@/types/tratamiento";

// Listado final de PIEL (observaciones, última ronda): son exactamente estas 15, en
// este orden. Se sacaron Psicopedagogía, Genética y Asistencia social (hoy no están en
// PIEL) y Neonatología, que no figura en el listado.
//
// Fotos: Fonoaudiología, Kinesiología y Otorrinolaringología son las que eligió PIEL.
// El resto de las que tienen foto conservan la asignación anterior. Las que no tienen
// muestran el panel de marca con su ícono.
// TODO(PIEL): fotos para Anestesiología, Instrumentación quirúrgica, Cirugía
// traumatológica, Odontología, Nutrición, Dermatología y Mecánica dental.
export const especialidadesContent: EspecialidadesContent = {
  header: {
    title: "Especialidades",
    subtitle:
      "El tratamiento integral requiere la participación coordinada de distintas especialidades que intervienen según las necesidades de cada paciente y cada etapa del crecimiento.",
  },
  specialties: [
    {
      icon: "stethoscope",
      title: "Cirugía cráneo-maxilo-facial",
      description:
        "**Tratamiento quirúrgico** de fisuras labio-alvéolo-palatinas y otras malformaciones craneofaciales.",
      image: {
        src: "/especialidades/cirugia-plastica.jpg",
        alt: "El Dr. Ricardo Bennun con un bebé en brazos, en un consultorio de Asociación PIEL",
      },
    },
    {
      icon: "syringe",
      title: "Anestesiología",
      description: "Evaluación previa y cuidado anestésico del paciente en cada cirugía.",
    },
    {
      icon: "clipboard",
      title: "Instrumentación quirúrgica",
      description: "Preparación del instrumental y asistencia al equipo durante cada intervención.",
    },
    {
      icon: "bone",
      title: "Cirugía traumatológica",
      description: "Intervenciones sobre huesos y articulaciones que forman parte del tratamiento quirúrgico.",
    },
    {
      icon: "tooth",
      title: "Odontología",
      description: "Cuidado de la salud bucal y tratamiento odontológico del paciente.",
    },
    {
      icon: "tooth",
      title: "Odontopediatría",
      description: "Prevención, cuidado y seguimiento odontológico infantil.",
      image: {
        src: "/especialidades/odontopediatria.jpg",
        alt: "Odontóloga revisando la boca de un niño sentado en el sillón odontológico",
      },
    },
    {
      icon: "tooth",
      title: "Ortodoncia",
      description: "Desarrollo y alineación maxilar y dentaria.",
      image: {
        src: "/especialidades/ortodoncia.jpg",
        alt: "Odontólogo atendiendo a una niña en el sillón odontológico de Asociación PIEL",
      },
    },
    {
      icon: "ear",
      title: "Otorrinolaringología",
      description: "Seguimiento auditivo y respiratorio asociado a la fisura.",
      // Foto vertical en un marco 16:10: el encuadre baja hasta la consulta.
      image: {
        src: "/especialidades/otorrinolaringologia.jpg",
        alt: "Médico de Asociación PIEL revisando a una bebé que su mamá sostiene en brazos",
        position: "object-[center_62%]",
      },
    },
    {
      icon: "speech",
      title: "Fonoaudiología",
      description: "Evaluación y tratamiento del habla, lenguaje y alimentación.",
      image: {
        src: "/especialidades/fonoaudiologia.jpg",
        alt: "Un nene con auriculares en la cabina de evaluación auditiva, con la profesional del otro lado del vidrio",
        position: "object-[center_45%]",
      },
    },
    {
      icon: "movement",
      title: "Kinesiología",
      description: "Estimulación del desarrollo motor y rehabilitación en cada etapa del crecimiento.",
      image: {
        src: "/especialidades/kinesiologia.jpg",
        alt: "Kinesióloga de Asociación PIEL trabajando con un bebé sobre la colchoneta del consultorio",
        position: "object-[center_70%]",
      },
    },
    {
      icon: "heart",
      title: "Psicología",
      description: "Contención emocional y acompañamiento familiar.",
      image: {
        src: "/especialidades/psicologia.jpg",
        alt: "Profesional conversando con dos chicos en un consultorio de Asociación PIEL",
      },
    },
    {
      icon: "apple",
      title: "Nutrición",
      description: "Pautas de alimentación y seguimiento del crecimiento y el peso.",
    },
    {
      icon: "drop",
      title: "Dermatología",
      description: "Cuidado y seguimiento de la piel a lo largo del tratamiento.",
    },
    {
      icon: "hospital",
      title: "Pediatría",
      description: "Control clínico y seguimiento general del paciente.",
      // La misma foto del Home: es la única real de un control pediátrico.
      image: {
        src: "/brand/hero/slide-1-que-es-piel.jpg",
        alt: "Profesional de Asociación PIEL auscultando a un bebé con un estetoscopio en el consultorio",
        position: "object-[center_35%]",
      },
    },
    {
      icon: "tooth",
      title: "Mecánica dental",
      description: "Confección de las placas y aparatos que indican odontólogos y ortodoncistas.",
    },
  ],
};
