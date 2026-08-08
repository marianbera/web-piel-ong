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
  vision: { title: string; text: string };
  mission: { title: string; text: string };
  valuesTitle: string;
  values: ValueItem[];
}
