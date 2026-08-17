"use client";

import { useState } from "react";

const brand = "#1B4F8A";
const accent = "#F5A623";

const tiposConsulta = ["Quiero ser distribuidor", "Consulta general", "Otro"];
const volumenes = [
  { label: "Bajo", detail: "< 1.000 uds/mes" },
  { label: "Medio", detail: "1.000–5.000 uds/mes" },
  { label: "Alto", detail: "5.000–10.000 uds/mes" },
  { label: "+10.000", detail: "uds/mes" },
];

function FloatingField({
  label,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const shared = {
    width: "100%",
    boxSizing: "border-box" as const,
    border: "1.5px solid " + (focused ? accent : "#E5E7EB"),
    borderRadius: "8px",
    padding: active ? "22px 16px 8px" : "15px 16px",
    fontSize: "15px",
    color: "#111827",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s, padding 0.15s",
    background: "#fff",
  };

  const labelStyle = {
    position: "absolute" as const,
    left: "16px",
    top: active ? "8px" : "16px",
    fontSize: active ? "11px" : "15px",
    color: focused ? accent : "#9CA3AF",
    fontWeight: active ? 700 : 400,
    letterSpacing: active ? "0.04em" : "0",
    textTransform: active ? ("uppercase" as const) : ("none" as const),
    transition: "all 0.15s ease",
    pointerEvents: "none" as const,
  };

  return (
    <div style={{ position: "relative" }}>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={4}
          style={{ ...shared, resize: "vertical" }}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={shared}
        />
      )}
      <label style={labelStyle}>{label}</label>
    </div>
  );
}

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [estado, setEstado] = useState("");
  const [tipo, setTipo] = useState(tiposConsulta[0]);
  const [volumen, setVolumen] = useState<string | null>(null);
  const [mensaje, setMensaje] = useState("");

  const canSend = nombre.trim().length > 0 && empresa.trim().length > 0;

  const buildMessage = () =>
    [
      `Hola, soy ${nombre} de ${empresa}.`,
      estado ? `Estado/Ciudad: ${estado}` : null,
      `Tipo de consulta: ${tipo}`,
      volumen ? `Volumen estimado: ${volumen}` : null,
      mensaje ? `Mensaje: ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const whatsappHref = `https://wa.me/582129539897?text=${encodeURIComponent(buildMessage())}`;
  const mailtoHref = `mailto:info@cerealsunny.com?subject=${encodeURIComponent(
    "Consulta de distribución — " + (empresa || nombre || "Cereal Sunny")
  )}&body=${encodeURIComponent(buildMessage())}`;

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <FloatingField label="Nombre" value={nombre} onChange={setNombre} />
        <FloatingField label="Empresa" value={empresa} onChange={setEmpresa} />
        <FloatingField label="Estado / Ciudad" value={estado} onChange={setEstado} />

        <div>
          <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "#6B7280", marginBottom: "10px" }}>
            Tipo de consulta
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {tiposConsulta.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTipo(t)}
                style={{
                  padding: "9px 16px",
                  borderRadius: "999px",
                  border: "1.5px solid " + (tipo === t ? brand : "#E5E7EB"),
                  background: tipo === t ? brand : "#fff",
                  color: tipo === t ? "#fff" : "#374151",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "#6B7280", marginBottom: "10px" }}>
            Volumen estimado
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {volumenes.map((v) => {
              const full = `${v.label} (${v.detail})`;
              const selected = volumen === full;
              return (
                <button
                  key={v.label}
                  type="button"
                  onClick={() => setVolumen(selected ? null : full)}
                  style={{
                    padding: "9px 14px",
                    borderRadius: "10px",
                    border: "1.5px solid " + (selected ? accent : "#E5E7EB"),
                    background: selected ? "#FFF7E8" : "#fff",
                    color: selected ? "#92400e" : "#374151",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                  }}
                >
                  <div>{v.label}</div>
                  <div style={{ fontSize: "10px", fontWeight: 400, opacity: 0.75 }}>{v.detail}</div>
                </button>
              );
            })}
          </div>
        </div>

        <FloatingField label="Mensaje (opcional)" value={mensaje} onChange={setMensaje} textarea />

        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#166534", fontWeight: 600 }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#166534", display: "inline-block" }} />
          Respondemos en menos de 24h
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a
            href={canSend ? whatsappHref : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!canSend}
            onClick={(e) => { if (!canSend) e.preventDefault(); }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              background: canSend ? "#25D366" : "#E5E7EB",
              color: canSend ? "#fff" : "#9CA3AF",
              fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.06em",
              padding: "15px 24px", borderRadius: "8px", textDecoration: "none",
              cursor: canSend ? "pointer" : "not-allowed",
            }}
          >
            Enviar por WhatsApp
          </a>
          <a
            href={canSend ? mailtoHref : undefined}
            aria-disabled={!canSend}
            onClick={(e) => { if (!canSend) e.preventDefault(); }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
              background: "transparent",
              color: canSend ? brand : "#9CA3AF",
              fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.06em",
              padding: "13px 24px", borderRadius: "8px", textDecoration: "none",
              border: "1.5px solid " + (canSend ? brand : "#E5E7EB"),
              cursor: canSend ? "pointer" : "not-allowed",
            }}
          >
            O escríbenos por email
          </a>
        </div>
      </div>
    </div>
  );
}
