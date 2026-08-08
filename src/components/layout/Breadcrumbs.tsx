"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/content/navigation";
import { HomeIcon } from "@/components/ui/icons";

/**
 * Migas de pan derivadas automáticamente del nav principal y la ruta actual.
 * No requiere datos por página.
 */
export default function Breadcrumbs() {
  const pathname = usePathname();

  const trail: { label: string; href: string }[] = [];
  for (const section of mainNav) {
    if (pathname === section.href || pathname.startsWith(`${section.href}/`)) {
      trail.push({ label: section.label, href: section.href });
      const link = section.links.find((l) => l.href === pathname);
      if (link) trail.push({ label: link.label, href: link.href });
      break;
    }
  }

  if (trail.length === 0) return null;

  return (
    <nav aria-label="Ruta de navegación">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/70">
        <li className="flex items-center">
          <Link href="/" aria-label="Inicio" className="hover:text-white">
            <HomeIcon className="h-4 w-4" />
          </Link>
        </li>
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              <span aria-hidden className="text-white/40">
                ›
              </span>
              {isLast ? (
                <span aria-current="page" className="font-semibold text-white">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
