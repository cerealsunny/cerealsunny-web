import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecetasCatalog from "@/components/RecetasCatalog";
import { recipes } from "@/data/recipes";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Recetas con Cereal Sunny — Ideas Fáciles para tu Familia",
  description: "Recetas fáciles de preparar con la línea de cereales Cereal Sunny.",
  alternates: { canonical: "/recetas" },
  openGraph: {
    title: "Recetas con Cereal Sunny — Ideas Fáciles para tu Familia",
    description: "Recetas fáciles de preparar con la línea de cereales Cereal Sunny.",
    url: `${SITE_URL}/recetas`,
  },
};

function parseTimeToISO8601(time: string): string | undefined {
  const match = time.match(/(\d+)\s*min/);
  if (!match) return undefined;
  return `PT${match[1]}M`;
}

const recipeSchemas = recipes.map((r) => ({
  "@context": "https://schema.org",
  "@type": "Recipe",
  name: r.name,
  description: r.description,
  image: r.img ? `${SITE_URL}${r.img}` : undefined,
  author: { "@type": "Organization", name: "Cereal Sunny" },
  recipeCategory: r.category,
  recipeYield: r.servings,
  totalTime: parseTimeToISO8601(r.time),
  recipeIngredient: r.ingredientes,
  recipeInstructions: r.pasos.map((paso) => ({
    "@type": "HowToStep",
    text: paso,
  })),
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Recetas", item: `${SITE_URL}/recetas` },
  ],
};

export default function RecetasPage() {
  return (
    <main>
      {recipeSchemas.map((schema) => (
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
          Recetario
        </span>
        <h1 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0 0 20px 0" }}>
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
