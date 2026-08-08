import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/sections/Timeline";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { historiaContent } from "@/lib/content/quienes-somos";

export const metadata: Metadata = {
  title: historiaContent.header.title,
  description: historiaContent.header.subtitle,
};

export default function HistoriaPage() {
  const { header, intro, milestonesTitle, milestones } = historiaContent;

  return (
    <>
      <PageHeader {...header} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={milestonesTitle} align="center" />
        <div className="mt-12">
          <Timeline events={milestones} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal className="space-y-4 text-piel-text/80">
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>
              <RichText text={paragraph} />
            </p>
          ))}
        </Reveal>
      </section>
    </>
  );
}
