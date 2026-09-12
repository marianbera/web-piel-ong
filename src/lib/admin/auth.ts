/**
 * Sesión del panel de administración.
 *
 * Cookie firmada con HMAC-SHA256 usando Web Crypto, que está disponible tanto en
 * el runtime de Node como en el middleware — así el mismo código valida la sesión
 * en los dos lados, sin librerías extra.
 *
 * Config por variables de entorno (ver `.env.local.example`):
 *   ADMIN_USER, ADMIN_PASSWORD, ADMIN_SESSION_SECRET
 */
export const SESSION_COOKIE = "piel_panel";
const SESSION_HOURS = 8;

const encoder = new TextEncoder();

function base64url(bytes: Uint8Array) {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function sign(payload: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return base64url(new Uint8Array(signature));
}

/** Comparación en tiempo constante, para no filtrar información por el timing. */
function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value || value.length < 16) {
    throw new Error(
      "Falta ADMIN_SESSION_SECRET (mínimo 16 caracteres). Ver .env.local.example."
    );
  }
  return value;
}

/** Valida usuario y contraseña contra las variables de entorno. */
export function checkCredentials(user: string, password: string) {
  const expectedUser = process.env.ADMIN_USER;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUser || !expectedPassword) return false;
  // Se evalúan las dos comparaciones siempre, para no revelar cuál falló.
  const okUser = safeEqual(user, expectedUser);
  const okPassword = safeEqual(password, expectedPassword);
  return okUser && okPassword;
}

/** Crea el valor de la cookie de sesión: `expiración.firma`. */
export async function createSession() {
  const expiresAt = Date.now() + SESSION_HOURS * 60 * 60 * 1000;
  const payload = String(expiresAt);
  return `${payload}.${await sign(payload, secret())}`;
}

/** true si la cookie es válida y no venció. */
export async function verifySession(token: string | undefined) {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  let expected: string;
  try {
    expected = await sign(payload, secret());
  } catch {
    return false;
  }
  if (!safeEqual(signature, expected)) return false;

  const expiresAt = Number(payload);
  return Number.isFinite(expiresAt) && expiresAt > Date.now();
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_HOURS * 60 * 60,
};
