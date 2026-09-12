import Link from "next/link";
import {
  isDonationsDbConfigured,
  listarDonaciones,
  obtenerResumen,
  type Donacion,
  type EstadoDonacion,
} from "@/lib/donaciones/db";
import { isMercadoPagoConfigured } from "@/lib/donaciones/mercadopago";
import ExportarCsv from "@/components/panel/ExportarCsv";

export const dynamic = "force-dynamic";

const pesos = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

const fecha = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const ESTADO_ESTILO: Record<EstadoDonacion, string> = {
  aprobada: "bg-green-100 text-green-800",
  pendiente: "bg-amber-100 text-amber-800",
  rechazada: "bg-red-100 text-red-800",
  devuelta: "bg-slate-200 text-slate-700",
};

function Aviso({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-2xl border border-dashed border-piel-navy/20 bg-white p-6">
      <h2 className="font-semibold text-piel-navy">{titulo}</h2>
      <div className="mt-2 text-sm text-piel-text/75">{children}</div>
    </div>
  );
}

export default async function PanelDonacionesPage() {
  if (!isDonationsDbConfigured()) {
    return (
      <>
        <h1 className="text-3xl font-bold text-piel-navy">Donaciones</h1>
        <Aviso titulo="Falta conectar la base de datos">
          En Vercel: pestaña <strong>Storage</strong> → <em>Create Database</em> →{" "}
          <strong>Neon Postgres</strong> → conectar a este proyecto. Después hay que
          redeployar. El detalle está en <code>MERCADOPAGO-PIEL.md</code>.
        </Aviso>
      </>
    );
  }

  let donaciones: Donacion[] = [];
  let resumen = {
    totalAprobadoMes: 0,
    cantidadAprobadaMes: 0,
    totalAprobadoHistorico: 0,
    cantidadPendiente: 0,
  };
  let error: string | null = null;

  try {
    [donaciones, resumen] = await Promise.all([listarDonaciones(), obtenerResumen()]);
  } catch (caught) {
    console.error("[panel] error leyendo donaciones", caught);
    error = "No se pudo leer la base de datos. Revisá la conexión en Vercel → Storage.";
  }

  const tarjetas = [
    { label: "Recaudado este mes", value: pesos.format(resumen.totalAprobadoMes) },
    { label: "Donaciones este mes", value: String(resumen.cantidadAprobadaMes) },
    { label: "Total histórico", value: pesos.format(resumen.totalAprobadoHistorico) },
    { label: "Pendientes de pago", value: String(resumen.cantidadPendiente) },
  ];

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-piel-navy">Donaciones</h1>
          <p className="mt-2 max-w-2xl text-piel-text/75">
            Cada donación iniciada desde el sitio queda registrada acá, con el estado que
            informa Mercado Pago.
          </p>
        </div>
        {donaciones.length > 0 && <ExportarCsv donaciones={donaciones} />}
      </div>

      {!isMercadoPagoConfigured() && (
        <Aviso titulo="Mercado Pago todavía no está habilitado">
          Falta cargar <code>MP_ACCESS_TOKEN</code> y <code>MP_WEBHOOK_SECRET</code> en las
          variables de entorno del proyecto. Mientras tanto, la página de Donar muestra solo
          la transferencia bancaria.
        </Aviso>
      )}

      {error ? (
        <Aviso titulo="Error de conexión">{error}</Aviso>
      ) : (
        <>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tarjetas.map((tarjeta) => (
              <li key={tarjeta.label} className="rounded-2xl border border-piel-navy/10 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-piel-burgundy">
                  {tarjeta.label}
                </p>
                <p className="mt-2 text-2xl font-bold tabular-nums text-piel-navy">
                  {tarjeta.value}
                </p>
              </li>
            ))}
          </ul>

          {donaciones.length === 0 ? (
            <Aviso titulo="Todavía no hay donaciones registradas">
              En cuanto alguien done desde{" "}
              <Link href="/se-parte/donar" className="font-semibold text-piel-navy underline">
                la página de Donar
              </Link>
              , va a aparecer acá.
            </Aviso>
          ) : (
            <div className="mt-8 overflow-x-auto rounded-2xl border border-piel-navy/10 bg-white">
              <table className="w-full min-w-[52rem] text-left text-sm">
                <thead className="border-b border-piel-navy/10 text-xs uppercase tracking-wide text-piel-text/60">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Fecha</th>
                    <th className="px-4 py-3 font-semibold">Donante</th>
                    <th className="px-4 py-3 text-right font-semibold">Monto</th>
                    <th className="px-4 py-3 font-semibold">Estado</th>
                    <th className="px-4 py-3 font-semibold">Medio</th>
                    <th className="px-4 py-3 font-semibold">ID de pago</th>
                  </tr>
                </thead>
                <tbody>
                  {donaciones.map((donacion) => (
                    <tr key={donacion.id} className="border-b border-piel-navy/5 last:border-0">
                      <td className="whitespace-nowrap px-4 py-3 tabular-nums text-piel-text/70">
                        {fecha.format(new Date(donacion.creado_en))}
                      </td>
                      <td className="px-4 py-3">
                        <span className="block font-medium text-piel-navy">{donacion.nombre}</span>
                        <span className="block text-xs text-piel-text/60">{donacion.email}</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right font-semibold tabular-nums text-piel-navy">
                        {pesos.format(Number(donacion.monto))}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${
                            ESTADO_ESTILO[donacion.estado]
                          }`}
                        >
                          {donacion.estado}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-piel-text/70">{donacion.metodo_pago ?? "—"}</td>
                      <td className="px-4 py-3 font-mono text-xs text-piel-text/60">
                        {donacion.mp_payment_id ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="mt-4 text-xs text-piel-text/60">
            Se muestran las últimas 200 donaciones. El estado lo confirma Mercado Pago: una
            donación puede quedar <strong>pendiente</strong> si se eligió efectivo o
            transferencia, y pasa a <strong>aprobada</strong> cuando se acredita.
          </p>
        </>
      )}
    </>
  );
}
