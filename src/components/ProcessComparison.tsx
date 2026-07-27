"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    n: "01",
    title: "Grano de Maíz Real",
    desc: "Seleccionado y descascarillado — sin harinas, sin mezclas.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="18" cy="18" rx="9" ry="14" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Se Parte en Tres",
    desc: "Cada grano se divide en tres partes reales de grano.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="18" cy="18" rx="9" ry="14" />
        <path d="M12 6v24M24 6v24" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Cocción a Vapor",
    desc: "Se cuece a vapor cada pieza de grano para ablandarla.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 29c2-4 -2-6 0-10" />
        <path d="M18 29c2-4 -2-6 0-10" />
        <path d="M24 29c2-4 -2-6 0-10" />
        <rect x="8" y="19" width="20" height="4" rx="2" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Laminado y Tueste",
    desc: "Rodillos aplanan cada pieza en una hojuela crocante.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="14" r="5" />
        <circle cx="26" cy="14" r="5" />
        <path d="M6 27c6-4 18-4 24 0" />
      </svg>
    ),
  },
];

export default function ProcessComparison() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ width: "100%", background: "#F9FAFB", padding: "90px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Eyebrow + title */}
        <div style={{
          textAlign: "center", marginBottom: "64px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.2em", color: "#F5A623", marginBottom: "14px" }}>
            Nuestro Proceso
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 14px 0", letterSpacing: "-0.01em" }}>
            De Grano a Hojuela: <span style={{ color: "#39a4b4" }}>Así Se Hace la Diferencia</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
            No todos los cereales de maíz se fabrican igual. Esto es lo que nos separa.
          </p>
        </div>

        {/* Steps — editorial numbered flow */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          marginBottom: "80px",
          borderTop: "1px solid rgba(17,24,39,0.08)",
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: "32px 20px",
              borderRight: i < steps.length - 1 ? "1px solid rgba(17,24,39,0.08)" : "none",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s`,
            }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "13px", fontWeight: "700", color: "#F5A623", letterSpacing: "0.1em", marginBottom: "14px" }}>{s.n}</div>
              <div style={{ color: "#39a4b4", marginBottom: "16px" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 8px 0" }}>{s.title}</h3>
              <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.6", margin: "0" }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Centerpiece stat */}
        <div style={{
          textAlign: "center",
          padding: "56px 24px",
          marginBottom: "64px",
          borderTop: "1px solid rgba(245,166,35,0.25)",
          borderBottom: "1px solid rgba(245,166,35,0.25)",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }}>
          <div style={{ fontFamily: "Georgia, serif", fontWeight: "900", fontSize: "clamp(2rem, 6vw, 3.6rem)", color: "#1B4F8A", letterSpacing: "-0.02em", lineHeight: "1.15" }}>
            1 GRANO <span style={{ color: "#F5A623" }}>→</span> 3 HOJUELAS REALES
          </div>
          <p style={{ fontSize: "14px", color: "#6B7280", maxWidth: "480px", margin: "16px auto 0", lineHeight: "1.7" }}>
            Así nace cada hojuela Sunny: de una pieza real de grano de maíz, no de una masa moldeada por extrusión.
          </p>
        </div>

        {/* Comparison — warm (Sunny) vs cool (extrusión) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          <div style={{
            background: "linear-gradient(135deg, #fff8ec 0%, #ffffff 100%)",
            border: "1px solid rgba(245,166,35,0.3)",
            borderRadius: "12px",
            padding: "36px 32px",
          }}>
            <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", color: "#F5A623", marginBottom: "12px" }}>
              Sunny · Laminado Real
            </span>
            <p style={{ fontSize: "14.5px", color: "#374151", lineHeight: "1.8", margin: "0" }}>
              Cada grano de maíz se descascarilla y se parte en tres partes reales de grano — cada una se convierte en una hojuela. No hay masa, no hay molde: hay grano real, cocido a vapor y laminado.
            </p>
          </div>

          <div style={{
            background: "#F3F4F6",
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            padding: "36px 32px",
          }}>
            <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", color: "#9CA3AF", marginBottom: "12px" }}>
              Extrusión · Método Común del Mercado
            </span>
            <p style={{ fontSize: "14.5px", color: "#6B7280", lineHeight: "1.8", margin: "0" }}>
              El maíz se muele hasta convertirse en harina, se mezcla con agua formando una masa y se moldea a presión dentro de una extrusora — la forma final la da la máquina, no el grano.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
