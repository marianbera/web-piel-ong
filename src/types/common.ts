export interface PageHeaderContent {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** Foto de fondo del hero. Sin ella, se muestra el BrandPanel (placeholder de marca). */
  image?: { src: string; alt: string; position?: string };
}

export interface SectionLink {
  title: string;
  description: string;
  href: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface ProseSection {
  title: string;
  body: string;
}

export interface ProsePageContent {
  header: PageHeaderContent;
  intro: string;
  sections: ProseSection[];
}
