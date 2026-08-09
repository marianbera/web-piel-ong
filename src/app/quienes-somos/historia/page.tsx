import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
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

      <PageBody>
        <SectionHeading title={milestonesTitle} align="center" />
        <div className="mt-12">
          <Timeline events={milestones} />
        </div>
      </PageBody>

      <PageBody tone="offwhite" intensity="subtle">
        <Reveal className="space-y-4 text-piel-text/80">
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>
              <RichText text={paragraph} />
            </p>
          ))}
        </Reveal>
      </PageBody>
    </>
  );
}
