"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { WhatsAppCheckoutButton } from "@/components/cart/WhatsAppCheckoutButton";

type CartSummaryProps = {
  subtotal: number;
  itemCount: number;
  showViewCartLink?: boolean;
  onCheckout?: () => void;
};

export function CartSummary({
  subtotal,
  itemCount,
  showViewCartLink = false,
  onCheckout,
}: CartSummaryProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between text-sm text-muted">
        <span>
          Subtotal ({itemCount} {itemCount === 1 ? "artículo" : "artículos"})
        </span>
        <span className="font-medium tabular-nums text-foreground">
          {formatPrice(subtotal)}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        El envío y la confirmación se coordinan directamente por WhatsApp con
        nuestro equipo de ventas.
      </p>

      <div className="mt-6 space-y-3">
        <WhatsAppCheckoutButton onCheckout={onCheckout} />
        {showViewCartLink ? (
          <Link
            href="/carrito"
            className="flex h-12 items-center justify-center rounded-2xl border border-white/10 text-sm font-medium transition-all duration-200 hover:border-white/30 hover:bg-white/5"
          >
            Ver carrito completo
          </Link>
        ) : null}
      </div>
    </div>
  );
}
