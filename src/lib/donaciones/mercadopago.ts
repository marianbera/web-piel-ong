import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import type { EstadoDonacion } from "@/lib/donaciones/db";

/**
 * Integración con Mercado Pago — Checkout Pro (pago por única vez).
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
