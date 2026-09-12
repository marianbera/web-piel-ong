import { neon } from "@neondatabase/serverless";

/**
 * Registro de donaciones, en Neon Postgres.
 *
 * ¿Por qué una base y no un JSON en Blob como el resto del contenido del panel?
 * Porque acá se guarda plata. Si dos webhooks de Mercado Pago llegan al mismo
 * tiempo, un ciclo "leer JSON → agregar → escribir JSON" pierde uno de los dos
 * registros. Un INSERT es atómico y no tiene ese problema.
 *
 * La conexión sale de `DATABASE_URL` (o `POSTGRES_URL`), que Vercel inyecta sola
 * al conectar la base Neon desde la pestaña Storage del proyecto.
 */

export type EstadoDonacion = "pendiente" | "aprobada" | "rechazada" | "devuelta";
export type FrecuenciaDonacion = "unica" | "mensual";

export interface Donacion {
  id: number;
  creado_en: string;
  actualizado_en: string;
  nombre: string;
  email: string;
  monto: string;
  moneda: string;
  frecuencia: FrecuenciaDonacion;
  tipo: string;
  estado: EstadoDonacion;
  referencia: string;
  mp_payment_id: string | null;
  mp_status: string | null;
  metodo_pago: string | null;
  origen: string | null;
}

function connectionString() {
  return process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
}

export function isDonationsDbConfigured() {
  return Boolean(connectionString());
}

function client() {
  const url = connectionString();
  if (!url) {
    throw new Error(
      "Falta la base de datos de donaciones. En Vercel: pestaña Storage → crear una base Neon Postgres y conectarla a este proyecto."
    );
  }
  return neon(url);
}

/**
 * Crea la tabla si no existe. Se ejecuta una sola vez por instancia de función:
 * así no hace falta un paso de migración manual al desplegar.
 */
let schemaReady: Promise<void> | null = null;

function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = client();
      await sql`
        CREATE TABLE IF NOT EXISTS donaciones (
          id             BIGSERIAL PRIMARY KEY,
          creado_en      TIMESTAMPTZ  NOT NULL DEFAULT now(),
          actualizado_en TIMESTAMPTZ  NOT NULL DEFAULT now(),
          nombre         TEXT         NOT NULL,
          email          TEXT         NOT NULL,
          monto          NUMERIC(12,2) NOT NULL,
          moneda         TEXT         NOT NULL DEFAULT 'ARS',
          frecuencia     TEXT         NOT NULL DEFAULT 'unica',
          tipo           TEXT         NOT NULL DEFAULT 'individual',
          estado         TEXT         NOT NULL DEFAULT 'pendiente',
          referencia     TEXT         NOT NULL UNIQUE,
          mp_payment_id  TEXT UNIQUE,
          mp_status      TEXT,
          metodo_pago    TEXT,
          origen         TEXT
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS donaciones_creado_en_idx ON donaciones (creado_en DESC)`;
      await sql`CREATE INDEX IF NOT EXISTS donaciones_estado_idx ON donaciones (estado)`;
    })().catch((error) => {
      // Si falla, se reintenta en la próxima llamada en vez de quedar cacheado en error.
      schemaReady = null;
      throw error;
    });
  }
  return schemaReady;
}

/** Registra la intención de donar, antes de mandar a la persona a Mercado Pago. */
export async function crearDonacionPendiente(datos: {
  nombre: string;
  email: string;
  monto: number;
  frecuencia: FrecuenciaDonacion;
  tipo: string;
  referencia: string;
  origen?: string;
}) {
  await ensureSchema();
  const sql = client();
  await sql`
    INSERT INTO donaciones (nombre, email, monto, frecuencia, tipo, referencia, origen)
    VALUES (
      ${datos.nombre}, ${datos.email}, ${datos.monto}, ${datos.frecuencia},
      ${datos.tipo}, ${datos.referencia}, ${datos.origen ?? null}
    )
  `;
}

/**
 * Aplica el resultado que informa Mercado Pago.
 *
 * Es idempotente a propósito: MP reintenta los webhooks, así que la misma
 * notificación puede llegar varias veces y el resultado tiene que ser el mismo.
 * Si el pago no coincide con ninguna intención registrada (por ejemplo, un cobro
 * hecho desde fuera del sitio), se inserta igual para no perder el registro.
 */
export async function registrarResultadoPago(pago: {
  referencia: string | null;
  paymentId: string;
  estado: EstadoDonacion;
  mpStatus: string;
  monto: number;
  metodoPago: string | null;
  nombre: string;
  email: string;
}) {
  await ensureSchema();
  const sql = client();

  if (pago.referencia) {
    const actualizadas = await sql`
      UPDATE donaciones SET
        estado         = ${pago.estado},
        mp_payment_id  = ${pago.paymentId},
        mp_status      = ${pago.mpStatus},
        metodo_pago    = ${pago.metodoPago},
        monto          = ${pago.monto},
        actualizado_en = now()
      WHERE referencia = ${pago.referencia}
      RETURNING id
    `;
    if (actualizadas.length > 0) return;
  }

  // Pago sin intención previa: se guarda igual, marcado con su propia referencia.
  await sql`
    INSERT INTO donaciones (
      nombre, email, monto, frecuencia, tipo, estado,
      referencia, mp_payment_id, mp_status, metodo_pago, origen
    )
    VALUES (
      ${pago.nombre}, ${pago.email}, ${pago.monto}, 'unica', 'individual', ${pago.estado},
      ${pago.referencia ?? `mp-${pago.paymentId}`}, ${pago.paymentId}, ${pago.mpStatus},
      ${pago.metodoPago}, 'mercadopago'
    )
    ON CONFLICT (mp_payment_id) DO UPDATE SET
      estado         = EXCLUDED.estado,
      mp_status      = EXCLUDED.mp_status,
      actualizado_en = now()
  `;
}

export interface ResumenDonaciones {
  totalAprobadoMes: number;
  cantidadAprobadaMes: number;
  totalAprobadoHistorico: number;
  cantidadPendiente: number;
}

/** Totales para las tarjetas de arriba del panel. */
export async function obtenerResumen(): Promise<ResumenDonaciones> {
  await ensureSchema();
  const sql = client();
  const [fila] = await sql`
    SELECT
      COALESCE(SUM(monto) FILTER (
        WHERE estado = 'aprobada' AND creado_en >= date_trunc('month', now())
      ), 0) AS total_mes,
      COUNT(*) FILTER (
        WHERE estado = 'aprobada' AND creado_en >= date_trunc('month', now())
      ) AS cantidad_mes,
      COALESCE(SUM(monto) FILTER (WHERE estado = 'aprobada'), 0) AS total_historico,
      COUNT(*) FILTER (WHERE estado = 'pendiente') AS pendientes
    FROM donaciones
  `;

  return {
    totalAprobadoMes: Number(fila.total_mes),
    cantidadAprobadaMes: Number(fila.cantidad_mes),
    totalAprobadoHistorico: Number(fila.total_historico),
    cantidadPendiente: Number(fila.pendientes),
  };
}

/** Listado para la tabla del panel, de la más nueva a la más vieja. */
export async function listarDonaciones(limite = 200): Promise<Donacion[]> {
  await ensureSchema();
  const sql = client();
  const filas = await sql`
    SELECT * FROM donaciones ORDER BY creado_en DESC LIMIT ${limite}
  `;
  return filas as Donacion[];
}
