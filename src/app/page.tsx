import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import Recipes from "@/components/Recipes";
import Products from "@/components/Products";
import ProcessComparison from "@/components/ProcessComparison";
import NutritionBanner from "@/components/NutritionBanner";
import Distribuidores from "@/components/Distribuidores";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { faqs } from "@/data/faq";

export const metadata = {
  title: "Cereal Sunny — Cereales de Maíz Natural para tu Familia | Venezuela",
  description:
    "Cereal Sunny: fabricante venezolano de cereales de maíz laminado — Sunny Flakes, Sunny Sugar y Sunny Choco Flakes. Venta exclusiva a distribuidores mayoristas en Venezuela.",
  alternates: {
    canonical: "/",
    languages: { "es-VE": "/", es: "/", "x-default": "/" },
  },
  openGraph: {
    title: "Cereal Sunny — Cereales de Maíz Natural para tu Familia | Venezuela",
    description:
      "Cereal Sunny: fabricante venezolano de cereales de maíz laminado — Sunny Flakes, Sunny Sugar y Sunny Choco Flakes. Venta exclusiva a distribuidores mayoristas en Venezuela.",
    url: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero />
      <section id="ingredientes">
        <Ingredients />
      </section>
      <section id="recetas">
        <Recipes />
      </section>
      <section id="productos">
        <Products />
      </section>
      <section id="proceso">
        <ProcessComparison />
      </section>
      <section id="nutricion">
        <NutritionBanner />
      </section>
      <Distribuidores />
      <section id="faq" style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: "900", color: "#111827", margin: "0" }}>
            Preguntas Frecuentes
          </h2>
        </div>
        <Faq />
      </section>
      <Footer />
    </main>
  );
}
