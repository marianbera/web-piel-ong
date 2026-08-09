import Link from "next/link";
import { accessHelp } from "@/lib/content/home";
import BlobShape from "@/components/brand/BlobShape";
import { HandshakeIcon, SupportIcon } from "@/components/ui/icons";
import type { AccessHelpIcon } from "@/types/home";

const iconMap: Record<AccessHelpIcon, typeof HandshakeIcon> = {
  handshake: HandshakeIcon,
  heart: SupportIcon,
};

// El mockup usa verde (acceso) y rosa (ayudar); mapeados a la paleta de marca (navy / burdeos).
// TODO(PIEL): confirmar si se quiere respetar el verde/rosa exactos del mockup.
const variantStyles: Record<
  "access" | "help",
  { strip: string; badge: string; cta: string }
> = {
  access: {
    strip: "bg-piel-navy",
    badge: "bg-piel-navy text-white",
    cta: "bg-piel-navy text-white hover:bg-piel-navy/90",
  },
  help: {
    strip: "bg-piel-burgundy",
    badge: "bg-piel-burgundy text-white",
    cta: "bg-piel-burgundy text-white hover:bg-piel-burgundy/90",
  },
};

export default function AccessHelp() {
  return (
    <section className="relative overflow-hidden bg-piel-offwhite py-16 lg:py-24">
      {/* Formas orgánicas del brandbook como acento de esquina, flotando muy lento. */}
      <BlobShape
        variant="cross"
        color="blue"
        opacity={0.07}
        rotate={-14}
        float="slow"
        className="absolute -left-16 top-8 h-48 w-48 lg:h-72 lg:w-72"
      />
      <BlobShape
        variant="star"
        color="burgundy"
        opacity={0.08}
        float="slower"
        className="absolute -right-10 bottom-6 h-40 w-40 lg:h-56 lg:w-56"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-piel-navy sm:text-4xl">{accessHelp.title}</h2>
          <span aria-hidden className="accent-bar-h mx-auto mt-6 block h-1 w-16 rounded-full" />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {accessHelp.cards.map((card) => {
            const Icon = iconMap[card.icon];
            const styles = variantStyles[card.variant];
            return (
              <div
                key={card.title}
                className="relative flex flex-col items-start overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-piel-navy/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-10"
              >
                <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 ${styles.strip}`} />
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full shadow-sm ${styles.badge}`}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-piel-navy">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-piel-text/75">{card.text}</p>
                <Link
                  href={card.cta.href}
                  className={`group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition before:absolute before:inset-0 before:content-[''] ${styles.cta}`}
                >
                  {card.cta.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
