import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { isStoreConfigured } from "@/lib/admin/store";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
]);

/** Nombre de archivo seguro y único, sin depender del que subió el usuario. */
function safeName(originalName: string, extension: string) {
  const base = originalName
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
  return `${base || "imagen"}-${crypto.randomUUID().slice(0, 8)}.${extension}`;
}

/**
 * Subida de imágenes del panel a Vercel Blob.
 *
 * En Vercel no se puede escribir en `public/`: el filesystem es de solo lectura
 * y cualquier archivo guardado ahí desaparecería en el siguiente despliegue.
 */
export async function POST(request: Request) {
  if (!isStoreConfigured()) {
    return NextResponse.json(
      {
        error:
          "Falta configurar el almacenamiento de imágenes. En Vercel: pestaña Storage → crear un Blob Store y conectarlo a este proyecto.",
      },
      { status: 503 }
    );
  }

  const form = await request.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No llegó ningún archivo." }, { status: 400 });
  }
  const extension = ALLOWED.get(file.type);
  if (!extension) {
    return NextResponse.json(
      { error: "Formato no permitido. Subí un JPG, PNG o WEBP." },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "La imagen supera los 5 MB." }, { status: 400 });
  }

  try {
    const blob = await put(`imagenes/${safeName(file.name, extension)}`, file, {
      access: "public",
      contentType: file.type,
      // El nombre ya lleva un sufijo aleatorio propio, así que no hace falta otro.
      addRandomSuffix: false,
    });
    return NextResponse.json({ src: blob.url });
  } catch (error) {
    console.error("[panel] error al subir imagen", error);
    return NextResponse.json({ error: "No se pudo guardar la imagen." }, { status: 500 });
  }
}
