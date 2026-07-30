"use client";

import { Search } from "lucide-react";
import type { ProductCategory, SortOption } from "@/lib/types";
import { CATEGORIES } from "@/lib/products";
import { cn } from "@/lib/utils";

type FilterBarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  category: ProductCategory | "Todos";
  onCategoryChange: (value: ProductCategory | "Todos") => void;
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
  resultCount: number;
};

export function FilterBar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
  resultCount,
}: FilterBarProps) {
  const categories: Array<ProductCategory | "Todos"> = ["Todos", ...CATEGORIES];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por nombre o descripción..."
            className="h-12 w-full rounded-2xl border border-white/10 bg-surface pl-11 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-muted/70 focus:border-white/30 focus:ring-2 focus:ring-white/10"
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="text-xs uppercase tracking-[0.2em] text-muted">
            Ordenar
          </label>
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value as SortOption)}
            className="h-12 rounded-2xl border border-white/10 bg-surface px-4 text-sm outline-none transition-all duration-200 focus:border-white/30"
          >
            <option value="featured">Destacados</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="name">Nombre A–Z</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onCategoryChange(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all duration-200",
              category === item
                ? "border-foreground bg-foreground text-background"
                : "border-white/10 bg-transparent text-muted hover:border-white/30 hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted">
        {resultCount} {resultCount === 1 ? "pieza" : "piezas"} encontradas
      </p>
    </div>
  );
}
