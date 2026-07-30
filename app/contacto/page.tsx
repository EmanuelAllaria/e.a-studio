import type { Metadata } from "next";
import { ContactView } from "@/components/contact/ContactView";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a E.A. Studio para consultas de talle, envíos y asesoramiento.",
};

export default function ContactoPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <ContactView />
      </Container>
    </section>
  );
}
