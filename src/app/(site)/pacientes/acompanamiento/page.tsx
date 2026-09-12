import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import ProseSections from "@/components/sections/ProseSections";
import ImageSlot from "@/components/ui/ImageSlot";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { SupportIcon } from "@/components/ui/icons";
import { acompanamientoContent } from "@/lib/content/pacientes";
import { acompanamientoImage, imageSrc } from "@/lib/content/pacientesImagenes";

export const metadata: Metadata = {
  title: "Acompañamiento emocional y social",
  description: acompanamientoContent.header.subtitle,
};

export default function AcompanamientoPage() {
  const { header, intro, sections } = acompanamientoContent;

  // La imagen destacada corta la prosa por la mitad: es la página más emocional
  // del sitio y era la que peor aguantaba el texto corrido.
  const cut = Math.ceil(sections.length / 2);

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        <ProseSections sections={sections.slice(0, cut)} />

        {/* TODO(PIEL): falta la foto destacada (un niño o una familia). */}
        <ImageSlot
          src={imageSrc(acompanamientoImage)}
          alt={acompanamientoImage.alt}
          caption={acompanamientoImage.caption}
          aspect="21/9"
          sizes="100vw"
          icon={SupportIcon}
          className="mt-14"
        />

        <ProseSections sections={sections.slice(cut)} />
      </PageBody>
    </>
  );
}
