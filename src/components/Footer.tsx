"use client";

import { IconPhone, IconMail, IconPin } from "./Icons";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Empresa: [{ label: "Nosotros", href: "/nosotros" }],
  Productos: [{ label: "Ver Catálogo", href: "/productos" }],
  Distribuidores: [{ label: "Contacto", href: "/contacto" }],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#39a4b4", width: "100%" }}>

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
                <div style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontWeight: "900", fontSize: "20px", color: "#ffffff", letterSpacing: "0.04em", lineHeight: "1" }}>
                  SUNNY<sup style={{ fontSize: "8px", color: "#F5A623", verticalAlign: "super" }}>®</sup>
                </div>
                <div style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#111827", textTransform: "uppercase", marginTop: "2px" }}>Cereal</div>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: "#111827", lineHeight: "1.7", marginBottom: "20px", maxWidth: "260px" }}>
              Fabricantes de cereales de alta calidad para distribuidores mayoristas en Venezuela y Latinoamérica.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { Icon: IconPhone, text: "+58 212-953.9897" },
                { Icon: IconMail, text: "info@cerealsunny.com" },
                { Icon: IconPin, text: "Av. Guaicaipuro, El Rosal, Torre Forum, Piso 8, Caracas 1060, Miranda" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#111827", display: "flex" }}><item.Icon size={14} /></span>
                  <span style={{ fontSize: "13px", color: "#111827" }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "14px", marginTop: "18px" }}>
              <a href="https://www.instagram.com/cerealsunny" target="_blank" rel="noopener noreferrer" aria-label="Instagram Cereal Sunny"
                style={{ color: "#111827", display: "flex", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F5A623")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#111827")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@cerealsunnyve" target="_blank" rel="noopener noreferrer" aria-label="TikTok Cereal Sunny"
                style={{ color: "#111827", display: "flex", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F5A623")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#111827")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3c.4 2.3 1.9 3.9 4.5 4.1v3c-1.6 0-3-.5-4.5-1.5v6.6c0 3.6-2.9 6.3-6.4 6.1-3.2-.2-5.7-2.9-5.6-6.1.1-3.1 2.7-5.6 5.9-5.6.3 0 .6 0 .9.1v3.1c-.3-.1-.6-.2-.9-.2-1.5 0-2.8 1.2-2.8 2.7 0 1.6 1.3 2.8 2.9 2.7 1.5-.1 2.7-1.3 2.7-2.9V3h3.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", color: "#111827", marginBottom: "16px" }}>
                {title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <a key={link.label} href={link.href} style={{ fontSize: "14px", color: "#111827", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F5A623")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#111827")}
                  >{link.label}</a>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "#111827", margin: "0" }}>
            © {year} Cereal Sunny. Todos los derechos reservados.
          </p>
          <a href="/creditos" style={{
            fontSize: "12px", color: "rgba(17,24,39,0.75)", textDecoration: "none",
            display: "flex", alignItems: "center", gap: "5px", transition: "color 0.2s",
          }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F5A623")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(17,24,39,0.75)")}
          >
            <span>✦</span> Créditos de Desarrollo
          </a>
        </div>
      </div>

    </footer>
  );
}
