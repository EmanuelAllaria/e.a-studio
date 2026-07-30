"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/carrito", label: "Carrito" },
  { href: "/auth/login", label: "Ingresar" },
];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 left-0 z-50 flex w-[min(100%,20rem)] flex-col border-r border-white/10 bg-background p-6 shadow-2xl shadow-black/50 lg:hidden"
          >
            <div className="mb-10 flex items-center justify-between">
              <Link
                href="/"
                onClick={onClose}
                className="text-sm font-semibold tracking-[0.28em]"
              >
                E.A. STUDIO
              </Link>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={onClose}
                className="rounded-xl p-2 text-muted transition-colors duration-200 hover:bg-white/5 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-2xl px-4 py-3 text-lg font-medium transition-colors duration-200 hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );
}
