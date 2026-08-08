import type { PageHeaderContent, SectionLink, Step } from "@/types/common";

export interface PacientesHubContent {
  header: PageHeaderContent;
  intro: string;
  sections: SectionLink[];
}

export interface TipsPageContent {
  header: PageHeaderContent;
  intro: string;
  tips: Step[];
}

export interface GuideResource {
  title: string;
  description: string;
  href: string;
}

export interface GuiasPageContent {
  header: PageHeaderContent;
  intro: string;
  resources: GuideResource[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqPageContent {
  header: PageHeaderContent;
  intro: string;
  faqs: FaqItem[];
}
