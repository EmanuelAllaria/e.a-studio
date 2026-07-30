import type { Metadata } from "next";
import { CatalogView } from "@/components/products/CatalogView";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo completo de E.A. Studio: abrigos, camisas, denim y calzado masculino de alta gama.",
};

export default function ProductosPage() {
  const products = getAllProducts();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Catálogo"
            title="La colección completa"
            description="Filtrá por categoría, ordená por precio y buscá en tiempo real. Cada pieza está lista para sumarse a tu pedido por WhatsApp."
            className="mb-12"
          />
        </Reveal>
        <CatalogView products={products} />
      </Container>
    </section>
  );
}
