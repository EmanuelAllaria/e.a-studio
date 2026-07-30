"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=2000&q=80"
          alt="Colección masculina E.A. Studio"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <Container className="relative flex min-h-[88vh] flex-col justify-end pb-20 pt-32 md:justify-center md:pb-0 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
            Colección AW26
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Precisión en cada silueta.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            E.A. Studio interpreta la moda masculina contemporánea con materiales
            nobles, proporciones impecables y un proceso de compra directo.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/productos">
              <Button size="lg" className="w-full sm:w-auto">
                Explorar colección
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/nosotros">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Nuestra filosofía
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
