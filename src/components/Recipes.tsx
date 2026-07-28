"use client";
import { useRef } from "react";
import { IconBowl, IconChicken, IconChocolateBar, IconChocolateSwirl, IconParfait } from "./Icons";

const recipes = [
  { name: "Cereal con Leche", category: "Desayuno", time: "2 min", servings: "1 porción", bgColor: "#EFF6FF", badgeColor: "#1B4F8A", Icon: IconBowl },
  { name: "Pollo Crocante con Hojuelas de Maíz", category: "Almuerzo", time: "35 min", servings: "4 porciones", bgColor: "#FFF7ED", badgeColor: "#92400e", Icon: IconChicken },
  { name: "Barritas Crocantes de Chocolate", category: "Postre", time: "20 min", servings: "8 barras", bgColor: "#FFF1F2", badgeColor: "#be123c", Icon: IconChocolateBar },
  { name: "Nidos de Chocolate", category: "Postre", time: "15 min", servings: "10 nidos", bgColor: "#F5F3FF", badgeColor: "#7c3aed", Icon: IconChocolateSwirl },
  { name: "Parfait de Yogur con Hojuelas", category: "Merienda", time: "8 min", servings: "2 porciones", bgColor: "#F0FDF4", badgeColor: "#166534", Icon: IconParfait },
];

const cardsPerRow = Math.min(recipes.length, 6);

export default function Recipes() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    // Scroll by the width of 2 cards on mobile, a full row on desktop
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? window.innerWidth * 0.75 : trackRef.current.offsetWidth / cardsPerRow;
    const scrollAmount = isMobile ? cardWidth * 2 : trackRef.current.offsetWidth;
    trackRef.current.scrollBy({ left: dir === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  return (
    <section style={{ width: "100%", background: "#F9FAFB", padding: "40px 0 60px", overflow: "hidden" }}>
      <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <a href="/recetas" style={{
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
          >Recetas</a>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "900", color: "#1a6b78", margin: "0", letterSpacing: "-0.01em" }}>Recetas fáciles de preparar</h2>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>
          <button onClick={() => scroll("left")} style={{ position: "absolute", left: "-12px", top: "40%", transform: "translateY(-50%)", zIndex: 10, width: "36px", height: "36px", borderRadius: "50%", background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", cursor: "pointer", fontSize: "18px", color: "#1B4F8A", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>

          <div ref={trackRef} style={{ display: "flex", gap: "16px", overflowX: "hidden", scrollBehavior: "smooth", padding: "8px 4px 12px" }}>
            {recipes.map((r) => (
              <div key={r.name} style={{
                background: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "10px",
                overflow: "hidden",
                flexShrink: 0,
                width: `calc(${100 / cardsPerRow}% - 14px)`,
                minWidth: "160px",
                transition: "box-shadow 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ height: "130px", background: r.bgColor, display: "flex", alignItems: "center", justifyContent: "center", color: r.badgeColor }}><r.Icon size={44} /></div>
                <div style={{ padding: "14px" }}>
                  <span style={{ display: "inline-block", background: r.badgeColor + "18", color: r.badgeColor, fontSize: "10px", fontWeight: "700", textTransform: "uppercase", padding: "3px 7px", borderRadius: "4px", marginBottom: "6px" }}>{r.category}</span>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "14px", fontWeight: "700", color: "#111827", margin: "0 0 8px 0", lineHeight: "1.3" }}>{r.name}</h3>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "12px", color: "#6B7280" }}>⏱ {r.time}</span>
                    <span style={{ fontSize: "12px", color: "#6B7280" }}>👥 {r.servings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scroll("right")} style={{ position: "absolute", right: "-12px", top: "40%", transform: "translateY(-50%)", zIndex: 10, width: "36px", height: "36px", borderRadius: "50%", background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", cursor: "pointer", fontSize: "18px", color: "#1B4F8A", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
        </div>

      </div>
    </section>
  );
}
