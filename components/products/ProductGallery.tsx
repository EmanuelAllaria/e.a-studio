"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/40">
        <Image
          src={images[active]}
          alt={`${name} — imagen ${active + 1}`}
          fill
          priority
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-2xl border transition-all duration-200",
              active === index
                ? "border-foreground"
                : "border-white/10 opacity-70 hover:opacity-100",
            )}
          >
            <Image
              src={image}
              alt={`${name} miniatura ${index + 1}`}
              fill
              className="object-cover"
              sizes="160px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
