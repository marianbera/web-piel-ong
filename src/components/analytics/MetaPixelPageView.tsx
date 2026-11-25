"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type Fbq = (command: "track", event: "PageView") => void;

/**
 * Registra un PageView del Meta Pixel en cada navegación del lado del cliente.
 *
 * El sitio navega sin recargar la página (App Router), así que el script base solo
 * vería la primera carga. El PageView inicial ya lo manda el script base: acá se
 * salta el primer render para no contarlo dos veces.
 *
 * Si el script todavía no cargó o lo bloqueó el navegador, `window.fbq` no existe y
 * no se hace nada: nunca rompe la navegación.
 */
export default function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fbq = (window as Window & { fbq?: Fbq }).fbq;
    if (typeof fbq === "function") fbq("track", "PageView");
  }, [pathname]);

  return null;
}
