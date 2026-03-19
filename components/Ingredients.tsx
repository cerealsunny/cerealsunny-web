"use client";

const ingredients = [
  {
    name: "Avena Integral",
    badge: "100% Natural",
    badgeColor: "#166534",
    description:
      "Avena de grano entero seleccionada, rica en fibra y minerales esenciales para una nutrición completa.",
    icon: "🌾",
  },
  {
    name: "Miel de Abejas",
    badge: "Sin Aditivos",
    badgeColor: "#1B4F8A",
    description:
      "Miel pura de producción local, endulzante natural que aporta energía y antioxidantes.",
    icon: "🍯",
  },
  {
    name: "Frutas Deshidratadas",
    badge: "Selección Premium",
    badgeColor: "#92400e",
    description:
      "Mezcla de frutas deshidratadas sin azúcares añadidos: pasas, arándanos, mango y más.",
    icon: "🍇",
  },
  {
    name: "Semillas & Nueces",
    badge: "Alto Valor",
    badgeColor: "#166534",
    description:
      "Almendras, semillas de girasol y chía para enriquecer el perfil nutricional de cada cereal.",
    icon: "🥜",
  },
  {
    name: "Maíz Tostado",
    badge: "Sin Gluten",
    badgeColor: "#1B4F8A",
    description:
      "Maíz de primera calidad tostado al punto exacto para lograr la crocancia perfecta.",
    icon: "🌽",
  },
  {
    name: "Vitaminas & Minerales",
    badge: "Enriquecido",
    badgeColor: "#7c3aed",
    description:
      "Formulación enriquecida con vitaminas A, C, D y minerales según estándares nutricionales.",
    icon: "💊",
  },
];

export default function Ingredients() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded inline-block mb-4"
            style={{ background: "#F5A623", color: "#1B4F8A" }}
          >
            Ingredientes
          </span>
          <h2
            className="font-black text-[#111827] mb-4"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
            }}
          >
            Calidad desde el Origen
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto leading-relaxed">
            Seleccionamos cada ingrediente con criterios estrictos de calidad
            para garantizar el mejor producto a nuestros distribuidores.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((item) => (
            <div
              key={item.name}
              className="rounded-lg p-6 border transition-shadow duration-200 hover:shadow-md"
              style={{ borderColor: "#E5E7EB", background: "#fff" }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Badge */}
              <span
                className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded inline-block mb-3"
                style={{
                  background: item.badgeColor + "18",
                  color: item.badgeColor,
                }}
              >
                {item.badge}
              </span>

              {/* Name */}
              <h3
                className="text-[#111827] font-bold text-lg mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
