import type { NosotrosContent } from "@/types/about";

export const nosotrosContent: NosotrosContent = {
  header: {
    eyebrow: "Centro Médico",
    title: "Nosotros",
    subtitle:
      "Asociación PIEL es un centro de cirugía plástica infantil especializado en el tratamiento integral de fisuras labio alvéolo palatinas (comúnmente llamado labio leporino) y otras malformaciones craneofaciales.",
  },
  intro: [
    // TODO(PIEL): actualizar años de experiencia a 2026 (los docs dicen "más de 35 años").
    "Desde hace **más de 35 años**, desarrollamos un **modelo de atención interdisciplinario** que integra cirugía, rehabilitación y seguimiento en un solo lugar, acompañando a cada paciente desde el diagnóstico prenatal hasta la finalización del tratamiento.",
    // TODO(PIEL): cifra de pacientes a unificar — el Home dice "5.000" y acá "6.500" (definir cifra oficial 2026).
    "Nuestra trayectoria, con **más de 6.500 pacientes tratados**, nos posiciona como uno de los **centros más experimentados de la región** en esta patología, siendo referencia para familias y profesionales de Argentina y países limítrofes.",
    "Lo que diferencia a PIEL no es solo su experiencia, sino su forma de trabajar: **un equipo completo de especialistas** que evalúa y trata a cada paciente de manera coordinada, evitando la fragmentación habitual del sistema de salud y asegurando un **abordaje integral en cada etapa**.",
    "Atendemos pacientes privados, con cobertura médica y también desarrollamos **programas de acceso** para quienes no pueden afrontar el tratamiento.",
  ],
  vision: {
    title: "Visión",
    text: "Ser el **centro de referencia** en cirugía plástica infantil en Argentina y la región, reconocido por la calidad de sus resultados y su **modelo de atención integral**.",
  },
  mission: {
    title: "Misión",
    text: "Brindar un **tratamiento integral, coordinado y de excelencia** a niños con fisuras labio-alvéolo-palatinas y otras malformaciones craneofaciales, acompañando a cada paciente y su familia en todo el proceso.",
  },
  valuesTitle: "Nuestros valores",
  values: [
    {
      icon: "star",
      title: "Excelencia médica",
      text: "Trabajamos con los **más altos estándares** en cada etapa del tratamiento.",
    },
    {
      icon: "team",
      title: "Trabajo interdisciplinario",
      text: "Creemos en el **valor del equipo** como base de mejores resultados.",
    },
    {
      icon: "shield",
      title: "Compromiso con el paciente",
      text: "Acompañamos cada caso **de manera integral**, más allá de la intervención quirúrgica.",
    },
    {
      icon: "scale",
      title: "Acceso al tratamiento",
      text: "Promovemos que todos los pacientes puedan **acceder a una atención de calidad**.",
    },
  ],
};
