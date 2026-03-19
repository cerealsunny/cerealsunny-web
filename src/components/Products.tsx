"use client";

const products = [
  { category: "Granola", name: "Granola Clásica", subtitle: "Avena, miel y nueces", color: "#92400e", emoji: "🌾" },
  { category: "Copos", name: "Copos de Maíz", subtitle: "Tostado natural, sin azúcar", color: "#1B4F8A", emoji: "🌽" },
  { category: "Muesli", name: "Muesli Tropical", subtitle: "Frutas y semillas selectas", color: "#166534", emoji: "🍍" },
  { category: "Integral", name: "Trigo Integral", subtitle: "Alto contenido en fibra", color: "#7c3aed", emoji: "🌿" },
  { category: "Infantil", name: "Sunny Kids", subtitle: "Vitaminas A, C y D", color: "#dc2626", emoji: "⭐" },
  { category: "Premium", name: "Granola Premium", subtitle: "Cacao, arándanos y chía", color: "#0e7490", emoji: "🫐" },
  { category: "Sin Gluten", name: "Sin Gluten", subtitle: "Certificado libre de gluten", color: "#166534", emoji: "✅" },
  { category: "Proteico", name: "High Protein", subtitle: "20g de proteína por porción", color: "#1B4F8A", emoji: "💪" },
];

export default function Products() {
  return (
    <section style={{ width: "100%", background: "#ffffff", padding: "60px 0" }}>
      <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ display: "inline-block", background: "#F5A623", color: "#1B4F8A", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", padding: "5px 12px", borderRadius: "4px", marginBottom: "10px" }}>Catálogo</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: "900", color: "#111827", margin: "0 0 8px 0" }}>Nuestra Línea de Cereales</h2>
          <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "480px", margin: "0 auto", lineHeight: "1.6" }}>Amplio catálogo para cubrir todos los segmentos del mercado.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "24px 20px", transition: "box-shadow 0.2s, border-color 0.2s", cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.09)"; e.currentTarget.style.borderColor = "#1B4F8A"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#E5E7EB"; }}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "10px", background: p.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", marginBottom: "16px" }}>{p.emoji}</div>
              <span style={{ display: "inline-block", background: p.color + "18", color: p.color, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", padding: "3px 8px", borderRadius: "4px", marginBottom: "8px" }}>{p.category}</span>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 4px 0" }}>{p.name}</h3>
              <p style={{ fontSize: "13px", color: "#6B7280", margin: "0" }}>{p.subtitle}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="/productos" style={{ display: "inline-block", border: "2px solid #1B4F8A", color: "#1B4F8A", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 36px", borderRadius: "6px", textDecoration: "none" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1B4F8A"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#1B4F8A"; }}
          >Ver Catálogo Completo</a>
        </div>
      </div>
    </section>
  );
}
