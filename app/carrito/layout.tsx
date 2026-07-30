import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Revisá tu pedido y finalizalo por WhatsApp con E.A. Studio.",
};

export default function CarritoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
