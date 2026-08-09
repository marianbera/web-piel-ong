import type { ReactNode } from "react";
import BlockDecor from "@/components/brand/BlockDecor";
import type { Intensity } from "@/components/brand/BlockLayers";

const TONE = {
  white: "bg-white",
  offwhite: "bg-piel-offwhite",
} as const;

const PADDING = {
  none: "",
  md: "py-16",
  lg: "py-16 lg:py-24",
} as const;

interface PageBodyProps {
  children: ReactNode;
  /** Superficie. Alternar `offwhite` entre bloques largos para dar ritmo. */
  tone?: keyof typeof TONE;
  /** Cuánto se nota la decoración del bloque. Con mucho texto, "subtle". */
  intensity?: Intensity;
  padding?: keyof typeof PADDING;
  /** Apaga la decoración de bloque para esta sección puntual. */
  decor?: boolean;
  /** Clases extra del contenedor de contenido. */
  className?: string;
}

/**
 * Cuerpo estándar de una página interna: el contenedor `max-w-7xl` de siempre,
 * más la decoración del bloque de navegación al que pertenece la ruta
 * (líneas / degradés / formas orgánicas — ver `brand/BlockLayers`).
 *
 * Reemplaza el `<section className="mx-auto max-w-7xl px-4 py-16 ...">` que
 * estaba repetido a mano en cada página.
 */
export default function PageBody({
  children,
  tone = "white",
  intensity = "medium",
  padding = "md",
  decor = true,
  className = "",
}: PageBodyProps) {
  return (
    <section className={`relative overflow-hidden ${TONE[tone]} ${PADDING[padding]}`}>
      {decor && <BlockDecor intensity={intensity} />}
      <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    </section>
  );
}
