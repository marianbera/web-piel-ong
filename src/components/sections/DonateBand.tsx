import Link from "next/link";
import BrandSection from "@/components/brand/BrandSection";
import BlobShape from "@/components/brand/BlobShape";
import GradientBackground from "@/components/brand/GradientBackground";
import Reveal from "@/components/ui/Reveal";
import { donateBlock } from "@/lib/content/home";

/**
 * Interruptor de la pasarela de pago.
 *
 * TODO(PIEL): integración de pagos — cuando Mercado Pago esté conectado, poner
 * esto en `true` y el botón "Donar online" aparece en su lugar reservado, al
 * lado del CTA actual. El hueco ya está contemplado en el layout (la fila de
 * botones es un flex-wrap), así que no hay que rediseñar nada.
 *
 * Se deja apagado a propósito: un botón de donación que no cobra es peor que
 * no tenerlo.
 */
const ONLINE_PAYMENTS_ENABLED = false;

/**
 * Banda de donación (fuente 1.4 del doc de contenido). Cierra la Home y la
 * página de Sé parte con la llamada a colaborar.
 */
export default function DonateBand() {
  const { title, text, cta } = donateBlock;

  return (
    <BrandSection tone="navy" padding="lg" className="text-white">
      {/* El navy plano pasa a ser el degradé de marca: la banda de conversión es
          el lugar donde el color de PIEL puede aparecer entero. */}
      <GradientBackground variant="navy" angle={125} opacity={0.85} />
      <BlobShape
        variant="star"
        color="blueSoft"
        opacity={0.12}
        float="slower"
        className="absolute -left-10 -top-8 h-44 w-44 lg:h-56 lg:w-56"
      />

      <Reveal className="max-w-3xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-white/80">{text}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={cta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {cta.label}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Lugar reservado para el botón de pago online. Ver ONLINE_PAYMENTS_ENABLED. */}
          {ONLINE_PAYMENTS_ENABLED && (
            <Link
              href="/se-parte/donar#online"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-piel-navy"
            >
              Donar online
            </Link>
          )}
        </div>
      </Reveal>
    </BrandSection>
  );
}
