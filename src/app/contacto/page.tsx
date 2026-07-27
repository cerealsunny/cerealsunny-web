import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contacto · Cereal Sunny",
  description: "Contacta a Cereal Sunny para distribución mayorista de cereales.",
};

export default function ContactoPage() {
  return (
    <main>
      <Header />
      <section style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "180px 24px 120px",
        textAlign: "center",
      }}>
        <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.2em", color: "#F5A623", marginBottom: "16px" }}>
          Contacto
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 32px 0" }}>
          Hablemos de Distribución
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", alignItems: "center" }}>
          <a href="tel:+582129539897" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "16px", color: "#111827", textDecoration: "none", fontWeight: "600" }}>
            📞 +58 212-953.9897
          </a>
          <a href="mailto:info@cerealsunny.com" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "16px", color: "#111827", textDecoration: "none", fontWeight: "600" }}>
            ✉️ info@cerealsunny.com
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "16px", color: "#111827", fontWeight: "600" }}>
            📍 Caracas, Venezuela
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
