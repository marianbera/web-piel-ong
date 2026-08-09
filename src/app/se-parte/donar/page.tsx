import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import DonationForm from "@/components/sections/DonationForm";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { donarContent } from "@/lib/content/donar";

export const metadata: Metadata = {
  title: donarContent.header.title,
  description: donarContent.header.subtitle,
};

export default function DonarPage() {
  const { header, intro, paragraphs, amountOptions } = donarContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal className="space-y-4">
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
          {paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-piel-text/75">
              <RichText text={paragraph} />
            </p>
          ))}
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <DonationForm amountOptions={amountOptions} type="individual" submitLabel="Donar ahora" />
        </Reveal>
      </PageBody>
    </>
  );
}
