"use client";

const footerLinks = {
  Empresa: ["Nosotros", "Historia", "Certificaciones", "Noticias"],
  Productos: ["Granola", "Copos de Maíz", "Muesli", "Línea Infantil"],
  Distribuidores: ["Cómo distribuir", "Zonas de cobertura", "Requisitos", "Contacto"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#1B4F8A" }}>
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="40" height="40" viewBox="0 0 44 44" fill="none">
                <defs>
                  <radialGradient id="footerSun" cx="50%" cy="50%" r="50%">
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
                <circle cx="22" cy="22" r="12" fill="url(#footerSun)" />
              </svg>
              <div>
                <div
                  className="text-white font-black text-xl tracking-wide"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  SUNNY<sup style={{ fontSize: "8px", color: "#F5A623" }}>®</sup>
                </div>
                <div className="text-[#93c5fd] text-[9px] tracking-[0.2em] uppercase">Cereal</div>
              </div>
            </div>

            <p className="text-[#93c5fd] text-sm leading-relaxed mb-6 max-w-xs">
              Fabricantes de cereales de alta calidad para distribuidores mayoristas
              en Venezuela y Latinoamérica.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#93c5fd]">
                <span>📞</span>
                <span>+58 212 555-0100</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#93c5fd]">
                <span>✉️</span>
                <span>info@cerealsunny.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#93c5fd]">
                <span>📍</span>
                <span>Caracas, Venezuela</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-white font-bold text-sm uppercase tracking-widest mb-4"
              >
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#93c5fd] text-sm hover:text-[#F5A623] transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 lg:px-8 py-5"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#93c5fd] text-xs">
            © {currentYear} Cereal Sunny. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#93c5fd] text-xs hover:text-[#F5A623] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-[#93c5fd] text-xs hover:text-[#F5A623] transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
