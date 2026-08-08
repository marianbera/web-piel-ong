import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  /** Muestra la barra de acento horizontal debajo del título (patrón del Home). */
  accent?: boolean;
  className?: string;
}

/**
 * Encabezado de sección estándar: eyebrow opcional + h2 navy + acento opcional.
 * Reemplaza los `<h2 className="text-2xl font-bold text-piel-navy ...">` sueltos
 * repetidos a mano en varias páginas.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  accent = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal className={`${isCenter ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-piel-navy sm:text-4xl">{title}</h2>
      {accent && (
        <span
          aria-hidden
          className={`accent-bar-h mt-5 block h-1 w-16 rounded-full ${isCenter ? "mx-auto" : ""}`}
        />
      )}
    </Reveal>
  );
}
