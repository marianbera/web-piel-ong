import type { PageHeaderContent, SectionLink } from "@/types/common";
import type { CtaLink } from "@/types/site";

export interface ComoAccederListItem {
  title: string;
  description: string;
}

export interface Coverage {
  name: string;
  /** Ruta del logo en `public/`. Sin logo se muestra el nombre. */
  logo?: string;
}

export interface ComoAccederPageContent {
  header: PageHeaderContent;
  intro: string;
  /** Foto al costado de la introducción. */
  image?: { src: string; alt: string; position?: string };
  paragraphs?: string[];
  bullets?: string[];
  bulletsTitle?: string;
  coverages?: Coverage[];
  list?: ComoAccederListItem[];
  listTitle?: string;
  note?: string;
  cta: CtaLink;
  secondaryCta?: CtaLink;
}

export interface ComoAccederHubContent {
  header: PageHeaderContent;
  intro: string;
  sections: SectionLink[];
}
