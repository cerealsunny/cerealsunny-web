"use client";

import { useState } from "react";
import { IconCorn, IconSparkle, IconChocolateBar } from "./Icons";

type FichaTecnica = {
  contenidoNeto: string;
  porciones: string;
  columnas: [string, string];
  tabla: [string, string, string][];
  ingredientes: string;
  alergenos: string;
  fabricante: string;
  registroSanitario: string | null;
};

type Producto = {
  name: string;
  tag: string;
  color: string;
  Icon: typeof IconCorn;
  description: string;
  ficha: FichaTecnica;
};

const products: Producto[] = [
  {
    name: "Sunny Flakes",
    tag: "Clásico",
    color: "#1B4F8A",
    Icon: IconCorn,
    description:
      "Hojuelas de maíz tostado, doradas y crocantes. Cada grano de maíz se descascarilla y se parte en tres piezas reales de grano — cada una se convierte en una hojuela. Sin masa, sin moldes: el sabor clásico de siempre.",
    ficha: {
      contenidoNeto: "230 g",
      porciones: "Aprox. 7 porciones de 30 g",
      columnas: ["Por 100 g", "Por porción (30 g)"],
      tabla: [
        ["Calorías", "374 kcal", "100 kcal"],
        ["Grasa Total", "0.8 g", "0.2 g"],
        ["Grasa Saturada", "0.2 g", "0.1 g"],
        ["Grasas Trans", "0 mg", "0 mg"],
        ["Carbohidratos Totales", "88 g", "26 g"],
        ["Fibra Dietaria", "4.6 g", "1.4 g"],
        ["Azúcares Totales", "9.4 g", "2.8 g"],
        ["Proteínas", "6.0 g", "1.8 g"],
        ["Sodio", "297 mg", "89 mg"],
      ],
      ingredientes: "Maíz Descascarillado y Desgerminado, Azúcar Refinada, Malta, Sal Refinada.",
      alergenos: "El maíz utilizado en este producto contiene trazas de soya.",
      fabricante: "Centerium Venezolana C.A. · Rif. J-506658038 · San Jacinto, Maracay, Edo. Aragua, Venezuela.",
      registroSanitario: null,
    },
  },
  {
    name: "Sunny Sugar",
    tag: "Dulce",
    color: "#F5A623",
    Icon: IconSparkle,
    description:
      "La misma hojuela de maíz real, glaseada con azúcar para un crunch dulce que nunca falla en el punto de venta.",
    ficha: {
      contenidoNeto: "250 g",
      porciones: "Aprox. 8 porciones de 30 g",
      columnas: ["Por 100 g", "Por porción (30 g)"],
      tabla: [
        ["Calorías", "388 kcal", "118 kcal"],
        ["Grasa Total", "0.6 g", "0.2 g"],
        ["Grasa Saturada", "0.2 g", "0.0 g"],
        ["Grasas Trans", "0 g", "0 g"],
        ["Carbohidratos Totales", "92 g", "28 g"],
        ["Fibra Dietaria", "0.9 g", "0.3 g"],
        ["Azúcares Totales", "41 g", "12 g"],
        ["Proteínas", "4.2 g", "1.3 g"],
        ["Sodio", "290 mg", "87 mg"],
      ],
      ingredientes: "Maíz Descascarillado y Desgerminado, Azúcar Refinada, Malta, Sal Refinada.",
      alergenos: "El maíz utilizado en este producto contiene trazas de soya.",
      fabricante: "Centerium Venezolana C.A. · Rif. J-506658038 · San Jacinto, Maracay, Edo. Aragua, Venezuela.",
      registroSanitario: null,
    },
  },
  {
    name: "Sunny Choco Flakes",
    tag: "Chocolate",
    color: "#6b3f22",
    Icon: IconChocolateBar,
    description:
      "Hojuelas de maíz real bañadas en chocolate, el antojo favorito de los más pequeños de la casa.",
    ficha: {
      contenidoNeto: "250 g",
      porciones: "Aprox. 8 porciones de 30 g",
      columnas: ["Por porción (30 g)", "Con ½ taza leche descremada"],
      tabla: [
        ["Kilocalorías", "110 kcal", "160 kcal"],
        ["Proteínas", "1 g", "5 g"],
        ["Grasa Total", "1 g", "2.3 g"],
        ["Grasa Saturada", "0.8 g", "1.6 g"],
        ["Colesterol", "0 mg", "5 mg"],
        ["Carbohidratos Disponibles", "23 g", "29 g"],
        ["Azúcares (sacarosa y otros)", "12 g", "18 g"],
        ["Almidones", "11 g", "11 g"],
        ["Fibra Dietética Total", "0.5 g", "0.5 g"],
        ["Sodio", "170 mg", "230 mg"],
        ["Potasio", "30 mg", "225 mg"],
      ],
      ingredientes:
        "Maíz descascarillado y desgerminado, azúcar refinada, aceite vegetal, cacao en polvo, sal refinada, malta, glucosa de maíz, vainilla, color chocolate.",
      alergenos: "El maíz utilizado en este producto contiene trazas de soya.",
      fabricante: "Centerium Venezolana C.A. · Rif. J-506658038 · Av. Bolívar Este N.52, Zona Ind. San Jacinto, Maracay, Edo. Aragua.",
      registroSanitario: "Registrado ante el SACS, ente adscrito al MPPS, bajo el número A-175.829.",
    },
  },
];

export default function ProductsCatalog() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "start" }}>
      {products.map((p) => {
        const isOpen = expanded === p.name;
        return (
          <div key={p.name}>
            <div style={{ position: "relative", height: "440px", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: "0", background: `linear-gradient(155deg, ${p.color} 0%, #0a1428 130%)` }} />
              <div style={{ position: "absolute", top: "28px", right: "22px", color: "rgba(255,255,255,0.18)" }}>
                <p.Icon size={100} />
              </div>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 55%, transparent 75%)" }} />
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "26px 24px" }}>
                <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", color: "#ffffff", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", padding: "4px 10px", borderRadius: "4px", marginBottom: "12px", border: "1px solid rgba(255,255,255,0.25)" }}>{p.tag}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "900", color: "#ffffff", margin: "0 0 8px 0", letterSpacing: "-0.01em" }}>{p.name}</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", margin: "0 0 14px 0", lineHeight: "1.6" }}>{p.description}</p>
                <button
                  onClick={() => setExpanded(isOpen ? null : p.name)}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent",
                    border: "none", color: "#F5A623", fontSize: "12px", fontWeight: "800",
                    textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", padding: "0",
                  }}
                >
                  {isOpen ? "Ocultar ficha técnica ↑" : "Ver ficha técnica →"}
                </button>
              </div>
            </div>

            {isOpen && (
              <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderTop: "none", borderRadius: "0 0 14px 14px", padding: "24px 22px" }}>
                <div style={{ fontSize: "11px", color: "#9CA3AF", fontStyle: "italic", marginBottom: "12px" }}>
                  Información nutricional según etiqueta del empaque físico del producto.
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>Contenido neto: <strong style={{ color: "#111827" }}>{p.ficha.contenidoNeto}</strong></span>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>{p.ficha.porciones}</span>
                </div>

                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", marginBottom: "18px" }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left", padding: "8px 6px", borderBottom: "2px solid #1B4F8A", color: "#1B4F8A", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Nutriente</th>
                      <th style={{ textAlign: "right", padding: "8px 6px", borderBottom: "2px solid #1B4F8A", color: "#1B4F8A", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.ficha.columnas[0]}</th>
                      <th style={{ textAlign: "right", padding: "8px 6px", borderBottom: "2px solid #1B4F8A", color: "#1B4F8A", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.ficha.columnas[1]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.ficha.tabla.map((row, i) => (
                      <tr key={row[0]} style={{ background: i % 2 === 0 ? "#ffffff" : "#F3F4F6" }}>
                        <td style={{ padding: "7px 6px", color: "#111827" }}>{row[0]}</td>
                        <td style={{ padding: "7px 6px", textAlign: "right", color: "#374151" }}>{row[1]}</td>
                        <td style={{ padding: "7px 6px", textAlign: "right", color: "#374151" }}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div style={{ fontSize: "13px", color: "#374151", lineHeight: "1.7", marginBottom: "10px" }}>
                  <strong style={{ color: "#111827" }}>Ingredientes: </strong>{p.ficha.ingredientes}
                </div>
                <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "10px" }}>{p.ficha.alergenos}</div>
                {p.ficha.registroSanitario && (
                  <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "10px" }}>{p.ficha.registroSanitario}</div>
                )}
                <div style={{ fontSize: "12px", color: "#9CA3AF", borderTop: "1px solid #E5E7EB", paddingTop: "10px" }}>
                  Elaborado por: {p.ficha.fabricante}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
