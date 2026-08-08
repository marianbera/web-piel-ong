import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import type { Step } from "@/types/common";

export default function NumberedCards({ items }: { items: Step[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 80}>
          <div className="flex flex-col items-start rounded-3xl bg-white p-6 shadow-sm ring-1 ring-piel-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <span className="bg-piel-gradient-navy flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-piel-navy">{item.title}</h3>
            <p className="mt-2 text-sm text-piel-text/75">
              <RichText text={item.description} />
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
