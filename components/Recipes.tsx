"use client";

const recipes = [
  {
    name: "Bowl Energético",
    category: "Desayuno",
    time: "5 min",
    servings: "1 porción",
    color: "#1B4F8A",
    emoji: "🥣",
  },
  {
    name: "Granola con Yogur",
    category: "Merienda",
    time: "3 min",
    servings: "2 porciones",
    color: "#166534",
    emoji: "🍦",
  },
  {
    name: "Barras de Cereal",
    category: "Snack",
    time: "20 min",
    servings: "8 barras",
    color: "#92400e",
    emoji: "🍫",
  },
  {
    name: "Smoothie Tropical",
    category: "Bebida",
    time: "5 min",
    servings: "1 porción",
    color: "#7c3aed",
    emoji: "🥤",
  },
];

export default function Recipes() {
  return (
    <section className="w-full py-20 px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded inline-block mb-4"
            style={{ background: "#1B4F8A", color: "#fff" }}
          >
            Recetas
          </span>
          <h2
            className="font-black text-[#111827] mb-4"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
            }}
          >
            Ideas para tus Clientes
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto leading-relaxed">
            Recetas simples y deliciosas que tus distribuidores pueden
            compartir para impulsar las ventas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.name}
              className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow duration-200"
              style={{ borderColor: "#E5E7EB", background: "#fff" }}
            >
              {/* Image placeholder */}
              <div
                className="h-40 flex items-center justify-center text-5xl"
                style={{ background: recipe.color + "18" }}
              >
                {recipe.emoji}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category badge */}
                <span
                  className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2"
                  style={{
                    background: recipe.color + "18",
                    color: recipe.color,
                  }}
                >
                  {recipe.category}
                </span>

                {/* Name */}
                <h3
                  className="text-[#111827] font-bold text-base mb-3"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {recipe.name}
                </h3>

                {/* Meta */}
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6.5" stroke="#6B7280" strokeWidth="1.5"/>
                      <path d="M8 5v3.5l2 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="text-xs text-[#6B7280]">{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" stroke="#6B7280" strokeWidth="1.5"/>
                      <circle cx="8" cy="6" r="1.5" stroke="#6B7280" strokeWidth="1.2"/>
                    </svg>
                    <span className="text-xs text-[#6B7280]">{recipe.servings}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
