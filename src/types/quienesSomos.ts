import type { PageHeaderContent, SectionLink } from "@/types/common";

export interface QuienesSomosHubContent {
  header: PageHeaderContent;
  intro: string;
  sections: SectionLink[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface HistoriaPageContent {
  header: PageHeaderContent;
  intro: string[];
  milestonesTitle: string;
  milestones: TimelineEvent[];
}

export interface AwardItem {
  year: string;
  text: string;
}

export interface PremiosPageContent {
  header: PageHeaderContent;
  intro?: string;
  awards: AwardItem[];
}

export interface TeamMember {
  role: string; // especialidad
  name: string; // profesional(es)
}

export interface EquipoFounder {
  name: string;
  role: string;
  bio: string;
  cta?: { label: string; href: string };
}

export interface EquipoPageContent {
  header: PageHeaderContent;
  intro: string;
  founder: EquipoFounder;
  directionTitle: string;
  directionNote: string;
  rosterTitle: string;
  members: TeamMember[];
}

export interface PressItem {
  title: string;
  outlet: string;
  date: string;
  href: string;
}

export interface PrensaPageContent {
  header: PageHeaderContent;
  intro: string;
  items: PressItem[];
}
