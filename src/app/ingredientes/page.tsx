import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconCorn, IconSugarCrystal, IconCacao, IconWheat } from "@/components/Icons";

export const metadata = {
  title: "Ingredientes · Cereal Sunny",
  description: "Los ingredientes reales detrás de la línea de cereales Cereal Sunny.",
};

const ingredients = [
  { name: "Maíz Descascarillado y Desgerminado", badge: "Base de la Línea", color: "#1B4F8A", Icon: IconCorn, bg: "#fffde7", description: "Ingrediente principal de las tres presentaciones, tostado hasta lograr la hojuela crocante." },
  { name: "Azúcar Refinada", badge: "Sunny Sugar Flakes", color: "#92400e", Icon: IconSugarCrystal, bg: "#fff8e1", description: "Aporta el dulzor característico de nuestra presentación azucarada." },
  { name: "Cacao en Polvo", badge: "Sunny Choco Flakes", color: "#7c3aed", Icon: IconCacao, bg: "#f3e5f5", description: "Junto al color chocolate, da su sabor y tono a la presentación de chocolate." },
  { name: "Malta", badge: "Presente en la Línea", color: "#166534", Icon: IconWheat, bg: "#e8f5e9", description: "Saborizante natural de cereal presente en las tres presentaciones." },
];

export default function IngredientesPage() {
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
          Calidad
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 20px 0" }}>
          Calidad desde el Origen
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.8", maxWidth: "620px", margin: "0 auto" }}>
          Estos son los ingredientes reales que componen nuestra línea de cereales.
        </p>
      </section>

      <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {ingredients.map((item) => (
            <div key={item.name} style={{ position: "relative", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ width: "100%", height: "220px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", color: item.color }}>
                <item.Icon size={72} />
              </div>
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderTop: "none", borderRadius: "0 0 14px 14px", padding: "22px 20px" }}>
                <span style={{ display: "inline-block", background: item.color + "18", color: item.color, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", padding: "3px 8px", borderRadius: "4px", marginBottom: "10px" }}>{item.badge}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: "700", color: "#111827", margin: "0 0 8px 0" }}>{item.name}</h3>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.6", margin: "0" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "16px" }}>
            ¿Quieres conocer más sobre nuestros procesos de calidad? Contáctanos directamente.
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
