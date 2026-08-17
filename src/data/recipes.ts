import { IconBowl, IconChicken, IconChocolateBar, IconChocolateSwirl, IconParfait, IconSugarCrystal, IconWheat, IconSparkle } from "@/components/Icons";

export type Receta = {
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

export const recipes: Receta[] = [
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
