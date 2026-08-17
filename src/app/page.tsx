import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import Recipes from "@/components/Recipes";
import Products from "@/components/Products";
import ProcessComparison from "@/components/ProcessComparison";
import NutritionBanner from "@/components/NutritionBanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cereal Sunny — Fabricante de Cereales para Distribuidores",
  description:
    "Cereal Sunny: fabricante venezolano de cereales de maíz laminado — Sunny Flakes, Sunny Sugar y Sunny Choco Flakes. Venta exclusiva a distribuidores mayoristas en Venezuela.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
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
      <Footer />
    </main>
  );
}
