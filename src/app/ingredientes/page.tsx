import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconCorn, IconSugarCrystal, IconCacao, IconWheat } from "@/components/Icons";

export const metadata = {
  title: "Ingredientes · Cereal Sunny",
  description: "Los ingredientes reales detrás de la línea de cereales Cereal Sunny.",
  alternates: {
    canonical: "/ingredientes",
    languages: { "es-VE": "/ingredientes", es: "/ingredientes", "x-default": "/ingredientes" },
  },
};

const ingredients = [
  { name: "Maíz Descascarillado y Desgerminado", badge: "Base de la Línea", color: "#1B4F8A", Icon: IconCorn, img: "/images/ingredientes/maiz-descascarillado.jpg", description: "Ingrediente principal de las tres presentaciones, tostado hasta lograr la hojuela crocante." },
  { name: "Azúcar Refinada", badge: "Sunny Sugar Flakes", color: "#92400e", Icon: IconSugarCrystal, img: "/images/ingredientes/azucar-refinada.jpg", description: "Aporta el dulzor característico de nuestra presentación azucarada." },
  { name: "Cacao en Polvo", badge: "Sunny Choco Flakes", color: "#7c3aed", Icon: IconCacao, img: "/images/ingredientes/cacao-en-polvo.jpg", description: "Junto al color chocolate, da su sabor y tono a la presentación de chocolate." },
  { name: "Malta", badge: "Presente en la Línea", color: "#166534", Icon: IconWheat, img: "/images/ingredientes/malta.jpg", description: "Saborizante natural de cereal presente en las tres presentaciones." },
];

export default function IngredientesPage() {
  return (
    <main>
      <Header />
      <section style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "180px 24px 60px",
        textAlign: "center",
      }}>
        <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.2em", color: "#F5A623", marginBottom: "16px" }}>
          Calidad
        </span>
        <h1 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 20px 0" }}>
          Calidad desde el Origen
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.8", maxWidth: "620px", margin: "0 auto" }}>
          Estos son los ingredientes reales que componen nuestra línea de cereales.
        </p>
      </section>

      <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 340px))", gap: "24px", justifyContent: "center" }}>
          {ingredients.map((item) => (
            <div key={item.name} style={{
              position: "relative", aspectRatio: "4 / 3", borderRadius: "14px", overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)", border: "1px solid #F0F0F0",
            }}>
              <div style={{
                position: "absolute", inset: "0",
                background: item.img
                  ? `url('${item.img}') center/cover no-repeat`
                  : `linear-gradient(155deg, ${item.color} 0%, #0a1428 130%)`,
              }} />
              {!item.img && (
                <div style={{ position: "absolute", top: "20px", right: "18px", color: "rgba(255,255,255,0.18)" }}>
                  <item.Icon size={80} />
                </div>
              )}
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, transparent 78%)" }} />
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "20px 22px" }}>
                <span style={{ display: "inline-block", background: item.color, color: "#fff", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", padding: "4px 9px", borderRadius: "4px", marginBottom: "10px" }}>{item.badge}</span>
                <h3 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "18px", fontWeight: "900", color: "#ffffff", margin: "0 0 8px 0", letterSpacing: "-0.01em" }}>{item.name}</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", margin: "0", lineHeight: "1.6" }}>{item.description}</p>
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
