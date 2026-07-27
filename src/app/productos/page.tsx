import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Productos · Cereal Sunny",
  description: "Línea de cereales Cereal Sunny para distribuidores mayoristas.",
};

const products = [
  {
    name: "Sunny Flakes",
    tag: "Clásico",
    color: "#1B4F8A",
    emoji: "🌽",
    description:
      "Hojuelas de maíz tostado, doradas y crocantes. Cada grano de maíz se descascarilla y se parte en tres piezas reales de grano — cada una se convierte en una hojuela. Sin masa, sin moldes: el sabor clásico de siempre.",
  },
  {
    name: "Sunny Sugar",
    tag: "Dulce",
    color: "#F5A623",
    emoji: "✨",
    description:
      "La misma hojuela de maíz real, glaseada con azúcar para un crunch dulce que nunca falla en el punto de venta.",
  },
  {
    name: "Sunny Choco Flakes",
    tag: "Chocolate",
    color: "#6b3f22",
    emoji: "🍫",
    description:
      "Hojuelas de maíz real bañadas en chocolate, el antojo favorito de los más pequeños de la casa.",
  },
];

export default function ProductosPage() {
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
          Catálogo
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 20px 0" }}>
          Nuestra Línea de Cereales
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.8", maxWidth: "620px", margin: "0 auto" }}>
          Hojuelas de maíz laminadas grano por grano — no masa moldeada por extrusión.
          Estos son nuestros tres productos, disponibles para distribución mayorista.
        </p>
      </section>

      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "32px 24px", textAlign: "left" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "12px", background: p.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "18px" }}>{p.emoji}</div>
              <span style={{ display: "inline-block", background: p.color + "18", color: p.color, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", padding: "3px 8px", borderRadius: "4px", marginBottom: "10px" }}>{p.tag}</span>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: "700", color: "#111827", margin: "0 0 10px 0" }}>{p.name}</h3>
              <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.7", margin: "0" }}>{p.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "16px" }}>
            ¿Interesado en distribuir Sunny? Contáctanos directamente para conocer disponibilidad, precios y condiciones.
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
