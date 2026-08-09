import { BRAND_COLOR_VARS, type BrandColor } from "@/components/brand/tokens";

const VIEW = 120;

const FADE_MASK = {
  none: undefined,
  bottom: "linear-gradient(to bottom, black 25%, transparent 100%)",
  top: "linear-gradient(to top, black 25%, transparent 100%)",
  right: "linear-gradient(to right, black 0%, transparent 100%)",
  center: "radial-gradient(75% 75% at 50% 50%, black 10%, transparent 100%)",
  corner: "radial-gradient(90% 90% at 100% 0%, black 10%, transparent 100%)",
} as const;

/**
 * Construye la malla deformada. La deformación es una onda senoidal determinista
 * (no `Math.random`) para que el HTML del servidor y el del cliente coincidan.
 */
function buildPaths(cols: number, rows: number, amplitude: number) {
  const paths: string[] = [];
  const step = 4;

  const trace = (
    count: number,
    axis: "h" | "v",
    // Punto (a lo largo de la línea, posición base de la línea) → coordenada deformada
    point: (t: number, base: number, index: number) => [number, number]
  ) => {
    for (let i = 0; i <= count; i += 1) {
      const base = (i / count) * VIEW;
      let d = "";
      for (let t = 0; t <= VIEW; t += step) {
        const [x, y] = point(t, base, i / count);
        d += `${t === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
        if (t + step <= VIEW) d += " ";
      }
      paths.push(`${axis}${i}|${d}`);
    }
  };

  // Líneas horizontales: se ondulan en Y a medida que avanzan en X.
  trace(rows, "h", (t, base, phase) => [
    t,
    base + amplitude * Math.sin((t / VIEW) * Math.PI * 2 + phase * Math.PI * 1.6),
  ]);
  // Líneas verticales: se ondulan en X a medida que avanzan en Y.
  trace(cols, "v", (t, base, phase) => [
    base + amplitude * Math.sin((t / VIEW) * Math.PI * 2 + phase * Math.PI * 1.6),
    t,
  ]);

  return paths;
}

interface WarpGridProps {
  cols?: number;
  rows?: number;
  /** Intensidad de la deformación (en unidades del viewBox de 120). */
  amplitude?: number;
  color?: BrandColor;
  /** 0–1. Como textura detrás de texto: ≤ 0.18. */
  opacity?: number;
  fade?: keyof typeof FADE_MASK;
  className?: string;
}

/**
 * Grilla distorsionada ("warp grid") del brandbook, como textura de fondo.
 * SVG plano sin `defs` ni ids, así que se puede repetir en la misma página.
 * Decoración pura: `aria-hidden`, `absolute`, sin eventos de puntero.
 */
export default function WarpGrid({
  cols = 10,
  rows = 8,
  amplitude = 6,
  color = "blue",
  opacity = 0.14,
  fade = "none",
  className = "inset-0",
}: WarpGridProps) {
  const paths = buildPaths(cols, rows, amplitude);
  const mask = FADE_MASK[fade];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity, maskImage: mask, WebkitMaskImage: mask }}
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${VIEW} ${VIEW}`}
        preserveAspectRatio="none"
        fill="none"
      >
        {paths.map((path) => {
          const [id, d] = path.split("|");
          return (
            <path
              key={id}
              d={d}
              stroke={BRAND_COLOR_VARS[color]}
              strokeWidth={1}
              // Evita que el escalado no uniforme deforme el grosor del trazo.
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
    </div>
  );
}
