"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    // Slide 1 — imagen principal
    // En Fase 3 reemplazar background por: background: "url('/hero-1.jpg') center/cover no-repeat"
    background: "linear-gradient(135deg, #0a1428 0%, #1B4F8A 60%, #0a1428 100%)",
    overlay: "linear-gradient(to right, rgba(10,20,40,0.95) 0%, rgba(10,20,40,0.7) 50%, rgba(10,20,40,0.2) 100%)",
    accent: "#F5A623",
  },
  {
    id: 2,
    // Slide 2 — segunda imagen
    // En Fase 3 reemplazar background por: background: "url('/hero-2.jpg') center/cover no-repeat"
    background: "linear-gradient(135deg, #0a1428 0%, #166534 60%, #0a1428 100%)",
    overlay: "linear-gradient(to right, rgba(10,20,40,0.95) 0%, rgba(10,20,40,0.7) 50%, rgba(10,20,40,0.2) 100%)",
    accent: "#F5A623",
  },
  {
    id: 3,
    // Slide 3 — collage moderno
    // En Fase 3 reemplazar con componente collage real
    background: "linear-gradient(135deg, #0a1428 0%, #7c3aed 40%, #1B4F8A 100%)",
    overlay: "linear-gradient(to right, rgba(10,20,40,0.95) 0%, rgba(10,20,40,0.6) 50%, rgba(10,20,40,0.1) 100%)",
    accent: "#F9D423",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (indexOrFn: number | ((prev: number) => number)) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(typeof indexOrFn === "function" ? indexOrFn(current) : indexOrFn);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

      {/* Background — transitions smoothly */}
      <div style={{
        position: "absolute", inset: "0", zIndex: 0,
        background: slide.background,
        transition: "background 0.8s ease",
        opacity: animating ? 0 : 1,
        transitionProperty: "opacity, background",
        transitionDuration: "0.5s",
      }} />

      {/* Overlay */}
      <div style={{ position: "absolute", inset: "0", zIndex: 1, background: slide.overlay, transition: "opacity 0.5s" }} />

      {/* Slide 3 collage placeholder */}
      {current === 2 && (
        <div style={{
          position: "absolute", right: "0", top: "0", bottom: "0", width: "50%", zIndex: 1,
          display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "4px", padding: "88px 24px 24px",
          opacity: animating ? 0 : 1, transition: "opacity 0.5s",
        }}>
          {["🌾", "🍯", "🌽", "🥜"].map((emoji, i) => (
            <div key={i} style={{ background: ["#1B4F8A", "#166534", "#92400e", "#7c3aed"][i] + "60", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }}>{emoji}</div>
          ))}
        </div>
      )}

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10, width: "100%", maxWidth: "780px",
        padding: "120px 24px 100px", boxSizing: "border-box",
        opacity: animating ? 0 : 1, transition: "opacity 0.5s",
      }}>

        {/* Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
          <span style={{ background: slide.accent, color: "#1B4F8A", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.14em", padding: "6px 14px", borderRadius: "4px" }}>
            Fabricante B2B
          </span>
          <span style={{ width: "24px", height: "1px", background: "rgba(245,166,35,0.5)", display: "inline-block" }} />
          <span style={{ color: "#93c5fd", fontSize: "13px", fontWeight: "500" }}>Venezuela · Latinoamérica</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.2rem, 7vw, 5rem)", fontWeight: "900", color: "#ffffff", lineHeight: "1.05", letterSpacing: "-0.02em", margin: "0 0 20px 0", textTransform: "uppercase" }}>
          Cereales de<br />
          Alta <span style={{ color: slide.accent }}>Calidad</span><br />
          <span style={{ fontSize: "clamp(1.6rem, 5vw, 3.8rem)", color: "rgba(255,255,255,0.7)", fontWeight: "700" }}>para tu Negocio</span>
        </h1>

        {/* Description */}
        <p style={{ fontSize: "clamp(14px, 2.5vw, 17px)", color: "#93c5fd", lineHeight: "1.75", marginBottom: "36px", maxWidth: "520px" }}>
          Fabricamos cereales con ingredientes naturales seleccionados.
          Líneas completas para distribuidores mayoristas en toda la región.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          <a href="/contacto" style={{ display: "inline-flex", alignItems: "center", background: slide.accent, color: "#1B4F8A", fontWeight: "800", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >Solicitar Cotización</a>
          <a href="/productos" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#ffffff", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 28px", borderRadius: "6px", border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = slide.accent; (e.currentTarget as HTMLAnchorElement).style.color = slide.accent; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
          >Ver Catálogo →</a>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", maxWidth: "520px", height: "1px", background: "linear-gradient(to right, rgba(245,166,35,0.4), rgba(245,166,35,0.1), transparent)", marginBottom: "32px" }} />

        {/* Stats */}
        <div style={{ display: "flex", gap: "clamp(24px, 5vw, 48px)", flexWrap: "wrap" }}>
          {[
            { value: "20+", label: "Años de experiencia" },
            { value: "50+", label: "Productos en catálogo" },
            { value: "100%", label: "Ingredientes naturales" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: "900", color: slide.accent, lineHeight: "1", marginBottom: "6px" }}>{stat.value}</div>
              <div style={{ fontSize: "11px", color: "#93c5fd", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Dots navigation */}
      <div style={{
        position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
        zIndex: 20, display: "flex", gap: "12px", alignItems: "center",
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "28px" : "10px",
              height: "10px",
              borderRadius: i === current ? "5px" : "50%",
              background: i === current ? "#F5A623" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to bottom, transparent, #ffffff)", zIndex: 10 }} />
    </section>
  );
}
