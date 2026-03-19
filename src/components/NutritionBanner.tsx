"use client";

export default function NutritionBanner() {
  return (
    <section style={{
      width: "100%",
      background: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
      padding: "72px 24px",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Top: icon + headline + description */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
            margin: "0 auto 20px auto",
          }}>
            🌿
          </div>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: "900",
            color: "#ffffff",
            margin: "0 0 14px 0",
          }}>
            Nutrición Certificada
          </h2>
          <p style={{
            fontSize: "17px",
            color: "#bbf7d0",
            maxWidth: "540px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}>
            Todos nuestros productos cumplen con los estándares nutricionales
            internacionales. Sin conservantes artificiales, sin colorantes artificiales.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginBottom: "48px",
        }}>
          {[
            { value: "0g", label: "Grasas Trans", desc: "Libre de grasas trans en toda la línea" },
            { value: "Alto", label: "Contenido en Fibra", desc: "Fuente natural de fibra dietética" },
            { value: "ISO", label: "Certificación", desc: "Procesos certificados bajo normas ISO" },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "28px 24px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: "2.8rem",
                fontWeight: "900",
                color: "#ffffff",
                lineHeight: "1",
                marginBottom: "8px",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#86efac",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "6px",
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: "13px",
                color: "#bbf7d0",
                lineHeight: "1.5",
              }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="/nosotros"
            style={{
              display: "inline-block",
              background: "#ffffff",
              color: "#166534",
              fontWeight: "700",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "14px 40px",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#f0fdf4")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#ffffff")}
          >
            Conocer más sobre nuestra calidad
          </a>
        </div>

      </div>
    </section>
  );
}
