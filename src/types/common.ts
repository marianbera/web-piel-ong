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

/**
 * Bloque anunciado pero todavía sin contenido. El título viene del diagrama del
 * cliente; `hint` describe qué va a ir ahí, sin inventar el contenido en sí.
 */
export interface PendingBlock {
  title: string;
  hint: string;
}

/**
 * Página estructurada pero incompleta: se sabe qué secciones va a tener (por el
 * diagrama del cliente) pero PIEL todavía no entregó el texto. Se publica la
 * estructura, no contenido inventado.
 */
export interface DraftPageContent {
  header: PageHeaderContent;
  intro: string;
  /** Secciones reales. Vacío hasta que llegue el contenido. */
  sections: ProseSection[];
  /** Estructura anunciada, en estado "en preparación". */
  pending: PendingBlock[];
  /** Cierre con la vía de contacto mientras tanto. */
  note?: string;
}
