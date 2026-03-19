"use client";

export default function NutritionBanner() {
  return (
    <section style={{ width: "100%", background: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)", padding: "60px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px", margin: "0 auto 16px" }}>🌿</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: "900", color: "#fff", margin: "0 0 12px 0" }}>Nutrición Certificada</h2>
          <p style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "#bbf7d0", maxWidth: "520px", margin: "0 auto", lineHeight: "1.7" }}>Sin conservantes artificiales, sin colorantes artificiales. Estándares nutricionales internacionales.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {[
            { value: "0g", label: "Grasas Trans", desc: "Libre de grasas trans en toda la línea" },
            { value: "Alto", label: "Contenido en Fibra", desc: "Fuente natural de fibra dietética" },
            { value: "ISO", label: "Certificación", desc: "Procesos certificados bajo normas ISO" },
          ].map((s) => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "24px", textAlign: "center", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "900", color: "#fff", lineHeight: "1", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ fontSize: "12px", fontWeight: "700", color: "#86efac", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>{s.label}</div>
              <div style={{ fontSize: "13px", color: "#bbf7d0", lineHeight: "1.5" }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/nosotros" style={{ display: "inline-block", background: "#fff", color: "#166534", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 40px", borderRadius: "6px", textDecoration: "none" }}>Conocer más</a>
        </div>
      </div>
    </section>
  );
}
