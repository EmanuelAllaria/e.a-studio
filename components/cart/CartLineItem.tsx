"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import type { CartLine } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

type CartLineItemProps = {
  item: CartLine;
  compact?: boolean;
};

export function CartLineItem({ item, compact = false }: CartLineItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div
      className={`flex gap-4 border-b border-white/10 py-5 last:border-b-0 ${
        compact ? "" : "md:gap-6"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-surface ${
          compact ? "h-20 w-16" : "h-28 w-24"
        }`}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-medium tracking-wide text-foreground md:text-base">
              {item.name}
            </h3>
            <p className="mt-1 text-xs text-muted md:text-sm">
              Talle {item.size} · {item.color}
            </p>
          </div>
          <button
            type="button"
            aria-label={`Eliminar ${item.name}`}
            onClick={() => removeItem(item.key)}
            className="rounded-xl p-2 text-muted transition-colors duration-200 hover:bg-white/5 hover:text-foreground"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3">
          <QuantityStepper
            value={item.quantity}
            onChange={(quantity) => updateQuantity(item.key, quantity)}
            className={compact ? "h-10" : undefined}
          />
          <p className="text-sm font-medium tabular-nums text-foreground md:text-base">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}
