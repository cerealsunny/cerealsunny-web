"use client";

import { useState } from "react";
import { IconBowl, IconChicken, IconChocolateBar, IconChocolateSwirl, IconParfait, IconSugarCrystal, IconWheat, IconSparkle } from "./Icons";

type Receta = {
  name: string;
  category: string;
  time: string;
  servings: string;
  badgeColor: string;
  Icon: typeof IconBowl;
  img?: string | null;
  description: string;
  ingredientes: string[];
  pasos: string[];
};

const recipes: Receta[] = [
  {
    name: "Cereal con Leche",
    category: "Desayuno",
    time: "2 min",
    servings: "1 porción",
    badgeColor: "#1B4F8A",
    Icon: IconBowl,
    img: "/images/recetas/cereal-con-leche.jpg",
    description: "El clásico de siempre: hojuelas crocantes recién servidas, listas en menos de dos minutos.",
    ingredientes: ["1 taza de Sunny Flakes", "¾ taza de leche fría", "Fruta picada al gusto (opcional)", "Miel o azúcar al gusto (opcional)"],
    pasos: ["Sirve las Sunny Flakes en un tazón hondo.", "Agrega la leche fría justo antes de comer para mantener el crunch.", "Decora con fruta picada y un toque de miel si lo deseas."],
  },
  {
    name: "Pollo Crocante con Hojuelas de Maíz",
    category: "Almuerzo",
    time: "35 min",
    servings: "4 porciones",
    badgeColor: "#92400e",
    Icon: IconChicken,
    img: "/images/recetas/pollo-crocante.jpg",
    description: "Pechugas empanizadas con Sunny Flakes trituradas: un crocante superior al pan rallado tradicional.",
    ingredientes: ["4 pechugas de pollo fileteadas", "2 tazas de Sunny Flakes trituradas", "2 huevos batidos", "1 taza de harina de trigo", "Sal, pimienta y paprika al gusto", "Aceite vegetal para freír"],
    pasos: ["Sazona las pechugas con sal, pimienta y paprika.", "Pasa cada pechuga por harina, luego por huevo batido y finalmente por las Sunny Flakes trituradas, presionando bien.", "Fríe en aceite caliente 4-5 minutos por lado hasta dorar, o hornea a 200°C por 25 minutos.", "Deja reposar 2 minutos sobre papel absorbente antes de servir."],
  },
  {
    name: "Barritas Crocantes de Chocolate",
    category: "Postre",
    time: "20 min",
    servings: "8 barras",
    badgeColor: "#be123c",
    Icon: IconChocolateBar,
    img: "/images/recetas/barras-crocantes-chocolate.jpg",
    description: "Barritas fáciles de cortar, con el crunch real de la hojuela bañada en chocolate.",
    ingredientes: ["4 tazas de Sunny Choco Flakes", "200 g de malvaviscos", "3 cucharadas de mantequilla", "100 g de chocolate para fundir (opcional, para bañar)"],
    pasos: ["Derrite la mantequilla junto con los malvaviscos a fuego bajo, sin dejar de mover.", "Retira del fuego e incorpora las Sunny Choco Flakes con movimientos envolventes.", "Vierte la mezcla en un molde cuadrado forrado, presionando de manera uniforme.", "Refrigera 30 minutos, desmolda y corta en barras. Baña con chocolate fundido si lo deseas."],
  },
  {
    name: "Nidos de Chocolate",
    category: "Postre",
    time: "15 min",
    servings: "10 nidos",
    badgeColor: "#7c3aed",
    Icon: IconChocolateSwirl,
    img: "/images/recetas/nidos-de-chocolate.jpg",
    description: "Pequeños nidos crocantes bañados en chocolate, ideales para compartir en cualquier ocasión.",
    ingredientes: ["3 tazas de Sunny Choco Flakes", "200 g de chocolate de repostería", "Moldes de papel para cupcakes"],
    pasos: ["Derrite el chocolate a baño María o en el microondas en intervalos de 20 segundos.", "Incorpora las Sunny Choco Flakes al chocolate derretido, mezclando con suavidad para no quebrarlas.", "Con la ayuda de dos cucharas, forma nidos dentro de los moldes de papel.", "Refrigera 20 minutos hasta que endurezcan por completo."],
  },
  {
    name: "Parfait de Yogur con Hojuelas",
    category: "Merienda",
    time: "8 min",
    servings: "2 porciones",
    badgeColor: "#166534",
    Icon: IconParfait,
    img: "/images/recetas/parfait-de-yogurt.jpg",
    description: "Capas de yogur, fruta fresca y hojuelas crocantes: una merienda ligera y nutritiva.",
    ingredientes: ["2 tazas de yogur natural", "1 taza de Sunny Flakes", "1 taza de fruta fresca picada (fresa, banana o mango)", "2 cucharadas de miel"],
    pasos: ["En un vaso o copa, coloca una primera capa de yogur.", "Agrega una capa de fruta fresca y otra de Sunny Flakes.", "Repite las capas hasta llenar el vaso, terminando con hojuelas para conservar el crunch.", "Rocía con miel justo antes de servir."],
  },
  {
    name: "Panquecas Crocantes con Costra de Hojuelas",
    category: "Desayuno",
    time: "20 min",
    servings: "4 porciones",
    badgeColor: "#d97706",
    Icon: IconBowl,
    img: "/images/recetas/panquecas-crocantes.jpg",
    description: "Panquecas esponjosas con un borde crocante de Sunny Flakes trituradas: el desayuno de fin de semana favorito de la casa.",
    ingredientes: ["1 ½ tazas de harina de trigo", "1 taza de Sunny Flakes trituradas", "1 cucharada de azúcar", "1 cucharada de polvo de hornear", "1 taza de leche", "1 huevo", "2 cucharadas de mantequilla derretida", "Miel o papelón para servir"],
    pasos: ["Mezcla la harina, la mitad de las Sunny Flakes trituradas, el azúcar y el polvo de hornear.", "Incorpora la leche, el huevo y la mantequilla hasta formar una mezcla homogénea sin grumos grandes.", "Vierte porciones en un sartén caliente y engrasado; espolvorea un poco más de hojuelas trituradas sobre cada panqueca antes de voltearla.", "Cocina 2 minutos por lado hasta dorar y sirve apiladas con miel."],
  },
  {
    name: "Palitos de Pescado Crocante en Costra de Hojuelas",
    category: "Cena",
    time: "30 min",
    servings: "4 porciones",
    badgeColor: "#0e7490",
    Icon: IconChicken,
    img: "/images/recetas/palitos-pescado-crocante.jpg",
    description: "Tiras de pescado blanco empanizadas con Sunny Flakes trituradas: una cena ligera con un crocante que conquista hasta a los niños.",
    ingredientes: ["500 g de filete de pescado blanco en tiras", "2 tazas de Sunny Flakes trituradas", "2 huevos batidos", "½ taza de harina de trigo", "Sal, pimienta y limón al gusto", "Aceite vegetal para freír"],
    pasos: ["Sazona las tiras de pescado con sal, pimienta y limón.", "Pasa cada tira por harina, luego por huevo batido y finalmente por las Sunny Flakes trituradas, presionando bien.", "Fríe en aceite caliente 2-3 minutos por lado hasta dorar, o hornea a 200°C por 15 minutos.", "Sirve caliente con limón y tu salsa favorita."],
  },
  {
    name: "Cheesecake sin Horno con Base Crocante",
    category: "Postre",
    time: "25 min + reposo",
    servings: "8 porciones",
    badgeColor: "#a16207",
    Icon: IconSugarCrystal,
    img: "/images/recetas/cheesecake-sin-horno.jpg",
    description: "Una base crocante de Sunny Flakes molidas sostiene un relleno cremoso de queso, sin necesidad de encender el horno.",
    ingredientes: ["2 tazas de Sunny Flakes molidas", "4 cucharadas de mantequilla derretida", "250 g de queso crema", "1 taza de crema de leche", "½ taza de azúcar", "1 cucharadita de esencia de vainilla", "Fruta o mermelada para decorar"],
    pasos: ["Mezcla las Sunny Flakes molidas con la mantequilla derretida y presiona en el fondo de un molde. Refrigera 15 minutos.", "Bate el queso crema con el azúcar y la vainilla hasta que esté suave.", "Incorpora la crema de leche batida a punto de chantilly con movimientos envolventes.", "Vierte sobre la base, alisa la superficie y refrigera mínimo 4 horas antes de desmoldar y decorar."],
  },
  {
    name: "Barras de Granola Caseras con Miel y Hojuelas",
    category: "Merienda",
    time: "15 min + reposo",
    servings: "10 barras",
    badgeColor: "#65a30d",
    Icon: IconWheat,
    img: "/images/recetas/barras-granola-caseras.jpg",
    description: "Barras energéticas hechas en casa con Sunny Flakes, miel y frutos secos, ideales para llevar a cualquier parte.",
    ingredientes: ["3 tazas de Sunny Flakes", "½ taza de miel", "¼ taza de mantequilla de maní", "½ taza de frutos secos picados", "¼ taza de pasas o arándanos secos"],
    pasos: ["Calienta la miel con la mantequilla de maní a fuego bajo hasta que se integren.", "Retira del fuego e incorpora las Sunny Flakes, los frutos secos y las pasas.", "Vierte la mezcla en un molde forrado y presiona firmemente con el dorso de una cuchara.", "Refrigera 1 hora, desmolda y corta en barras."],
  },
  {
    name: "Mix Garapiñado de Hojuelas y Frutos Secos",
    category: "Pasapalo",
    time: "18 min",
    servings: "6 porciones",
    badgeColor: "#b45309",
    Icon: IconSparkle,
    img: "/images/recetas/mix-garapinado-hojuelas.jpg",
    description: "Sunny Flakes y frutos secos caramelizados en su punto justo: el pasapalo dulce y crocante perfecto para compartir.",
    ingredientes: ["2 tazas de Sunny Flakes", "1 taza de frutos secos variados (maní, almendras, nueces)", "¾ taza de azúcar", "3 cucharadas de agua", "Una pizca de sal"],
    pasos: ["En un sartén, calienta el azúcar con el agua a fuego medio sin revolver hasta obtener un caramelo dorado.", "Agrega las Sunny Flakes y los frutos secos de una vez, mezclando rápido para cubrirlos por completo.", "Vierte sobre una bandeja con papel encerado y espolvorea con sal antes de que endurezca.", "Deja enfriar por completo y rompe en trozos irregulares para servir."],
  },
];

export default function RecetasCatalog() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 360px))", gap: "28px", alignItems: "start", justifyContent: "center" }}>
      {recipes.map((r) => {
        const isOpen = expanded === r.name;
        return (
          <div key={r.name} style={{ background: "#fff", borderRadius: "14px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", border: "1px solid #F0F0F0" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
              <div style={{
                position: "absolute", inset: "0",
                background: r.img
                  ? `url('${r.img}') center/cover no-repeat`
                  : `linear-gradient(155deg, ${r.badgeColor} 0%, #0a1428 130%)`,
              }} />
              {!r.img && (
                <div style={{ position: "absolute", top: "20px", right: "18px", color: "rgba(255,255,255,0.18)" }}>
                  <r.Icon size={80} />
                </div>
              )}
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.1) 55%, transparent 75%)" }} />
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", padding: "18px 20px" }}>
                <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", color: "#ffffff", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", padding: "4px 9px", borderRadius: "4px", marginBottom: "10px", border: "1px solid rgba(255,255,255,0.25)" }}>{r.category}</span>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: "900", color: "#ffffff", margin: "0", letterSpacing: "-0.01em", lineHeight: "1.25" }}>{r.name}</h3>
              </div>
            </div>

            <div style={{ padding: "18px 20px" }}>
              <div style={{ display: "flex", gap: "14px", marginBottom: "12px" }}>
                <span style={{ fontSize: "12px", color: "#6B7280" }}>⏱ {r.time}</span>
                <span style={{ fontSize: "12px", color: "#6B7280" }}>👥 {r.servings}</span>
              </div>
              <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.6", margin: "0 0 14px 0" }}>{r.description}</p>
              <button
                onClick={() => setExpanded(isOpen ? null : r.name)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent",
                  border: "none", color: "#F5A623", fontSize: "12px", fontWeight: "800",
                  textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", padding: "0",
                }}
              >
                {isOpen ? "Ocultar receta ↑" : "Ver receta completa →"}
              </button>
            </div>

            {isOpen && (
              <div style={{ background: "#F9FAFB", borderTop: "1px solid #E5E7EB", padding: "20px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <h4 style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1B4F8A", margin: "0 0 10px 0" }}>Ingredientes</h4>
                  <ul style={{ margin: "0", paddingLeft: "18px", fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {r.ingredientes.map((ing) => <li key={ing}>{ing}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#1B4F8A", margin: "0 0 10px 0" }}>Preparación</h4>
                  <ol style={{ margin: "0", paddingLeft: "18px", fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {r.pasos.map((paso, i) => <li key={i}>{paso}</li>)}
                  </ol>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
