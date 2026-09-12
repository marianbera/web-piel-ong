import { head, put } from "@vercel/blob";
import { equipoContent, premiosContent } from "@/lib/content/quienes-somos";
import { obrasSocialesContent } from "@/lib/content/como-acceder";
import type {
  AdminAward,
  AdminCoverage,
  AdminLogo,
  AdminPressItem,
  AdminStory,
  AdminTeamGroup,
  CollectionName,
} from "@/lib/admin/types";

/**
 * Almacenamiento del contenido editable desde `/panel`.
 *
 * El sitio corre en **Vercel**, cuyo filesystem es de solo lectura: no se puede
 * guardar nada en disco. Por eso cada colección es un JSON en **Vercel Blob**.
 *
 * Si el blob todavía no existe (nadie guardó nunca esa sección), se devuelve la
 * semilla: el contenido que vive en `lib/content/*`. Así el sitio funciona igual
 * sin haber tocado el panel, y el panel abre con los datos reales cargados en vez
 * de en blanco.
 *
 * Requiere la variable `BLOB_READ_WRITE_TOKEN`, que Vercel inyecta sola al crear
 * el Blob Store en el proyecto. Sin ella, la lectura cae a las semillas (el sitio
 * se ve bien) y el guardado devuelve un error explicando qué falta.
 */

/** Ruta del JSON de cada colección dentro del store. */
const blobPath = (name: CollectionName) => `contenido/${name}.json`;

export function isStoreConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function read<T>(name: CollectionName, seed: T): Promise<T> {
  if (!isStoreConfigured()) return seed;

  try {
    // `head` siempre pega contra la API (no pasa por el CDN), así que devuelve
    // metadata fresca. Con `uploadedAt` como query rompemos el caché del CDN:
    // el contenido del blob se cachea mínimo 60 s y si no, el panel guardaría y
    // la página seguiría mostrando lo viejo durante un minuto.
    const meta = await head(blobPath(name));
    const response = await fetch(`${meta.url}?v=${meta.uploadedAt.getTime()}`, {
      cache: "no-store",
    });
    if (!response.ok) return seed;
    return (await response.json()) as T;
  } catch {
    // Blob inexistente todavía, o JSON ilegible: se usa la semilla del código.
    return seed;
  }
}

export async function write<T>(name: CollectionName, data: T): Promise<void> {
  if (!isStoreConfigured()) {
    throw new Error(
      "Falta configurar el almacenamiento. En Vercel: pestaña Storage → crear un Blob Store y conectarlo a este proyecto."
    );
  }

  await put(blobPath(name), `${JSON.stringify(data, null, 2)}\n`, {
    access: "public",
    contentType: "application/json",
    // Pathname fijo: cada guardado pisa al anterior en la misma ruta.
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

/* ── Semillas: el contenido que ya vive en el código ──────────────────────── */

function idFrom(text: string, index: number) {
  const slug = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug || "item"}-${index}`;
}

const seedEquipo: AdminTeamGroup[] = equipoContent.groups.map((group, g) => ({
  id: idFrom(group.title, g),
  title: group.title,
  description: group.description,
  members: group.members.map((member, m) => ({
    id: idFrom(member.name, m),
    name: member.name,
    role: member.role,
    photo: member.photo,
  })),
}));

const seedPremios: AdminAward[] = premiosContent.awards.map((award, i) => ({
  id: idFrom(award.year, i),
  year: award.year,
  text: award.text,
}));

const seedCoberturas: AdminCoverage[] = (obrasSocialesContent.coverages ?? []).map((name, i) => ({
  id: idFrom(name, i),
  name,
}));

/* ── Lectores usados por las páginas públicas ─────────────────────────────── */

export const getTeamGroups = () => read<AdminTeamGroup[]>("equipo", seedEquipo);
export const getPressItems = () => read<AdminPressItem[]>("prensa", []);
export const getStories = () => read<AdminStory[]>("historias", []);
export const getLogos = () => read<AdminLogo[]>("logos", []);
export const getAwards = () => read<AdminAward[]>("premios", seedPremios);
export const getCoverages = () => read<AdminCoverage[]>("obras-sociales", seedCoberturas);

/** Lector genérico por nombre, para el panel. */
export async function getCollection(name: CollectionName) {
  switch (name) {
    case "equipo":
      return getTeamGroups();
    case "prensa":
      return getPressItems();
    case "historias":
      return getStories();
    case "logos":
      return getLogos();
    case "premios":
      return getAwards();
    case "obras-sociales":
      return getCoverages();
  }
}
