import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedCollection() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selección editorial"
              title="Piezas destacadas"
              description="Una curaduría de abrigos, camisas, denim y calzado pensada para el hombre contemporáneo."
            />
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-70"
            >
              Ver todo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.08}>
              <ProductCard product={product} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
