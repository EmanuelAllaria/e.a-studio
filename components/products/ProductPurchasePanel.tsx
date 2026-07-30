"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import type { Product } from "@/lib/types";
import { cn, formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

type ProductPurchasePanelProps = {
  product: Product;
};

export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      color,
      quantity,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-muted">
          {product.category}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {product.name}
        </h1>
        <p className="mt-4 text-2xl font-medium tabular-nums">
          {formatPrice(product.price)}
        </p>
      </div>

      <p className="text-base leading-relaxed text-muted">
        {product.description}
      </p>

      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
          Talle
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSize(item)}
              className={cn(
                "min-w-12 rounded-2xl border px-4 py-2.5 text-sm transition-all duration-200",
                size === item
                  ? "border-foreground bg-foreground text-background"
                  : "border-white/10 text-muted hover:border-white/30 hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
          Color — {color}
        </p>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((item) => (
            <button
              key={item.name}
              type="button"
              aria-label={item.name}
              onClick={() => setColor(item.name)}
              className={cn(
                "h-10 w-10 rounded-full border-2 transition-all duration-200",
                color === item.name
                  ? "border-foreground scale-110"
                  : "border-white/20 hover:scale-105",
              )}
              style={{ backgroundColor: item.hex }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <QuantityStepper value={quantity} onChange={setQuantity} />
        <Button size="lg" className="flex-1" onClick={handleAdd}>
          Agregar al carrito
        </Button>
      </div>

      <ul className="space-y-3 border-t border-white/10 pt-8">
        {product.details.map((detail) => (
          <li key={detail} className="flex items-start gap-3 text-sm text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}
