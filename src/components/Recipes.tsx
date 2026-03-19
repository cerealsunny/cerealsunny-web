"use client";
import { useRef } from "react";

const recipes = [
  { name: "Bowl Energético", category: "Desayuno", time: "5 min", servings: "1 porción", bgColor: "#EFF6FF", badgeColor: "#1B4F8A", emoji: "🥣" },
  { name: "Granola con Yogur", category: "Merienda", time: "3 min", servings: "2 porciones", bgColor: "#F0FDF4", badgeColor: "#166534", emoji: "🍦" },
  { name: "Barras de Cereal", category: "Snack", time: "20 min", servings: "8 barras", bgColor: "#FFF7ED", badgeColor: "#92400e", emoji: "🍫" },
  { name: "Smoothie Tropical", category: "Bebida", time: "5 min", servings: "1 porción", bgColor: "#F5F3FF", badgeColor: "#7c3aed", emoji: "🥤" },
  { name: "Pancakes de Avena", category: "Desayuno", time: "15 min", servings: "4 porciones", bgColor: "#FFF1F2", badgeColor: "#be123c", emoji: "🥞" },
  { name: "Ensalada de Frutas", category: "Postre", time: "10 min", servings: "2 porciones", bgColor: "#ECFDF5", badgeColor: "#166534", emoji: "🍓" },
  { name: "Avena Caliente", category: "Desayuno", time: "8 min", servings: "1 porción", bgColor: "#FFF7ED", badgeColor: "#92400e", emoji: "🍲" },
  { name: "Muffins de Granola", category: "Snack", time: "25 min", servings: "6 muffins", bgColor: "#FFF1F2", badgeColor: "#be123c", emoji: "🧁" },
  { name: "Batido de Proteínas", category: "Bebida", time: "5 min", servings: "1 porción", bgColor: "#EFF6FF", badgeColor: "#1B4F8A", emoji: "🥛" },
  { name: "Parfait de Cereal", category: "Postre", time: "10 min", servings: "2 porciones", bgColor: "#F5F3FF", badgeColor: "#7c3aed", emoji: "🍧" },
  { name: "Tostadas con Granola", category: "Desayuno", time: "7 min", servings: "2 porciones", bgColor: "#F0FDF4", badgeColor: "#166534", emoji: "🍞" },
  { name: "Cookies de Avena", category: "Postre", time: "30 min", servings: "12 cookies", bgColor: "#FFF7ED", badgeColor: "#92400e", emoji: "🍪" },
  { name: "Wrap de Frutas", category: "Merienda", time: "8 min", servings: "1 porción", bgColor: "#ECFDF5", badgeColor: "#166534", emoji: "🌯" },
  { name: "Cereal con Leche", category: "Desayuno", time: "2 min", servings: "1 porción", bgColor: "#EFF6FF", badgeColor: "#1B4F8A", emoji: "🥣" },
  { name: "Helado de Granola", category: "Postre", time: "15 min", servings: "4 porciones", bgColor: "#F5F3FF", badgeColor: "#7c3aed", emoji: "🍨" },
];

export default function Recipes() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    // Scroll by the width of 2 cards on mobile, 6 on desktop
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? window.innerWidth * 0.75 : trackRef.current.offsetWidth / 6;
    const scrollAmount = isMobile ? cardWidth * 2 : trackRef.current.offsetWidth;
    trackRef.current.scrollBy({ left: dir === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  return (
    <section style={{ width: "100%", background: "#F9FAFB", padding: "40px 0 60px", overflow: "hidden" }}>
      <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <a href="/recetas" style={{ display: "inline-block", background: "#1B4F8A", color: "#fff", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", padding: "8px 20px", borderRadius: "6px", marginBottom: "16px", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#F5A623")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#1B4F8A")}
          >Recetas</a>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "900", color: "#111827", margin: "0", letterSpacing: "-0.01em" }}>Recetas fáciles de preparar</h2>
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
                width: "calc(16.666% - 14px)",
                minWidth: "160px",
                transition: "box-shadow 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ height: "130px", background: r.bgColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "48px" }}>{r.emoji}</div>
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
