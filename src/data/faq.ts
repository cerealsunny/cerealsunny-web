export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "¿Dónde puedo comprar Cereal Sunny?",
    answer:
      "No vendemos al consumidor final. Cereal Sunny se distribuye exclusivamente a través de distribuidores mayoristas en Venezuela y Latinoamérica.",
  },
  {
    question: "¿Qué hace diferente a Cereal Sunny de otros cereales?",
    answer:
      "Nuestras hojuelas se fabrican con laminado grano por grano, no con masa extruida. Cada hojuela nace de un grano real de maíz.",
  },
  {
    question: "¿Contiene conservantes o grasas trans?",
    answer:
      "No. Cero grasas trans y sin conservantes añadidos en toda nuestra línea.",
  },
  {
    question: "¿Cuál es el pedido mínimo para distribuidores?",
    answer:
      "El pedido mínimo es de 1,000 cajas. Cada caja contiene 24 estuches. Se pueden mezclar las 3 presentaciones.",
  },
  {
    question: "¿Cómo me convierto en distribuidor?",
    answer:
      "Contáctanos a info@cerealsunny.com o al +58 212-953.9897 y te enviaremos toda la información.",
  },
];
