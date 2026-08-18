# Estado de la Auditoría SEO/Copy — Cereal Sunny Web

Fuente: `cereal-sunny-cambios-pendientes.html` (auditoría externa, 17 cambios totales).
Última actualización: 2026-08-18.

## Bloque 1 — Hero / Home

| # | Ítem | Estado | Notas |
|---|------|--------|-------|
| 1.1 | H1 hero → "El Desayuno que tu Familia Merece" | ✅ Hecho | `src/components/Hero.tsx` |
| 1.2 | Subtexto hero (copy exacto de la auditoría) | ✅ Hecho | `src/components/Hero.tsx` |
| 1.3 | CTA primario → "Dónde Comprar" | ✅ Hecho | Hero + Header (desktop) |
| 1.4 | Fondo/texto hero → gradiente cálido, texto oscuro | ✅ Hecho | `linear-gradient(135deg, #f5c842 0%, #ffe8c2 40%, #ffd699 100%)`, texto `#1a3a5c` |
| 1.5 | Botón Header "Contáctanos" → "Dónde Comprar" | ✅ Hecho | `src/components/Header.tsx` |
| 1.6 | Sección Distribuidores en home | ✅ Hecho | Nuevo componente `src/components/Distribuidores.tsx`, insertado entre NutritionBanner y Footer |
| 1.7 | FAQ visible en home | ✅ Hecho | Reubicado de `/contacto` a `page.tsx` (no duplicado) |

## Bloque 2 — Tipografía

| # | Ítem | Estado | Notas |
|---|------|--------|-------|
| 2.1 | Fuente Poetsen One (Google Fonts) | ✅ Hecho | `next/font/google` en `layout.tsx`, variable `--font-poetsen` |
| 2.2 | Aplicar Poetsen a h1/h2/h3/h4, `.navbar-logo`, `.stat-value`, `.cta-button` | ✅ Hecho | Regla base en `globals.css` + reemplazo puntual en 15 archivos donde el inline `fontFamily` sobrescribía la regla base |

## Bloque 3 — SEO

| # | Ítem | Estado | Notas |
|---|------|--------|-------|
| 3.1 | SEO title → "Cereal Sunny — Cereales de Maíz Natural para tu Familia \| Venezuela" | ✅ Hecho | `page.tsx` (`metadata.title` + `openGraph.title`) |

## Bloque 4 — Schema / Datos estructurados

| # | Ítem | Estado | Notas |
|---|------|--------|-------|
| 4.3 | FAQPage schema en home (junto al FAQ visible) | ✅ Hecho | JSON-LD movido de `/contacto` a `page.tsx` |

## Pendiente / fuera de este alcance

- Corte de dominio a `cerealsunny.com` — diferido intencionalmente como último paso (decisión ya acordada, no depende de estos cambios de copy/SEO).
- `robots: { index: false, follow: true }` en `layout.tsx` — desviación intencional respecto al `index, follow` literal de la auditoría, mientras el sitio viva en el dominio de staging (`cerealsunny-web.vercel.app`). Revertir a `index: true` en el corte de dominio.

## Nota de corrección (transparencia)

En una fase previa del trabajo se afirmó erróneamente que la auditoría no especificaba texto exacto para el H1/subtítulo del hero ni para el SEO title, y se propuso copy alternativo inventado. Al releer el documento completo se confirmó que sí especifica texto literal "CAMBIAR ESTO / POR ESTO" para los ítems 1.1, 1.2, 1.3, 1.4 y 3.1. La implementación final usa el texto literal de la auditoría, no la propuesta inventada anterior.
