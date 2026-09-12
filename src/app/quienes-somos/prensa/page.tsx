import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import EmptyState from "@/components/ui/EmptyState";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { prensaContent } from "@/lib/content/quienes-somos";
import { getPressItems } from "@/lib/admin/store";

export const metadata: Metadata = {
  title: "Prensa",
  description: prensaContent.header.subtitle,
};

// Las notas y videos se cargan desde /panel.
export const dynamic = "force-dynamic";

export default async function PrensaPage() {
  const { header, intro } = prensaContent;
  const items = await getPressItems();

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="max-w-3xl text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {items.length === 0 ? (
          <>
            {/* TODO(PIEL): cargar las notas y videos desde /panel → Prensa. */}
            <EmptyState message="Próximamente vamos a compartir las notas y menciones de PIEL en los medios." />
            <Reveal>
              <p className="mt-8 max-w-3xl text-piel-text/75">
                ¿Sos periodista y querés hacer una nota sobre PIEL? Escribinos y te ponemos en
                contacto con el equipo.
              </p>
              <Link
                href="/contacto"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
              >
                Contacto de prensa
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <li key={item.id} className="flex">
                <Reveal delay={(index % 2) * 80} className="flex w-full">
                  <Card
                    as="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    hoverable
                    className="flex h-full w-full flex-col"
                  >
                    <span className="flex flex-wrap items-center gap-2 text-sm text-piel-text/70">
                      {item.kind === "video" && (
                        <span className="rounded-full bg-piel-burgundy px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-white">
                          Video
                        </span>
                      )}
                      {item.outlet}
                      {item.date && ` · ${item.date}`}
                    </span>
                    <h2 className="mt-2 text-lg font-semibold text-piel-navy">{item.title}</h2>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </PageBody>
    </>
  );
}
