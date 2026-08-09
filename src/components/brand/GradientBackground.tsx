import { GRADIENT_STOPS, type GradientVariant } from "@/components/brand/tokens";

/** Máscaras para que el degradé se disuelva contra el blanco de la página. */
const FADE_MASK = {
  none: undefined,
  top: "linear-gradient(to bottom, transparent 0%, black 45%)",
  bottom: "linear-gradient(to bottom, black 55%, transparent 100%)",
  edges: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
  radial: "radial-gradient(120% 100% at 50% 0%, black 35%, transparent 100%)",
} as const;

interface GradientBackgroundProps {
  /** Familia de degradé del brandbook. */
  variant?: GradientVariant;
  /** Ángulo en grados (160 = diagonal descendente, 180 = vertical puro). */
  angle?: number;
  /** 0–1. En zonas con texto encima, mantener bajo (≤ 0.35 sobre claro). */
  opacity?: number;
  /** Disuelve el degradé hacia un borde para que no corte en seco. */
  fade?: keyof typeof FADE_MASK;
  /** Posicionamiento. Por defecto cubre todo el contenedor (que debe ser `relative`). */
  className?: string;
}

/**
 * Capa de degradé de marca. Va SIEMPRE detrás del contenido: es `absolute`,
 * `aria-hidden` y sin eventos de puntero. El contenedor padre necesita `relative`
 * (y normalmente `overflow-hidden`).
 */
export default function GradientBackground({
  variant = "sky",
  angle = 160,
  opacity = 1,
  fade = "none",
  className = "inset-0",
}: GradientBackgroundProps) {
  const mask = FADE_MASK[fade];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${GRADIENT_STOPS[variant]})`,
        opacity,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}
