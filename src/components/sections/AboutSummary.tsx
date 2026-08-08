import Link from "next/link";
import { aboutSummary } from "@/lib/content/home";
import RichText from "@/components/ui/RichText";
import {
  ClipboardCheckIcon,
  HandHeartIcon,
  HospitalIcon,
  TeamIcon,
} from "@/components/ui/icons";
import type { StatIcon } from "@/types/home";

const statIconMap: Record<StatIcon, typeof HospitalIcon> = {
  hospital: HospitalIcon,
  patients: TeamIcon,
  team: HandHeartIcon,
  integral: ClipboardCheckIcon,
};

export default function AboutSummary() {
  const { eyebrow, title, text, cta, stats } = aboutSummary;

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div className="flex gap-5">
          <span
            aria-hidden
            className="accent-bar hidden w-1.5 shrink-0 self-stretch rounded-full sm:block"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight text-piel-navy sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-piel-text/75">
              <RichText text={text} />
            </p>
            <Link
              href={cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-piel-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-piel-navy/90"
            >
              {cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-piel-navy/10">
          <div aria-hidden className="accent-bar-h h-1.5" />
          <ul className="grid grid-cols-2">
            {stats.map((stat, i) => {
              const Icon = statIconMap[stat.icon];
              return (
                <li
                  key={stat.label}
                  className={`flex flex-col items-center justify-center border-piel-navy/10 px-6 py-10 text-center ${
                    i % 2 === 1 ? "border-l" : ""
                  } ${i >= 2 ? "border-t" : ""}`}
                >
                  <Icon className="h-8 w-8 text-piel-blue" />
                  {stat.value ? (
                    <>
                      <span className="mt-3 text-4xl font-bold text-piel-navy">{stat.value}</span>
                      <span className="mt-1 text-sm text-piel-text/60">{stat.label}</span>
                    </>
                  ) : (
                    <span className="mt-4 max-w-[11rem] text-sm font-semibold leading-snug text-piel-navy">
                      {stat.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
