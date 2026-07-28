import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconCorn, IconSparkle, IconChocolateBar } from "@/components/Icons";

export const metadata = {
  title: "Productos · Cereal Sunny",
  description: "Línea de cereales Cereal Sunny para distribuidores mayoristas.",
};

const products = [
  {
    name: "Sunny Flakes",
    tag: "Clásico",
    color: "#1B4F8A",
    Icon: IconCorn,
    description:
      "Hojuelas de maíz tostado, doradas y crocantes. Cada grano de maíz se descascarilla y se parte en tres piezas reales de grano — cada una se convierte en una hojuela. Sin masa, sin moldes: el sabor clásico de siempre.",
  },
  {
    name: "Sunny Sugar",
    tag: "Dulce",
    color: "#F5A623",
    Icon: IconSparkle,
    description:
      "La misma hojuela de maíz real, glaseada con azúcar para un crunch dulce que nunca falla en el punto de venta.",
  },
  {
    name: "Sunny Choco Flakes",
    tag: "Chocolate",
    color: "#6b3f22",
    Icon: IconChocolateBar,
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

      <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {products.map((p) => (
            <div key={p.name} style={{
              position: "relative",
              height: "440px",
              borderRadius: "14px",
              overflow: "hidden",
            }}>
              {/* Background */}
              <div style={{
                position: "absolute", inset: "0",
                background: `linear-gradient(155deg, ${p.color} 0%, #0a1428 130%)`,
              }} />

              {/* Icon watermark */}
              <div style={{ position: "absolute", top: "28px", right: "22px", color: "rgba(255,255,255,0.18)" }}>
                <p.Icon size={100} />
              </div>

              {/* Bottom overlay */}
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 55%, transparent 75%)" }} />

              {/* Text content */}
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "26px 24px" }}>
                <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", color: "#ffffff", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", padding: "4px 10px", borderRadius: "4px", marginBottom: "12px", border: "1px solid rgba(255,255,255,0.25)" }}>{p.tag}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "900", color: "#ffffff", margin: "0 0 8px 0", letterSpacing: "-0.01em" }}>{p.name}</h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", margin: "0", lineHeight: "1.6" }}>{p.description}</p>
              </div>
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
