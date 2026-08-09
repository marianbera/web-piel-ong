import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import type { PendingBlock } from "@/types/common";

interface PendingSectionsProps {
  blocks: PendingBlock[];
  note?: string;
  /** Destino del CTA de cierre mientras la sección no esté publicada. */
  cta?: { label: string; href: string };
}

/**
 * Estructura anunciada de una página que todavía no tiene contenido.
 *
 * En vez de un único `EmptyState` genérico ("próximamente"), muestra **qué
 * secciones va a tener** la página según el diagrama del cliente, cada una en
 * estado "en preparación". El visitante entiende qué se está preparando y le
 * queda una vía de contacto; PIEL ve exactamente qué texto tiene que entregar.
 *
 * TODO(PIEL): reemplazar cada bloque por su contenido real cuando esté.
 */
export default function PendingSections({ blocks, note, cta }: PendingSectionsProps) {
  return (
    <div className="mt-10">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block, index) => (
          <li key={block.title}>
            <Reveal delay={index * 80}>
              <div className="flex h-full flex-col rounded-3xl border border-dashed border-piel-navy/20 bg-piel-offwhite p-6">
                <span className="w-fit rounded-full bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-piel-text/55">
                  En preparación
                </span>
                <h3 className="mt-4 text-lg font-semibold text-piel-navy">{block.title}</h3>
                <p className="mt-2 text-sm text-piel-text/70">{block.hint}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {note && (
        <Reveal delay={blocks.length * 80}>
          <p className="mt-10 text-piel-text/75">
            <RichText text={note} />
          </p>
        </Reveal>
      )}

      {cta && (
        <Reveal delay={blocks.length * 80 + 60}>
          <Link
            href={cta.href}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
          >
            {cta.label}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      )}
    </div>
  );
}
