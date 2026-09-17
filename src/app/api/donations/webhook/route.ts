import { NextResponse } from "next/server";
import { WebhookSignatureValidator } from "mercadopago";
import {
  esReferenciaDeSuscripcion,
  registrarCobroSuscripcion,
  registrarEstadoSuscripcion,
  registrarResultadoPago,
} from "@/lib/donaciones/db";
import {
  mapearEstado,
  mapearEstadoSuscripcion,
  obtenerCobroSuscripcion,
  obtenerPago,
  obtenerSuscripcion,
  suscripcionDelPago,
} from "@/lib/donaciones/mercadopago";

/**
 * Webhook de Mercado Pago: acá se confirma en qué terminó cada pago.
 *
 * Es lo que hace que el registro no dependa de que la persona vuelva al sitio:
 * aunque cierre la pestaña al pagar, MP nos avisa igual.
 *
 * Notificaciones que se procesan:
 * - `payment`: un pago, único o cobro mensual.
 * - `subscription_preapproval`: alta, pausa o baja de un aporte mensual.
 * - `subscription_authorized_payment`: cada cobro de un aporte mensual.
 *
 * Seguridad: este endpoint es público (MP tiene que poder llamarlo), así que se
 * valida la firma `x-signature` con el validador oficial del SDK — HMAC-SHA256
 * sobre `id:{data.id};request-id:{x-request-id};ts:{ts};`, comparado en tiempo
 * constante. Sin `MP_WEBHOOK_SECRET` no se procesa nada: un endpoint que escribe
 * en la base sin verificar quién llama es un agujero, no una comodidad.
 *
 * En todos los casos se consulta el estado actual a la API de MP en vez de
 * confiar en el cuerpo de la notificación: si los avisos llegan desordenados,
 * igual queda registrado el último estado real.
 */

/** Ventana de tolerancia del timestamp, contra reenvíos de notificaciones viejas. */
const TOLERANCIA_SEGUNDOS = 600;

async function procesarPago(paymentId: string) {
  const pago = await obtenerPago(paymentId);
  const mpStatus = pago.status ?? "unknown";
  const referencia = pago.external_reference ?? null;
  const datos = {
    paymentId: String(pago.id ?? paymentId),
    estado: mapearEstado(mpStatus),
    mpStatus,
    monto: Number(pago.transaction_amount ?? 0),
    metodoPago: pago.payment_method_id ?? null,
    nombre:
      [pago.payer?.first_name, pago.payer?.last_name].filter(Boolean).join(" ").trim() ||
      "Sin nombre",
    email: pago.payer?.email ?? "",
  };

  // Un cobro mensual tomado por pago único haría que el cobro del mes siguiente
  // pisara al anterior. Por eso se chequea por los campos de MP y, además, contra
  // nuestra tabla de suscripciones.
  const { preapprovalId, esRecurrente } = suscripcionDelPago(pago);
  const esMensual =
    esRecurrente || (referencia !== null && (await esReferenciaDeSuscripcion(referencia)));

  if (esMensual) {
    await registrarCobroSuscripcion({ ...datos, preapprovalId, referencia });
  } else {
    await registrarResultadoPago({ ...datos, referencia });
  }
}

async function procesarSuscripcion(preapprovalId: string) {
  const suscripcion = await obtenerSuscripcion(preapprovalId);
  const mpStatus = suscripcion.status ?? "unknown";
  const monto = suscripcion.auto_recurring?.transaction_amount;

  await registrarEstadoSuscripcion({
    referencia: suscripcion.external_reference ?? null,
    preapprovalId: String(suscripcion.id ?? preapprovalId),
    estado: mapearEstadoSuscripcion(mpStatus),
    mpStatus,
    monto: typeof monto === "number" ? monto : null,
    email: suscripcion.payer_email ?? "",
  });
}

async function procesarCobroSuscripcion(authorizedPaymentId: string) {
  const cobro = await obtenerCobroSuscripcion(authorizedPaymentId);

  // Un cobro programado todavía no tiene pago asociado: no hay plata que registrar.
  // Cuando MP lo intente, vuelve a avisar.
  const paymentId = cobro.payment?.id;
  if (!paymentId) return;

  const mpStatus = cobro.payment?.status ?? "unknown";
  await registrarCobroSuscripcion({
    paymentId: String(paymentId),
    preapprovalId: cobro.preapproval_id ?? null,
    referencia: cobro.external_reference ?? null,
    estado: mapearEstado(mpStatus),
    mpStatus,
    monto: Number(cobro.transaction_amount ?? 0),
    metodoPago: null,
    nombre: "Sin nombre",
    email: "",
  });
}

const PROCESADORES: Record<string, (id: string) => Promise<void>> = {
  payment: procesarPago,
  subscription_preapproval: procesarSuscripcion,
  subscription_authorized_payment: procesarCobroSuscripcion,
};

export async function POST(request: Request) {
  const url = new URL(request.url);
  const dataId = url.searchParams.get("data.id") ?? url.searchParams.get("id");
  const tipo = url.searchParams.get("type") ?? url.searchParams.get("topic");

  const secret = process.env.MP_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[donaciones] falta MP_WEBHOOK_SECRET: la notificación se descarta");
    return NextResponse.json({ error: "Webhook no configurado." }, { status: 503 });
  }

  try {
    WebhookSignatureValidator.validate({
      xSignature: request.headers.get("x-signature"),
      xRequestId: request.headers.get("x-request-id"),
      // MP firma los ids alfanuméricos (los de suscripción lo son) en minúscula,
      // y el validador del SDK no lo normaliza. Los numéricos no cambian.
      dataId: dataId?.toLowerCase() ?? null,
      secret,
      toleranceSeconds: TOLERANCIA_SEGUNDOS,
    });
  } catch (error) {
    console.warn("[donaciones] firma de webhook inválida", error);
    return NextResponse.json({ error: "Firma inválida." }, { status: 401 });
  }

  // El resto de las notificaciones se acusan recibo y listo, porque si
  // devolvemos error MP las reintenta para siempre.
  const procesar = tipo && Object.hasOwn(PROCESADORES, tipo) ? PROCESADORES[tipo] : undefined;
  if (!procesar || !dataId) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  try {
    await procesar(dataId);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(`[donaciones] error procesando el webhook (${tipo})`, error);
    // 500 hace que Mercado Pago reintente: si fue un problema momentáneo de la
    // base o de la API, la notificación no se pierde.
    return NextResponse.json({ error: "Error al procesar." }, { status: 500 });
  }
}
