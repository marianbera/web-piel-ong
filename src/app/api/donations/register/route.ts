import { NextRequest, NextResponse } from "next/server";
import { appendDonationRow } from "@/lib/googleSheets";
import type { DonationType } from "@/types/donation";

// TODO(PIEL): configurar los links de pago de Mercado Pago en variables de entorno
// (MP_DONATION_LINK_INDIVIDUAL / _APADRINAMIENTO / _EMPRESA) antes de publicar.
const mpLinks: Record<DonationType, string | undefined> = {
  individual: process.env.MP_DONATION_LINK_INDIVIDUAL,
  apadrinamiento: process.env.MP_DONATION_LINK_APADRINAMIENTO,
  empresa: process.env.MP_DONATION_LINK_EMPRESA,
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, amount, type, origin } = body as {
    name?: string;
    email?: string;
    amount?: number;
    type?: DonationType;
    origin?: string;
  };

  if (!name || !email || !amount || amount <= 0 || !type) {
    return NextResponse.json({ error: "Faltan datos requeridos." }, { status: 400 });
  }

  const redirectUrl = mpLinks[type];
  if (!redirectUrl) {
    return NextResponse.json(
      { error: "El link de pago para este tipo de donación no está configurado." },
      { status: 500 }
    );
  }

  try {
    await appendDonationRow([
      name,
      email,
      String(amount),
      type,
      new Date().toISOString(),
      origin ?? "",
    ]);
  } catch (error) {
    // No bloqueamos la redirección a Mercado Pago si falla el registro en Sheets.
    console.error("Error registrando donación en Google Sheets", error);
  }

  return NextResponse.json({ redirectUrl });
}
