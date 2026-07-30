import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  {
    title: "Explorar",
    links: [
      { href: "/productos", label: "Catálogo" },
      { href: "/nosotros", label: "Nosotros" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    title: "Cuenta",
    links: [
      { href: "/auth/login", label: "Ingresar" },
      { href: "/auth/registro", label: "Crear cuenta" },
      { href: "/carrito", label: "Carrito" },
    ],
  },
  {
    title: "Atención",
    links: [
      { href: "/contacto", label: "Soporte" },
      { href: "/contacto", label: "Envíos" },
      { href: "/contacto", label: "Cambios" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em]">E.A. STUDIO</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Ropa masculina de alta gama. Siluetas precisas, materiales nobles
              y un proceso de compra directo por WhatsApp.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
                {group.title}
              </p>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Typing Timing. Todos los derechos reservados.</p>
          <p>Diseñado para un portafolio de excelencia.</p>
        </div>
      </Container>
    </footer>
  );
}
