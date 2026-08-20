"use client";

import { useState } from "react";
import Image from "next/image";
import { recipes } from "@/data/recipes";

export default function RecetasCatalog() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 360px))", gap: "28px", alignItems: "start", justifyContent: "center" }}>
      {recipes.map((r) => {
        const isOpen = expanded === r.name;
        return (
          <div key={r.name} style={{ background: "#fff", borderRadius: "14px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", border: "1px solid #F0F0F0" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
              {r.img ? (
                <Image src={r.img} alt={r.alt} fill sizes="(max-width: 768px) 100vw, 360px" style={{ objectFit: "cover" }} />
              ) : (
                <div style={{
                  position: "absolute", inset: "0",
                  background: `linear-gradient(155deg, ${r.badgeColor} 0%, #0a1428 130%)`,
                }} />
              )}
              {!r.img && (
                <div style={{ position: "absolute", top: "20px", right: "18px", color: "rgba(255,255,255,0.18)" }}>
                  <r.Icon size={80} />
                </div>
              )}
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.1) 55%, transparent 75%)" }} />
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "18px 20px" }}>
                <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", color: "#ffffff", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", padding: "4px 9px", borderRadius: "4px", marginBottom: "10px", border: "1px solid rgba(255,255,255,0.25)" }}>{r.category}</span>
                <h3 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "18px", fontWeight: "900", color: "#ffffff", margin: "0", letterSpacing: "-0.01em", lineHeight: "1.25" }}>{r.name}</h3>
              </div>
            </div>

            <div style={{ padding: "18px 20px" }}>
              <div style={{ display: "flex", gap: "14px", marginBottom: "12px" }}>
                <span style={{ fontSize: "12px", color: "#6B7280" }}>⏱ {r.time}</span>
                <span style={{ fontSize: "12px", color: "#6B7280" }}>👥 {r.servings}</span>
              </div>
              <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.6", margin: "0 0 14px 0" }}>{r.description}</p>
              <button
                onClick={() => setExpanded(isOpen ? null : r.name)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent",
                  border: "none", color: "#F5A623", fontSize: "12px", fontWeight: "800",
                  textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", padding: "0",
                }}
              >
                {isOpen ? "Ocultar receta ↑" : "Ver receta completa →"}
              </button>
            </div>

            {isOpen && (
              <div style={{ background: "#F9FAFB", borderTop: "1px solid #E5E7EB", padding: "20px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <h4 style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1B4F8A", margin: "0 0 10px 0" }}>Ingredientes</h4>
                  <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {r.ingredientes.map((ing) => <li key={ing}>{ing}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1B4F8A", margin: "0 0 10px 0" }}>Preparación</h4>
                  <ol style={{ margin: "0", paddingLeft: "18px", fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {r.pasos.map((paso, i) => <li key={i}>{paso}</li>)}
                  </ol>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
