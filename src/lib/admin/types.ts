/** Contenido editable desde el panel de administración (`/panel`). */

export interface AdminTeamMember {
  id: string;
  name: string;
  role: string;
  /** Ruta de la foto en `public/`. Vacío = se muestran las iniciales. */
  photo?: string;
}

export interface AdminTeamGroup {
  id: string;
  title: string;
  description: string;
  members: AdminTeamMember[];
}

export interface AdminPressItem {
  id: string;
  title: string;
  outlet: string;
  date: string;
  href: string;
  /** "nota" abre el link; "video" además lo marca visualmente como audiovisual. */
  kind: "nota" | "video";
}

export interface AdminStory {
  id: string;
  name: string;
  text: string;
  photo?: string;
}

export interface AdminLogo {
  id: string;
  name: string;
  image: string;
  href?: string;
  /** Dónde se muestra: colaboradores (Nosotros) o empresas (Sé parte). */
  scope: "colaboradores" | "empresas";
}

export interface AdminAward {
  id: string;
  year: string;
  text: string;
}

export interface AdminCoverage {
  id: string;
  name: string;
}

/** Nombre de cada colección editable. Es también el nombre del archivo JSON. */
export const COLLECTIONS = [
  "equipo",
  "prensa",
  "historias",
  "logos",
  "premios",
  "obras-sociales",
] as const;

export type CollectionName = (typeof COLLECTIONS)[number];
