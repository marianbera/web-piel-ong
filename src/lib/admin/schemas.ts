import type { CollectionName } from "@/lib/admin/types";

export interface FieldSchema {
  key: string;
  label: string;
  type: "text" | "textarea" | "url" | "image" | "select";
  placeholder?: string;
  help?: string;
  options?: { value: string; label: string }[];
  optional?: boolean;
}

export interface CollectionSchema {
  title: string;
  description: string;
  /** Texto del botón de alta. */
  addLabel: string;
  /** Campo que se usa como título de cada fila en la lista. */
  titleKey: string;
  fields: FieldSchema[];
}

/**
 * Qué se puede editar desde el panel y con qué campos. Es deliberadamente corto:
 * solo lo que cambia con el tiempo. Los textos institucionales (qué es PIEL, el
 * enfoque, las páginas de contenido) siguen viviendo en el código.
 */
export const SCHEMAS: Record<Exclude<CollectionName, "equipo">, CollectionSchema> = {
  prensa: {
    title: "Prensa",
    description: "Notas y videos sobre PIEL publicados en medios.",
    addLabel: "Agregar nota o video",
    titleKey: "title",
    fields: [
      { key: "title", label: "Título", type: "text", placeholder: "Título de la nota" },
      { key: "outlet", label: "Medio", type: "text", placeholder: "Clarín, TN, La Nación…" },
      { key: "date", label: "Fecha", type: "text", placeholder: "Marzo 2024" },
      { key: "href", label: "Link", type: "url", placeholder: "https://…" },
      {
        key: "kind",
        label: "Tipo",
        type: "select",
        options: [
          { value: "nota", label: "Nota escrita" },
          { value: "video", label: "Video" },
        ],
      },
    ],
  },

  historias: {
    title: "Historias reales",
    description: "Testimonios de familias que pasaron por PIEL.",
    addLabel: "Agregar historia",
    titleKey: "name",
    fields: [
      { key: "name", label: "Nombre", type: "text", placeholder: "Familia Gómez · Martina" },
      { key: "text", label: "Historia", type: "textarea", placeholder: "El relato de la familia…" },
      {
        key: "photo",
        label: "Foto",
        type: "image",
        optional: true,
        help: "Opcional. Hace falta autorización de uso de imagen de la familia.",
      },
    ],
  },

  logos: {
    title: "Logos",
    description: "Organizaciones que colaboran y empresas que acompañan a PIEL.",
    addLabel: "Agregar logo",
    titleKey: "name",
    fields: [
      { key: "name", label: "Nombre", type: "text", placeholder: "Nombre de la organización" },
      {
        key: "image",
        label: "Logo",
        type: "image",
        help: "Preferentemente PNG con fondo transparente.",
      },
      { key: "href", label: "Sitio web", type: "url", optional: true, placeholder: "https://…" },
      {
        key: "scope",
        label: "Dónde se muestra",
        type: "select",
        options: [
          { value: "colaboradores", label: "Colaboran con nosotros (Nosotros)" },
          { value: "empresas", label: "Empresas que nos acompañan (Sé parte)" },
        ],
      },
    ],
  },

  premios: {
    title: "Premios y reconocimientos",
    description: "Se listan del más nuevo al más antiguo según el orden de esta lista.",
    addLabel: "Agregar premio",
    titleKey: "year",
    fields: [
      { key: "year", label: "Año", type: "text", placeholder: "2024 · 2002 – actualidad" },
      {
        key: "text",
        label: "Descripción",
        type: "textarea",
        help: "Lo que va entre **dos asteriscos** se muestra en negrita.",
      },
    ],
  },

  "obras-sociales": {
    title: "Obras sociales y cobertura",
    description: "Las coberturas con las que PIEL trabaja actualmente.",
    addLabel: "Agregar cobertura",
    titleKey: "name",
    fields: [{ key: "name", label: "Nombre", type: "text", placeholder: "OSDE, OMINT…" }],
  },
};
