import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteContact } from "@/lib/content/site";
import type { ContactFormData } from "@/types/contact";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, message } = body as ContactFormData;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan datos requeridos." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "El envío de emails no está configurado todavía." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      // TODO: reemplazar por un remitente verificado en el dominio real de PIEL.
      from: "Web Asociación PIEL <web@asociacion-piel.org.ar>",
      to: siteContact.email,
      replyTo: email,
      subject: `Nueva consulta de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone ?? "-"}\n\nMensaje:\n${message}`,
    });
  } catch (error) {
    console.error("Error enviando email de contacto", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Intentá de nuevo." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
