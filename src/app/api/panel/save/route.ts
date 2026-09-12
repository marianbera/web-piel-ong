import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { write } from "@/lib/admin/store";
import { COLLECTIONS, type CollectionName } from "@/lib/admin/types";

/** Páginas públicas que hay que refrescar cuando cambia cada colección. */
const AFFECTED_PATHS: Record<CollectionName, string[]> = {
  equipo: ["/quienes-somos/equipo"],
  prensa: ["/quienes-somos/prensa"],
  historias: ["/historias"],
  logos: ["/quienes-somos/nosotros", "/se-parte/empresas"],
  premios: ["/quienes-somos/premios"],
  "obras-sociales": ["/como-acceder/obras-sociales"],
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const collection = body?.collection as CollectionName | undefined;

  if (!collection || !COLLECTIONS.includes(collection)) {
    return NextResponse.json({ error: "Colección desconocida." }, { status: 400 });
  }
  if (!Array.isArray(body.data)) {
    return NextResponse.json({ error: "Los datos tienen que ser una lista." }, { status: 400 });
  }

  try {
    await write(collection, body.data);
  } catch (error) {
    console.error("[panel] error al guardar", collection, error);
    const message =
      error instanceof Error && error.message.includes("almacenamiento")
        ? error.message
        : "No se pudo guardar. Probá de nuevo en un momento.";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  for (const path of AFFECTED_PATHS[collection]) revalidatePath(path);
  return NextResponse.json({ ok: true });
}
