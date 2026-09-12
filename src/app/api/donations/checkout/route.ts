import { NextResponse } from "next/server";
import { crearDonacionPendiente, isDonationsDbConfigured } from "@/lib/donaciones/db";
import { crearPreferencia, isMercadoPagoConfigured } from "@/lib/donaciones/mercadopago";

/** Monto mínimo razonable, para filtrar pruebas y errores de tipeo. */
const MONTO_MINIMO = 100;
const MONTO_MAXIMO = 10_000_000;

function siteUrl(request: Request) {
  // En Vercel siempre hay un host confiable en el header; en local cae al origin.
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  return new URL(request.url).origin;
}

/**
 * Arranca una donación: registra la intención y devuelve la URL del checkout
 * de Mercado Pago.
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
  const origen = String(body?.origin ?? "");

  if (!nombre || !email) {
    return NextResponse.json({ error: "Faltan el nombre y el email." }, { status: 400 });
  }
  if (!Number.isFinite(monto) || monto < MONTO_MINIMO || monto > MONTO_MAXIMO) {
    return NextResponse.json(
      { error: `El monto tiene que estar entre $${MONTO_MINIMO} y $${MONTO_MAXIMO.toLocaleString("es-AR")}.` },
      { status: 400 }
    );
  }

  const referencia = crypto.randomUUID();

  // Si la base no está configurada no bloqueamos el pago: es peor perder una
  // donación que perder su registro. Queda avisado en los logs.
  if (isDonationsDbConfigured()) {
    try {
      await crearDonacionPendiente({
        nombre,
        email,
        monto,
        frecuencia: "unica",
        tipo,
        referencia,
        origen,
      });
    } catch (error) {
      console.error("[donaciones] no se pudo registrar la intención", error);
    }
  } else {
    console.warn("[donaciones] sin base configurada: la donación no queda registrada en el panel");
  }

  try {
    const checkoutUrl = await crearPreferencia({
      nombre,
      email,
      monto,
      referencia,
      siteUrl: siteUrl(request),
    });
    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error("[donaciones] error creando la preferencia de Mercado Pago", error);
    return NextResponse.json(
      { error: "No pudimos abrir el pago. Probá de nuevo en unos minutos." },
      { status: 502 }
    );
  }
}
