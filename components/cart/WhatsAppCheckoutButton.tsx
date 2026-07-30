"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  useCartItemCount,
  useCartStore,
  useCartSubtotal,
} from "@/store/cart-store";

type WhatsAppCheckoutButtonProps = {
  onCheckout?: () => void;
  className?: string;
};

export function WhatsAppCheckoutButton({
  onCheckout,
  className,
}: WhatsAppCheckoutButtonProps) {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartSubtotal();
  const itemCount = useCartItemCount();

  const handleCheckout = () => {
    if (itemCount === 0) return;
    const url = buildWhatsAppUrl(items, subtotal);
    window.open(url, "_blank", "noopener,noreferrer");
    onCheckout?.();
  };

  return (
    <Button
      className={className}
      size="lg"
      disabled={itemCount === 0}
      onClick={handleCheckout}
    >
      <MessageCircle className="h-5 w-5" />
      Finalizar pedido por WhatsApp
    </Button>
  );
}
