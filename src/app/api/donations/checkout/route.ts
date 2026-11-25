import { NextResponse } from "next/server";
import {
  crearDonacionPendiente,
  crearSuscripcionPendiente,
  isDonationsDbConfigured,
} from "@/lib/donaciones/db";
import {
  crearPreferencia,
  crearSuscripcion,
  fechaFinSuscripcion,
  isMercadoPagoConfigured,
} from "@/lib/donaciones/mercadopago";
import { DONACION_UNICA_HABILITADA, donarContent } from "@/lib/content/donar";

/**
 * Montos y duraciones permitidos: exactamente los del formulario. PIEL pidió
 * montos fijos, así que cualquier otro valor se rechaza acá, no solo en la UI.
 */
const MONTOS_PERMITIDOS = new Set(donarContent.amountOptions.map((option) => option.value));
const DURACIONES_PERMITIDAS = new Set(donarContent.durationOptions.map((option) => option.months));

function siteUrl(request: Request) {
  // En Vercel siempre hay un host confiable en el header; en local cae al origin.
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  return new URL(request.url).origin;
}

/**
 * Arranca una donación: registra la intención y devuelve la URL de Mercado Pago.
 *
 * - Aporte único → preferencia de Checkout Pro.
 * - Aporte mensual → suscripción, que la persona autoriza con su cuenta de MP.
 *
 * El registro se hace ANTES de redirigir, para que quede rastro aunque la
 * persona abandone el pago a mitad de camino. El estado definitivo lo confirma
 * después el webhook.
 */
export async function POST(request: Request) {
  if (!isMercadoPagoConfigured()) {
    return NextResponse.json(
      { error: "Las donaciones online todavía no están habilitadas." },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => null);
  const nombre = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const monto = Number(body?.amount);
  const tipo = String(body?.type ?? "individual");
  const frecuencia = body?.frequency === "mensual" ? "mensual" : "unica";
  const origen = String(body?.origin ?? "");

  // `null` = sin fecha de fin. Solo aplica al aporte mensual.
  const meses = body?.months === null || body?.months === undefined ? null : Number(body.months);

  if (!nombre || !email) {
    return NextResponse.json({ error: "Faltan el nombre y el email." }, { status: 400 });
  }
  if (frecuencia === "unica" && !DONACION_UNICA_HABILITADA) {
    return NextResponse.json(
      { error: "Por ahora las donaciones son mensuales." },
      { status: 400 }
    );
  }
  if (!MONTOS_PERMITIDOS.has(monto)) {
    return NextResponse.json({ error: "Elegí uno de los montos de la lista." }, { status: 400 });
  }
  if (frecuencia === "mensual" && !DURACIONES_PERMITIDAS.has(meses)) {
    return NextResponse.json({ error: "Elegí una de las duraciones de la lista." }, { status: 400 });
  }

  const referencia = crypto.randomUUID();
  // Se calcula una sola vez: la misma fecha va a la base y a Mercado Pago.
  const fin = frecuencia === "mensual" && meses !== null ? fechaFinSuscripcion(meses) : null;

  // Si la base no está configurada no bloqueamos el pago: es peor perder una
  // donación que perder su registro. Queda avisado en los logs.
  if (isDonationsDbConfigured()) {
    try {
      if (frecuencia === "mensual") {
        await crearSuscripcionPendiente({ nombre, email, monto, referencia, origen, meses, fin });
      } else {
        await crearDonacionPendiente({
          nombre,
          email,
          monto,
          frecuencia,
          tipo,
          referencia,
          origen,
        });
      }
    } catch (error) {
      console.error("[donaciones] no se pudo registrar la intención", error);
    }
  } else {
    console.warn("[donaciones] sin base configurada: la donación no queda registrada en el panel");
  }

  try {
    const checkoutUrl =
      frecuencia === "mensual"
        ? await crearSuscripcion({ email, monto, referencia, fin, siteUrl: siteUrl(request) })
        : await crearPreferencia({ nombre, email, monto, referencia, siteUrl: siteUrl(request) });
    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error(`[donaciones] error creando el pago (${frecuencia}) en Mercado Pago`, error);
    return NextResponse.json(
      { error: "No pudimos abrir el pago. Probá de nuevo en unos minutos." },
      { status: 502 }
    );
  }
}
