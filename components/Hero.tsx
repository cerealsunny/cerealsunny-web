"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0a1428" }}
    >
      {/* Background overlay gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,20,40,0.97) 0%, rgba(27,79,138,0.7) 50%, rgba(10,20,40,0.95) 100%)",
        }}
      />

      {/* Decorative sun glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle, #F9D423 0%, #F5A623 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-32">
        {/* Left: text */}
        <div>
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
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Cereales de{" "}
            <span style={{ color: "#F5A623" }}>Alta Calidad</span>
            <br />
            para tu Negocio
          </h1>

          {/* Subheading */}
          <p className="text-[#93c5fd] text-lg leading-relaxed mb-10 max-w-lg">
            Fabricamos cereales con ingredientes naturales seleccionados.
            Líneas completas para distribuidores mayoristas en Venezuela y Latinoamérica.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded transition-colors duration-200"
              style={{ background: "#F5A623", color: "#1B4F8A" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#F9D423")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#F5A623")
              }
            >
              Solicitar Cotización
            </a>
            <a
              href="/productos"
              className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest px-8 py-4 rounded border-2 transition-colors duration-200"
              style={{
                borderColor: "#ffffff40",
                color: "#fff",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#F5A623";
                e.currentTarget.style.color = "#F5A623";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ffffff40";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Ver Catálogo
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10">
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
                <div className="text-xs text-[#93c5fd] font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: visual placeholder (replaced with real image in Phase 3) */}
        <div className="hidden lg:flex items-center justify-center">
          <div
            className="relative w-[420px] h-[420px] rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, #1B4F8A, #0a1428)",
              border: "2px solid rgba(245,166,35,0.3)",
            }}
          >
            {/* Decorative rings */}
            <div
              className="absolute inset-4 rounded-full"
              style={{ border: "1px dashed rgba(245,166,35,0.2)" }}
            />
            <div
              className="absolute inset-10 rounded-full"
              style={{ border: "1px dashed rgba(245,166,35,0.15)" }}
            />

            {/* Sun SVG large */}
            <svg width="180" height="180" viewBox="0 0 44 44" fill="none">
              <defs>
                <radialGradient id="heroSun" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF176" />
                  <stop offset="55%" stopColor="#F9D423" />
                  <stop offset="100%" stopColor="#F5A623" />
                </radialGradient>
              </defs>
              <g stroke="#F5A623" strokeWidth="2" strokeLinecap="round" opacity="0.7">
                <line x1="22" y1="1" x2="22" y2="7" />
                <line x1="22" y1="37" x2="22" y2="43" />
                <line x1="1" y1="22" x2="7" y2="22" />
                <line x1="37" y1="22" x2="43" y2="22" />
                <line x1="5.5" y1="5.5" x2="10" y2="10" />
                <line x1="34" y1="34" x2="38.5" y2="38.5" />
                <line x1="38.5" y1="5.5" x2="34" y2="10" />
                <line x1="10" y1="34" x2="5.5" y2="38.5" />
              </g>
              <circle cx="22" cy="22" r="13" fill="url(#heroSun)" />
            </svg>

            {/* Label */}
            <div
              className="absolute bottom-12 text-center"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <div className="text-white font-black text-2xl tracking-widest">
                SUNNY
                <sup style={{ fontSize: "10px", color: "#F5A623" }}>®</sup>
              </div>
              <div className="text-[#93c5fd] text-xs tracking-[0.3em] uppercase mt-1">
                Cereal
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #f9fafb)",
        }}
      />
    </section>
  );
}
