export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

export function buildCartLineKey(
  productId: string,
  size: string,
  color: string,
) {
  return `${productId}-${size}-${color}`.toLowerCase().replace(/\s+/g, "-");
}
