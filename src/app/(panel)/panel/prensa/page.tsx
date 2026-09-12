import CollectionEditor from "@/components/panel/CollectionEditor";
import { getCollection } from "@/lib/admin/store";
import { SCHEMAS } from "@/lib/admin/schemas";

export const dynamic = "force-dynamic";

const COLLECTION = "prensa" as const;

export default async function PanelPage() {
  const schema = SCHEMAS[COLLECTION];
  const rows = (await getCollection(COLLECTION)) as never;

  return (
    <>
      <h1 className="text-3xl font-bold text-piel-navy">{schema.title}</h1>
      <p className="mt-3 max-w-2xl text-piel-text/75">{schema.description}</p>

      <div className="mt-8">
        <CollectionEditor
          collection={COLLECTION}
          schema={schema}
          initial={rows}
          noun="nota"
        />
      </div>
    </>
  );
}
