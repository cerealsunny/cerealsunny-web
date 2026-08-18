"use client";

const accent = "#1B4F8A";
const darkText = "#1a3a5c";
const ctaFont = "var(--font-poetsen), \"Poetsen One\", Georgia, serif";

export default function Hero() {
  return (
    <section style={{
      position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden",
      background: "linear-gradient(135deg, #f5c842 0%, #ffe8c2 40%, #ffd699 100%)",
    }}>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10, width: "100%", maxWidth: "780px",
        padding: "130px 24px 100px", boxSizing: "border-box",
      }}>

        {/* Locator */}
        <div style={{ marginBottom: "28px" }}>
          <span style={{ color: darkText, fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.14em" }}>Venezuela · Latinoamérica</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)", fontWeight: "900", color: darkText, lineHeight: "1.05", letterSpacing: "-0.02em", margin: "0 0 20px 0" }}>
          El Desayuno que tu <span style={{ color: accent }}>Familia Merece</span>
        </h1>

        {/* Description */}
        <p style={{ fontSize: "clamp(14px, 2.5vw, 17px)", color: darkText, lineHeight: "1.75", marginBottom: "36px", maxWidth: "520px" }}>
          Hojuelas de maíz real, laminadas grano por grano. Sin conservantes,
          sin grasas trans — el cereal que tu familia merece cada mañana.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
          <a href="/contacto" style={{ fontFamily: ctaFont, display: "inline-flex", alignItems: "center", background: accent, color: "#ffffff", fontWeight: "400", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >Dónde Comprar</a>
          <a href="/productos" style={{ fontFamily: ctaFont, display: "inline-flex", alignItems: "center", background: "transparent", color: darkText, fontWeight: "400", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 28px", borderRadius: "6px", border: "1.5px solid rgba(26,58,92,0.35)", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = accent; (e.currentTarget as HTMLAnchorElement).style.color = accent; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(26,58,92,0.35)"; (e.currentTarget as HTMLAnchorElement).style.color = darkText; }}
          >Ver Catálogo →</a>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", maxWidth: "520px", height: "1px", background: "linear-gradient(to right, rgba(26,58,92,0.3), rgba(26,58,92,0.08), transparent)", marginBottom: "32px" }} />

        {/* Stats */}
        <div style={{ display: "flex", gap: "clamp(16px, 3vw, 32px)", flexWrap: "wrap" }}>
          {[
            { value: "3", label: "Presentaciones, un solo proceso real" },
            { value: "0", label: "Gramos de grasas trans en toda la línea" },
          ].map((stat) => (
            <div key={stat.label} style={{ maxWidth: "200px" }}>
              <div style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: "900", color: accent, lineHeight: "1", marginBottom: "6px" }}>{stat.value}</div>
              <div style={{ fontSize: "11px", color: darkText, fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to bottom, transparent, #ffffff)", zIndex: 10 }} />
    </section>
  );
}
