"use client";

import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { FilterBar } from "@/components/products/FilterBar";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product, ProductCategory, SortOption } from "@/lib/types";

type CatalogViewProps = {
  products: Product[];
};

export function CatalogView({ products }: CatalogViewProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory | "Todos">("Todos");
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory =
        category === "Todos" || product.category === category;
      const matchesSearch =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name, "es");
        case "featured":
        default:
          return Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name, "es");
      }
    });

    return result;
  }, [products, search, category, sort]);

  return (
    <div className="space-y-10">
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
        resultCount={filtered.length}
      />

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-surface px-8 py-20 text-center">
          <p className="text-lg font-medium">Sin resultados</p>
          <p className="mt-3 text-sm text-muted">
            Probá con otra búsqueda o categoría.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
