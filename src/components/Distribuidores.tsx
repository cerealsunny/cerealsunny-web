"use client";

export default function Distribuidores() {
  return (
    <section style={{ width: "100%", background: "#0a1428", padding: "60px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: "900", color: "#fff", margin: "0 0 12px 0" }}>
            ¿Quieres ser Distribuidor Sunny?
          </h2>
          <p style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "#93c5fd", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
            Llevamos cereales de calidad a todo el país a través de nuestra red de distribuidores.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {[
            { value: "1,000", label: "Cajas Mínimo por Pedido" },
            { value: "24", label: "Estuches x Caja" },
            { value: "3", label: "Presentaciones Mezclables" },
          ].map((s) => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "24px", textAlign: "center", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "900", color: "#F5A623", lineHeight: "1", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ fontSize: "12px", fontWeight: "700", color: "#93c5fd", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/contacto" style={{ display: "inline-block", background: "#F5A623", color: "#1B4F8A", fontWeight: "800", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 40px", borderRadius: "6px", textDecoration: "none" }}>
            Solicitar Información para Distribuidores
          </a>
        </div>
      </div>
    </section>
  );
}
