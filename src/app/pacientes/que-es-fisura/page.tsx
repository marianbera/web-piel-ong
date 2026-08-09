import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import ProseSections from "@/components/sections/ProseSections";
import ImageSlot from "@/components/ui/ImageSlot";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { queEsFisuraContent } from "@/lib/content/pacientes";
import { fisuraImages, imageSrc } from "@/lib/content/pacientesImagenes";

export const metadata: Metadata = {
  title: "Qué es la fisura labio-álveolo-palatina",
  description: queEsFisuraContent.header.subtitle,
};

export default function QueEsFisuraPage() {
  const { header, intro, sections } = queEsFisuraContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {/* Las ilustraciones médicas van arriba de la prosa: explican de un vistazo
            lo que el texto desarrolla. TODO(PIEL): faltan los archivos. */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {fisuraImages.map((image, index) => (
            <ImageSlot
              key={image.src}
              src={imageSrc(image)}
              alt={image.alt}
              caption={image.caption}
              aspect="4/3"
              sizes="(min-width: 1024px) 40vw, 100vw"
              delay={index * 100}
            />
          ))}
        </div>

        <ProseSections sections={sections} />
      </PageBody>
    </>
  );
}
