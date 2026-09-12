import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/admin/auth";

/**
 * Protege el panel de administración. `/panel/login` queda abierto; todo el resto
 * de `/panel/*` y de `/api/panel/*` exige una cookie de sesión válida.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isLogin = pathname === "/panel/login" || pathname === "/api/panel/login";
  if (isLogin) return NextResponse.next();

  if (await verifySession(request.cookies.get(SESSION_COOKIE)?.value)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const url = request.nextUrl.clone();
  url.pathname = "/panel/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/panel/:path*", "/api/panel/:path*"],
};
