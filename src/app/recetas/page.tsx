import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecetasCatalog from "@/components/RecetasCatalog";

export const metadata = {
  title: "Recetas · Cereal Sunny",
  description: "Recetas fáciles de preparar con la línea de cereales Cereal Sunny.",
};

export default function RecetasPage() {
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
        <RecetasCatalog />

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
