import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import EmptyState from "@/components/ui/EmptyState";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { prensaContent } from "@/lib/content/quienes-somos";

export const metadata: Metadata = {
  title: "Prensa",
  description: prensaContent.header.subtitle,
};

export default function PrensaPage() {
  const { header, intro, items } = prensaContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {items.length === 0 ? (
          // TODO(PIEL): sin notas entregadas (doc 2.5). No inventar.
          <>
            <EmptyState message="Próximamente vamos a compartir las notas y menciones de PIEL en los medios." />
            <Reveal>
              <p className="mt-8 text-piel-text/75">
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
          <div className="mt-10 flex flex-col gap-4">
            {items.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <Card
                  as="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  hoverable
                  className="block"
                >
                  <span className="text-sm font-medium text-piel-text/70">
                    {item.outlet} · {item.date}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-piel-navy">{item.title}</h3>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </PageBody>
    </>
  );
}
