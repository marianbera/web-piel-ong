"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { mainNav } from "@/lib/content/navigation";

export default function Navbar() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (href: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenSection(href);
  };

  // Cierre con un pequeño delay de gracia: evita que el desplegable se cierre
  // mientras el mouse cruza hacia él.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenSection(null), 150);
  };

  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenSection(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-piel-cream bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo-piel.png"
            alt="Asociación PIEL"
            width={48}
            height={48}
            priority
            className="h-12 w-12"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((section) => (
            <li
              key={section.href}
              className="relative"
              onMouseEnter={() => openMenu(section.href)}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={section.href}
                className="block px-3 py-2 text-sm font-medium text-piel-text hover:text-piel-navy"
                onFocus={() => openMenu(section.href)}
              >
                {section.label}
              </Link>
              {openSection === section.href && (
                // pt-2 = puente invisible entre el link y la tarjeta, para que el
                // hover sea continuo y el menú no se cierre al pasar el mouse.
                <div className="absolute left-0 top-full w-72 pt-2">
                  <div className="rounded-lg border border-piel-cream bg-white p-3 shadow-lg">
                    <ul className="flex flex-col gap-1">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block rounded-md px-3 py-2 hover:bg-piel-blue-soft/15"
                            onClick={closeNow}
                          >
                            <span className="block text-sm font-medium text-piel-text">
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="block text-xs text-piel-text/70">
                                {link.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/como-acceder/consultas"
            className="rounded-full border-2 border-piel-navy px-4 py-2 text-sm font-semibold text-piel-navy hover:bg-piel-navy hover:text-white transition"
          >
            Solicitar consulta
          </Link>
          <Link
            href="/se-parte/donar"
            className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Donar
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-piel-navy lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {mobileOpen ? (
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-piel-cream px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {mainNav.map((section) => (
              <li key={section.href} className="border-b border-piel-cream py-2">
                <Link
                  href={section.href}
                  className="block py-1 text-sm font-semibold text-piel-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {section.label}
                </Link>
                <ul className="flex flex-col gap-1 pl-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-1 text-sm text-piel-text"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/como-acceder/consultas"
              className="rounded-full border-2 border-piel-navy px-4 py-2 text-center text-sm font-semibold text-piel-navy"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar consulta
            </Link>
            <Link
              href="/se-parte/donar"
              className="rounded-full bg-secondary px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Donar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
