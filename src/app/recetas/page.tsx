import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconBowl, IconChicken, IconChocolateBar, IconChocolateSwirl, IconParfait } from "@/components/Icons";

export const metadata = {
  title: "Recetas · Cereal Sunny",
  description: "Recetas fáciles de preparar con la línea de cereales Cereal Sunny.",
};

const recipes = [
  { name: "Cereal con Leche", category: "Desayuno", time: "2 min", servings: "1 porción", bgColor: "#EFF6FF", badgeColor: "#1B4F8A", Icon: IconBowl },
  { name: "Pollo Crocante con Hojuelas de Maíz", category: "Almuerzo", time: "35 min", servings: "4 porciones", bgColor: "#FFF7ED", badgeColor: "#92400e", Icon: IconChicken },
  { name: "Barritas Crocantes de Chocolate", category: "Postre", time: "20 min", servings: "8 barras", bgColor: "#FFF1F2", badgeColor: "#be123c", Icon: IconChocolateBar },
  { name: "Nidos de Chocolate", category: "Postre", time: "15 min", servings: "10 nidos", bgColor: "#F5F3FF", badgeColor: "#7c3aed", Icon: IconChocolateSwirl },
  { name: "Parfait de Yogur con Hojuelas", category: "Merienda", time: "8 min", servings: "2 porciones", bgColor: "#F0FDF4", badgeColor: "#166534", Icon: IconParfait },
];

export default function RecetasPage() {
  return (
    <main>
      <Header />
      <section style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "220px 24px 60px",
        textAlign: "center",
      }}>
        <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.2em", color: "#F5A623", marginBottom: "16px" }}>
          Recetario
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 20px 0" }}>
          Recetas fáciles de preparar
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.8", maxWidth: "620px", margin: "0 auto" }}>
          Ideas rápidas para aprovechar nuestra línea de cereales, de desayuno a postre.
        </p>
      </section>

      <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
          {recipes.map((r) => (
            <div key={r.name} style={{
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "12px",
              overflow: "hidden",
            }}>
              <div style={{ height: "170px", background: r.bgColor, display: "flex", alignItems: "center", justifyContent: "center", color: r.badgeColor }}>
                <r.Icon size={56} />
              </div>
              <div style={{ padding: "18px" }}>
                <span style={{ display: "inline-block", background: r.badgeColor + "18", color: r.badgeColor, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", padding: "3px 8px", borderRadius: "4px", marginBottom: "8px" }}>{r.category}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 10px 0", lineHeight: "1.3" }}>{r.name}</h3>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13px", color: "#6B7280" }}>⏱ {r.time}</span>
                  <span style={{ fontSize: "13px", color: "#6B7280" }}>👥 {r.servings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "16px" }}>
            ¿Interesado en distribuir Sunny? Contáctanos directamente.
          </p>
          <a href="tel:+582129539897" style={{
            display: "inline-flex", alignItems: "center", background: "#39a4b4", color: "#ffffff",
            fontWeight: "800", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em",
            padding: "14px 28px", borderRadius: "6px", textDecoration: "none",
          }}>
            +58 212-953.9897
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
