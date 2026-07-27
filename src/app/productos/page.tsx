import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Productos · Cereal Sunny",
  description: "Línea de cereales Cereal Sunny para distribuidores mayoristas.",
};

export default function ProductosPage() {
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
          Catálogo
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 20px 0" }}>
          Nuestra Línea de Cereales
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto 32px" }}>
          Estamos actualizando el catálogo completo con nuestros productos reales.
          Mientras tanto, contáctanos directamente para conocer disponibilidad,
          precios y condiciones para distribuidores.
        </p>
        <a href="tel:+582129539897" style={{
          display: "inline-flex", alignItems: "center", background: "#39a4b4", color: "#ffffff",
          fontWeight: "800", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em",
          padding: "14px 28px", borderRadius: "6px", textDecoration: "none",
        }}>
          +58 212-953.9897
        </a>
      </section>
      <Footer />
    </main>
  );
}
