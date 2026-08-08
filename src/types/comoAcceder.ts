import type { PageHeaderContent, SectionLink } from "@/types/common";
import type { CtaLink } from "@/types/site";

export interface ComoAccederListItem {
  title: string;
  description: string;
}

export interface ComoAccederPageContent {
  header: PageHeaderContent;
  intro: string;
  paragraphs?: string[];
  bullets?: string[];
  bulletsTitle?: string;
  coverages?: string[];
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
