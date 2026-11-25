import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import ProseSections from "@/components/sections/ProseSections";
import ImageSlot from "@/components/ui/ImageSlot";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { SupportIcon } from "@/components/ui/icons";
import { acompanamientoContent } from "@/lib/content/pacientes";
import {
  acompanamientoImage,
  clubDeLaFamiliaImage,
  imageSrc,
} from "@/lib/content/pacientesImagenes";

export const metadata: Metadata = {
  title: "Acompañamiento emocional y social",
  description: acompanamientoContent.header.subtitle,
};

export default function AcompanamientoPage() {
  const { header, intro, sections } = acompanamientoContent;

  // Las fotos cortan la prosa: es la página más emocional del sitio y era la que peor
  // aguantaba el texto corrido. La del consultorio (escena de Psicología) va después de
  // la primera sección, y la del Club de la Familia, después de la sección del Club.
  // Si el Club no está, se vuelve al corte por la mitad con una sola foto.
  const clubIndex = sections.findIndex((section) => /club/i.test(section.title));
  const cut = clubIndex > 0 ? clubIndex : Math.ceil(sections.length / 2);
  const afterClub = clubIndex > 0 ? clubIndex + 1 : cut;

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

        <ImageSlot
          src={imageSrc(acompanamientoImage)}
          alt={acompanamientoImage.alt}
          caption={acompanamientoImage.caption}
          aspect="21/9"
          sizes="100vw"
          icon={SupportIcon}
          className="mt-14"
        />

        {clubIndex > 0 && (
          <>
            <ProseSections sections={sections.slice(cut, afterClub)} />
            <ImageSlot
              src={imageSrc(clubDeLaFamiliaImage)}
              alt={clubDeLaFamiliaImage.alt}
              caption={clubDeLaFamiliaImage.caption}
              aspect="16/9"
              position={clubDeLaFamiliaImage.position}
              sizes="100vw"
              icon={SupportIcon}
              className="mt-10"
            />
          </>
        )}

        <ProseSections sections={sections.slice(afterClub)} />
      </PageBody>
    </>
  );
}
