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
    trackRef.current.scrollBy({ left: dir === "right" ? trackRef.current.offsetWidth : -trackRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <section style={{ width: "100%", background: "#F9FAFB", padding: "40px 0 60px" }}>
      <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span style={{ display: "inline-block", background: "#1B4F8A", color: "#fff", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", padding: "5px 12px", borderRadius: "4px", marginBottom: "10px" }}>Recetas</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: "900", color: "#111827", margin: "0 0 8px 0" }}>Ideas para tus Clientes</h2>
          <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "480px", margin: "0 auto", lineHeight: "1.6" }}>Recetas simples y deliciosas para impulsar las ventas.</p>
        </div>
        <div style={{ position: "relative" }}>
          <button onClick={() => scroll("left")} style={{ position: "absolute", left: "-20px", top: "45%", transform: "translateY(-50%)", zIndex: 10, width: "40px", height: "40px", borderRadius: "50%", background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", cursor: "pointer", fontSize: "20px", color: "#1B4F8A" }}>‹</button>
          <div ref={trackRef} style={{ display: "grid", gridTemplateColumns: "repeat(15, calc(16.666% - 16px))", gap: "19px", overflowX: "hidden", scrollBehavior: "smooth", padding: "8px 2px 12px" }}>
            {recipes.map((r) => (
              <div key={r.name} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", overflow: "hidden", transition: "box-shadow 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ height: "156px", background: r.bgColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "58px" }}>{r.emoji}</div>
                <div style={{ padding: "17px" }}>
                  <span style={{ display: "inline-block", background: r.badgeColor + "18", color: r.badgeColor, fontSize: "12px", fontWeight: "700", textTransform: "uppercase", padding: "4px 8px", borderRadius: "4px", marginBottom: "8px" }}>{r.category}</span>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: "700", color: "#111827", margin: "0 0 12px 0" }}>{r.name}</h3>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ fontSize: "13px", color: "#6B7280" }}>⏱ {r.time}</span>
                    <span style={{ fontSize: "13px", color: "#6B7280" }}>👥 {r.servings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scroll("right")} style={{ position: "absolute", right: "-20px", top: "45%", transform: "translateY(-50%)", zIndex: 10, width: "40px", height: "40px", borderRadius: "50%", background: "#fff", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.12)", cursor: "pointer", fontSize: "20px", color: "#1B4F8A" }}>›</button>
        </div>
      </div>
    </section>
  );
}
