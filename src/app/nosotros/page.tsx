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
        padding: "180px 24px 60px",
        textAlign: "center",
      }}>
        <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.2em", color: "#F5A623", marginBottom: "16px" }}>
          Sobre Sunny
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 20px 0" }}>
          Fabricante de Cereales
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto" }}>
          Cereal Sunny fabrica cereales de alta calidad con ingredientes naturales,
          con 1 año en el mercado venezolano. Vendemos exclusivamente a distribuidores
          mayoristas en Venezuela y Latinoamérica, desde Caracas.
        </p>
      </section>

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 60px", textAlign: "left" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
          Nuestra Historia
        </h2>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.9", margin: "0 0 14px 0" }}>
          Sunny nació con una convicción clara: el distribuidor venezolano merece una línea
          de cereales con el mismo nivel de calidad que las grandes marcas internacionales
          manejan desde hace décadas — sin tener que pagar ni negociar como si comprara una
          marca internacional.
        </p>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.9", margin: "0 0 14px 0" }}>
          Por eso construimos nuestra producción en Maracay, estado Aragua, bajo los mismos
          estándares, procesos y materia prima que emplean las marcas líderes del mercado
          cerealero mundial. Ese enfoque es el que nos permite decir, sin exagerar: Sunny sabe
          a lo que ya conoces, cuesta lo que un distribuidor necesita, y lleva el nombre de una
          marca 100% pensada para el mercado venezolano.
        </p>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.9", margin: "0" }}>
          Llevamos apenas un año en el mercado — y esa juventud es nuestra ventaja: decisiones
          rápidas, catálogo enfocado, y un equipo comercial que contesta el teléfono en vez de
          perderte en un call center.
        </p>
      </section>

      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "28px 24px" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: "700", color: "#111827", margin: "0 0 12px 0" }}>Misión</h3>
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.8", margin: "0" }}>
              Proveer a nuestros distribuidores cereales de calidad respaldada por estándares
              internacionales de manufactura, con la agilidad, cercanía y condiciones comerciales
              de una marca venezolana que entiende el canal mayorista desde adentro.
            </p>
          </div>
          <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "28px 24px" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: "700", color: "#111827", margin: "0 0 12px 0" }}>Visión</h3>
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.8", margin: "0" }}>
              Convertirnos en la marca de cereales de mayor confianza para el distribuidor
              venezolano, reconocida por ofrecer la calidad de una industria consolidada con
              el dinamismo de una marca nacional en pleno crecimiento.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
