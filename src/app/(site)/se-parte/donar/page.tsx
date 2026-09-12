import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import Card from "@/components/ui/Card";
import DonationForm from "@/components/sections/DonationForm";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { bajaAporteMensualEmail, datosBancarios, donarContent } from "@/lib/content/donar";
import { isMercadoPagoConfigured } from "@/lib/donaciones/mercadopago";

export const metadata: Metadata = {
  title: donarContent.header.title,
  description: donarContent.header.subtitle,
};

// Lee si Mercado Pago está habilitado, así que se arma en cada visita.
export const dynamic = "force-dynamic";

export default function DonarPage() {
  const { header, intro, paragraphs, amountOptions } = donarContent;
  const pagoOnlineActivo = isMercadoPagoConfigured();

  // Solo se muestran los datos bancarios que ya estén cargados.
  const bankRows = [
    { label: "Titular", value: datosBancarios.titular },
    { label: "Banco", value: datosBancarios.banco },
    { label: "CBU", value: datosBancarios.cbu },
    { label: "Alias", value: datosBancarios.alias },
    { label: "CUIT", value: datosBancarios.cuit },
  ].filter((row) => row.value);

  return (
    <>
      <PageHeader {...header} />

      {/* Los montos arriba de todo: PIEL pidió verlos sin scrollear. */}
      <PageBody>
        <Reveal>
          <p className="max-w-2xl text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {pagoOnlineActivo ? (
          <Reveal delay={100} className="mt-8">
            <DonationForm
              amountOptions={amountOptions}
              type="individual"
              submitLabel="Donar ahora"
            />
          </Reveal>
        ) : (
          /* TODO(PIEL): faltan las credenciales de Mercado Pago. Mientras tanto no se
             muestra un formulario que no puede cobrar — ver MERCADOPAGO-PIEL.md. */
          <Reveal delay={100} className="mt-8">
            <Card radius="brand" padding="lg" className="max-w-2xl">
              <p className="text-lg font-semibold text-piel-navy">
                Estamos terminando de habilitar la donación online.
              </p>
              <p className="mt-3 text-piel-text/75">
                Mientras tanto podés colaborar por transferencia bancaria, o escribirnos y
                te ayudamos a hacerlo.
              </p>
              <Link
                href="/contacto"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
              >
                Escribinos
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Card>
          </Reveal>
        )}

        {pagoOnlineActivo && bajaAporteMensualEmail ? (
          <Reveal>
            <p className="mt-6 max-w-xl text-sm text-piel-text/65">
              El aporte mensual se puede dar de baja en cualquier momento escribiendo a{" "}
              <a
                href={`mailto:${bajaAporteMensualEmail}`}
                className="font-semibold text-piel-navy underline underline-offset-2"
              >
                {bajaAporteMensualEmail}
              </a>
              .
            </p>
          </Reveal>
        ) : (
          /* TODO(PIEL): falta definir el correo para dar de baja el aporte mensual
             (ver `bajaAporteMensualEmail` en lib/content/donar.ts). */
          null
        )}
      </PageBody>

      {/* Transferencia bancaria. TODO(PIEL): faltan CBU, alias y CUIT reales.
          Mientras no estén cargados en `datosBancarios`, este bloque no aparece. */}
      {bankRows.length > 1 && (
        <PageBody tone="offwhite" intensity="subtle">
          <SectionHeading eyebrow="Otra forma de colaborar" title="Transferencia bancaria" />
          <Reveal className="mt-8">
            <Card radius="brand" padding="lg" className="max-w-2xl">
              <dl className="grid gap-4 sm:grid-cols-2">
                {bankRows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-piel-burgundy">
                      {row.label}
                    </dt>
                    <dd className="mt-1 font-semibold text-piel-navy">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-piel-text/70">
                Si donás por transferencia, escribinos con el comprobante así podemos emitirte el
                recibo y agradecerte como corresponde.
              </p>
            </Card>
          </Reveal>
        </PageBody>
      )}

      {/* El texto largo va al pie: informa a quien quiera leerlo, sin tapar los montos. */}
      <PageBody tone={bankRows.length > 1 ? "white" : "offwhite"} intensity="subtle">
        <SectionHeading title="Por qué tu aporte importa" />
        <Reveal className="mt-6 max-w-3xl space-y-4 text-piel-text/75">
          {paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>
              <RichText text={paragraph} />
            </p>
          ))}
        </Reveal>
      </PageBody>
    </>
  );
}
