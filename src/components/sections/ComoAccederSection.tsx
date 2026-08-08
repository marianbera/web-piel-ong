import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import type { ComoAccederPageContent } from "@/types/comoAcceder";
import type { CtaLink } from "@/types/site";

function CtaButton({ cta, variant }: { cta: CtaLink; variant: "primary" | "secondary" }) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-full bg-piel-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-piel-navy/90"
      : "inline-flex items-center justify-center rounded-full border-2 border-piel-navy px-6 py-3 text-sm font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white";
  const isExternal = /^(https?:|mailto:)/.test(cta.href);

  return isExternal ? (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
      {cta.label}
    </a>
  ) : (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

export default function ComoAccederSection({ content }: { content: ComoAccederPageContent }) {
  const { intro, paragraphs, coverages, bullets, bulletsTitle, list, listTitle, note, cta, secondaryCta } =
    content;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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

      {coverages && coverages.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-3">
          {coverages.map((coverage, index) => (
            <li key={coverage}>
              <Reveal delay={index * 60}>
                <span className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-piel-navy shadow-sm ring-1 ring-piel-navy/5">
                  {coverage}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      )}

      {bullets && bullets.length > 0 && (
        <div className="mt-10">
          {bulletsTitle && <SectionHeading title={bulletsTitle} />}
          <ul className="mt-5 flex flex-col gap-3">
            {bullets.map((bullet, index) => (
              <li key={bullet}>
                <Reveal delay={index * 80}>
                  <div className="flex items-start gap-3 text-piel-text/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-piel-blue-soft/50 text-piel-navy">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <RichText text={bullet} />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}

      {list && list.length > 0 && (
        <div className="mt-12">
          {listTitle && <SectionHeading title={listTitle} />}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {list.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <Card>
                  <h3 className="text-lg font-semibold text-piel-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-piel-text/70">
                    <RichText text={item.description} />
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {note && (
        <Reveal>
          <p className="mt-8 text-sm text-piel-text/70">
            <RichText text={note} />
          </p>
        </Reveal>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <CtaButton cta={cta} variant="primary" />
        {secondaryCta && <CtaButton cta={secondaryCta} variant="secondary" />}
      </div>
    </section>
  );
}
