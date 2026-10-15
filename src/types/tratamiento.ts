import type { PageHeaderContent, SectionLink, Step } from "@/types/common";

export type SpecialtyIcon =
  | "stethoscope"
  | "tooth"
  | "ear"
  | "speech"
  | "dna"
  | "syringe"
  | "hospital"
  | "heart"
  | "team"
  | "clipboard"
  | "hand-heart"
  | "apple"
  | "movement"
  | "bone"
  | "drop";

/** Foto real de una sección. `position`: utilidad de object-position para el recorte. */
export interface SectionPhoto {
  src: string;
  alt: string;
  position?: string;
}

export interface SpecialtyItem {
  title: string;
  description: string;
  icon?: SpecialtyIcon;
  /** Sin foto se muestra el panel de marca con el ícono. */
  image?: SectionPhoto;
}

export interface EspecialidadesContent {
  header: PageHeaderContent;
  intro?: string;
  specialties: SpecialtyItem[];
}

export interface TratamientoHubContent {
  header: PageHeaderContent;
  intro: string;
  sections: SectionLink[];
}

export interface EnfoqueHighlight {
  title: string;
  text: string;
}

export interface EnfoqueContent {
  header: PageHeaderContent;
  intro: string[];
  image?: SectionPhoto;
  highlights: EnfoqueHighlight[];
}

export interface OtrasAreasContent {
  header: PageHeaderContent;
  intro?: string;
  areas: Step[];
}
