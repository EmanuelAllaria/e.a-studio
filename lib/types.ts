export type ProductCategory = "Abrigos" | "Camisas" | "Denim" | "Calzado";

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  images: string[];
  sizes: string[];
  colors: ProductColor[];
  description: string;
  details: string[];
  featured: boolean;
};

export type CartLine = {
  key: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

export type SortOption = "featured" | "price-asc" | "price-desc" | "name";
