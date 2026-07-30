import { Gem, Ruler, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Gem,
    title: "Materiales nobles",
    description:
      "Cashmere, lino europeo, denim selvedge y cueros full-grain seleccionados con criterio artesanal.",
  },
  {
    icon: Ruler,
    title: "Corte preciso",
    description:
      "Proporciones contemporáneas, patrones refinados y una silueta que comunica confianza sin esfuerzo.",
  },
  {
    icon: Sparkles,
    title: "Compra directa",
    description:
      "Finalizás tu pedido por WhatsApp. Atención personalizada, sin fricción ni pasarelas impersonales.",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Propuesta de valor"
            title="Estándares que se sienten"
            description="No vendemos tendencias. Construimos un guardarropa masculino con piezas que duran."
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.1}>
              <article className="h-full rounded-2xl border border-white/10 bg-surface p-8 shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-background p-3">
                  <value.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-medium tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
