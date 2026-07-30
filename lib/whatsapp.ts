import type { CartLine } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

const DEFAULT_WHATSAPP_NUMBER = "5491155681881";

export function getWhatsAppNumber() {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    DEFAULT_WHATSAPP_NUMBER
  );
}

export function buildWhatsAppMessage(items: CartLine[], total: number) {
  const lines = items.map((item, index) => {
    return [
      `${index + 1}. ${item.name}`,
      `   Talle: ${item.size} · Color: ${item.color}`,
      `   Cantidad: ${item.quantity} · ${formatPrice(item.price * item.quantity)}`,
    ].join("\n");
  });

  return [
    "*NUEVO PEDIDO — E.A. STUDIO*",
    "",
    ...lines,
    "",
    `*Total: ${formatPrice(total)}*`,
    "",
    "Quedo atento a la confirmación. ¡Gracias!",
  ].join("\n");
}

export function buildWhatsAppUrl(items: CartLine[], total: number) {
  const phone = getWhatsAppNumber();
  const text = buildWhatsAppMessage(items, total);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
