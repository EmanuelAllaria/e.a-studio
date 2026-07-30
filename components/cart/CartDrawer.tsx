"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { CartLineItem } from "@/components/cart/CartLineItem";
import { CartSummary } from "@/components/cart/CartSummary";
import {
  useCartItemCount,
  useCartStore,
  useCartSubtotal,
} from "@/store/cart-store";

export function CartDrawer() {
  const isOpen = useCartStore((state) => state.isDrawerOpen);
  const closeDrawer = useCartStore((state) => state.closeDrawer);
  const items = useCartStore((state) => state.items);
  const subtotal = useCartSubtotal();
  const itemCount = useCartItemCount();

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar carrito"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={closeDrawer}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-white/10 bg-background shadow-2xl shadow-black/50"
            role="dialog"
            aria-modal="true"
            aria-label="Carrito de compras"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">
                  Carrito
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  {itemCount} {itemCount === 1 ? "artículo" : "artículos"}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={closeDrawer}
                className="rounded-xl p-2 text-muted transition-colors duration-200 hover:bg-white/5 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="rounded-2xl border border-white/10 bg-surface p-4">
                    <ShoppingBag className="h-6 w-6 text-muted" />
                  </div>
                  <div>
                    <p className="font-medium">Tu carrito está vacío</p>
                    <p className="mt-2 text-sm text-muted">
                      Explorá la colección y agregá tus piezas favoritas.
                    </p>
                  </div>
                  <Link
                    href="/productos"
                    onClick={closeDrawer}
                    className="mt-2 text-sm font-medium underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
                  >
                    Ver catálogo
                  </Link>
                </div>
              ) : (
                <div>
                  {items.map((item) => (
                    <CartLineItem key={item.key} item={item} compact />
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 ? (
              <div className="border-t border-white/10 p-6">
                <CartSummary
                  subtotal={subtotal}
                  itemCount={itemCount}
                  showViewCartLink
                  onCheckout={closeDrawer}
                />
              </div>
            ) : null}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
