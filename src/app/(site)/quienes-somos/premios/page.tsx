import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import EmptyState from "@/components/ui/EmptyState";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import SectionHeading from "@/components/ui/SectionHeading";
import { premiosContent } from "@/lib/content/quienes-somos";
import { getAwards } from "@/lib/admin/store";

export const metadata: Metadata = {
  title: premiosContent.header.title,
  description: premiosContent.header.subtitle,
};

// Los premios se editan desde /panel.
export const dynamic = "force-dynamic";

export default async function PremiosPage() {
  const awards = await getAwards();
  const { scientific } = premiosContent;

  return (
    <>
      <PageHeader {...premiosContent.header} />

      <PageBody>
        {awards.length === 0 ? (
          <EmptyState message="Próximamente vamos a compartir los reconocimientos institucionales de PIEL." />
        ) : (
          /* auto-rows-fr + h-full: todas las cajas quedan del mismo tamaño en toda la
             grilla —no solo dentro de cada fila—, sin importar cuánto texto tenga
             cada premio (pedido de PIEL). */
          <ul className="grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <li key={award.id} className="flex">
                <Reveal delay={(index % 3) * 80} className="flex w-full">
                  <Card className="flex h-full w-full flex-col">
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

        {/* Premios científicos: misma tarjeta y misma grilla que los institucionales. */}
        {scientific && scientific.awards.length > 0 && (
          <section className="mt-20">
            <SectionHeading title={scientific.title} accent />
            {scientific.intro && (
              <Reveal>
                <p className="mt-6 max-w-3xl text-piel-text/80">
                  <RichText text={scientific.intro} />
                </p>
              </Reveal>
            )}
            <ul className="mt-10 grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {scientific.awards.map((award, index) => (
                <li key={`${award.year}-${index}`} className="flex">
                  <Reveal delay={(index % 3) * 80} className="flex w-full">
                    <Card className="flex h-full w-full flex-col">
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
          </section>
        )}
      </PageBody>
    </>
  );
}
