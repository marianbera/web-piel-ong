import type { NosotrosContent } from "@/types/about";

export const nosotrosContent: NosotrosContent = {
  header: {
    eyebrow: "Centro Médico",
    title: "Nosotros",
    // Definición institucional oficial de PIEL (ronda de cambios de contenido, nov. 2026).
    subtitle:
      "P.I.E.L. (Plástica Infantil con Excelencia en el Logro) es un centro de referencia en cirugía plástica infantil y craneofacial especializado en el tratamiento integral de las fisuras labio-alvéolo-palatinas.",
  },
  intro: [
    "Desde hace **más de 38 años**, desarrollamos un **modelo de atención interdisciplinario** que integra cirugía, rehabilitación y seguimiento en un solo lugar, acompañando a cada paciente desde el diagnóstico prenatal hasta la finalización del tratamiento.",
    "Nuestra trayectoria, con **más de 6.000 pacientes tratados**, nos posiciona como uno de los **centros más experimentados de la región** en esta patología, siendo referencia para familias y profesionales de Argentina y países limítrofes.",
    "Lo que diferencia a PIEL no es solo su experiencia, sino su forma de trabajar: **un equipo completo de especialistas** que evalúa y trata a cada paciente de manera coordinada, evitando la fragmentación habitual del sistema de salud y asegurando un **abordaje integral en cada etapa**.",
    "Atendemos pacientes privados, con cobertura médica y también desarrollamos **programas de acceso** para quienes no pueden afrontar el tratamiento.",
  ],
  // Foto vertical en un marco 4:3: el encuadre se centra en el cartel de la fachada.
  image: {
    src: "/nosotros/sede.jpg",
    alt: "Fachada de la sede de Asociación PIEL en Avellaneda, con el cartel de la asociación",
    position: "object-[center_40%]",
  },
  // Visión y Misión: textos oficiales de PIEL (ronda de cambios de contenido, nov. 2026).
  vision: {
    title: "Visión",
    text: "Ser el **centro de referencia, nacional e internacional**, en cirugía plástica infantil y craneofacial, reconocido por su **modelo de atención integral** y la calidad de sus resultados.",
  },
  mission: {
    title: "Misión",
    text: "Brindar **tratamiento interdisciplinario coordinado y de excelencia** a niños con fisuras labio-alvéolo-palatinas y otras patologías craneofaciales, acompañando a cada paciente y su familia **durante todo el proceso**.",
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
