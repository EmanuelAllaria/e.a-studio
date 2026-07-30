import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Historia, filosofía y estándares de calidad de E.A. Studio: ropa masculina de alta gama.",
};

const pillars = [
  {
    title: "Material primero",
    text: "Trabajamos con proveedores que priorizan trazabilidad, tacto y durabilidad. Cada tejido se prueba en uso real antes de entrar en colección.",
  },
  {
    title: "Silueta contemporánea",
    text: "Patrones limpios, hombros precisos y proporciones pensadas para el hombre urbano. Nada de exceso: solo lo necesario.",
  },
  {
    title: "Relación directa",
    text: "El pedido se confirma por WhatsApp. Conversación humana, asesoramiento de talle y seguimiento personalizado del envío.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Nuestra historia"
              title="Una marca para quien elige con intención"
              description="E.A. Studio nace de la obsesión por la ropa masculina bien hecha: piezas que no gritan, pero se notan. Un guardarropa reducido, exigente y contemporáneo."
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 md:aspect-[2.4/1]">
              <Image
                src="https://images.unsplash.com/photo-1633655442168-c6ef0ed2f984?auto=format&fit=crop&w=1800&q=80"
                alt="Atelier E.A. Studio"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.1}>
                <article className="h-full rounded-2xl border border-white/10 bg-surface p-8">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted">
                    0{index + 1}
                  </p>
                  <h2 className="mt-5 text-xl font-medium">{pillar.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {pillar.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <blockquote className="mt-16 rounded-2xl border border-white/10 bg-surface-elevated px-8 py-12 text-center md:px-16">
              <p className="text-2xl font-medium tracking-tight md:text-3xl">
                “La excelencia no es un adorno. Es la suma de decisiones
                silenciosas.”
              </p>
              <footer className="mt-6 text-sm uppercase tracking-[0.24em] text-muted">
                Manifiesto E.A. Studio
              </footer>
            </blockquote>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
