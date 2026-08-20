import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { IconPhone, IconMail, IconPin } from "@/components/Icons";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Contacto — Cereal Sunny | Distribuidores y Consultas",
  description: "Contacta a Cereal Sunny para distribución mayorista de cereales.",
  alternates: {
    canonical: "/contacto",
    languages: { "es-VE": "/contacto", es: "/contacto", "x-default": "/contacto" },
  },
  openGraph: {
    title: "Contacto — Cereal Sunny | Distribuidores y Consultas",
    description: "Contacta a Cereal Sunny para distribución mayorista de cereales.",
    url: `${SITE_URL}/contacto`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contacto", item: `${SITE_URL}/contacto` },
  ],
};

export default function ContactoPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "160px 24px 120px",
      }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-block", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.2em", color: "#F5A623", marginBottom: "16px" }}>
            Contacto
          </span>
          <h1 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: "900", color: "#111827", margin: "0" }}>
            Hablemos de Distribución
          </h1>
        </div>

        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "flex-start" }}>

          {/* Form */}
          <div style={{ flex: "1 1 420px", minWidth: "300px" }}>
            <ContactForm />
          </div>

          {/* Info + map */}
          <div style={{ flex: "1 1 340px", minWidth: "280px", display: "flex", flexDirection: "column", gap: "20px" }}>

            <div style={{ background: "#1B4F8A", borderRadius: "14px", padding: "28px" }}>
              <h3 style={{ fontFamily: "var(--font-poetsen), \"Poetsen One\", Georgia, serif", fontSize: "16px", fontWeight: "700", color: "#ffffff", margin: "0 0 18px 0" }}>Contacto Directo</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a href="tel:+582129539897" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#ffffff", textDecoration: "none", fontWeight: "600" }}>
                  <IconPhone size={16} /> +58 212-953.9897
                </a>
                <a href="mailto:info@cerealsunny.com" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#ffffff", textDecoration: "none", fontWeight: "600" }}>
                  <IconMail size={16} /> info@cerealsunny.com
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#ffffff", fontWeight: "600" }}>
                  <IconPin size={16} /> Av. Guaicaipuro, El Rosal, Torre Forum, Piso 8, Caracas 1060, Miranda
                </div>
              </div>
            </div>

            <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
              <iframe
                title="Cereal Sunny — Caracas, Venezuela"
                src="https://www.google.com/maps?q=Caracas,Venezuela&output=embed"
                width="100%"
                height="260"
                style={{ border: "0", display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
