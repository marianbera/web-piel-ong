// Marca de énfasis para los textos de `lib/content`: lo que va entre **dobles asteriscos**
// se renderiza en negrita. Evita meter HTML crudo en el contenido.
const BOLD_PATTERN = /(\*\*[^*]+\*\*)/;

export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(BOLD_PATTERN).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={`${i}-${part}`} className="font-semibold text-piel-navy">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}
