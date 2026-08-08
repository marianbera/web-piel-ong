"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { StackImage } from "@/types/home";

// Cómo se ve cada foto según su profundidad en la pila (0 = adelante).
// Las de atrás se corren a la derecha y se achican, así asoma su borde de costado.
const DEPTH_STYLES = [
  "z-30 translate-x-0 scale-100",
  "z-20 translate-x-8 scale-[0.96]",
  "z-10 translate-x-16 scale-[0.92]",
];

export default function HistoriasStack({ images }: { images: StackImage[] }) {
  const count = images.length;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (count <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setActive((prev) => (prev + 1) % count), 4500);
    return () => clearInterval(timer);
  }, [count]);

  return (
    // El pr- reserva el espacio hacia donde asoman las fotos de atrás, para que el
    // apilado nunca se desborde del ancho de la columna.
    <div className="mx-auto w-full max-w-sm pr-16 lg:max-w-md">
      <div className="relative aspect-[4/5] w-full">
        {images.map((image, i) => {
          const depth = (i - active + count) % count;
          return (
            <div
              key={image.src}
              className={`absolute inset-0 overflow-hidden rounded-3xl shadow-xl ring-1 ring-piel-navy/10 transition-transform duration-700 ease-out ${
                DEPTH_STYLES[depth] ?? "z-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 26rem, (min-width: 640px) 22rem, 90vw"
                className={`object-cover ${image.position ?? "object-center"}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
