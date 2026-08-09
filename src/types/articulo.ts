import type { PageHeaderContent } from "@/types/common";
import type { ContentImage } from "@/lib/content/imagenes";
import type { CtaLink } from "@/types/site";

/** Sub-ítem de una sección: un subtítulo corto con su párrafo. */
export interface ArticleItem {
  title: string;
  text: string;
}

export interface ArticleSection {
  /** Ancla de la sección (`#id`). */
  id: string;
  title: string;
  paragraphs?: string[];
  items?: ArticleItem[];
  /** Imágenes que van después de la sección. */
  images?: ContentImage[];
}

/**
 * Bloque temático del artículo. Agrupa varias secciones y define el ritmo visual:
 * los capítulos alternan superficie (blanco / offwhite) y se separan con una
 * franja de marca.
 */
export interface ArticleChapter {
  id: string;
  /** Etiqueta corta sobre el título del capítulo. */
  eyebrow: string;
  title: string;
  sections: ArticleSection[];
}

/** Página de recorrido largo tipo artículo. */
export interface ArticlePageContent {
  header: PageHeaderContent;
  intro: string[];
  chapters: ArticleChapter[];
  closing: {
    title: string;
    text: string;
    /** `external` abre en pestaña nueva (WhatsApp). */
    ctas: (CtaLink & { external?: boolean })[];
  };
}
