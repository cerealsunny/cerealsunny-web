"use client";

const products = [
  {
    category: "Granola",
    name: "Granola Clásica",
    subtitle: "Avena, miel y nueces",
    color: "#92400e",
    emoji: "🌾",
  },
  {
    category: "Copos",
    name: "Copos de Maíz",
    subtitle: "Tostado natural, sin azúcar",
    color: "#1B4F8A",
    emoji: "🌽",
  },
  {
    category: "Muesli",
    name: "Muesli Tropical",
    subtitle: "Frutas y semillas selectas",
    color: "#166534",
    emoji: "🍍",
  },
  {
    category: "Integral",
    name: "Trigo Integral",
    subtitle: "Alto contenido en fibra",
    color: "#7c3aed",
    emoji: "🌿",
  },
  {
    category: "Infantil",
    name: "Cereales Sunny Kids",
    subtitle: "Vitaminas A, C y D",
    color: "#dc2626",
    emoji: "⭐",
  },
  {
    category: "Premium",
    name: "Granola Premium",
    subtitle: "Cacao, arándanos y chía",
    color: "#0e7490",
    emoji: "🫐",
  },
  {
    category: "Sin Gluten",
    name: "Cereal Sin Gluten",
    subtitle: "Certificado libre de gluten",
    color: "#166534",
    emoji: "✅",
  },
  {
    category: "Proteico",
    name: "High Protein",
    subtitle: "20g de proteína por porción",
    color: "#1B4F8A",
    emoji: "💪",
  },
];

export default function Products() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded inline-block mb-4"
            style={{ background: "#F5A623", color: "#1B4F8A" }}
          >
            Catálogo
          </span>
          <h2
            className="font-black text-[#111827] mb-4"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
            }}
          >
            Nuestra Línea de Cereales
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto leading-relaxed">
            Amplio catálogo de productos para cubrir todos los segmentos del
            mercado y maximizar tus oportunidades de distribución.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-lg border p-5 hover:shadow-md transition-all duration-200 cursor-pointer group"
              style={{ borderColor: "#E5E7EB" }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4"
                style={{ background: product.color + "15" }}
              >
                {product.emoji}
              </div>

              {/* Category */}
              <span
                className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2"
                style={{
                  background: product.color + "18",
                  color: product.color,
                }}
              >
                {product.category}
              </span>

              {/* Name */}
              <h3
                className="text-[#111827] font-bold text-base mb-1 group-hover:text-[#1B4F8A] transition-colors"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {product.name}
              </h3>

              {/* Subtitle */}
              <p className="text-[#6B7280] text-sm">{product.subtitle}</p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#1B4F8A] opacity-0 group-hover:opacity-100 transition-opacity">
                Ver detalles
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="#1B4F8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/productos"
            className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded border-2 transition-colors duration-200"
            style={{ borderColor: "#1B4F8A", color: "#1B4F8A" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1B4F8A";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#1B4F8A";
            }}
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
