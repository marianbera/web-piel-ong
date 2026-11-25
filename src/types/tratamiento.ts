import type { DraftPageContent, PageHeaderContent, SectionLink, Step } from "@/types/common";

/** Libro del equipo, mostrado como tarjeta con su tapa en Investigación y academia. */
export interface BookItem {
  title: string;
  subtitle?: string;
  /** Tal como figuran en la tapa. */
  editors: string[];
  publisher: string;
  year?: string;
  /** Estado visible (p. ej. "En preparación"). Sin él, el libro se da por publicado. */
  status?: string;
  /** Tapa en `public/investigacion/`, con sus medidas reales para no recortarla. */
  cover: { src: string; alt: string; width: number; height: number };
}

export interface InvestigacionContent extends DraftPageContent {
  books?: { title: string; items: BookItem[] };
}

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
