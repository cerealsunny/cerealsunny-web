import { IconCorn, IconSparkle, IconChocolateBar } from "@/components/Icons";

export type FichaTecnica = {
  contenidoNeto: string;
  porciones: string;
  columnas: [string, string];
  tabla: [string, string, string][];
  ingredientes: string;
  alergenos: string;
  fabricante: string;
  registroSanitario: string | null;
};

export type Producto = {
  name: string;
  tag: string;
  color: string;
  Icon: typeof IconCorn;
  img?: string | null;
  description: string;
  ficha: FichaTecnica;
};

export const products: Producto[] = [
  {
    name: "Sunny Flakes",
    tag: "Clásico",
    color: "#1B4F8A",
    Icon: IconCorn,
    img: "/images/productos/sunny-flakes.jpg",
    description:
      "Hojuelas de maíz tostado, doradas y crocantes. Cada grano de maíz se descascarilla y se parte en tres piezas reales de grano — cada una se convierte en una hojuela. Sin masa, sin moldes: el sabor clásico de siempre.",
    ficha: {
      contenidoNeto: "230 g",
      porciones: "Aprox. 7 porciones de 30 g",
      columnas: ["Por 100 g", "Por porción (30 g)"],
      tabla: [
        ["Calorías", "374 kcal", "100 kcal"],
        ["Grasa Total", "0.8 g", "0.2 g"],
        ["Grasa Saturada", "0.2 g", "0.1 g"],
        ["Grasas Trans", "0 mg", "0 mg"],
        ["Carbohidratos Totales", "88 g", "26 g"],
        ["Fibra Dietaria", "4.6 g", "1.4 g"],
        ["Azúcares Totales", "9.4 g", "2.8 g"],
        ["Proteínas", "6.0 g", "1.8 g"],
        ["Sodio", "297 mg", "89 mg"],
      ],
      ingredientes: "Maíz Descascarillado y Desgerminado, Azúcar Refinada, Malta, Sal Refinada.",
      alergenos: "El maíz utilizado en este producto contiene trazas de soya.",
      fabricante: "Centerium Venezolana C.A. · Rif. J-506658038 · Av. Bolívar Este N.52, Zona Ind. San Jacinto, Maracay, Edo. Aragua.",
      registroSanitario: "Registrado ante el SACS, ente adscrito al MPPS, bajo el número A-175.828.",
    },
  },
  {
    name: "Sunny Sugar",
    tag: "Dulce",
    color: "#F5A623",
    Icon: IconSparkle,
    img: "/images/productos/sunny-sugar.jpg",
    description:
      "La misma hojuela de maíz real, glaseada con azúcar para un crunch dulce que nunca falla en el punto de venta.",
    ficha: {
      contenidoNeto: "250 g",
      porciones: "Aprox. 8 porciones de 30 g",
      columnas: ["Por 100 g", "Por porción (30 g)"],
      tabla: [
        ["Calorías", "388 kcal", "118 kcal"],
        ["Grasa Total", "0.6 g", "0.2 g"],
        ["Grasa Saturada", "0.2 g", "0.0 g"],
        ["Grasas Trans", "0 g", "0 g"],
        ["Carbohidratos Totales", "92 g", "28 g"],
        ["Fibra Dietaria", "0.9 g", "0.3 g"],
        ["Azúcares Totales", "41 g", "12 g"],
        ["Proteínas", "4.2 g", "1.3 g"],
        ["Sodio", "290 mg", "87 mg"],
      ],
      ingredientes: "Maíz Descascarillado y Desgerminado, Azúcar Refinada, Malta, Sal Refinada.",
      alergenos: "El maíz utilizado en este producto contiene trazas de soya.",
      fabricante: "Centerium Venezolana C.A. · Rif. J-506658038 · Av. Bolívar Este N.52, Zona Ind. San Jacinto, Maracay, Edo. Aragua.",
      registroSanitario: "Registrado ante el SACS, ente adscrito al MPPS, bajo el número A-175.830.",
    },
  },
  {
    name: "Sunny Choco Flakes",
    tag: "Chocolate",
    color: "#6b3f22",
    Icon: IconChocolateBar,
    img: "/images/productos/sunny-choco-flakes.jpg",
    description:
      "Hojuelas de maíz real bañadas en chocolate, el antojo favorito de los más pequeños de la casa.",
    ficha: {
      contenidoNeto: "250 g",
      porciones: "Aprox. 8 porciones de 30 g",
      columnas: ["Por porción (30 g)", "Con ½ taza leche descremada"],
      tabla: [
        ["Kilocalorías", "110 kcal", "160 kcal"],
        ["Proteínas", "1 g", "5 g"],
        ["Grasa Total", "1 g", "2.3 g"],
        ["Grasa Saturada", "0.8 g", "1.6 g"],
        ["Colesterol", "0 mg", "5 mg"],
        ["Carbohidratos Disponibles", "23 g", "29 g"],
        ["Azúcares (sacarosa y otros)", "12 g", "18 g"],
        ["Almidones", "11 g", "11 g"],
        ["Fibra Dietética Total", "0.5 g", "0.5 g"],
        ["Sodio", "170 mg", "230 mg"],
        ["Potasio", "30 mg", "225 mg"],
      ],
      ingredientes:
        "Maíz descascarillado y desgerminado, azúcar refinada, aceite vegetal, cacao en polvo, sal refinada, malta, glucosa de maíz, vainilla, color chocolate.",
      alergenos: "El maíz utilizado en este producto contiene trazas de soya.",
      fabricante: "Centerium Venezolana C.A. · Rif. J-506658038 · Av. Bolívar Este N.52, Zona Ind. San Jacinto, Maracay, Edo. Aragua.",
      registroSanitario: "Registrado ante el SACS, ente adscrito al MPPS, bajo el número A-175.829.",
    },
  },
];
