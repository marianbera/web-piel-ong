import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import TextImageSplit from "@/components/sections/TextImageSplit";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { AllInOneIcon } from "@/components/ui/icons";
import { enfoqueContent } from "@/lib/content/tratamiento";

export const metadata: Metadata = {
  title: enfoqueContent.header.title,
  description: enfoqueContent.header.subtitle,
};

export default function EnfoquePage() {
  const { header, intro, highlights } = enfoqueContent;

  return (
    <>
      <PageHeader {...header} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <TextImageSplit body={intro} align="start" panelIcon={AllInOneIcon} />
      </section>

      <section className="bg-piel-periwinkle/25 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={index * 80}>
                <Card padding="lg">
                  <span aria-hidden className="bg-piel-gradient-navy block h-1.5 w-12 rounded-full" />
                  <h3 className="mt-5 text-xl font-semibold text-piel-navy">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-piel-text/70">
                    <RichText text={highlight.text} />
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
