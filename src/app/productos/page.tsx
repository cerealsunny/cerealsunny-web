import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsCatalog from "@/components/ProductsCatalog";
import { products } from "@/data/products";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Nuestros Cereales — Sunny Flakes, Sugar y Choco Flakes | Cereal Sunny",
  description: "Línea de cereales Cereal Sunny para distribuidores mayoristas.",
  alternates: {
    canonical: "/productos",
    languages: { "es-VE": "/productos", es: "/productos", "x-default": "/productos" },
  },
  openGraph: {
    title: "Nuestros Cereales — Sunny Flakes, Sugar y Choco Flakes | Cereal Sunny",
    description: "Línea de cereales Cereal Sunny para distribuidores mayoristas.",
    url: `${SITE_URL}/productos`,
  },
};

const productSchemas = products.map((p) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: p.name,
  description: p.description,
  image: p.img ? `${SITE_URL}${p.img}` : undefined,
  brand: { "@type": "Brand", name: "Cereal Sunny" },
  manufacturer: { "@type": "Organization", name: "Cereal Sunny" },
  category: "Cereales de desayuno",
  countryOfOrigin: { "@type": "Country", name: "Venezuela" },
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Productos", item: `${SITE_URL}/productos` },
  ],
};

export default function ProductosPage() {
  return (
    <main>
      {productSchemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
        <h1 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 20px 0" }}>
          Nuestra Línea de Cereales
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.8", maxWidth: "620px", margin: "0 auto" }}>
          Hojuelas de maíz laminadas grano por grano — no masa moldeada por extrusión.
          Estos son nuestros tres productos, disponibles para distribución mayorista.
        </p>
      </section>

      <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px 100px" }}>
        <ProductsCatalog />

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
