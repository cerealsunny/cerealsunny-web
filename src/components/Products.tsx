"use client";

import { IconCorn, IconSparkle, IconChocolateBar } from "./Icons";

const products = [
  { category: "Clásico", name: "Sunny Flakes", subtitle: "Hojuelas de maíz laminadas grano por grano", color: "#1B4F8A", Icon: IconCorn, img: "/images/productos/sunny-flakes.jpg", alt: "Hojuelas de maíz Sunny Flakes doradas y crocantes" },
  { category: "Dulce", name: "Sunny Sugar", subtitle: "La misma hojuela real, glaseada con azúcar", color: "#F5A623", Icon: IconSparkle, img: "/images/productos/sunny-sugar.jpg", alt: "Hojuelas de maíz azucaradas Sunny Sugar" },
  { category: "Chocolate", name: "Sunny Choco Flakes", subtitle: "Bañadas en chocolate, el antojo de siempre", color: "#6b3f22", Icon: IconChocolateBar, img: "/images/productos/sunny-choco-flakes.jpg", alt: "Hojuelas de maíz bañadas en chocolate Sunny Choco Flakes" },
];

export default function Products() {
  return (
    <section style={{ width: "100%", background: "#ffffff", padding: "60px 0" }}>
      <div style={{ maxWidth: "1800px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <a href="/productos" style={{
            display: "inline-block",
            background: "#39a4b4",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            padding: "12px 32px",
            borderRadius: "6px",
            marginBottom: "20px",
            textDecoration: "none",
            border: "2px solid #39a4b4",
            transition: "background 0.2s, color 0.2s, border-color 0.2s",
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#F5A623"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F5A623"; (e.currentTarget as HTMLAnchorElement).style.color = "#1B4F8A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#39a4b4"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#39a4b4"; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
          >Catálogo</a>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "900", color: "#1a6b78", margin: "0", letterSpacing: "-0.01em" }}>Nuestra Línea de Cereales</h2>
          <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "480px", margin: "0 auto", lineHeight: "1.6" }}>Hojuelas de maíz real, laminadas grano por grano — no masa moldeada.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 340px))", gap: "24px", justifyContent: "center" }}>
          {products.map((p) => (
            <a key={p.name} href="/productos" style={{
              position: "relative",
              display: "block",
              aspectRatio: "2 / 3",
              borderRadius: "14px",
              overflow: "hidden",
              textDecoration: "none",
              cursor: "pointer",
            }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector<HTMLElement>(".product-bg");
                if (img) img.style.transform = "scale(1.06)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector<HTMLElement>(".product-bg");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Background */}
              <div
                className="product-bg"
                role={p.img ? "img" : undefined}
                aria-label={p.img ? p.alt : undefined}
                style={{
                  position: "absolute", inset: "0",
                  background: p.img
                    ? `url('${p.img}') center/cover no-repeat`
                    : `linear-gradient(155deg, ${p.color} 0%, #0a1428 130%)`,
                  transition: "transform 0.4s ease",
                }} />

              {/* Icon watermark — only when there's no product photo yet */}
              {!p.img && (
                <div style={{ position: "absolute", top: "32px", right: "24px", color: "rgba(255,255,255,0.18)" }}>
                  <p.Icon size={110} />
                </div>
              )}

              {/* Bottom overlay */}
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, transparent 75%)" }} />

              {/* Text content */}
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "28px 26px" }}>
                <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", color: "#ffffff", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", padding: "4px 10px", borderRadius: "4px", marginBottom: "12px", border: "1px solid rgba(255,255,255,0.25)" }}>{p.category}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: "900", color: "#ffffff", margin: "0 0 8px 0", letterSpacing: "-0.01em" }}>{p.name}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", margin: "0 0 16px 0", lineHeight: "1.5", maxWidth: "280px" }}>{p.subtitle}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#F5A623", fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Ver ficha técnica →
                </span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="/productos" style={{ display: "inline-block", border: "2px solid #1B4F8A", color: "#1B4F8A", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", padding: "14px 36px", borderRadius: "6px", textDecoration: "none" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1B4F8A"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#1B4F8A"; }}
          >Ver Catálogo Completo</a>
        </div>
      </div>
    </section>
  );
}
