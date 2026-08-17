"use client";

import { useState } from "react";
import { products } from "@/data/products";

export default function ProductsCatalog() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 340px))", gap: "24px", alignItems: "start", justifyContent: "center" }}>
      {products.map((p) => {
        const isOpen = expanded === p.name;
        return (
          <div key={p.name}>
            <div style={{ position: "relative", aspectRatio: "2 / 3", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{
                position: "absolute", inset: "0",
                background: p.img
                  ? `url('${p.img}') center/cover no-repeat`
                  : `linear-gradient(155deg, ${p.color} 0%, #0a1428 130%)`,
              }} />
              {!p.img && (
                <div style={{ position: "absolute", top: "28px", right: "22px", color: "rgba(255,255,255,0.18)" }}>
                  <p.Icon size={100} />
                </div>
              )}
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
