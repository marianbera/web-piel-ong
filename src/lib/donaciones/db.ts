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
 *
 * Dos tablas:
 * - `donaciones`: cada movimiento de plata. Un aporte único es una fila; un
 *   aporte mensual suma una fila por cada cobro del mes.
 * - `suscripciones`: quién tiene un aporte mensual y en qué estado está. No
 *   suma plata por sí misma: la plata son sus cobros, en `donaciones`.
 */

export type EstadoDonacion = "pendiente" | "aprobada" | "rechazada" | "devuelta";
export type FrecuenciaDonacion = "unica" | "mensual";
export type EstadoSuscripcion = "pendiente" | "activa" | "pausada" | "cancelada";

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
  /** Solo en los cobros de un aporte mensual: la suscripción que los generó. */
  mp_preapproval_id: string | null;
}

export interface Suscripcion {
  id: number;
  creado_en: string;
  actualizado_en: string;
  nombre: string;
  email: string;
  monto: string;
  moneda: string;
  estado: EstadoSuscripcion;
  referencia: string;
  mp_preapproval_id: string | null;
  mp_status: string | null;
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
      // Agregada con el aporte mensual: el ALTER cubre las bases creadas antes.
      await sql`ALTER TABLE donaciones ADD COLUMN IF NOT EXISTS mp_preapproval_id TEXT`;

      await sql`
        CREATE TABLE IF NOT EXISTS suscripciones (
          id                BIGSERIAL PRIMARY KEY,
          creado_en         TIMESTAMPTZ   NOT NULL DEFAULT now(),
          actualizado_en    TIMESTAMPTZ   NOT NULL DEFAULT now(),
          nombre            TEXT          NOT NULL,
          email             TEXT          NOT NULL,
          monto             NUMERIC(12,2) NOT NULL,
          moneda            TEXT          NOT NULL DEFAULT 'ARS',
          estado            TEXT          NOT NULL DEFAULT 'pendiente',
          referencia        TEXT          NOT NULL UNIQUE,
          mp_preapproval_id TEXT UNIQUE,
          mp_status         TEXT,
          origen            TEXT
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS suscripciones_estado_idx ON suscripciones (estado)`;
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

/* ── Aporte mensual ───────────────────────────────────────────────────────── */

/** Registra la intención de un aporte mensual, antes de mandar a la persona a MP. */
export async function crearSuscripcionPendiente(datos: {
  nombre: string;
  email: string;
  monto: number;
  referencia: string;
  origen?: string;
}) {
  await ensureSchema();
  const sql = client();
  await sql`
    INSERT INTO suscripciones (nombre, email, monto, referencia, origen)
    VALUES (${datos.nombre}, ${datos.email}, ${datos.monto}, ${datos.referencia}, ${datos.origen ?? null})
  `;
}

/**
 * Aplica el estado de una suscripción (alta, pausa, baja) que informa Mercado Pago.
 * Idempotente, igual que los pagos. Se busca por nuestra referencia y, si no
 * está, por el id de la suscripción; si no aparece por ninguno, se inserta.
 */
export async function registrarEstadoSuscripcion(datos: {
  referencia: string | null;
  preapprovalId: string;
  estado: EstadoSuscripcion;
  mpStatus: string;
  /** `null` si MP no lo informa: se conserva el que ya estaba. */
  monto: number | null;
  email: string;
}) {
  await ensureSchema();
  const sql = client();

  const actualizadas = await sql`
    UPDATE suscripciones SET
      estado            = ${datos.estado},
      mp_preapproval_id = ${datos.preapprovalId},
      mp_status         = ${datos.mpStatus},
      monto             = COALESCE(${datos.monto}, monto),
      actualizado_en    = now()
    WHERE referencia = ${datos.referencia ?? ""} OR mp_preapproval_id = ${datos.preapprovalId}
    RETURNING id
  `;
  if (actualizadas.length > 0) return;

  await sql`
    INSERT INTO suscripciones (
      nombre, email, monto, estado, referencia, mp_preapproval_id, mp_status, origen
    )
    VALUES (
      'Sin nombre', ${datos.email}, ${datos.monto ?? 0}, ${datos.estado},
      ${datos.referencia ?? `mp-${datos.preapprovalId}`}, ${datos.preapprovalId},
      ${datos.mpStatus}, 'mercadopago'
    )
    ON CONFLICT (mp_preapproval_id) DO UPDATE SET
      estado         = EXCLUDED.estado,
      mp_status      = EXCLUDED.mp_status,
      actualizado_en = now()
  `;
}

/**
 * Registra un cobro mensual como una donación más, atada a su suscripción.
 *
 * Mercado Pago avisa cada cobro por dos vías (`payment` y
 * `subscription_authorized_payment`). Las dos llegan acá con el mismo id de
 * pago, que es único en la tabla: la segunda actualiza la fila de la primera en
 * vez de duplicar la plata.
 */
export async function registrarCobroSuscripcion(cobro: {
  paymentId: string;
  preapprovalId: string | null;
  /** Nuestra referencia, si MP la devuelve: sirve si el cobro llega antes que el alta. */
  referencia: string | null;
  estado: EstadoDonacion;
  mpStatus: string;
  monto: number;
  metodoPago: string | null;
  /** Datos del pagador según MP, por si la suscripción no está registrada. */
  nombre: string;
  email: string;
}) {
  await ensureSchema();
  const sql = client();

  // Nombre y email los dejó la persona en el formulario: se toman de su suscripción.
  const [suscripcion] = await sql`
    SELECT nombre, email, origen, mp_preapproval_id FROM suscripciones
    WHERE mp_preapproval_id = ${cobro.preapprovalId ?? ""} OR referencia = ${cobro.referencia ?? ""}
    LIMIT 1
  `;
  const preapprovalId = cobro.preapprovalId ?? suscripcion?.mp_preapproval_id ?? null;

  await sql`
    INSERT INTO donaciones (
      nombre, email, monto, frecuencia, tipo, estado, referencia,
      mp_payment_id, mp_status, metodo_pago, origen, mp_preapproval_id
    )
    VALUES (
      ${suscripcion?.nombre ?? cobro.nombre}, ${suscripcion?.email ?? cobro.email},
      ${cobro.monto}, 'mensual', 'individual', ${cobro.estado}, ${`mp-${cobro.paymentId}`},
      ${cobro.paymentId}, ${cobro.mpStatus}, ${cobro.metodoPago},
      ${suscripcion?.origen ?? "mercadopago"}, ${preapprovalId}
    )
    ON CONFLICT (mp_payment_id) DO UPDATE SET
      estado            = EXCLUDED.estado,
      mp_status         = EXCLUDED.mp_status,
      metodo_pago       = COALESCE(EXCLUDED.metodo_pago, donaciones.metodo_pago),
      mp_preapproval_id = COALESCE(donaciones.mp_preapproval_id, EXCLUDED.mp_preapproval_id),
      actualizado_en    = now()
  `;
}

/** ¿Esta referencia es de un aporte mensual? Red de seguridad del webhook de pagos. */
export async function esReferenciaDeSuscripcion(referencia: string) {
  await ensureSchema();
  const sql = client();
  const filas = await sql`SELECT 1 FROM suscripciones WHERE referencia = ${referencia} LIMIT 1`;
  return filas.length > 0;
}

/* ── Lectura para el panel ────────────────────────────────────────────────── */

export interface ResumenDonaciones {
  totalAprobadoMes: number;
  cantidadAprobadaMes: number;
  totalAprobadoHistorico: number;
  cantidadPendiente: number;
  suscripcionesActivas: number;
  /** Lo que suman por mes los aportes mensuales activos. */
  aporteMensualActivo: number;
}

/** Totales para las tarjetas de arriba del panel. */
export async function obtenerResumen(): Promise<ResumenDonaciones> {
  await ensureSchema();
  const sql = client();
  const [[fila], [mensual]] = await Promise.all([
    sql`
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
    `,
    sql`
      SELECT COUNT(*) AS activas, COALESCE(SUM(monto), 0) AS monto_activo
      FROM suscripciones
      WHERE estado = 'activa'
    `,
  ]);

  return {
    totalAprobadoMes: Number(fila.total_mes),
    cantidadAprobadaMes: Number(fila.cantidad_mes),
    totalAprobadoHistorico: Number(fila.total_historico),
    cantidadPendiente: Number(fila.pendientes),
    suscripcionesActivas: Number(mensual.activas),
    aporteMensualActivo: Number(mensual.monto_activo),
  };
}

/** Aportes mensuales para el panel, de la más nueva a la más vieja. */
export async function listarSuscripciones(limite = 200): Promise<Suscripcion[]> {
  await ensureSchema();
  const sql = client();
  const filas = await sql`
    SELECT * FROM suscripciones ORDER BY creado_en DESC LIMIT ${limite}
  `;
  return filas as Suscripcion[];
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
