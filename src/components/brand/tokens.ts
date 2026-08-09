/**
 * Tokens de los "Recursos de marca" (degradés, patrones y formas del brandbook).
 *
 * Todo apunta a las variables CSS ya definidas en `globals.css` — acá NO se define
 * ningún color nuevo, solo combinaciones de la paleta existente.
 */

/** Colores de marca disponibles para los recursos decorativos. */
export const BRAND_COLOR_VARS = {
  navy: "var(--color-piel-navy)",
  blue: "var(--color-piel-blue)",
  blueSoft: "var(--color-piel-blue-soft)",
  periwinkle: "var(--color-piel-periwinkle)",
  burgundy: "var(--color-piel-burgundy)",
  red: "var(--color-piel-red)",
  cream: "var(--color-piel-cream)",
  offwhite: "var(--color-piel-offwhite)",
  white: "var(--color-piel-white)",
} as const;

export type BrandColor = keyof typeof BRAND_COLOR_VARS;

/**
 * Paradas de los degradés de marca. El brandbook define dos familias:
 * azul noche → azul, y burdeos → crema. Las variantes claras son las mismas
 * familias bajadas de intensidad para usarlas detrás de texto.
 */
export const GRADIENT_STOPS = {
  /** Azul noche → azul. Fondo oscuro, texto blanco. */
  navy: `${BRAND_COLOR_VARS.navy} 0%, ${BRAND_COLOR_VARS.blue} 100%`,
  /** Burdeos → crema. Fondo oscuro/medio, texto blanco. */
  burgundy: `${BRAND_COLOR_VARS.burgundy} 0%, ${BRAND_COLOR_VARS.cream} 100%`,
  /** Azul suave → blanco roto. Fondo claro, texto navy. */
  sky: `${BRAND_COLOR_VARS.blueSoft} 0%, ${BRAND_COLOR_VARS.offwhite} 70%, ${BRAND_COLOR_VARS.white} 100%`,
  /** Crema → blanco. Fondo claro y cálido, texto navy. */
  warm: `${BRAND_COLOR_VARS.cream} 0%, ${BRAND_COLOR_VARS.white} 75%`,
  /** Blanco roto → blanco. El más sutil: solo insinúa un cambio de superficie. */
  whisper: `${BRAND_COLOR_VARS.offwhite} 0%, ${BRAND_COLOR_VARS.white} 100%`,
} as const;

export type GradientVariant = keyof typeof GRADIENT_STOPS;

/**
 * Identidad visual de cada bloque de navegación (Tarea 2).
 * Cada bloque usa un recurso dominante distinto, pero de la misma paleta.
 */
export const BLOCK_IDENTITY = {
  /** Centro Médico → patrón de líneas verticales. */
  centro: {
    accent: "blue" as BrandColor,
    gradient: "sky" as GradientVariant,
  },
  /** Tratamiento Integral → degradés de marca. */
  tratamiento: {
    accent: "navy" as BrandColor,
    gradient: "navy" as GradientVariant,
  },
  /** Información para pacientes y familias → formas orgánicas + grilla suave. */
  pacientes: {
    accent: "burgundy" as BrandColor,
    gradient: "warm" as GradientVariant,
  },
} as const;

export type BrandBlock = keyof typeof BLOCK_IDENTITY;
