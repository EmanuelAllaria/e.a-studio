import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Producto no encontrado",
};

export default function ProductNotFound() {
  return (
    <section className="py-32">
      <Container className="text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">404</p>
          <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
            Producto no encontrado
          </h1>
          <p className="mx-auto mt-5 max-w-md text-muted">
            La pieza que buscás no está en el catálogo o el enlace es incorrecto.
          </p>
          <Link
            href="/productos"
            className="mt-8 inline-flex h-12 items-center rounded-2xl bg-foreground px-6 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
          >
            Volver al catálogo
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
