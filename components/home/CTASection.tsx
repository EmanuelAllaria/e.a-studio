import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-surface-elevated to-surface px-8 py-16 text-center shadow-2xl shadow-black/50 md:px-16 md:py-20">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Próximo paso
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Construí tu look con atención personalizada
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
              Explorá el catálogo, armá tu selección y finalizá el pedido por
              WhatsApp. Nuestro equipo te acompaña en talles, disponibilidad y
              envío.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/productos">
                <Button size="lg">
                  Ir al catálogo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" size="lg">
                  Hablar con nosotros
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
