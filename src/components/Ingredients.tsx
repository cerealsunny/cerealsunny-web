"use client";

import { IconCorn, IconSugarCrystal, IconCacao, IconWheat } from "./Icons";

const ingredients = [
  { name: "Maíz Descascarillado y Desgerminado", badge: "Base de la Línea", badgeColor: "#1B4F8A", description: "Ingrediente principal de las tres presentaciones, tostado hasta lograr la hojuela crocante.", Icon: IconCorn, bg: "#fffde7", img: "/images/ingredientes/maiz-descascarillado.jpg", alt: "Grano de maíz descascarillado y desgerminado, materia prima de las hojuelas Sunny" },
  { name: "Azúcar Refinada", badge: "Sunny Sugar Flakes", badgeColor: "#92400e", description: "Aporta el dulzor característico de nuestra presentación azucarada.", Icon: IconSugarCrystal, bg: "#fff8e1", img: "/images/ingredientes/azucar-refinada.jpg", alt: "Azúcar refinada, ingrediente de Sunny Sugar Flakes" },
  { name: "Cacao en Polvo", badge: "Sunny Choco Flakes", badgeColor: "#7c3aed", description: "Junto al color chocolate, da su sabor y tono a la presentación de chocolate.", Icon: IconCacao, bg: "#f3e5f5", img: "/images/ingredientes/cacao-en-polvo.jpg", alt: "Cacao en polvo, ingrediente de Sunny Choco Flakes" },
  { name: "Malta", badge: "Presente en la Línea", badgeColor: "#166534", description: "Saborizante natural de cereal presente en las tres presentaciones.", Icon: IconWheat, bg: "#e8f5e9", img: "/images/ingredientes/malta.jpg", alt: "Malta, saborizante natural de cereal" },
];

function IngredientCard({ item }: { item: typeof ingredients[0] }) {
  const Icon = item.Icon;
  return (
    <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "3/4", cursor: "pointer" }}
      onMouseEnter={(e) => { const o = e.currentTarget.querySelector(".overlay") as HTMLElement; if (o) o.style.opacity = "1"; }}
      onMouseLeave={(e) => { const o = e.currentTarget.querySelector(".overlay") as HTMLElement; if (o) o.style.opacity = "0"; }}
    >
      {item.img ? (
        <div role="img" aria-label={item.alt} style={{ width: "100%", height: "100%", background: `url('${item.img}') center/cover no-repeat` }} />
      ) : (
        <div style={{ width: "100%", height: "100%", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", color: item.badgeColor }}><Icon size={64} /></div>
      )}
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
          <a href="/ingredientes" style={{
            display: "inline-block",
            background: "#39a4b4",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            padding: "12px 32px",
            borderRadius: "6px",
            marginBottom: "20px",
            textDecoration: "none",
            border: "2px solid #39a4b4",
            transition: "background 0.2s, color 0.2s, border-color 0.2s",
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#F5A623"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F5A623"; (e.currentTarget as HTMLAnchorElement).style.color = "#1B4F8A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#39a4b4"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#39a4b4"; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
          >Ingredientes</a>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "900", color: "#1a6b78", margin: "0", letterSpacing: "-0.01em" }}>Calidad desde el Origen</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", width: "100%" }}>
          {ingredients.map((item) => <IngredientCard key={item.name} item={item} />)}
        </div>
      </div>
    </section>
  );
}
