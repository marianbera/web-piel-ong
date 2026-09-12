"use client";

import type { Donacion } from "@/lib/donaciones/db";

const COLUMNAS = [
  "Fecha",
  "Nombre",
  "Email",
  "Monto",
  "Moneda",
  "Estado",
  "Medio de pago",
  "ID de pago",
  "Referencia",
] as const;

/**
 * Escapa un valor para CSV.
 *
 * El apóstrofo inicial en valores que empiezan con =, +, - o @ evita que Excel
 * los interprete como fórmulas: es el clásico agujero de "CSV injection", y acá
 * los nombres los escribe cualquiera desde el formulario público.
 */
function escapar(valor: string) {
  const seguro = /^[=+\-@]/.test(valor) ? `'${valor}` : valor;
  return `"${seguro.replace(/"/g, '""')}"`;
}

export default function ExportarCsv({ donaciones }: { donaciones: Donacion[] }) {
  const descargar = () => {
    const filas = donaciones.map((donacion) =>
      [
        new Date(donacion.creado_en).toLocaleString("es-AR"),
        donacion.nombre,
        donacion.email,
        String(donacion.monto),
        donacion.moneda,
        donacion.estado,
        donacion.metodo_pago ?? "",
        donacion.mp_payment_id ?? "",
        donacion.referencia,
      ]
        .map(escapar)
        .join(",")
    );

    // El BOM hace que Excel abra el archivo en UTF-8 y no rompa los acentos.
    const contenido = `﻿${[COLUMNAS.map(escapar).join(","), ...filas].join("\r\n")}`;
    const url = URL.createObjectURL(new Blob([contenido], { type: "text/csv;charset=utf-8;" }));

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = `donaciones-piel-${new Date().toISOString().slice(0, 10)}.csv`;
    enlace.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      onClick={descargar}
      className="rounded-full border-2 border-piel-navy px-5 py-2.5 text-sm font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white"
    >
      Exportar a CSV
    </button>
  );
}
