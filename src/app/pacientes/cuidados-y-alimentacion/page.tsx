import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import StepsList from "@/components/sections/StepsList";
import ImageSlot from "@/components/ui/ImageSlot";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { cuidadosYAlimentacionContent } from "@/lib/content/cuidados-y-alimentacion";
import { cuidadosImages, imageSrc } from "@/lib/content/pacientesImagenes";

export const metadata: Metadata = {
  title: "Cuidados y alimentación del bebé con labio leporino",
  description:
    "Pautas de alimentación, estimulación temprana y cuidados para bebés con fisura labio-alvéolo-palatina.",
};

export default function CuidadosYAlimentacionPage() {
  const { header, intro, tips } = cuidadosYAlimentacionContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {/* TODO(PIEL): faltan las imágenes de apoyo (ver public/pacientes/LEEME.md). */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cuidadosImages.map((image, index) => (
            <ImageSlot
              key={image.src}
              src={imageSrc(image)}
              alt={image.alt}
              caption={image.caption}
              aspect="3/2"
              frameless
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
