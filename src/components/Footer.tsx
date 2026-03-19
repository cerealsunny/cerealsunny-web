"use client";

const footerLinks: Record<string, string[]> = {
  Empresa: ["Nosotros", "Historia", "Certificaciones", "Noticias"],
  Productos: ["Granola", "Copos de Maíz", "Muesli", "Línea Infantil"],
  Distribuidores: ["Cómo distribuir", "Zonas de cobertura", "Requisitos", "Contacto"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1B4F8A", width: "100%" }}>

      {/* Main content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px 40px" }}>

        {/* Grid — stacks on mobile */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
        }}>

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <svg width="36" height="36" viewBox="0 0 44 44" fill="none">
                <defs>
                  <radialGradient id="footerSun" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFF176" />
                    <stop offset="55%" stopColor="#F9D423" />
                    <stop offset="100%" stopColor="#F5A623" />
                  </radialGradient>
                </defs>
                <g stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="22" y1="3" x2="22" y2="8" /><line x1="22" y1="36" x2="22" y2="41" />
                  <line x1="3" y1="22" x2="8" y2="22" /><line x1="36" y1="22" x2="41" y2="22" />
                  <line x1="7.5" y1="7.5" x2="11" y2="11" /><line x1="33" y1="33" x2="36.5" y2="36.5" />
                  <line x1="36.5" y1="7.5" x2="33" y2="11" /><line x1="11" y1="33" x2="7.5" y2="36.5" />
                </g>
                <circle cx="22" cy="22" r="12" fill="url(#footerSun)" />
              </svg>
              <div>
                <div style={{ fontFamily: "Georgia, serif", fontWeight: "900", fontSize: "20px", color: "#ffffff", letterSpacing: "0.04em", lineHeight: "1" }}>
                  SUNNY<sup style={{ fontSize: "8px", color: "#F5A623", verticalAlign: "super" }}>®</sup>
                </div>
                <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#93c5fd", textTransform: "uppercase", marginTop: "2px" }}>Cereal</div>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: "#93c5fd", lineHeight: "1.7", marginBottom: "20px", maxWidth: "260px" }}>
              Fabricantes de cereales de alta calidad para distribuidores mayoristas en Venezuela y Latinoamérica.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { icon: "📞", text: "+58 212 555-0100" },
                { icon: "✉️", text: "info@cerealsunny.com" },
                { icon: "📍", text: "Caracas, Venezuela" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "14px" }}>{item.icon}</span>
                  <span style={{ fontSize: "13px", color: "#93c5fd" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", color: "#ffffff", marginBottom: "16px" }}>
                {title}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <a key={link} href="#" style={{ fontSize: "14px", color: "#93c5fd", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F5A623")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#93c5fd")}
                  >{link}</a>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "#93c5fd", margin: "0" }}>
            © {year} Cereal Sunny. Todos los derechos reservados.
          </p>
          <a href="/creditos" style={{
            fontSize: "12px", color: "rgba(147,197,253,0.55)", textDecoration: "none",
            display: "flex", alignItems: "center", gap: "5px", transition: "color 0.2s",
          }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F5A623")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(147,197,253,0.55)")}
          >
            <span>✦</span> Créditos de Desarrollo
          </a>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {["Política de Privacidad", "Términos de Uso"].map((item) => (
              <a key={item} href="#" style={{ fontSize: "12px", color: "#93c5fd", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F5A623")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#93c5fd")}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
