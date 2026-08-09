import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import EmptyState from "@/components/ui/EmptyState";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { TeamGroups } from "@/components/sections/TeamCarousel";
import { equipoContent } from "@/lib/content/quienes-somos";

export const metadata: Metadata = {
  title: equipoContent.header.title,
  description: equipoContent.header.subtitle,
};

export default function EquipoPage() {
  const {
    header,
    intro,
    founder,
    directionTitle,
    directionNote,
    rosterTitle,
    rosterNote,
    groups,
  } = equipoContent;

  const initials = founder.name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("");

  return (
    <>
      <PageHeader {...header} />

      <PageBody padding="lg">
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {/* Fundador */}
        <Reveal delay={100} className="mt-12">
          <Card
            tone="offwhite"
            radius="brand"
            padding="lg"
            className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10"
          >
            {/* TODO(PIEL): reemplazar por la foto real del fundador cuando esté disponible. */}
            <div className="bg-piel-gradient-navy mx-auto flex h-32 w-32 items-center justify-center rounded-full text-4xl font-semibold text-white shadow-md lg:h-40 lg:w-40">
              {initials}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy">
                {founder.role}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-piel-navy sm:text-4xl">{founder.name}</h2>
              <p className="mt-4 text-piel-text/75">
                <RichText text={founder.bio} />
              </p>
              {founder.cta && (
                <Link
                  href={founder.cta.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
                >
                  {founder.cta.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
            </div>
          </Card>
        </Reveal>

        {/* Dirección médica y cirujanos principales */}
        <div className="mt-16">
          <SectionHeading title={directionTitle} />
          <Reveal>
            <p className="mt-4 text-piel-text/75">
              <RichText text={directionNote} />
            </p>
          </Reveal>
          <EmptyState message="Próximamente: los perfiles de los cirujanos principales del equipo." />
        </div>
      </PageBody>

      {/* Equipo médico, agrupado por área */}
      <PageBody tone="offwhite" intensity="subtle" padding="lg">
        <SectionHeading eyebrow="Equipo interdisciplinario" title={rosterTitle} accent />
        <TeamGroups groups={groups} note={rosterNote} />
      </PageBody>
    </>
  );
}
