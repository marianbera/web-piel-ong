import Link from "next/link";

interface CtaBandProps {
  title: string;
  text: string;
  cta: { label: string; href: string };
}

/**
 * Banda CTA full-width con degradado de marca — patrón de "llamado a apoyar" del formato del sitio.
 */
export default function CtaBand({ title, text, cta }: CtaBandProps) {
  return (
    <section className="bg-piel-gradient-navy">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-white/85">{text}</p>
        <Link
          href={cta.href}
          className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-piel-navy transition hover:bg-white/90"
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
