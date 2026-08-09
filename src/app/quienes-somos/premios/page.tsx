import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import EmptyState from "@/components/ui/EmptyState";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { premiosContent } from "@/lib/content/quienes-somos";

export const metadata: Metadata = {
  title: premiosContent.header.title,
  description: premiosContent.header.subtitle,
};

export default function PremiosPage() {
  const { header, awards } = premiosContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        {awards.length === 0 ? (
          <EmptyState message="Próximamente vamos a compartir los reconocimientos institucionales de PIEL." />
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <li key={`${award.year}::${award.text}`}>
                <Reveal delay={(index % 3) * 80}>
                  <Card>
                    <span className="text-sm font-bold uppercase tracking-wide text-piel-burgundy">
                      {award.year}
                    </span>
                    <p className="mt-2 text-sm text-piel-text/80">
                      <RichText text={award.text} />
                    </p>
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
