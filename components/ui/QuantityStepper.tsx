"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
};

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 10,
  className,
}: QuantityStepperProps) {
  return (
    <div
      className={cn(
        "inline-flex h-12 items-center rounded-2xl border border-white/10 bg-surface",
        className,
      )}
    >
      <button
        type="button"
        aria-label="Disminuir cantidad"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex h-full w-11 items-center justify-center text-muted transition-colors duration-200 hover:text-foreground disabled:opacity-30"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-8 text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        aria-label="Aumentar cantidad"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="flex h-full w-11 items-center justify-center text-muted transition-colors duration-200 hover:text-foreground disabled:opacity-30"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
