import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function BrandBanner() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px] lg:min-h-[480px]">
                <Image
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80"
                  alt="Detalle de sastrería E.A. Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center bg-surface px-8 py-14 md:px-12 lg:px-16">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">
                  Manifiesto
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  Menos ruido.
                  <br />
                  Más presencia.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                  Cada pieza se diseña con disciplina: menos ornamento, más
                  material, más corte. Una estética sobria para quienes eligen
                  calidad silenciosa.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
