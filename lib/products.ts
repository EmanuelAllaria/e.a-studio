import type { Product, ProductCategory } from "@/lib/types";

export const CATEGORIES: ProductCategory[] = [
  "Abrigos",
  "Camisas",
  "Denim",
  "Calzado",
];

export const products: Product[] = [
  {
    id: "abrigo-cashmere-onyx",
    slug: "abrigo-cashmere-onyx",
    name: "Abrigo Cashmere Onyx",
    price: 289000,
    category: "Abrigos",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Carbón", hex: "#2B2B2B" },
      { name: "Negro", hex: "#0A0A0A" },
    ],
    description:
      "Silueta estructurada en cashmere italiano con forro de seda. Un abrigo de presencia silenciosa, pensado para el invierno urbano.",
    details: [
      "100% cashmere peinado",
      "Forro interior de seda",
      "Cierre oculto y botones de asta",
      "Hecho en Italia",
    ],
    featured: true,
  },
  {
    id: "abrigo-lana-merino",
    slug: "abrigo-lana-merino",
    name: "Abrigo Lana Merino",
    price: 245000,
    category: "Abrigos",
    images: [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Grafito", hex: "#3A3A3A" },
      { name: "Camel", hex: "#C4A484" },
    ],
    description:
      "Lana merino de doble cara con caída limpia y cuello alto. Ideal para capas sin volumen excesivo.",
    details: [
      "Lana merino premium",
      "Construcción double-face",
      "Bolsillos laterales invisibles",
      "Corte slim estructurado",
    ],
    featured: true,
  },
  {
    id: "trench-tecnico-noir",
    slug: "trench-tecnico-noir",
    name: "Trench Técnico Noir",
    price: 198000,
    category: "Abrigos",
    images: [
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Negro", hex: "#0A0A0A" },
      { name: "Piedra", hex: "#8A8A85" },
    ],
    description:
      "Trench con membrana impermeable y acabado mate. Un clásico reescrito para la ciudad contemporánea.",
    details: [
      "Tejido técnico water-resistant",
      "Cinturón removible",
      "Costuras termoselladas",
      "Peso medio para media estación",
    ],
    featured: false,
  },
  {
    id: "chaqueta-bomber-atelier",
    slug: "chaqueta-bomber-atelier",
    name: "Chaqueta Bomber Atelier",
    price: 176000,
    category: "Abrigos",
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Ónix", hex: "#1A1A1A" },
      { name: "Oliva", hex: "#4A5240" },
    ],
    description:
      "Bomber de atelier con cuello ribb y cremallera YKK. Proporciones precisas y textura suave al tacto.",
    details: [
      "Mezcla de lana y poliamida",
      "Cremallera YKK matte",
      "Puños y cintura acanalados",
      "Bolsillo interior con cremallera",
    ],
    featured: false,
  },
  {
    id: "camisa-oxford-blanco",
    slug: "camisa-oxford-blanco",
    name: "Camisa Oxford Blanco",
    price: 78000,
    category: "Camisas",
    images: [
      "https://images.unsplash.com/photo-1603252110971-b8a57087be18?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579664531470-ac357f8f8e2b?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blanco", hex: "#F5F4F2" },
      { name: "Celeste", hex: "#C9D6E0" },
    ],
    description:
      "Oxford de algodón egipcio con cuello button-down. La camisa esencial con acabado impecable.",
    details: [
      "Algodón egipcio 120/2",
      "Cuello button-down reforzado",
      "Botones de nácar",
      "Corte slim contemporáneo",
    ],
    featured: true,
  },
  {
    id: "camisa-lino-natural",
    slug: "camisa-lino-natural",
    name: "Camisa Lino Natural",
    price: 92000,
    category: "Camisas",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Natural", hex: "#E8E0D5" },
      { name: "Arena", hex: "#D2C3A3" },
    ],
    description:
      "Lino europeo lavado a la piedra con caída relajada. Frescura y textura para climas cálidos.",
    details: [
      "100% lino europeo",
      "Lavado a la piedra",
      "Mangas enrollables con trabilla",
      "Corte relaxed fit",
    ],
    featured: false,
  },
  {
    id: "camisa-seda-noche",
    slug: "camisa-seda-noche",
    name: "Camisa Seda Noche",
    price: 128000,
    category: "Camisas",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533750088811-7a8b16218df7?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Negro", hex: "#0A0A0A" },
      { name: "Marfil", hex: "#F2EDE4" },
    ],
    description:
      "Seda cruda con brillo contenido. Una pieza de noche con drapeado fluido y presencia discreta.",
    details: [
      "Seda cruda 22 momme",
      "Cuello italiano",
      "Costuras francesas",
      "Acabado semi-mate",
    ],
    featured: true,
  },
  {
    id: "camisa-poplin-graphite",
    slug: "camisa-poplin-graphite",
    name: "Camisa Poplin Graphite",
    price: 86000,
    category: "Camisas",
    images: [
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Grafito", hex: "#4A4A4A" },
      { name: "Blanco", hex: "#F5F4F2" },
    ],
    description:
      "Poplin de alto hilo con estructura limpia. Transita del escritorio a la noche sin esfuerzo.",
    details: [
      "Algodón poplin 140/2",
      "Plancha fácil",
      "Puños convertibles",
      "Silueta tailored",
    ],
    featured: false,
  },
  {
    id: "jean-selvedge-indigo",
    slug: "jean-selvedge-indigo",
    name: "Jean Selvedge Indigo",
    price: 145000,
    category: "Denim",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Indigo", hex: "#1B3A5F" },
      { name: "Raw", hex: "#2C3E50" },
    ],
    description:
      "Denim japonés selvedge de 14 oz con fade natural. Corte tapered para una silueta moderna.",
    details: [
      "Denim selvedge japonés 14 oz",
      "Botones de cobre",
      "Corte tapered",
      "Sin lavado químico",
    ],
    featured: true,
  },
  {
    id: "jean-negro-atelier",
    slug: "jean-negro-atelier",
    name: "Jean Negro Atelier",
    price: 132000,
    category: "Denim",
    images: [
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567418514277-a28f5e9913c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Negro", hex: "#0A0A0A" },
      { name: "Carbón", hex: "#2B2B2B" },
    ],
    description:
      "Denim negro stretch con acabado mate. La pieza cotidiana con proporción de atelier.",
    details: [
      "98% algodón, 2% elastano",
      "Acabado pigmentado mate",
      "Corte slim straight",
      "Lavado en frío recomendado",
    ],
    featured: false,
  },
  {
    id: "denim-jacket-vintage",
    slug: "denim-jacket-vintage",
    name: "Chaqueta Denim Vintage",
    price: 158000,
    category: "Denim",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Washed Blue", hex: "#5B7C99" },
      { name: "Negro", hex: "#0A0A0A" },
    ],
    description:
      "Trucker jacket con wash artesanal y hardware oxidado. Carácter vintage, corte contemporáneo.",
    details: [
      "Denim 12 oz con wash artesanal",
      "Hardware oxidado",
      "Bolsillos frontales tipo pecho",
      "Corte boxy moderno",
    ],
    featured: true,
  },
  {
    id: "pantalon-denim-wide",
    slug: "pantalon-denim-wide",
    name: "Pantalón Denim Wide",
    price: 138000,
    category: "Denim",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Stone", hex: "#8A8A85" },
      { name: "Indigo", hex: "#1B3A5F" },
    ],
    description:
      "Piernas amplias con caída arquitectónica. Denim de peso medio para un look editorial.",
    details: [
      "Denim de peso medio",
      "Silueta wide-leg",
      "Pretina alta",
      "Bolsillos traseros limpios",
    ],
    featured: false,
  },
  {
    id: "derby-cuero-negro",
    slug: "derby-cuero-negro",
    name: "Derby Cuero Negro",
    price: 210000,
    category: "Calzado",
    images: [
      "https://images.unsplash.com/photo-1479769430132-97690a715213?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576133384936-ea17c54e9fd4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Negro", hex: "#0A0A0A" },
      { name: "Café", hex: "#4A3728" },
    ],
    description:
      "Derby de cuero full-grain con suela Goodyear. Formalidad atemporal con construcción artesanal.",
    details: [
      "Cuero full-grain italiano",
      "Construcción Goodyear welt",
      "Suela de cuero con goma",
      "Plantilla de corcho natural",
    ],
    featured: true,
  },
  {
    id: "sneaker-minimal-blanc",
    slug: "sneaker-minimal-blanc",
    name: "Sneaker Minimal Blanc",
    price: 165000,
    category: "Calzado",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Blanco", hex: "#F5F4F2" },
      { name: "Gris", hex: "#8A8A85" },
    ],
    description:
      "Sneaker de perfil bajo en napa premium. Minimalismo absoluto para el día a día.",
    details: [
      "Napa premium italiana",
      "Suela de goma vulcanizada",
      "Plantilla memory foam",
      "Perfil bajo cupsole",
    ],
    featured: true,
  },
  {
    id: "botin-chelsea-suede",
    slug: "botin-chelsea-suede",
    name: "Botín Chelsea Suede",
    price: 195000,
    category: "Calzado",
    images: [
      "https://images.unsplash.com/photo-1616663308968-58162d332720?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621665422129-a03cc387bc7d?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Taupe", hex: "#8B7E66" },
      { name: "Negro", hex: "#0A0A0A" },
    ],
    description:
      "Chelsea boot en ante suave con elásticos laterales. Versatilidad entre casual y formal.",
    details: [
      "Ante italiano",
      "Elásticos laterales reforzados",
      "Suela de goma antideslizante",
      "Horma contemporánea",
    ],
    featured: false,
  },
  {
    id: "loafer-penny-cognac",
    slug: "loafer-penny-cognac",
    name: "Loafer Penny Cognac",
    price: 178000,
    category: "Calzado",
    images: [
      "https://images.unsplash.com/photo-1772678144516-4fddf7635ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614253429340-98120bd6d753?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576133385309-203e67da8e58?auto=format&fit=crop&w=1200&q=80",
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Cognac", hex: "#9A5B3A" },
      { name: "Negro", hex: "#0A0A0A" },
    ],
    description:
      "Penny loafer en cuero teñido a mano. Un clásico de verano con suela de cuero flexible.",
    details: [
      "Cuero teñido a mano",
      "Suela de cuero flexible",
      "Sin cordones",
      "Acabado burnished",
    ],
    featured: false,
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}
