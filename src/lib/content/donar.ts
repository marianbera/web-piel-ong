import type { DonarPageContent } from "@/types/donation";

// TODO(PIEL): montos sugeridos en borrador — ajustar con el equipo de PIEL.
export const donarContent: DonarPageContent = {
  header: {
    title: "Donar",
    subtitle: "Podés ayudar a devolver una sonrisa.",
  },
  // TODO(PIEL): actualizar años de experiencia a 2026 (los docs dicen "más de 35 años").
  intro:
    "Cuando una familia recibe el diagnóstico de una fisura labio alvéolo palatina, comienza un camino lleno de preguntas, incertidumbre y desafíos. A lo largo de **más de 35 años**, en PIEL acompañamos a miles de niños y sus familias durante ese recorrido. Pero **ninguna de esas historias se construyó en soledad**.",
  paragraphs: [
    "Detrás de cada consulta, tratamiento, cirugía y sonrisa recuperada existe una red de personas comprometidas con una misma convicción: que **todos los niños merecen la oportunidad de acceder al tratamiento que necesitan**. Profesionales que ponen su conocimiento al servicio de otros. Empresas que deciden involucrarse. Personas que acompañan, colaboran y confían. Familias que transforman su experiencia en ayuda para quienes recién comienzan el camino.",
    "Gracias a ese compromiso colectivo, **miles de niños pudieron acceder a tratamientos especializados** y miles de familias encontraron contención, orientación y esperanza. Creemos que la salud también se construye entre todos, y que cuando una comunidad se compromete, las oportunidades se multiplican. Hoy podés formar parte de esa historia.",
    "**Más que una donación**: cada colaboración ayuda a abrir nuevas posibilidades. Permite acompañar a una familia en un momento importante, acercar tratamientos especializados a quienes los necesitan y que más niños puedan crecer, desarrollarse y mirar el futuro con mayores oportunidades.",
    "También podés colaborar realizando una donación para acompañar los programas de atención, acompañamiento y asistencia que desarrolla PIEL. Podés elegir entre **donación mensual, donación por única vez o transferencia bancaria**.",
  ],
  amountOptions: [
    { value: 3000, label: "$3.000" },
    { value: 6000, label: "$6.000" },
    { value: 12000, label: "$12.000" },
    { value: 25000, label: "$25.000" },
  ],
};
