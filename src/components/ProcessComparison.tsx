"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    n: "01",
    title: "Grano de Maíz Real",
    desc: "Seleccionado y descascarillado — sin harinas, sin mezclas.",
    image: "/images/proceso/paso-01-grano-real.jpg",
  },
  {
    n: "02",
    title: "Se Parte en Tres",
    desc: "Cada grano se divide en tres partes reales de grano.",
    image: "/images/proceso/paso-02-se-parte.jpg",
  },
  {
    n: "03",
    title: "Cocción a Vapor",
    desc: "Se cuece a vapor cada pieza de grano para ablandarla.",
    image: "/images/proceso/paso-03-coccion-vapor.jpg",
  },
  {
    n: "04",
    title: "Laminado y Tueste",
    desc: "Rodillos aplanan cada pieza en una hojuela crocante.",
    image: "/images/proceso/paso-04-laminado-tueste.jpg",
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
          <h2 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 14px 0", letterSpacing: "-0.01em" }}>
            De Grano a Hojuela: <span style={{ color: "#39a4b4" }}>Así Se Hace la Diferencia</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
            No todos los cereales de maíz se fabrican igual. Esto es lo que nos separa.
          </p>
        </div>

        {/* Steps — visual sequence with illustrated cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "20px",
          marginBottom: "80px",
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              textAlign: "center",
              background: "#ffffff",
              border: "1px solid rgba(17,24,39,0.08)",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 2px 18px rgba(27,79,138,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s`,
            }}>
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 3",
                background: "linear-gradient(135deg, #fff8ec 0%, #ffffff 100%)",
                borderBottom: "1px solid rgba(245,166,35,0.25)",
              }}>
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 260px"
                  style={{ objectFit: "cover" }}
                />
                <span style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#ffffff",
                  letterSpacing: "0.1em",
                  background: "rgba(27,79,138,0.85)",
                  padding: "4px 10px",
                  borderRadius: "20px",
                }}>PASO {s.n}</span>
              </div>
              <div style={{ padding: "20px 20px 26px" }}>
                <h3 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 8px 0" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.6", margin: "0" }}>{s.desc}</p>
              </div>
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
          <div style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontWeight: "900", fontSize: "clamp(2rem, 6vw, 3.6rem)", color: "#1B4F8A", letterSpacing: "-0.02em", lineHeight: "1.15" }}>
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
