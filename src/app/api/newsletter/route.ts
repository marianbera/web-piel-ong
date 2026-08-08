import { NextRequest, NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/lib/mailerlite";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email } = body as { email?: string };

  if (!email) {
    return NextResponse.json({ error: "El email es requerido." }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "La newsletter no está configurada todavía." },
      { status: 500 }
    );
  }

  try {
    await subscribeToNewsletter(email);
  } catch (error) {
    console.error("Error suscribiendo a MailerLite", error);
    return NextResponse.json({ error: "No se pudo completar la suscripción." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
