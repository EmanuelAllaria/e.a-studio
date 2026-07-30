"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/productos/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/30">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur-md">
            {product.category}
          </span>
        </div>

        <div className="mt-5 space-y-2">
          <h3 className="text-base font-medium tracking-wide transition-opacity duration-200 group-hover:opacity-80">
            {product.name}
          </h3>
          <p className="text-sm text-muted">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.article>
  );
}
