import BlobShape from "@/components/brand/BlobShape";
import GradientBackground from "@/components/brand/GradientBackground";
import WarpGrid from "@/components/brand/WarpGrid";
import type { BrandBlock } from "@/components/brand/tokens";

const HEIGHT = {
  sm: "h-10",
  md: "h-16",
  lg: "h-24",
} as const;

interface BrandDividerProps {
  /** Define el recurso: líneas (centro), degradé (tratamiento), formas (pacientes). */
  block?: BrandBlock;
  size?: keyof typeof HEIGHT;
  className?: string;
}

/**
 * Franja separadora entre secciones. Es el recurso de marca en su uso más
 * literal: un respiro visual con la textura del bloque, sin contenido encima.
 */
export default function BrandDivider({
  block = "centro",
  size = "md",
  className = "",
}: BrandDividerProps) {
  return (
    <div aria-hidden className={`relative w-full overflow-hidden ${HEIGHT[size]} ${className}`}>
      {block === "centro" && (
        <WarpGrid
          cols={20}
          rows={3}
          amplitude={0}
          color="blue"
          opacity={0.2}
          fade="center"
        />
      )}

      {block === "tratamiento" && (
        <>
          <GradientBackground variant="sky" angle={90} opacity={0.7} fade="edges" />
          <span className="accent-bar-h absolute inset-x-0 top-1/2 h-px -translate-y-1/2 opacity-30" />
        </>
      )}

      {block === "pacientes" && (
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          <BlobShape variant="pill" color="cream" opacity={0.9} className="h-6 w-28" />
          <BlobShape variant="star" color="burgundy" opacity={0.5} className="h-6 w-6" />
          <BlobShape variant="pill" color="periwinkle" opacity={0.5} className="h-6 w-40" />
          <BlobShape variant="star" color="blue" opacity={0.4} className="h-4 w-4" />
          <BlobShape variant="pill" color="cream" opacity={0.9} className="h-6 w-20" />
        </div>
      )}
    </div>
  );
}
