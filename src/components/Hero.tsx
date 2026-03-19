"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0a1428" }}
    >
      {/* 
        IMAGEN DE FONDO — reemplazar en Fase 3:
        Cambiar el div de abajo por:
        <Image src="/hero-cereal.jpg" alt="Cereal Sunny" fill className="object-cover" priority />
      */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, #1B4F8A 0%, #0a1428 65%)",
        }}
      />

      {/* Overlay oscuro lado izquierdo — para que el texto sea legible sobre la imagen */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(10,20,40,0.92) 0%, rgba(10,20,40,0.75) 40%, rgba(10,20,40,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Texto — pegado a la izquierda, encima de la imagen */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 lg:px-16 py-32">
        <div className="max-w-lg">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded"
              style={{ background: "#F5A623", color: "#1B4F8A" }}
            >
              Fabricante B2B
            </span>
            <span className="text-xs text-[#93c5fd] font-medium tracking-wide">
              Ventas exclusivas a distribuidores
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-black uppercase leading-none mb-6"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Cereales de{" "}
            <span style={{ color: "#F5A623" }}>Alta Calidad</span>
            <br />
            para tu Negocio
          </h1>

          {/* Subheading */}
          <p className="text-[#93c5fd] text-lg leading-relaxed mb-10">
            Fabricamos cereales con ingredientes naturales seleccionados.
            Líneas completas para distribuidores mayoristas en Venezuela y Latinoamérica.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="/contacto"
              className="inline-flex items-center font-bold text-sm uppercase tracking-widest px-8 py-4 rounded transition-colors duration-200"
              style={{ background: "#F5A623", color: "#1B4F8A" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F9D423")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#F5A623")}
            >
              Solicitar Cotización
            </a>
            <a
              href="/productos"
              className="inline-flex items-center font-bold text-sm uppercase tracking-widest px-8 py-4 rounded border-2 transition-colors duration-200"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#F5A623";
                e.currentTarget.style.color = "#F5A623";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Ver Catálogo
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex gap-10 border-t pt-8"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            {[
              { value: "20+", label: "Años de experiencia" },
              { value: "50+", label: "Productos en catálogo" },
              { value: "100%", label: "Ingredientes naturales" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-black text-3xl"
                  style={{ color: "#F5A623", fontFamily: "Georgia, serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[#93c5fd] font-medium mt-0.5 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-20"
        style={{ background: "linear-gradient(to bottom, transparent, #f9fafb)" }}
      />
    </section>
  );
}
