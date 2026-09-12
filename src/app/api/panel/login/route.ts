import { NextResponse } from "next/server";
import { SESSION_COOKIE, checkCredentials, createSession, sessionCookieOptions } from "@/lib/admin/auth";

export async function POST(request: Request) {
  const form = await request.formData();
  const user = String(form.get("user") ?? "");
  const password = String(form.get("password") ?? "");

  if (!checkCredentials(user, password)) {
    return NextResponse.json({ error: "Usuario o contraseña incorrectos." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, await createSession(), sessionCookieOptions);
  return response;
}
