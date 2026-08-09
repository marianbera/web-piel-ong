import type { SearchEntry } from "@/lib/search/searchIndex";

/** Minúsculas y sin acentos: "alimentacion" tiene que encontrar "Alimentación". */
export function normalize(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export interface SearchResult extends SearchEntry {
  /** Término del contenido que produjo el match, para mostrarlo como contexto. */
  matchedKeyword?: string;
}

/** Puntaje de un token contra una entrada. 0 = no matchea. */
function scoreToken(
  token: string,
  fields: { title: string; description: string; block: string; keywords: string[] }
): { score: number; keywordIndex?: number } {
  if (fields.title.startsWith(token)) return { score: 100 };
  if (fields.title.includes(token)) return { score: 70 };

  const startsAt = fields.keywords.findIndex((keyword) => keyword.startsWith(token));
  if (startsAt !== -1) return { score: 45, keywordIndex: startsAt };

  const includesAt = fields.keywords.findIndex((keyword) => keyword.includes(token));
  if (includesAt !== -1) return { score: 30, keywordIndex: includesAt };

  if (fields.description.includes(token)) return { score: 20 };
  if (fields.block.includes(token)) return { score: 10 };
  return { score: 0 };
}

/**
 * Búsqueda del lado del cliente sobre el índice del sitio.
 * Todos los términos de la consulta tienen que matchear (AND), así escribir
 * "cirugia labio" no devuelve media web.
 */
export function searchEntries(index: SearchEntry[], query: string, limit = 7): SearchResult[] {
  const normalizedQuery = normalize(query).trim();
  if (normalizedQuery.length < 2) return [];

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const results: { entry: SearchEntry; score: number; keywordIndex?: number }[] = [];

  for (const entry of index) {
    const fields = {
      title: normalize(entry.title),
      description: normalize(entry.description),
      block: normalize(entry.block),
      keywords: entry.keywords.map(normalize),
    };

    let total = 0;
    let keywordIndex: number | undefined;
    let matchedAll = true;

    for (const token of tokens) {
      const { score, keywordIndex: hit } = scoreToken(token, fields);
      if (score === 0) {
        matchedAll = false;
        break;
      }
      total += score;
      if (keywordIndex === undefined) keywordIndex = hit;
    }

    if (matchedAll) results.push({ entry, score: total, keywordIndex });
  }

  return results
    .sort((a, b) => b.score - a.score || a.entry.title.length - b.entry.title.length)
    .slice(0, limit)
    .map(({ entry, keywordIndex }) => ({
      ...entry,
      matchedKeyword: keywordIndex === undefined ? undefined : entry.keywords[keywordIndex],
    }));
}
