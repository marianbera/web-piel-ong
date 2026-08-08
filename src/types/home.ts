export type HeroCtaIcon = "heart";

export interface HeroSlide {
  /** `position`: utilidad de object-position de Tailwind para ajustar el encuadre. */
  image?: { src: string; alt: string; position?: string };
  /** Lado donde se ubica el texto del slide en desktop. Por defecto, derecha. */
  align?: "left" | "right";
  title: string;
  subtitle: string;
  cta: { label: string; href: string; icon?: HeroCtaIcon };
}

export type StatIcon = "hospital" | "patients" | "team" | "integral";

export interface Stat {
  icon: StatIcon;
  value?: string;
  label: string;
}

export interface AboutSummaryContent {
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  stats: Stat[];
}

export type DifferentiatorIcon =
  | "all-in-one"
  | "team"
  | "experience"
  | "support";

export interface Differentiator {
  icon: DifferentiatorIcon;
  title: string;
  text: string;
}

export interface DifferentiatorsContent {
  eyebrow?: string;
  title: string;
  items: Differentiator[];
}

export interface DonateBlockContent {
  title: string;
  text: string;
  cta: { label: string; href: string };
}

/** Foto de una pila apilable. `position`: utilidad de object-position para el encuadre. */
export interface StackImage {
  src: string;
  alt: string;
  position?: string;
}

export interface HumanBlockContent {
  title: string;
  text: string;
  cta: { label: string; href: string };
  /** Se muestran apiladas y rotan solas. La primera es la que queda al frente. */
  images?: StackImage[];
}

export type AccessHelpIcon = "handshake" | "heart";

export interface AccessHelpCard {
  icon: AccessHelpIcon;
  variant: "access" | "help";
  title: string;
  text: string;
  cta: { label: string; href: string };
}

export interface AccessHelpContent {
  title: string;
  cards: AccessHelpCard[];
}
