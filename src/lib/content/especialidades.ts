import type { EspecialidadesContent } from "@/types/tratamiento";

// TODO(PIEL): el diagrama del cliente menciona "las 14 especialidades" pero el doc 3.2 lista 11.
// El roster del Equipo (2.4) suma otras (anestesiología, nutrición, kinesiología, dermatología,
// mecánica dental, instrumentación). Confirmar con PIEL el set final.
//
// Fotos: se cargaron en las especialidades que tenían una foto real que las
// representa. El resto sigue con el panel de marca hasta que lleguen las suyas.
// TODO(PIEL): confirmar la asignación de cada foto (el documento pedía consultarla).
export const especialidadesContent: EspecialidadesContent = {
  header: {
    title: "Especialidades",
    subtitle:
      "El tratamiento integral requiere la participación coordinada de distintas especialidades que intervienen según las necesidades de cada paciente y cada etapa del crecimiento.",
  },
  specialties: [
    {
      icon: "stethoscope",
      title: "Cirugía plástica infantil y cráneo-maxilofacial",
      description:
        "**Tratamiento quirúrgico** de fisuras labio-alvéolo-palatinas y otras malformaciones craneofaciales.",
      image: {
        src: "/especialidades/cirugia-plastica.jpg",
        alt: "El Dr. Ricardo Bennun con un bebé en brazos, en un consultorio de Asociación PIEL",
      },
    },
    {
      icon: "hospital",
      title: "Neonatología",
      description: "Seguimiento y acompañamiento durante los primeros meses de vida.",
      // Imagen generada con IA (tiene la marca C2PA de OpenAI). La eligió PIEL.
      image: {
        src: "/especialidades/neonatologia.jpg",
        alt: "Una mamá le da la mamadera a su recién nacido mientras conversa con una profesional",
      },
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
      icon: "dna",
      title: "Genética",
      description: "Evaluación y orientación genética para pacientes y familias.",
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
      icon: "speech",
      title: "Fonoaudiología",
      description: "Evaluación y tratamiento del habla, lenguaje y alimentación.",
    },
    {
      icon: "ear",
      title: "Otorrinolaringología",
      description: "Seguimiento auditivo y respiratorio asociado a la fisura.",
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
      icon: "team",
      title: "Psicopedagogía",
      description: "Acompañamiento del aprendizaje e integración escolar.",
    },
    {
      icon: "hand-heart",
      title: "Asistencia social",
      description: "Orientación y acompañamiento social durante el tratamiento.",
      // Foto vertical en un marco 16:10: el encuadre se centra en la conversación.
      image: {
        src: "/especialidades/asistencia-social.jpg",
        alt: "Profesional de Asociación PIEL tomando notas mientras conversa con dos chicos",
        position: "object-[center_45%]",
      },
    },
  ],
};
