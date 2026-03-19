"use client";

export default function Hero() {
  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0a1428" }}>
      <div style={{ position: "absolute", inset: "0", background: "linear-gradient(135deg, rgba(10,20,40,0.98) 0%, rgba(27,79,138,0.55) 55%, rgba(10,20,40,0.92) 100%)", zIndex: 0 }} />
      <div style={{ position: "absolute", right: "-100px", top: "50%", transform: "translateY(-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,212,35,0.12) 0%, rgba(245,166,35,0.08) 40%, transparent 70%)", filter: "blur(40px)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "780px", padding: "120px 24px 80px", boxSizing: "border-box", marginLeft: "0" }}
        className="hero-content"
      >
        {/* Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
          <span style={{ background: "#F5A623", color: "#1B4F8A", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.14em", padding: "6px 14px", borderRadius: "4px" }}>
            Fabricante B2B
          </span>
          <span style={{ width: "24px", height: "1px", background: "rgba(245,166,35,0.5)", display: "inline-block" }} />
          <span style={{ color: "#93c5fd", fontSize: "13px", fontWeight: "500" }}>Venezuela · Latinoamérica</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.2rem, 7vw, 5rem)", fontWeight: "900", color: "#ffffff", lineHeight: "1.05", letterSpacing: "-0.02em", margin: "0 0 20px 0", textTransform: "uppercase" }}>
          Cereales de<br />
          Alta <span style={{ color: "#F5A623" }}>Calidad</span><br />
          <span style={{ fontSize: "clamp(1.6rem, 5vw, 3.8rem)", color: "rgba(255,255,255,0.7)", fontWeight: "700" }}>para tu Negocio</span>
        </h1>

        {/* Description */}
        <p style={{ fontSize: "clamp(14px, 2.5vw, 17px)", color: "#93c5fd", lineHeight: "1.75", marginBottom: "36px", maxWidth: "520px" }}>
          Fabricamos cereales con ingredientes naturales seleccionados.
          Líneas completas para distribuidores mayoristas en toda la región.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          <a href="/contacto" style={{ display: "inline-flex", alignItems: "center", background: "#F5A623", color: "#1B4F8A", fontWeight: "800", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#F9D423")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#F5A623")}
          >Solicitar Cotización</a>
          <a href="/productos" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#ffffff", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 28px", borderRadius: "6px", border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F5A623"; (e.currentTarget as HTMLAnchorElement).style.color = "#F5A623"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
          >Ver Catálogo →</a>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(to right, rgba(245,166,35,0.4), rgba(245,166,35,0.1), transparent)", marginBottom: "32px" }} />

        {/* Stats */}
        <div style={{ display: "flex", gap: "clamp(24px, 5vw, 48px)", flexWrap: "wrap" }}>
          {[
            { value: "20+", label: "Años de experiencia" },
            { value: "50+", label: "Productos en catálogo" },
            { value: "100%", label: "Ingredientes naturales" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: "900", color: "#F5A623", lineHeight: "1", marginBottom: "6px" }}>{stat.value}</div>
              <div style={{ fontSize: "11px", color: "#93c5fd", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to bottom, transparent, #ffffff)", zIndex: 10 }} />
    </section>
  );
}
