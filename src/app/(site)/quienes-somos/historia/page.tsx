import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import BlobShape from "@/components/brand/BlobShape";
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
        {/* El relato ocupa una columna de lectura y a la derecha quedaba un hueco
            grande: se llena con formas de marca de Centro Médico (píldoras) y un
            destello de acento. Solo desde lg, donde esa columna existe y no hay
            texto detrás. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-4 hidden w-[min(28rem,34%)] lg:block"
        >
          <BlobShape
            variant="pill"
            color="blueSoft"
            opacity={0.3}
            rotate={-35}
            float="slower"
            className="absolute -right-6 top-0 h-72 w-72"
          />
          <BlobShape
            variant="star"
            color="burgundy"
            opacity={0.22}
            float="slow"
            className="absolute left-10 top-44 h-20 w-20"
          />
          <BlobShape
            variant="pill"
            color="periwinkle"
            opacity={0.35}
            rotate={50}
            className="absolute left-4 top-[45%] h-56 w-56"
          />
          <BlobShape
            variant="ovals"
            color="navy"
            opacity={0.07}
            rotate={-12}
            float="slower"
            className="absolute bottom-6 right-10 h-40 w-40"
          />
          <BlobShape
            variant="star"
            color="blue"
            opacity={0.18}
            className="absolute bottom-32 left-1/2 h-10 w-10"
          />
        </div>

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
