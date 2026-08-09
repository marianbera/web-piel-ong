/**
 * Declaración de un hueco de imagen de contenido.
 *
 * La ruta se declara **por adelantado**. Mientras `pending` sea `true`, la página
 * muestra el placeholder de marca (`ui/ImageSlot`); en cuanto el archivo exista en
 * esa ruta, alcanza con borrar la línea `pending: true`.
 */
export interface ContentImage {
  /** Ruta dentro de `public/`. */
  src: string;
  /** Texto alternativo: describe qué se ve, para lectores de pantalla. */
  alt: string;
  /** Epígrafe visible. También es el brief de qué imagen hace falta. */
  caption: string;
  /** Mientras esté en `true` se muestra el placeholder en vez de la imagen. */
  pending?: boolean;
}

/** Devuelve la ruta solo si el archivo ya fue entregado. */
export function imageSrc(image: ContentImage): string | undefined {
  return image.pending ? undefined : image.src;
}
