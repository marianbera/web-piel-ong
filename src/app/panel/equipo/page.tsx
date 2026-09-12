import TeamEditor from "@/components/panel/TeamEditor";
import { getTeamGroups } from "@/lib/admin/store";

export const dynamic = "force-dynamic";

export default async function PanelEquipoPage() {
  const groups = await getTeamGroups();

  return (
    <>
      <h1 className="text-3xl font-bold text-piel-navy">Equipo médico</h1>
      <p className="mt-3 max-w-2xl text-piel-text/75">
        Los profesionales se muestran agrupados por área en la página de Equipo. Podés
        agregar, editar, reordenar o dar de baja a cualquiera, y subirle la foto.
      </p>

      <div className="mt-8">
        <TeamEditor initial={groups} />
      </div>
    </>
  );
}
