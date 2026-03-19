export const metadata = {
  title: "Créditos de Desarrollo · Cereal Sunny",
  description: "Información del desarrollador y tecnologías empleadas en este sitio.",
};

const techs = [
  { name: "Next.js 15", desc: "Framework React con App Router", icon: "▲" },
  { name: "TypeScript", desc: "Tipado estático y seguro", icon: "TS" },
  { name: "Tailwind CSS", desc: "Estilos utilitarios modernos", icon: "🎨" },
  { name: "Sanity CMS", desc: "Gestión de contenido headless", icon: "📦" },
  { name: "Framer Motion", desc: "Animaciones fluidas", icon: "◈" },
  { name: "Vercel", desc: "Deploy y hosting en la nube", icon: "⬡" },
  { name: "GitHub", desc: "Control de versiones", icon: "⌥" },
  { name: "Node.js v24", desc: "Entorno de ejecución", icon: "⬡" },
];

export default function CreditosPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0a1428",
      padding: "0",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}>

      {/* Back link */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "32px 48px 0" }}>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#93c5fd",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          ← Volver al inicio
        </a>
      </div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 48px 80px" }}>

        {/* Hero block */}
        <div style={{
          background: "linear-gradient(135deg, #0e2e56 0%, #1B4F8A 60%, #0e2e56 100%)",
          border: "1px solid rgba(245,166,35,0.3)",
          borderRadius: "16px",
          padding: "56px 48px",
          textAlign: "center",
          marginBottom: "32px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative glow */}
          <div style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)",
          }} />

          {/* Sun logo */}
          <div style={{ marginBottom: "20px" }}>
            <svg width="64" height="64" viewBox="0 0 44 44" fill="none" style={{ display: "block", margin: "0 auto" }}>
              <defs>
                <radialGradient id="credSun" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF176" />
                  <stop offset="55%" stopColor="#F9D423" />
                  <stop offset="100%" stopColor="#F5A623" />
                </radialGradient>
              </defs>
              <g stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round">
                <line x1="22" y1="3" x2="22" y2="8" />
                <line x1="22" y1="36" x2="22" y2="41" />
                <line x1="3" y1="22" x2="8" y2="22" />
                <line x1="36" y1="22" x2="41" y2="22" />
                <line x1="7.5" y1="7.5" x2="11" y2="11" />
                <line x1="33" y1="33" x2="36.5" y2="36.5" />
                <line x1="36.5" y1="7.5" x2="33" y2="11" />
                <line x1="11" y1="33" x2="7.5" y2="36.5" />
              </g>
              <circle cx="22" cy="22" r="12" fill="url(#credSun)" />
            </svg>
          </div>

          <div style={{
            fontSize: "11px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#F5A623",
            marginBottom: "12px",
          }}>
            Cereal Sunny · Sitio Oficial
          </div>
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "2.4rem",
            fontWeight: "900",
            color: "#ffffff",
            margin: "0 0 8px 0",
            letterSpacing: "-0.01em",
          }}>
            Créditos de Desarrollo
          </h1>
          <p style={{ fontSize: "15px", color: "#93c5fd", margin: "0" }}>
            Diseño, desarrollo y despliegue del sitio web corporativo
          </p>
        </div>

        {/* Developer card */}
        <div style={{
          background: "#0e2e56",
          border: "1px solid rgba(245,166,35,0.2)",
          borderRadius: "12px",
          padding: "32px 36px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Avatar */}
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F5A623, #F9D423)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: "900",
              color: "#1B4F8A",
              flexShrink: 0,
              fontFamily: "Georgia, serif",
            }}>
              DV
            </div>
            <div>
              <h2 style={{
                fontFamily: "Georgia, serif",
                fontSize: "22px",
                fontWeight: "700",
                color: "#ffffff",
                margin: "0 0 4px 0",
              }}>
                David Vera
              </h2>
              <div style={{ fontSize: "13px", color: "#93c5fd", marginBottom: "8px" }}>
                Desarrollador Principal · Centerium · Venezuela
              </div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(245,166,35,0.15)",
                border: "1px solid rgba(245,166,35,0.3)",
                borderRadius: "4px",
                padding: "4px 10px",
              }}>
                <span style={{ fontSize: "11px", color: "#F5A623", fontWeight: "600" }}>
                  ✉ dverait@centerium.info
                </span>
              </div>
            </div>
          </div>

          {/* Right: dates */}
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "11px", color: "#93c5fd", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
              Desarrollado
            </div>
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: "22px",
              fontWeight: "700",
              color: "#F5A623",
            }}>
              2025 — 2026
            </div>
            <div style={{ fontSize: "12px", color: "#93c5fd", marginTop: "2px" }}>
              Venezuela 🇻🇪
            </div>
          </div>
        </div>

        {/* Centerium badge */}
        <div style={{
          background: "#0e2e56",
          border: "1px solid rgba(245,166,35,0.2)",
          borderRadius: "12px",
          padding: "24px 36px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "8px",
            background: "rgba(245,166,35,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "900",
            color: "#F5A623",
            fontFamily: "Georgia, serif",
            flexShrink: 0,
          }}>
            C
          </div>
          <div>
            <div style={{ fontSize: "15px", fontWeight: "700", color: "#ffffff", marginBottom: "2px" }}>
              Centerium
            </div>
            <div style={{ fontSize: "13px", color: "#93c5fd" }}>
              Sistema Integral de Gestión · Venezuela · centerium.info
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div style={{
          background: "#0e2e56",
          border: "1px solid rgba(245,166,35,0.2)",
          borderRadius: "12px",
          padding: "32px 36px",
        }}>
          <div style={{
            fontSize: "11px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#F5A623",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            ⚙ Tecnologías Empleadas
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}>
            {techs.map((tech) => (
              <div
                key={tech.name}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  background: "rgba(245,166,35,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#F5A623",
                  flexShrink: 0,
                }}>
                  {tech.icon}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "#ffffff", marginBottom: "2px" }}>
                    {tech.name}
                  </div>
                  <div style={{ fontSize: "11px", color: "#93c5fd" }}>
                    {tech.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
