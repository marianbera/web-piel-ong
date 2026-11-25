import type { PageHeaderContent, SectionLink } from "@/types/common";

export interface QuienesSomosHubContent {
  header: PageHeaderContent;
  intro: string;
  sections: SectionLink[];
}

export interface HistoriaPageContent {
  header: PageHeaderContent;
  intro: string[];
}

export interface AwardItem {
  year: string;
  text: string;
}

export interface PremiosPageContent {
  header: PageHeaderContent;
  intro?: string;
  awards: AwardItem[];
  /**
   * Premios científicos (trabajos premiados del equipo). Se muestran debajo de los
   * reconocimientos institucionales, con el mismo formato. Viven en el código: el
   * panel edita solo la lista institucional.
   */
  scientific?: { title: string; intro?: string; awards: AwardItem[] };
}

export interface TeamMember {
  /** Profesional. Un nombre por card. */
  name: string;
  /** Especialidad del profesional. */
  role: string;
  /**
   * Foto real, servida desde `public/equipo/`. Sin ella la card muestra las
   * iniciales sobre el degradé de marca.
   * TODO(PIEL): faltan las fotos del equipo.
   */
  photo?: string;
}

/** Agrupación de profesionales por área, para el carousel de la página de Equipo. */
export interface TeamGroup {
  title: string;
  description: string;
  members: TeamMember[];
}

export interface EquipoFounder {
  name: string;
  role: string;
  bio: string;
  /** Retrato vertical en `public/equipo/`. Sin foto, se muestran las iniciales. */
  photo?: { src: string; alt: string };
  cta?: { label: string; href: string };
  /** Trayectoria (formación y cargos), en bloques con título. Se muestra debajo de la bio. */
  trajectory?: FounderTrajectoryBlock[];
}

export interface FounderTrajectoryBlock {
  title: string;
  items: { period: string; text: string }[];
}

export interface EquipoPageContent {
  header: PageHeaderContent;
  intro: string;
  founder: EquipoFounder;
  rosterTitle: string;
  rosterNote: string;
  groups: TeamGroup[];
}

export interface PressItem {
  title: string;
  outlet: string;
  date: string;
  href: string;
  kind: "nota" | "video";
}

export interface PrensaPageContent {
  header: PageHeaderContent;
  intro: string;
  items: PressItem[];
}
