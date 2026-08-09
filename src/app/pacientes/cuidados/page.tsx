import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import StepsList from "@/components/sections/StepsList";
import ImageSlot from "@/components/ui/ImageSlot";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { cuidadosContent } from "@/lib/content/pacientes";
import { cuidadosImages, imageSrc } from "@/lib/content/pacientesImagenes";

export const metadata: Metadata = {
  title: "Cuidados a tener en cuenta",
  description: cuidadosContent.header.subtitle,
};

export default function CuidadosPage() {
  const { header, intro, tips } = cuidadosContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {/* Dos imágenes de apoyo entre la intro y la lista de pautas, para que la
            página no arranque con siete cards de texto. TODO(PIEL): faltan. */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cuidadosImages.map((image, index) => (
            <ImageSlot
              key={image.src}
              src={imageSrc(image)}
              alt={image.alt}
              caption={image.caption}
              aspect="3/2"
              sizes="(min-width: 1024px) 40vw, 100vw"
              delay={index * 100}
            />
          ))}
        </div>

        <StepsList steps={tips} numbered={false} />
      </PageBody>
    </>
  );
}
