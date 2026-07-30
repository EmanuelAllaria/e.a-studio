"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CartButton } from "@/components/layout/CartButton";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-all duration-300",
          scrolled
            ? "border-white/10 bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-background/40 backdrop-blur-md",
        )}
      >
        <Container className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Abrir menú"
              className="rounded-xl p-2.5 transition-colors duration-200 hover:bg-white/5 lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link
              href="/"
              className="text-sm font-semibold tracking-[0.28em] transition-opacity duration-200 hover:opacity-70"
            >
              E.A. STUDIO
            </Link>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-200",
                  pathname.startsWith(link.href)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              href="/auth/login"
              className="hidden rounded-xl px-3 py-2 text-sm text-muted transition-colors duration-200 hover:bg-white/5 hover:text-foreground sm:inline-flex"
            >
              Ingresar
            </Link>
            <CartButton />
          </div>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
