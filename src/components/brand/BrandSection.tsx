import type { ReactNode } from "react";
import BlockLayers, { type Intensity } from "@/components/brand/BlockLayers";
import type { BrandBlock } from "@/components/brand/tokens";

const TONE = {
  white: "bg-white",
  offwhite: "bg-piel-offwhite",
  navy: "bg-piel-navy text-white",
} as const;

const PADDING = {
  none: "",
  sm: "py-12",
  md: "py-16",
  lg: "py-16 lg:py-24",
} as const;

interface BrandSectionProps {
  /**
   * Bloque de navegación al que pertenece la sección. Define qué recurso de
   * marca domina el fondo (Tarea 2: líneas / degradés / formas orgánicas).
   */
  block?: BrandBlock;
  tone?: keyof typeof TONE;
  /** Cuánto se nota la decoración. En secciones con mucho texto usar "subtle". */
  intensity?: Intensity;
  padding?: keyof typeof PADDING;
  /** Envuelve el contenido en el contenedor estándar del sistema. */
  container?: boolean;
  className?: string;
  /** Clases extra del contenedor interno de contenido. */
  contentClassName?: string;
  children: ReactNode;
  id?: string;
}

/**
 * Sección con la identidad visual de su bloque de navegación.
 *
 * Regla de oro: la decoración es una capa `absolute` detrás del contenido, que
 * viaja en un `div` con `relative` por encima. Ningún recurso tapa texto, y las
 * opacidades están calibradas para no bajar el contraste por debajo de WCAG AA.
 *
 * Para el cuerpo de una página interna completa, usar `ui/PageBody`, que además
 * deduce el bloque de la ruta.
 */
export default function BrandSection({
  block,
  tone = "white",
  intensity = "medium",
  padding = "md",
  container = true,
  className = "",
  contentClassName = "",
  children,
  id,
}: BrandSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${TONE[tone]} ${PADDING[padding]} ${className}`}
    >
      {block && <BlockLayers block={block} intensity={intensity} />}

      <div
        className={`relative ${
          container ? "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" : ""
        } ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
