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

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const containerWidth = trackRef.current.offsetWidth;
    trackRef.current.scrollBy({ left: direction === "right" ? containerWidth : -containerWidth, behavior: "smooth" });
  };

  return (
    <section style={{ width: "100%", background: "#F9FAFB", padding: "40px 0 60px" }}>
      <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span style={{
            display: "inline-block",
            background: "#1B4F8A",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "5px 12px",
            borderRadius: "4px",
            marginBottom: "10px",
          }}>
            Recetas
          </span>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: "900",
            color: "#111827",
            margin: "0 0 8px 0",
          }}>
            Ideas para tus Clientes
          </h2>
          <p style={{
            fontSize: "15px",
            color: "#6B7280",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}>
            Recetas simples y deliciosas que tus distribuidores pueden
            compartir para impulsar las ventas.
          </p>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>

          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            style={{
              position: "absolute",
              left: "-44px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#ffffff",
              border: "1px solid #E5E7EB",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "#1B4F8A",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#EFF6FF")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
          >
            ‹
          </button>

          {/* Track — shows 6 cards, scrolls 6 at a time */}
          <div
            ref={trackRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(15, calc(16.666% - 16px))",
              gap: "19px",
              overflowX: "hidden",
              scrollBehavior: "smooth",
              padding: "8px 2px 12px",
            }}
          >
            {recipes.map((recipe) => (
              <div
                key={recipe.name}
                style={{
                  background: "#ffffff",
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxSizing: "border-box",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                {/* Image */}
                <div style={{
                  height: "156px",
                  background: recipe.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "58px",
                }}>
                  {recipe.emoji}
                </div>

                {/* Content */}
                <div style={{ padding: "17px 17px 19px" }}>
                  <span style={{
                    display: "inline-block",
                    background: recipe.badgeColor + "18",
                    color: recipe.badgeColor,
                    fontSize: "12px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    marginBottom: "8px",
                  }}>
                    {recipe.category}
                  </span>

                  <h3 style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#111827",
                    margin: "0 0 12px 0",
                    lineHeight: "1.3",
                  }}>
                    {recipe.name}
                  </h3>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6.5" stroke="#6B7280" strokeWidth="1.5"/>
                        <path d="M8 5v3.5l2 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span style={{ fontSize: "14px", color: "#6B7280" }}>{recipe.time}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" stroke="#6B7280" strokeWidth="1.5"/>
                        <circle cx="8" cy="6" r="1.5" stroke="#6B7280" strokeWidth="1.2"/>
                      </svg>
                      <span style={{ fontSize: "14px", color: "#6B7280" }}>{recipe.servings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            style={{
              position: "absolute",
              right: "-44px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#ffffff",
              border: "1px solid #E5E7EB",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "#1B4F8A",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#EFF6FF")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}
