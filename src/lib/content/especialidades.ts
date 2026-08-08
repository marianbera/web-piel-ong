import type { EspecialidadesContent } from "@/types/tratamiento";

// TODO(PIEL): el diagrama del cliente menciona "las 14 especialidades" pero el doc 3.2 lista 11.
// El roster del Equipo (2.4) suma otras (anestesiología, nutrición, kinesiología, dermatología,
// mecánica dental, instrumentación). Confirmar con PIEL el set final.
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
    },
    {
      icon: "hospital",
      title: "Neonatología",
      description: "Seguimiento y acompañamiento durante los primeros meses de vida.",
    },
    {
      icon: "hospital",
      title: "Pediatría",
      description: "Control clínico y seguimiento general del paciente.",
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
    },
    {
      icon: "tooth",
      title: "Ortodoncia",
      description: "Desarrollo y alineación maxilar y dentaria.",
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
    },
  ],
};
