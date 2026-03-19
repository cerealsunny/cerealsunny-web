"use client";

export default function NutritionBanner() {
  return (
    <section
      className="w-full py-16 px-6 lg:px-8"
      style={{ background: "#166534" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: icon + text */}
        <div className="flex items-center gap-6">
          {/* Leaf icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-3xl"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            🌿
          </div>
          <div>
            <h2
              className="text-white font-black text-2xl lg:text-3xl mb-1"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Nutrición Certificada
            </h2>
            <p className="text-green-200 text-base leading-relaxed max-w-lg">
              Todos nuestros productos cumplen con los estándares nutricionales
              internacionales. Sin conservantes artificiales, sin colorantes
              artificiales.
            </p>
          </div>
        </div>

        {/* Right: stats + CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Mini stats */}
          <div className="flex gap-8">
            {[
              { value: "0g", label: "Trans Fat" },
              { value: "Alto", label: "En fibra" },
              { value: "ISO", label: "Certificado" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-black text-2xl text-white"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-green-300 text-xs font-medium uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/nosotros"
            className="flex-shrink-0 inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest px-7 py-3.5 rounded transition-colors duration-200"
            style={{ background: "#fff", color: "#166534" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#f0fdf4")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#fff")
            }
          >
            Conocer más
          </a>
        </div>
      </div>
    </section>
  );
}
