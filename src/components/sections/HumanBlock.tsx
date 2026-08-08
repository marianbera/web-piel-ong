import { humanBlock } from "@/lib/content/home";
import BrandPanel from "@/components/ui/BrandPanel";
import HistoriasStack from "@/components/sections/HistoriasStack";
import RichText from "@/components/ui/RichText";

export default function HumanBlock() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div className="flex gap-5">
          <span
            aria-hidden
            className="accent-bar hidden w-1.5 shrink-0 self-stretch rounded-full sm:block"
          />
          <div>
            <h2 className="text-3xl font-bold text-piel-navy sm:text-4xl">{humanBlock.title}</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-piel-text/75">
              <RichText text={humanBlock.text} />
            </p>
            <a
              href={humanBlock.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
            >
              {humanBlock.cta.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {humanBlock.images?.length ? (
          <HistoriasStack images={humanBlock.images} />
        ) : (
          <div className="mx-auto w-full max-w-sm lg:max-w-md">
            <BrandPanel />
          </div>
        )}
      </div>
    </section>
  );
}
