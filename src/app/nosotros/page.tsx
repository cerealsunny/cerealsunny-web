import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sobre Sunny · Cereal Sunny",
  description: "Cereal Sunny, fabricante venezolano de cereales para distribuidores mayoristas.",
};

export default function NosotrosPage() {
  return (
    <main>
      <Header />
      <section style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "180px 24px 120px",
        textAlign: "center",
      }}>
        <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.2em", color: "#F5A623", marginBottom: "16px" }}>
          Sobre Sunny
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 20px 0" }}>
          Fabricante B2B de Cereales
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto" }}>
          Cereal Sunny fabrica cereales de alta calidad con ingredientes naturales,
          con 1 año en el mercado venezolano. Vendemos exclusivamente a distribuidores
          mayoristas en Venezuela y Latinoamérica, desde Caracas.
        </p>
      </section>
      <Footer />
    </main>
  );
}
