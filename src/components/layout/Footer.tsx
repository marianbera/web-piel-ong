import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/lib/content/navigation";
import { siteContact, siteName } from "@/lib/content/site";
import { DocumentIcon, GlobeIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";
import NewsletterForm from "./NewsletterForm";

const quickAccess = [
  {
    icon: PhoneIcon,
    title: "Contactanos",
    subtitle: "Estamos para acompañarte",
    href: `tel:${siteContact.phone.replace(/\s/g, "")}`,
  },
  {
    // TODO(PIEL): el mockup dice "Atención en CABA" pero la sede registrada es Avellaneda — confirmar.
    icon: MapPinIcon,
    title: "Dónde estamos",
    subtitle: "Avellaneda, Buenos Aires",
    href: "/contacto",
  },
  {
    icon: DocumentIcon,
    title: "Derivaciones médicas",
    subtitle: "Información para profesionales",
    href: "/como-acceder/medicos",
  },
  {
    icon: GlobeIcon,
    title: "Pacientes internacionales",
    subtitle: "Desde cualquier parte del mundo",
    href: "/como-acceder/internacional",
  },
];

export default function Footer() {
  return (
    <footer className="bg-piel-navy text-white">
      <div className="border-b border-white/15">
        <ul className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {quickAccess.map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-piel-blue-soft">
                  <Icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{item.title}</span>
                  <span className="block text-xs text-white/70">{item.subtitle}</span>
                </span>
              </>
            );
            return (
              <li key={item.title}>
                {item.href.startsWith("/") ? (
                  <Link href={item.href} className="flex items-center gap-3 transition hover:opacity-80">
                    {inner}
                  </Link>
                ) : (
                  <a href={item.href} className="flex items-center gap-3 transition hover:opacity-80">
                    {inner}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-block rounded-2xl bg-white p-2">
            <Image src="/brand/logo-piel.png" alt="Asociación PIEL" width={56} height={56} />
          </div>
          <p className="mt-3 font-heading text-xl font-bold">{siteName}</p>
          {/* TODO(PIEL): actualizar años de experiencia a 2026 (los docs dicen "más de 35 años"). */}
          <p className="mt-3 text-sm text-white/80">
            Más de 35 años acompañando a niños y familias en el tratamiento integral de
            fisuras labio alvéolo palatinas.
          </p>
          {/* TODO(PIEL): el cliente quiere una nota que explique el porqué del nombre "PIEL" (logo retocado). Falta el texto. */}
          <div className="mt-4 flex gap-4">
            <a
              href={siteContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white"
            >
              Instagram
            </a>
            <a
              href={siteContact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>

        <nav aria-label="Mapa del sitio">
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Navegación
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Contacto
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-white/80">
            <li>{siteContact.address}</li>
            <li>
              <a href={`tel:${siteContact.phone}`} className="hover:text-white">
                {siteContact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteContact.email}`} className="hover:text-white">
                {siteContact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Newsletter
          </p>
          <p className="mt-3 text-sm text-white/80">
            Recibí novedades y noticias de PIEL.
          </p>
          <div className="mt-3">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 px-4 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {siteName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
