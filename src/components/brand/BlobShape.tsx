import { BRAND_COLOR_VARS, type BrandColor } from "@/components/brand/tokens";

/**
 * Formas orgánicas de los "Recursos" del brandbook, todas dibujadas en un
 * viewBox de 100×100. Se renderizan con relleno opaco y la transparencia se
 * aplica en el contenedor, para que los solapamientos (la cruz son dos rects)
 * no se vean más oscuros que el resto.
 */
const SHAPES = {
  /** Cruz de esquinas redondeadas — el símbolo médico de las piezas. */
  cross: (
    <>
      <rect x="36" y="4" width="28" height="92" rx="14" />
      <rect x="4" y="36" width="92" height="28" rx="14" />
    </>
  ),
  /** Óvalos apilados. */
  ovals: (
    <>
      <ellipse cx="50" cy="20" rx="44" ry="17" />
      <ellipse cx="50" cy="50" rx="44" ry="17" />
      <ellipse cx="50" cy="80" rx="44" ry="17" />
    </>
  ),
  /** Estrella / destello de cuatro puntas con lados cóncavos. */
  star: (
    <path d="M50 0C54 30 70 46 100 50C70 54 54 70 50 100C46 70 30 54 0 50C30 46 46 30 50 0Z" />
  ),
  /** Mancha orgánica irregular. */
  blob: (
    <path d="M55 3C79 6 99 24 97 49C95 74 79 97 52 98C26 99 3 79 2 52C1 24 24 0 55 3Z" />
  ),
  /** Píldora / cápsula: la forma de los "chips" de las piezas. */
  pill: <rect x="2" y="28" width="96" height="44" rx="22" />,
  /** Arco: medio anillo grueso, usado como acento de esquina. */
  arc: (
    <path d="M50 2A48 48 0 0 1 98 50H72A22 22 0 0 0 50 28Z" />
  ),
} as const;

export type BlobVariant = keyof typeof SHAPES;

interface BlobShapeProps {
  variant?: BlobVariant;
  color?: BrandColor;
  /** 0–1. Como acento sobre fondo claro: 0.06–0.18. Como figura sólida: 1. */
  opacity?: number;
  /** Rotación en grados. */
  rotate?: number;
  /** Movimiento flotante muy lento (se desactiva con `prefers-reduced-motion`). */
  float?: false | "slow" | "slower";
  /**
   * Tamaño y posición. Por defecto es un cuadrado de 16rem sin posicionar;
   * al usarlo como decoración pasar algo como `absolute -right-16 top-10 h-64 w-64`.
   */
  className?: string;
}

/**
 * Forma orgánica decorativa de marca. Va detrás del contenido: `aria-hidden`
 * y sin eventos de puntero.
 */
export default function BlobShape({
  variant = "blob",
  color = "blueSoft",
  opacity = 0.14,
  rotate = 0,
  float = false,
  className = "h-64 w-64",
}: BlobShapeProps) {
  const floatClass =
    float === "slow" ? "animate-piel-float" : float === "slower" ? "animate-piel-float-slow" : "";

  return (
    <div aria-hidden className={`pointer-events-none ${floatClass} ${className}`} style={{ opacity }}>
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        fill={BRAND_COLOR_VARS[color]}
        style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      >
        {SHAPES[variant]}
      </svg>
    </div>
  );
}
