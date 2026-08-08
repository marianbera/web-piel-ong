import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {items.length === 0 ? (
          <EmptyState message="Próximamente vamos a compartir las notas y menciones de PIEL en los medios." />
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
      </section>
    </>
  );
}
