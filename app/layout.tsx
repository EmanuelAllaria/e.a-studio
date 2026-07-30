import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "E.A. Studio | Ropa masculina de alta gama",
    template: "%s | E.A. Studio",
  },
  description:
    "Tienda online de ropa masculina de alta gama. Abrigos, camisas, denim y calzado con compra directa por WhatsApp.",
  keywords: [
    "ropa masculina",
    "moda hombre",
    "alta gama",
    "E.A. Studio",
    "tienda online",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
