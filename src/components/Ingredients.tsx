"use client";

const ingredients = [
  { name: "Avena Integral", badge: "100% Natural", badgeColor: "#166534", description: "Avena de grano entero seleccionada, rica en fibra y minerales esenciales.", icon: "🌾", bg: "#e8f5e9" },
  { name: "Miel de Abejas", badge: "Sin Aditivos", badgeColor: "#1B4F8A", description: "Endulzante natural puro que aporta energía y antioxidantes.", icon: "🍯", bg: "#fff8e1" },
  { name: "Frutas Deshidratadas", badge: "Premium", badgeColor: "#92400e", description: "Pasas, arándanos y mango sin azúcares añadidos.", icon: "🍇", bg: "#fce4ec" },
  { name: "Semillas & Nueces", badge: "Alto Valor", badgeColor: "#166534", description: "Almendras y chía para enriquecer el perfil nutricional.", icon: "🥜", bg: "#f3e5f5" },
  { name: "Maíz Tostado", badge: "Sin Gluten", badgeColor: "#1B4F8A", description: "Tostado al punto exacto para lograr la crocancia perfecta.", icon: "🌽", bg: "#fffde7" },
  { name: "Vitaminas & Minerales", badge: "Enriquecido", badgeColor: "#7c3aed", description: "Vitaminas A, C, D y minerales según estándares internacionales.", icon: "💊", bg: "#e8eaf6" },
];

function IngredientCard({ item }: { item: typeof ingredients[0] }) {
  return (
    <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "3/4", cursor: "pointer" }}
      onMouseEnter={(e) => { const o = e.currentTarget.querySelector(".overlay") as HTMLElement; if (o) o.style.opacity = "1"; }}
      onMouseLeave={(e) => { const o = e.currentTarget.querySelector(".overlay") as HTMLElement; if (o) o.style.opacity = "0"; }}
    >
      <div style={{ width: "100%", height: "100%", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(40px, 6vw, 80px)" }}>{item.icon}</div>
      <div style={{ position: "absolute", bottom: "12px", left: "12px", zIndex: 2 }}>
        <span style={{ display: "inline-block", background: item.badgeColor, color: "#fff", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", padding: "5px 10px", borderRadius: "4px" }}>{item.name}</span>
      </div>
      <div className="overlay" style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(10,20,40,0.92) 0%, rgba(10,20,40,0.6) 50%, rgba(10,20,40,0.2) 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px 16px", opacity: "0", transition: "opacity 0.3s ease", zIndex: 3 }}>
        <span style={{ display: "inline-block", background: item.badgeColor, color: "#fff", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", padding: "4px 9px", borderRadius: "4px", marginBottom: "8px", alignSelf: "flex-start" }}>{item.badge}</span>
        <h3 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: "700", color: "#fff", margin: "0 0 6px 0" }}>{item.name}</h3>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", margin: "0", lineHeight: "1.5" }}>{item.description}</p>
      </div>
    </div>
  );
}

export default function Ingredients() {
  return (
    <section style={{ width: "100%", background: "#ffffff", padding: "60px 0 40px" }}>
      <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span style={{ display: "inline-block", background: "#F5A623", color: "#1B4F8A", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", padding: "5px 12px", borderRadius: "4px", marginBottom: "10px" }}>Ingredientes</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: "900", color: "#111827", margin: "0 0 8px 0" }}>Calidad desde el Origen</h2>
          <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "480px", margin: "0 auto", lineHeight: "1.6" }}>Seleccionamos cada ingrediente con criterios estrictos de calidad.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", width: "100%" }}>
          {ingredients.map((item) => <IngredientCard key={item.name} item={item} />)}
        </div>
      </div>
    </section>
  );
}
