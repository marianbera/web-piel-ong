import { NextResponse } from "next/server";
import { WebhookSignatureValidator } from "mercadopago";
import { registrarResultadoPago } from "@/lib/donaciones/db";
import { mapearEstado, obtenerPago } from "@/lib/donaciones/mercadopago";

/**
 * Webhook de Mercado Pago: acá se confirma en qué terminó cada pago.
 *
 * Es lo que hace que el registro no dependa de que la persona vuelva al sitio:
 * aunque cierre la pestaña al pagar, MP nos avisa igual.
 *
 * Seguridad: este endpoint es público (MP tiene que poder llamarlo), así que se
 * valida la firma `x-signature` con el validador oficial del SDK — HMAC-SHA256
 * sobre `id:{data.id};request-id:{x-request-id};ts:{ts};`, comparado en tiempo
 * constante. Sin `MP_WEBHOOK_SECRET` no se procesa nada: un endpoint que escribe
 * en la base sin verificar quién llama es un agujero, no una comodidad.
 */

/** Ventana de tolerancia del timestamp, contra reenvíos de notificaciones viejas. */
const TOLERANCIA_SEGUNDOS = 600;

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
      dataId,
      secret,
      toleranceSeconds: TOLERANCIA_SEGUNDOS,
    });
  } catch (error) {
    console.warn("[donaciones] firma de webhook inválida", error);
    return NextResponse.json({ error: "Firma inválida." }, { status: 401 });
  }

  // Solo nos interesan las notificaciones de pago; el resto se acusa recibo y listo,
  // porque si devolvemos error MP las reintenta para siempre.
  if (tipo !== "payment" || !dataId) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  try {
    const pago = await obtenerPago(dataId);
    const mpStatus = pago.status ?? "unknown";

    await registrarResultadoPago({
      referencia: pago.external_reference ?? null,
      paymentId: String(pago.id ?? dataId),
      estado: mapearEstado(mpStatus),
      mpStatus,
      monto: Number(pago.transaction_amount ?? 0),
      metodoPago: pago.payment_method_id ?? null,
      nombre:
        [pago.payer?.first_name, pago.payer?.last_name].filter(Boolean).join(" ").trim() ||
        "Sin nombre",
      email: pago.payer?.email ?? "",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[donaciones] error procesando el webhook", error);
    // 500 hace que Mercado Pago reintente: si fue un problema momentáneo de la
    // base o de la API, la notificación no se pierde.
    return NextResponse.json({ error: "Error al procesar." }, { status: 500 });
  }
}
