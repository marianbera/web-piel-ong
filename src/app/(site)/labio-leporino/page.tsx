import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import ArticleChapter from "@/components/sections/ArticleChapter";
import BrandDivider from "@/components/brand/BrandDivider";
import BrandSection from "@/components/brand/BrandSection";
import BlobShape from "@/components/brand/BlobShape";
import { labioLeporinoContent } from "@/lib/content/labio-leporino";

export const metadata: Metadata = {
  title: "Labio leporino",
  description: labioLeporinoContent.header.subtitle,
};

export default function LabioLeporinoPage() {
  const { header, intro, chapters, closing } = labioLeporinoContent;

  return (
    <>
      <PageHeader {...header} />

      {/* Intro + índice del recorrido */}
      <PageBody padding="lg">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <Reveal className="max-w-3xl">
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-piel-text/80">
              {intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card radius="brand" padding="lg" tone="offwhite">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy">
                En esta página
              </p>
              <ol className="mt-4 flex flex-col gap-2">
                {chapters.map((chapter, index) => (
                  <li key={chapter.id}>
                    <Link
                      href={`#${chapter.id}`}
                      className="group flex items-baseline gap-3 text-piel-navy hover:underline"
                    >
                      <span
                        aria-hidden
                        className="text-xs font-semibold tabular-nums text-piel-text/40"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium leading-snug">{chapter.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </Card>
          </Reveal>
        </div>
      </PageBody>

      {/* Capítulos: alternan superficie y se separan con una franja de marca,
          para que el recorrido largo tenga ritmo en vez de ser un muro de texto. */}
      {chapters.map((chapter, index) => (
        <div key={chapter.id}>
          {index > 0 && <BrandDivider block="pacientes" size="lg" className="bg-white" />}
          <PageBody
            tone={index % 2 === 1 ? "offwhite" : "white"}
            intensity={index % 2 === 1 ? "subtle" : "medium"}
            padding="lg"
          >
            <ArticleChapter chapter={chapter} />
          </PageBody>
        </div>
      ))}

      {/* Cierre */}
      <BrandSection tone="navy" padding="lg">
        <BlobShape
          variant="cross"
          color="blueSoft"
          opacity={0.1}
          rotate={-12}
          float="slow"
          className="absolute -right-12 -top-10 h-56 w-56 lg:h-72 lg:w-72"
        />
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{closing.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            <RichText text={closing.text} />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {closing.ctas.map((cta, index) =>
              cta.external ? (
                <a
                  key={cta.href}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-piel-navy"
                >
                  {cta.label}
                </a>
              ) : (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={`group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition ${
                    index === 0
                      ? "bg-white text-piel-navy hover:bg-white/90"
                      : "border-2 border-white/70 text-white hover:bg-white hover:text-piel-navy"
                  }`}
                >
                  {cta.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )
            )}
          </div>
        </Reveal>
      </BrandSection>
    </>
  );
}
