import BlobShape from "@/components/brand/BlobShape";
import GradientBackground from "@/components/brand/GradientBackground";
import WarpGrid from "@/components/brand/WarpGrid";
import type { BrandBlock } from "@/components/brand/tokens";

/** Multiplicador de opacidad de la decoración. */
export const INTENSITY = {
  subtle: 0.55,
  medium: 1,
  strong: 1.7,
} as const;

export type Intensity = keyof typeof INTENSITY;

interface BlockLayersProps {
  block: BrandBlock;
  /**
   * "page" → cuerpo claro de una página.
   * "hero" → encima de la foto oscura del PageHeader (colores claros, más tenue).
   */
  variant?: "page" | "hero";
  intensity?: Intensity;
}

/**
 * Capas decorativas que le dan identidad a cada bloque de navegación:
 *
 * - **Centro Médico** → grilla ortogonal (la misma malla, sin deformar).
 * - **Tratamiento Integral** → degradés de marca.
 * - **Información para pacientes y familias** → formas orgánicas + grilla suave, más cálido.
 *
 * Es solo la capa de fondo: quien la usa (BrandSection, PageBody, PageHeader) se
 * encarga de que el contenido vaya en un contenedor `relative` por encima.
 */
export default function BlockLayers({
  block,
  variant = "page",
  intensity = "medium",
}: BlockLayersProps) {
  const k = INTENSITY[intensity];
  const onDark = variant === "hero";

  if (block === "centro") {
    // Identidad arquitectónica: una grilla ortogonal fina (el mismo primitivo que
    // usa Pacientes, pero con amplitud 0, o sea sin deformar). Al lado de la malla
    // ondulada del bloque de familias se lee como su contracara ordenada, que es
    // justo el tono del Centro Médico: institución, planos, precisión.
    return (
      <>
        {!onDark && (
          <GradientBackground variant="whisper" angle={180} opacity={0.9 * k} fade="bottom" />
        )}
        <WarpGrid
          cols={14}
          rows={10}
          amplitude={0}
          color={onDark ? "blueSoft" : "blue"}
          opacity={(onDark ? 0.18 : 0.09) * k}
          fade="corner"
          className={onDark ? "inset-y-0 right-0 w-3/5" : "inset-y-0 right-0 w-2/3 lg:w-1/2"}
        />
        {!onDark && (
          <BlobShape
            variant="pill"
            color="periwinkle"
            opacity={0.22 * k}
            rotate={90}
            className="absolute -left-24 top-1/4 h-56 w-56"
          />
        )}
      </>
    );
  }

  if (block === "tratamiento") {
    // Identidad cromática: manda el degradé de marca, sin tramas ni grillas.
    return (
      <>
        <GradientBackground
          variant={onDark ? "navy" : "sky"}
          angle={onDark ? 120 : 155}
          // Sobre la foto del hero el degradé solo oscurece, así que el texto
          // blanco gana contraste en vez de perderlo.
          opacity={onDark ? 0.5 : 0.6 * k}
          fade={onDark ? "none" : "radial"}
        />
        <BlobShape
          variant="arc"
          color={onDark ? "blueSoft" : "periwinkle"}
          opacity={(onDark ? 0.16 : 0.22) * k}
          rotate={180}
          float="slower"
          className="absolute -bottom-16 -left-16 h-64 w-64 lg:h-80 lg:w-80"
        />
      </>
    );
  }

  // pacientes
  return (
    <>
      {!onDark && <GradientBackground variant="warm" angle={175} opacity={0.5 * k} fade="bottom" />}
      <WarpGrid
        color={onDark ? "blueSoft" : "periwinkle"}
        opacity={(onDark ? 0.12 : 0.16) * k}
        amplitude={7}
        fade="corner"
        className="inset-y-0 right-0 w-3/4"
      />
      <BlobShape
        variant="cross"
        color={onDark ? "white" : "burgundy"}
        opacity={(onDark ? 0.08 : 0.09) * k}
        rotate={-12}
        float="slow"
        className="absolute -left-12 top-10 h-40 w-40 lg:h-56 lg:w-56"
      />
      {onDark && (
        <BlobShape
          variant="star"
          color="blueSoft"
          opacity={0.12}
          float="slower"
          className="absolute right-8 top-6 h-24 w-24 lg:h-32 lg:w-32"
        />
      )}
    </>
  );
}
