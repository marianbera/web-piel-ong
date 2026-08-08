import Link from "next/link";
import type { SectionLink } from "@/types/common";

export default function SectionLinkCard({ title, description, href }: SectionLink) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-piel-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <h3 className="text-xl font-semibold text-piel-navy">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-piel-text/70">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-piel-burgundy">
        Ver más
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
