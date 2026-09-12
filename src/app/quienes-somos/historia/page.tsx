import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { historiaContent } from "@/lib/content/quienes-somos";

export const metadata: Metadata = {
  title: historiaContent.header.title,
  description: historiaContent.header.subtitle,
};

export default function HistoriaPage() {
  const { header, intro } = historiaContent;

  return (
    <>
      <PageHeader {...header} />

      {/* Los "hitos" (timeline) se eliminaron a pedido de PIEL: repetían lo que ya
          cuenta el relato de abajo. */}
      <PageBody padding="lg">
        <Reveal className="max-w-3xl space-y-5 text-lg leading-relaxed text-piel-text/80">
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
