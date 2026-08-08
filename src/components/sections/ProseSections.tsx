import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import type { ProseSection } from "@/types/common";

export default function ProseSections({ sections }: { sections: ProseSection[] }) {
  return (
    <div className="mt-10 flex flex-col gap-8">
      {sections.map((section, index) => (
        <Reveal key={section.title} delay={index * 80}>
          <div className="border-l-2 border-piel-blue-soft pl-5">
            <h2 className="text-2xl font-bold text-piel-navy sm:text-3xl">{section.title}</h2>
            <p className="mt-2 text-piel-text/80">
              <RichText text={section.body} />
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
