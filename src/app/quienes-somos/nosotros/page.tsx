import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import EmptyState from "@/components/ui/EmptyState";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import TextImageSplit from "@/components/sections/TextImageSplit";
import { ScaleIcon, ShieldIcon, StarIcon, SupportIcon, TeamIcon } from "@/components/ui/icons";
import { nosotrosContent } from "@/lib/content/nosotros";
import type { ValueIcon } from "@/types/about";

export const metadata: Metadata = {
  title: nosotrosContent.header.title,
  description: nosotrosContent.header.subtitle,
};

const iconMap: Record<ValueIcon, typeof ShieldIcon> = {
  shield: ShieldIcon,
  star: StarIcon,
  heart: SupportIcon,
  team: TeamIcon,
  scale: ScaleIcon,
};

export default function NosotrosPage() {
  const { header, intro, vision, mission, valuesTitle, values } = nosotrosContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody padding="lg">
        <TextImageSplit body={intro} reverse align="start" />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-piel-navy sm:text-3xl">{vision.title}</h2>
              <p className="mt-4 text-piel-text/80">
                <RichText text={vision.text} />
              </p>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-piel-navy sm:text-3xl">{mission.title}</h2>
              <p className="mt-4 text-piel-text/80">
                <RichText text={mission.text} />
              </p>
            </Card>
          </Reveal>
        </div>
      </PageBody>

      <PageBody tone="offwhite" intensity="subtle">
        <SectionHeading title={valuesTitle} align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <Reveal key={value.title} delay={index * 80}>
                <Card className="flex flex-col items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-piel-blue-soft/30 text-piel-navy">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-piel-navy">{value.title}</h3>
                  <p className="mt-2 text-sm text-piel-text/75">
                    <RichText text={value.text} />
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </PageBody>

      <PageBody padding="none" decor={false} className="pb-20 pt-16">
        <SectionHeading title="Colaboran con nosotros" align="center" />
        {/* TODO(PIEL): agregar los logos de las organizaciones que colaboran con PIEL (pendiente de entrega). */}
        <EmptyState message="Próximamente: las organizaciones que acompañan y colaboran con Asociación PIEL." />
      </PageBody>
    </>
  );
}
