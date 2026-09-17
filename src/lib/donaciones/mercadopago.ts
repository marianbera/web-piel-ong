import { Invoice, MercadoPagoConfig, Payment, PreApproval, Preference } from "mercadopago";
import type { EstadoDonacion, EstadoSuscripcion } from "@/lib/donaciones/db";

/**
 * Integración con Mercado Pago:
 * - **Checkout Pro** para la donación por única vez.
 * - **Suscripciones** (preapproval sin plan) para el aporte mensual.
 *
 * Toda la integración está detrás de `MP_ACCESS_TOKEN`: mientras esa variable no
 * exista, `isMercadoPagoConfigured()` devuelve false y la página de Donar muestra
 * solo la transferencia bancaria, sin botones muertos.
 *
 * TODO(PIEL): faltan las credenciales de la cuenta de Mercado Pago de la asociación.
 * Ver `MERCADOPAGO-PIEL.md` para el paso a paso.
 */

export function isMercadoPagoConfigured() {
  return Boolean(process.env.MP_ACCESS_TOKEN);
}

function client() {
  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error(
      "Falta MP_ACCESS_TOKEN. Cargá las credenciales de Mercado Pago en las variables de entorno del proyecto."
    );
  }
  // 5 s de timeout: si MP tarda más, preferimos fallar rápido y avisarle a la
  // persona, en vez de dejarla mirando un botón que no responde.
  return new MercadoPagoConfig({ accessToken, options: { timeout: 5000 } });
}

/** Traduce el estado de Mercado Pago al nuestro. */
export function mapearEstado(mpStatus: string): EstadoDonacion {
  switch (mpStatus) {
    case "approved":
    case "authorized":
      return "aprobada";
    case "refunded":
    case "charged_back":
      return "devuelta";
    case "rejected":
    case "cancelled":
      return "rechazada";
    default:
      // in_process, pending, in_mediation…
      return "pendiente";
  }
}

interface CrearPreferenciaArgs {
  nombre: string;
  email: string;
  monto: number;
  referencia: string;
  siteUrl: string;
}

/**
 * Crea la preferencia de pago y devuelve la URL del checkout de Mercado Pago.
 *
 * `external_reference` es nuestro identificador: MP lo devuelve tal cual en el
 * webhook, y es lo que nos permite unir el pago con la donación que registramos
 * antes de la redirección.
 */
export async function crearPreferencia({
  nombre,
  email,
  monto,
  referencia,
  siteUrl,
}: CrearPreferenciaArgs): Promise<string> {
  const preference = new Preference(client());

  const resultado = await preference.create({
    body: {
      items: [
        {
          id: referencia,
          title: "Donación a Asociación PIEL",
          description: "Aporte para el tratamiento integral de fisuras labio-alvéolo-palatinas",
          quantity: 1,
          unit_price: monto,
          currency_id: "ARS",
        },
      ],
      payer: { name: nombre, email },
      external_reference: referencia,
      statement_descriptor: "ASOC PIEL",
      back_urls: {
        success: `${siteUrl}/se-parte/donar/gracias?estado=aprobada`,
        pending: `${siteUrl}/se-parte/donar/gracias?estado=pendiente`,
        failure: `${siteUrl}/se-parte/donar/gracias?estado=rechazada`,
      },
      auto_return: "approved",
      notification_url: `${siteUrl}/api/donations/webhook`,
    },
  });

  const url = resultado.init_point ?? resultado.sandbox_init_point;
  if (!url) throw new Error("Mercado Pago no devolvió una URL de checkout.");
  return url;
}

/** Trae un pago por id, para saber en qué terminó. */
export async function obtenerPago(paymentId: string) {
  return new Payment(client()).get({ id: paymentId });
}

/* ── Aporte mensual (Suscripciones) ───────────────────────────────────────── */

/** Traduce el estado de una suscripción de Mercado Pago al nuestro. */
export function mapearEstadoSuscripcion(mpStatus: string): EstadoSuscripcion {
  switch (mpStatus) {
    case "authorized":
      return "activa";
    case "paused":
      return "pausada";
    case "cancelled":
      return "cancelada";
    default:
      return "pendiente";
  }
}

interface CrearSuscripcionArgs {
  email: string;
  monto: number;
  referencia: string;
  siteUrl: string;
}

/**
 * Crea la suscripción mensual y devuelve la URL donde la persona la autoriza.
 *
 * Es una suscripción "sin plan": el monto lo elige cada donante. Se crea en
 * estado `pending` y la persona la confirma en Mercado Pago, con su cuenta, que
 * es donde después puede cancelarla. El primer cobro sale al autorizarla y los
 * siguientes, cada mes.
 *
 * A diferencia de la preferencia, la suscripción no acepta `notification_url`:
 * los avisos llegan al webhook configurado en la aplicación de Mercado Pago
 * (ver MERCADOPAGO-PIEL.md).
 */
export async function crearSuscripcion({
  email,
  monto,
  referencia,
  siteUrl,
}: CrearSuscripcionArgs): Promise<string> {
  const resultado = await new PreApproval(client()).create({
    body: {
      reason: "Aporte mensual a Asociación PIEL",
      external_reference: referencia,
      payer_email: email,
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: monto,
        currency_id: "ARS",
      },
      back_url: `${siteUrl}/se-parte/donar/gracias?modalidad=mensual`,
      status: "pending",
    },
  });

  if (!resultado.init_point) {
    throw new Error("Mercado Pago no devolvió una URL para autorizar la suscripción.");
  }
  return resultado.init_point;
}

/** Trae una suscripción por id, para saber en qué estado está. */
export async function obtenerSuscripcion(preapprovalId: string) {
  return new PreApproval(client()).get({ id: preapprovalId });
}

/** Trae un cobro mensual de una suscripción (notificación `subscription_authorized_payment`). */
export async function obtenerCobroSuscripcion(authorizedPaymentId: string) {
  return new Invoice(client()).get({ id: authorizedPaymentId });
}

/**
 * Datos de suscripción que trae un pago, si es un cobro mensual.
 *
 * Mercado Pago avisa cada cobro mensual dos veces: como `payment` y como
 * `subscription_authorized_payment`. Los dos caminos terminan en la misma fila
 * (se identifica por el id del pago), así que no se duplica; pero el camino de
 * `payment` necesita saber que no es una donación única. El webhook además lo
 * cruza con nuestra tabla de suscripciones, por si MP no manda estos campos.
 */
export function suscripcionDelPago(pago: Awaited<ReturnType<typeof obtenerPago>>) {
  const preapprovalId = pago.point_of_interaction?.transaction_data?.subscription_id ?? null;
  return {
    preapprovalId,
    esRecurrente: Boolean(preapprovalId) || pago.operation_type === "recurring_payment",
  };
}
