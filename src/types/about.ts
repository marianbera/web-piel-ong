import type { PageHeaderContent } from "@/types/common";

export type ValueIcon = "shield" | "star" | "heart" | "team" | "scale";

export interface ValueItem {
  icon: ValueIcon;
  title: string;
  text: string;
}

export interface NosotrosContent {
  header: PageHeaderContent;
  intro: string[];
  /** Foto del bloque de introducción. Sin ella se muestra el panel de marca. */
  image?: { src: string; alt: string; position?: string };
  vision: { title: string; text: string };
  mission: { title: string; text: string };
  valuesTitle: string;
  values: ValueItem[];
}
