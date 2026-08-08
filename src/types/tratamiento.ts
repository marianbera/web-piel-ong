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
  | "hand-heart";

export interface SpecialtyItem {
  title: string;
  description: string;
  icon?: SpecialtyIcon;
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
  highlights: EnfoqueHighlight[];
}

export interface OtrasAreasContent {
  header: PageHeaderContent;
  intro?: string;
  areas: Step[];
}
