import { differentiators } from "@/lib/content/home";
import { HomeIcon, MedalIcon, SupportIcon, TeamIcon } from "@/components/ui/icons";
import type { DifferentiatorIcon } from "@/types/home";

const iconMap: Record<DifferentiatorIcon, typeof HomeIcon> = {
  "all-in-one": HomeIcon,
  team: TeamIcon,
  experience: MedalIcon,
  support: SupportIcon,
};

export default function Differentiators() {
  const { eyebrow, title, items } = differentiators;

  return (
    <section className="bg-gradient-to-b from-piel-periwinkle/30 to-piel-offwhite py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 text-3xl font-bold text-piel-navy sm:text-4xl">{title}</h2>
          <span aria-hidden className="accent-bar-h mx-auto mt-6 block h-1 w-16 rounded-full" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="group flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-piel-navy/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-piel-blue-soft/30 text-piel-navy transition duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span aria-hidden className="text-2xl font-bold text-piel-navy/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug text-piel-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-piel-text/70">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
