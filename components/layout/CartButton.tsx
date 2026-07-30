"use client";

import { ShoppingBag } from "lucide-react";
import {
  useCartItemCount,
  useCartStore,
  useHasHydrated,
} from "@/store/cart-store";

export function CartButton() {
  const openDrawer = useCartStore((state) => state.openDrawer);
  const itemCount = useCartItemCount();
  const hasHydrated = useHasHydrated();
  const displayCount = hasHydrated ? itemCount : 0;

  return (
    <button
      type="button"
      onClick={openDrawer}
      aria-label={`Abrir carrito (${displayCount} artículos)`}
      className="relative rounded-xl p-2.5 text-foreground transition-all duration-200 hover:bg-white/5"
    >
      <ShoppingBag className="h-5 w-5" />
      {displayCount > 0 ? (
        <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background">
          {displayCount > 9 ? "9+" : displayCount}
        </span>
      ) : null}
    </button>
  );
}
