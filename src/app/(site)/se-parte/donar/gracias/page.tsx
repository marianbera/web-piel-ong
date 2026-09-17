import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import {
  isMercadoPagoConfigured,
  mapearEstadoSuscripcion,
  obtenerSuscripcion,
} from "@/lib/donaciones/mercadopago";

export const metadata: Metadata = {
  title: "Gracias por tu donación",
  robots: { index: false, follow: false },
};

/** Mensajes del aporte mensual, según el estado real de la suscripción. */
const RESULTADOS_MENSUAL = {
  aprobada: {
    title: "¡Gracias por sumarte!",
    subtitle: "Tu aporte mensual quedó activo.",
    body: "Todos los meses tu aporte va a ayudar a que más niños accedan al tratamiento que necesitan. Mercado Pago te va a mandar el comprobante de cada cobro a tu correo, y podés cancelar la suscripción cuando quieras desde tu cuenta.",
  },
  pendiente: {
    title: "Tu aporte mensual está en proceso",
    subtitle: "Todavía falta la confirmación.",
    body: "Mercado Pago te va a avisar por correo en cuanto se confirme la suscripción. Si no llegaste a autorizarla, podés volver a intentarlo.",
  },
  rechazada: {
    title: "La suscripción no se completó",
    subtitle: "No se te cobró nada.",
    body: "El aporte mensual no quedó activo. Podés intentar de nuevo, o escribirnos y lo resolvemos juntos.",
  },
} as const;

/**
 * Estado de la suscripción con la que volvió la persona. Mercado Pago agrega
 * `preapproval_id` a la URL de retorno; si no está o la consulta falla, se
 * muestra "en proceso", que es lo único que no puede ser falso.
 */
async function estadoMensual(preapprovalId?: string): Promise<keyof typeof RESULTADOS_MENSUAL> {
  if (!preapprovalId || !isMercadoPagoConfigured()) return "pendiente";
  try {
    const suscripcion = await obtenerSuscripcion(preapprovalId);
    const estado = mapearEstadoSuscripcion(suscripcion.status ?? "");
    if (estado === "activa") return "aprobada";
    if (estado === "cancelada") return "rechazada";
    return "pendiente";
  } catch (error) {
    console.error("[donaciones] no se pudo consultar la suscripción", error);
    return "pendiente";
  }
}

/** Mensajes según cómo volvió la persona de Mercado Pago. */
const RESULTADOS = {
  aprobada: {
    title: "¡Gracias!",
    subtitle: "Tu donación se acreditó.",
    body: "Tu aporte ayuda a que más niños accedan al tratamiento que necesitan. En unos minutos vas a recibir el comprobante de Mercado Pago en tu correo.",
  },
  pendiente: {
    title: "Tu pago está en proceso",
    subtitle: "Todavía falta la confirmación.",
    body: "Si elegiste efectivo o transferencia, el pago se acredita cuando lo completes. Mercado Pago te va a avisar por correo en cuanto se confirme, y ahí queda registrado.",
  },
  rechazada: {
    title: "El pago no se pudo completar",
    subtitle: "No se te cobró nada.",
    body: "Puede haber sido un problema con el medio de pago. Podés intentar de nuevo con otra tarjeta, o escribirnos y lo resolvemos juntos.",
  },
} as const;

type Estado = keyof typeof RESULTADOS;

export default async function GraciasPage({
  searchParams,
}: {
  searchParams: Promise<{ estado?: string; modalidad?: string; preapproval_id?: string }>;
}) {
  const { estado, modalidad, preapproval_id } = await searchParams;
  const mensual = modalidad === "mensual";
  const clave: Estado = mensual
    ? await estadoMensual(preapproval_id)
    : estado === "pendiente" || estado === "rechazada"
      ? estado
      : "aprobada";
  const resultado = (mensual ? RESULTADOS_MENSUAL : RESULTADOS)[clave];

  return (
    <>
      <PageHeader title={resultado.title} subtitle={resultado.subtitle} />

      <PageBody padding="lg">
        <Reveal>
          <Card radius="brand" padding="lg" className="max-w-2xl">
            <p className="text-lg leading-relaxed text-piel-text/80">{resultado.body}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full bg-piel-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-piel-navy/90"
              >
                Volver al inicio
              </Link>
              {clave === "rechazada" && (
                <Link
                  href="/se-parte/donar"
                  className="rounded-full border-2 border-piel-navy px-7 py-3 text-sm font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white"
                >
                  Intentar de nuevo
                </Link>
              )}
              <Link
                href="/contacto"
                className="rounded-full border-2 border-piel-navy px-7 py-3 text-sm font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white"
              >
                Escribinos
              </Link>
            </div>
          </Card>
        </Reveal>
      </PageBody>
    </>
  );
}
