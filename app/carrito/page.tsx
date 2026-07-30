"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { CartLineItem } from "@/components/cart/CartLineItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  useCartItemCount,
  useCartStore,
  useCartSubtotal,
} from "@/store/cart-store";

export default function CarritoPage() {
  const items = useCartStore((state) => state.items);
  const clear = useCartStore((state) => state.clear);
  const subtotal = useCartSubtotal();
  const itemCount = useCartItemCount();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Tu selección"
              title="Carrito"
              description="Revisá talles, colores y cantidades antes de enviar el pedido por WhatsApp."
            />
            {items.length > 0 ? (
              <button
                type="button"
                onClick={clear}
                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                Vaciar carrito
              </button>
            ) : null}
          </div>
        </Reveal>

        {items.length === 0 ? (
          <Reveal>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface px-8 py-24 text-center">
              <div className="rounded-2xl border border-white/10 bg-background p-4">
                <ShoppingBag className="h-6 w-6 text-muted" />
              </div>
              <p className="mt-6 text-lg font-medium">Tu carrito está vacío</p>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Sumá piezas desde el catálogo y volvé acá para finalizar tu
                pedido.
              </p>
              <Link
                href="/productos"
                className="mt-8 inline-flex h-12 items-center rounded-2xl bg-foreground px-6 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
              >
                Explorar productos
              </Link>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-surface px-6 shadow-2xl shadow-black/30">
                {items.map((item) => (
                  <CartLineItem key={item.key} item={item} />
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <CartSummary subtotal={subtotal} itemCount={itemCount} />
              </div>
            </Reveal>
          </div>
        )}
      </Container>
    </section>
  );
}
