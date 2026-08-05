"use client";

import { useEffect, useState } from "react";

const accent = "#F5A623";
const heroImages = ["/hero-1.jpg", "/hero-2.jpg"];
const SLIDE_INTERVAL_MS = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % heroImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

      {/* Background — rotating slides with crossfade */}
      {heroImages.map((src, i) => (
        <div key={src} style={{
          position: "absolute", inset: "0", zIndex: 0,
          background: `url('${src}') center/cover no-repeat`,
          opacity: i === current ? 1 : 0,
          transition: "opacity 1.2s ease",
        }} />
      ))}

      {/* Overlay */}
      <div style={{ position: "absolute", inset: "0", zIndex: 1, background: "linear-gradient(to right, rgba(10,20,40,0.95) 0%, rgba(10,20,40,0.7) 50%, rgba(10,20,40,0.2) 100%)" }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10, width: "100%", maxWidth: "780px",
        padding: "130px 24px 100px", boxSizing: "border-box",
      }}>

        {/* Locator */}
        <div style={{ marginBottom: "28px" }}>
          <span style={{ color: "#93c5fd", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.14em" }}>Venezuela · Latinoamérica</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.2rem, 7vw, 5rem)", fontWeight: "900", color: "#ffffff", lineHeight: "1.05", letterSpacing: "-0.02em", margin: "0 0 20px 0", textTransform: "uppercase" }}>
          Cereales de<br />
          Alta <span style={{ color: accent }}>Calidad</span><br />
          <span style={{ fontSize: "clamp(1.6rem, 5vw, 3.8rem)", color: "rgba(255,255,255,0.7)", fontWeight: "700" }}>para tu Negocio</span>
        </h1>

        {/* Description */}
        <p style={{ fontSize: "clamp(14px, 2.5vw, 17px)", color: "#93c5fd", lineHeight: "1.75", marginBottom: "36px", maxWidth: "520px" }}>
          Fabricamos hojuelas de maíz de alta calidad, listas para
          distribuidores mayoristas en Venezuela.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          <a href="/contacto" style={{ display: "inline-flex", alignItems: "center", background: accent, color: "#1B4F8A", fontWeight: "800", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >Solicitar Cotización</a>
          <a href="/productos" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#ffffff", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 28px", borderRadius: "6px", border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = accent; (e.currentTarget as HTMLAnchorElement).style.color = accent; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
          >Ver Catálogo →</a>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", maxWidth: "520px", height: "1px", background: "linear-gradient(to right, rgba(245,166,35,0.4), rgba(245,166,35,0.1), transparent)", marginBottom: "32px" }} />

        {/* Stats */}
        <div style={{ display: "flex", gap: "clamp(16px, 3vw, 32px)", flexWrap: "wrap" }}>
          {[
            { value: "1", label: "Año en el mercado venezolano" },
            { value: "3", label: "Presentaciones, un solo proceso real" },
            { value: "0", label: "Gramos de grasas trans en toda la línea" },
          ].map((stat) => (
            <div key={stat.label} style={{ maxWidth: "200px" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: "900", color: accent, lineHeight: "1", marginBottom: "6px" }}>{stat.value}</div>
              <div style={{ fontSize: "11px", color: "#93c5fd", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to bottom, transparent, #ffffff)", zIndex: 10 }} />
    </section>
  );
}
