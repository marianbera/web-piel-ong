import Script from "next/script";
import MetaPixelPageView from "@/components/analytics/MetaPixelPageView";

/**
 * ID del Meta Pixel de PIEL (medición de la pauta en Facebook/Instagram).
 * Es público: viaja igual en el HTML de cada página. Se puede cambiar sin tocar
 * código con la variable `NEXT_PUBLIC_META_PIXEL_ID` (que, como toda NEXT_PUBLIC_*,
 * se lee al compilar).
 */
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1177959361247481";

/**
 * Meta Pixel: script base + PageView en cada cambio de ruta.
 *
 * - `afterInteractive`: carga después de que la página es interactiva, así que no
 *   bloquea el render. Si tarda o falla (bloqueador, sin red), el sitio sigue igual.
 * - Solo en builds de producción: `next dev` no ensucia las estadísticas de la pauta.
 * - Va en el layout del sitio público, no en el del panel: el panel no se mide.
 */
export default function MetaPixel() {
  // El ID se interpola dentro de un script: solo se aceptan dígitos.
  if (process.env.NODE_ENV !== "production" || !/^\d+$/.test(META_PIXEL_ID)) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* Fallback sin JavaScript: el píxel de 1×1 que documenta Meta. No es una imagen
            de contenido, así que next/image no aplica. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
      <MetaPixelPageView />
    </>
  );
}
