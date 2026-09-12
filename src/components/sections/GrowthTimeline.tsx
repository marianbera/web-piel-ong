import Reveal from "@/components/ui/Reveal";

/**
 * Línea de tiempo del desarrollo: del bebé al chico en edad escolar.
 *
 * Los íconos son SVG inline propios, en el mismo lenguaje que `ui/icons` — el
 * sistema de diseño prohíbe sumar librerías de íconos. Es una ayuda visual: toda
 * la información está también en el texto de cada etapa.
 */
const STAGES = [
  {
    label: "Primeros meses",
    text: "Alimentación, vínculo y estimulación temprana.",
    icon: (
      // Chupete
      <>
        <circle cx="12" cy="14" r="4.5" />
        <path d="M12 9.5V7a2.5 2.5 0 0 1 2.5-2.5h.5" />
        <path d="M7.5 14a4.5 4.5 0 0 0 9 0" />
      </>
    ),
  },
  {
    label: "6 a 24 meses",
    text: "Papillas, primeras palabras y movimiento.",
    icon: (
      // Sonajero / juego
      <>
        <circle cx="9" cy="9" r="5" />
        <path d="M12.5 12.5 19 19" />
        <path d="M17 20.5 20.5 17" />
      </>
    ),
  },
  {
    label: "2 a 5 años",
    text: "Habla, socialización y controles interdisciplinarios.",
    icon: (
      // Globo de diálogo
      <>
        <path d="M4 5.5h16v11H9l-5 4z" />
        <path d="M8.5 11h7" />
      </>
    ),
  },
  {
    label: "Edad escolar",
    text: "Integración escolar, autonomía y seguimiento.",
    icon: (
      // Libro abierto
      <>
        <path d="M12 6.5C10 5 7.5 4.5 4 5v13c3.5-.5 6 0 8 1.5 2-1.5 4.5-2 8-1.5V5c-3.5-.5-6 0-8 1.5z" />
        <path d="M12 6.5v13" />
      </>
    ),
  },
];

export default function GrowthTimeline() {
  return (
    <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {STAGES.map((stage, index) => (
        <li key={stage.label} className="relative">
          <Reveal delay={index * 90}>
            {/* Riel que une las etapas en desktop; decorativo. */}
            {index < STAGES.length - 1 && (
              <span
                aria-hidden
                className="accent-bar-h absolute left-[calc(50%+2.5rem)] top-7 hidden h-0.5 w-[calc(100%-5rem)] rounded-full opacity-30 lg:block"
              />
            )}

            <div className="relative flex flex-col items-center text-center">
              <span className="bg-piel-gradient-navy flex h-14 w-14 items-center justify-center rounded-full text-white shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden
                >
                  {stage.icon}
                </svg>
              </span>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-piel-burgundy">
                {stage.label}
              </p>
              <p className="mt-2 text-sm text-piel-text/75">{stage.text}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
