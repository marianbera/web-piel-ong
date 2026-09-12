"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SCHEMAS } from "@/lib/admin/schemas";

const LINKS = [
  { href: "/panel", label: "Inicio" },
  { href: "/panel/equipo", label: "Equipo médico" },
  { href: "/panel/donaciones", label: "Donaciones" },
  ...Object.entries(SCHEMAS).map(([key, schema]) => ({
    href: `/panel/${key}`,
    label: schema.title,
  })),
];

export default function PanelNav() {
  const pathname = usePathname();
  const router = useRouter();

  // En el login todavía no hay sesión: no se muestra la navegación ni el logout.
  const onLoginPage = pathname === "/panel/login";

  const logout = async () => {
    await fetch("/api/panel/logout", { method: "POST" });
    router.replace("/panel/login");
    router.refresh();
  };

  if (onLoginPage) return null;

  return (
    <header className="border-b border-piel-navy/10 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
        <span className="mr-2 font-heading text-lg font-bold text-piel-navy">PIEL</span>
        <nav className="flex flex-1 flex-wrap gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-piel-navy font-semibold text-white"
                    : "text-piel-text/70 hover:bg-piel-offwhite hover:text-piel-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => void logout()}
          className="rounded-full border border-piel-navy/20 px-4 py-1.5 text-sm font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
