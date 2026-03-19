"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0a1428",
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: "absolute",
        inset: "0",
        background: "linear-gradient(135deg, rgba(10,20,40,0.98) 0%, rgba(27,79,138,0.55) 55%, rgba(10,20,40,0.92) 100%)",
        zIndex: 0,
      }} />

      {/* Right glow */}
      <div style={{
        position: "absolute",
        right: "-100px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,212,35,0.12) 0%, rgba(245,166,35,0.08) 40%, transparent 70%)",
        filter: "blur(40px)",
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "780px",
        padding: "0 64px",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
        }}>
          <span style={{
            background: "#F5A623",
            color: "#1B4F8A",
            fontSize: "11px",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            padding: "6px 14px",
            borderRadius: "4px",
          }}>
            Fabricante B2B
          </span>
          <span style={{
            width: "32px",
            height: "1px",
            background: "rgba(245,166,35,0.5)",
            display: "inline-block",
          }} />
          <span style={{
            color: "#93c5fd",
            fontSize: "13px",
            fontWeight: "500",
            letterSpacing: "0.04em",
          }}>
            Venezuela · Latinoamérica
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: "900",
          color: "#ffffff",
          lineHeight: "1.05",
          letterSpacing: "-0.02em",
          margin: "0 0 24px 0",
          textTransform: "uppercase",
        }}>
          Cereales de<br />
          Alta{" "}
          <span style={{ color: "#F5A623" }}>Calidad</span>
          <br />
          <span style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            color: "rgba(255,255,255,0.7)",
            fontWeight: "700",
          }}>
            para tu Negocio
          </span>
        </h1>

        {/* Description */}
        <p style={{
          fontSize: "17px",
          color: "#93c5fd",
          lineHeight: "1.75",
          marginBottom: "40px",
          maxWidth: "520px",
          fontWeight: "400",
        }}>
          Fabricamos cereales con ingredientes naturales seleccionados.
          Líneas completas para distribuidores mayoristas en toda la región.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "56px" }}>
          <a
            href="/contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#F5A623",
              color: "#1B4F8A",
              fontWeight: "800",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "16px 36px",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#F9D423";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#F5A623";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Solicitar Cotización
          </a>
          <a
            href="/productos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "16px 36px",
              borderRadius: "6px",
              border: "1.5px solid rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F5A623";
              (e.currentTarget as HTMLAnchorElement).style.color = "#F5A623";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Ver Catálogo →
          </a>
        </div>

        {/* Divider */}
        <div style={{
          width: "100%",
          height: "1px",
          background: "linear-gradient(to right, rgba(245,166,35,0.4), rgba(245,166,35,0.1), transparent)",
          marginBottom: "36px",
        }} />

        {/* Stats */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { value: "20+", label: "Años de experiencia" },
            { value: "50+", label: "Productos en catálogo" },
            { value: "100%", label: "Ingredientes naturales" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: "2.2rem",
                fontWeight: "900",
                color: "#F5A623",
                lineHeight: "1",
                marginBottom: "6px",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: "12px",
                color: "#93c5fd",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "120px",
        background: "linear-gradient(to bottom, transparent, #ffffff)",
        zIndex: 10,
      }} />
    </section>
  );
}
