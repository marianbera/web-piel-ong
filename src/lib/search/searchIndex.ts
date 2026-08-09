import { comoAccederHub, accesoContent, argentinaContent, consultasContent, internacionalContent, obrasSocialesContent } from "@/lib/content/como-acceder";
import { apadrinarContent } from "@/lib/content/apadrinar";
import { contactoContent } from "@/lib/content/contacto";
import { donarContent } from "@/lib/content/donar";
import { especialidadesContent } from "@/lib/content/especialidades";
import { labioLeporinoContent } from "@/lib/content/labio-leporino";
import { nosotrosContent } from "@/lib/content/nosotros";
import {
  acompanamientoContent,
  alimentacionContent,
  cuidadosContent,
  desarrolloContent,
  faqContent,
  guiasContent,
  pacientesHub,
  queEsFisuraContent,
} from "@/lib/content/pacientes";
import {
  equipoContent,
  historiaContent,
  premiosContent,
  prensaContent,
  quienesSomosHub,
} from "@/lib/content/quienes-somos";
import { empresasContent, sePartHub } from "@/lib/content/se-parte";
import {
  enfoqueContent,
  investigacionContent,
  otrasAreasContent,
  tratamientoHub,
} from "@/lib/content/tratamiento";
import type { PageHeaderContent } from "@/types/common";

export interface SearchEntry {
  title: string;
  href: string;
  /** Etiqueta corta del bloque, para el badge del resultado. */
  block: string;
  description: string;
  /** Términos del contenido de la página: es lo que hace que "turnos" o "cirugía" encuentren algo. */
  keywords: string[];
}

/** Quita los marcadores de negrita del formato RichText del sitio. */
const plain = (text: string) => text.replace(/\*\*/g, "").trim();

const BLOCK = {
  centro: "Centro Médico",
  tratamiento: "Tratamiento Integral",
  pacientes: "Pacientes y familias",
  acceder: "Cómo acceder",
  seParte: "Sé parte",
  sitio: "Sitio",
} as const;

function entry(
  block: string,
  href: string,
  header: PageHeaderContent,
  keywords: (string | undefined)[]
): SearchEntry {
  return {
    title: header.title,
    href,
    block,
    description: plain(header.subtitle ?? ""),
    keywords: keywords.filter((k): k is string => Boolean(k)).map(plain),
  };
}

/**
 * Índice de búsqueda del sitio, armado a partir de los mismos archivos de
 * contenido que renderizan las páginas — así no se desincroniza.
 *
 * Se construye en el servidor y viaja al cliente ya reducido (título, ruta,
 * bloque, descripción y términos), no los textos completos: el bundle del
 * navegador no carga los módulos de contenido.
 */
export function buildSearchIndex(): SearchEntry[] {
  return [
    // ── Centro Médico ──────────────────────────────────────────────────────
    entry(BLOCK.centro, "/quienes-somos", quienesSomosHub.header, [
      ...quienesSomosHub.sections.map((s) => s.title),
      "institución",
      "trayectoria",
    ]),
    entry(BLOCK.centro, "/quienes-somos/nosotros", nosotrosContent.header, [
      nosotrosContent.vision.title,
      nosotrosContent.mission.title,
      ...nosotrosContent.values.map((v) => v.title),
      "valores",
    ]),
    entry(BLOCK.centro, "/quienes-somos/historia", historiaContent.header, [
      ...historiaContent.milestones.map((m) => m.title),
      "fundación",
      "Avellaneda",
      "personería jurídica",
      "1988",
    ]),
    entry(BLOCK.centro, "/quienes-somos/premios", premiosContent.header, [
      "reconocimientos",
      "distinciones",
      "Smile Train",
      "Abanderados de la Argentina Solidaria",
    ]),
    entry(BLOCK.centro, "/quienes-somos/equipo", equipoContent.header, [
      equipoContent.founder.name,
      equipoContent.founder.role,
      ...equipoContent.groups.flatMap((group) => [
        group.title,
        ...group.members.map((member) => member.role),
        ...group.members.map((member) => member.name),
      ]),
      "profesionales",
      "interdisciplinario",
    ]),
    entry(BLOCK.centro, "/quienes-somos/prensa", prensaContent.header, ["notas", "medios", "menciones"]),

    // ── Tratamiento Integral ───────────────────────────────────────────────
    entry(BLOCK.tratamiento, "/tratamiento", tratamientoHub.header, [
      ...tratamientoHub.sections.map((s) => s.title),
      "tratamiento integral",
    ]),
    entry(BLOCK.tratamiento, "/tratamiento/enfoque", enfoqueContent.header, [
      ...enfoqueContent.highlights.map((h) => h.title),
      "modo de trabajo",
      "diferencial",
    ]),
    entry(BLOCK.tratamiento, "/tratamiento/especialidades", especialidadesContent.header, [
      ...especialidadesContent.specialties.map((s) => s.title),
      "equipo interdisciplinario",
    ]),
    entry(BLOCK.tratamiento, "/tratamiento/otras-areas", otrasAreasContent.header, [
      ...otrasAreasContent.areas.map((a) => a.title),
      "cirugía plástica infantil",
    ]),
    entry(BLOCK.tratamiento, "/tratamiento/investigacion", investigacionContent.header, [
      ...investigacionContent.sections.map((s) => s.title),
      "academia",
      "publicaciones",
      "congresos",
      "Cátedra UBA",
    ]),

    // ── Información para pacientes y familias ──────────────────────────────
    entry(BLOCK.pacientes, "/labio-leporino", labioLeporinoContent.header, [
      ...labioLeporinoContent.chapters.flatMap((chapter) => [
        chapter.title,
        ...chapter.sections.map((section) => section.title),
      ]),
      "labio leporino",
      "fisura de paladar",
      "diagnóstico prenatal",
      "queiloplastía",
      "palatoplastía",
      "faringoplastia",
      "postoperatorio",
    ]),
    entry(BLOCK.pacientes, "/pacientes", pacientesHub.header, [
      ...pacientesHub.sections.map((s) => s.title),
      "familias",
    ]),
    entry(BLOCK.pacientes, "/pacientes/que-es-fisura", queEsFisuraContent.header, [
      ...queEsFisuraContent.sections.map((s) => s.title),
      "labio leporino",
      "fisura de paladar",
      "causas",
      "genética",
    ]),
    entry(BLOCK.pacientes, "/pacientes/cuidados", cuidadosContent.header, [
      ...cuidadosContent.tips.map((t) => t.title),
      "estimulación temprana",
      "placa obturatriz",
      "higiene",
    ]),
    entry(BLOCK.pacientes, "/pacientes/alimentacion", alimentacionContent.header, [
      ...alimentacionContent.tips.map((t) => t.title),
      "lactancia",
      "mamadera",
      "biberón",
      "papillas",
    ]),
    entry(BLOCK.pacientes, "/pacientes/acompanamiento", acompanamientoContent.header, [
      ...acompanamientoContent.sections.map((s) => s.title),
      "psicología",
      "club de padres",
      "contención",
    ]),
    entry(BLOCK.pacientes, "/pacientes/desarrollo", desarrolloContent.header, [
      ...desarrolloContent.sections.map((s) => s.title),
      "lenguaje",
      "escolaridad",
      "autonomía",
    ]),
    entry(BLOCK.pacientes, "/pacientes/faq", faqContent.header, [
      ...faqContent.faqs.map((f) => f.question),
      "cirugía",
      "postoperatorio",
      "puntos",
      "audición",
    ]),
    entry(BLOCK.pacientes, "/pacientes/guias", guiasContent.header, [
      ...guiasContent.resources.map((r) => r.title),
      "materiales",
      "descargas",
      "PDF",
    ]),

    // ── Cómo acceder ───────────────────────────────────────────────────────
    entry(BLOCK.acceder, "/como-acceder", comoAccederHub.header, [
      ...comoAccederHub.sections.map((s) => s.title),
    ]),
    entry(BLOCK.acceder, "/como-acceder/argentina", argentinaContent.header, [
      "pacientes de Argentina",
      "primera consulta",
    ]),
    entry(BLOCK.acceder, "/como-acceder/internacional", internacionalContent.header, [
      "pacientes internacionales",
      "exterior",
      "extranjero",
    ]),
    entry(BLOCK.acceder, "/como-acceder/obras-sociales", obrasSocialesContent.header, [
      ...(obrasSocialesContent.coverages ?? []),
      "cobertura",
      "prepaga",
    ]),
    entry(BLOCK.acceder, "/como-acceder/acceso", accesoContent.header, [
      "becas",
      "fondo cooperativo",
      "acceso al tratamiento",
    ]),
    entry(BLOCK.acceder, "/como-acceder/consultas", consultasContent.header, [
      "turnos",
      "sacar turno",
      "consultas",
      "agendar",
    ]),
    entry(
      BLOCK.acceder,
      "/como-acceder/medicos",
      { title: "Info para médicos", subtitle: "Derivaciones, materiales y protocolos para profesionales." },
      ["derivar un paciente", "protocolos", "profesionales de la salud"]
    ),

    // ── Sé parte ───────────────────────────────────────────────────────────
    entry(BLOCK.seParte, "/se-parte", sePartHub.header, [...sePartHub.sections.map((s) => s.title)]),
    entry(BLOCK.seParte, "/se-parte/donar", donarContent.header, [
      "donación",
      "donar online",
      "transferencia bancaria",
      "donación mensual",
    ]),
    entry(BLOCK.seParte, "/se-parte/apadrinar", apadrinarContent.header, [
      "apadrinamiento",
      "padrino",
      "apadrinar un tratamiento",
    ]),
    entry(BLOCK.seParte, "/se-parte/empresas", empresasContent.header, [
      ...(empresasContent.list ?? []).map((i) => i.title),
      "RSE",
      "responsabilidad social",
      "alianzas",
    ]),

    // ── Sitio ──────────────────────────────────────────────────────────────
    entry(BLOCK.sitio, "/contacto", contactoContent.header, [
      "teléfono",
      "email",
      "WhatsApp",
      "dirección",
      "escribinos",
    ]),
    entry(
      BLOCK.sitio,
      "/",
      { title: "Inicio", subtitle: "Asociación PIEL — tratamiento integral de fisuras labio-álveolo-palatinas." },
      ["home", "portada"]
    ),
  ];
}
