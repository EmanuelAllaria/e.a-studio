"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLine } from "@/lib/types";
import { buildCartLineKey } from "@/lib/utils";

type AddItemInput = {
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity?: number;
};

type CartState = {
  items: CartLine[];
  isDrawerOpen: boolean;
  hasHydrated: boolean;
  addItem: (item: AddItemInput) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  setHasHydrated: (value: boolean) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      hasHydrated: false,
      addItem: (item) => {
        const key = buildCartLineKey(item.productId, item.size, item.color);
        const quantity = item.quantity ?? 1;
        const existing = get().items.find((line) => line.key === key);

        if (existing) {
          set({
            items: get().items.map((line) =>
              line.key === key
                ? { ...line, quantity: Math.min(10, line.quantity + quantity) }
                : line,
            ),
            isDrawerOpen: true,
          });
          return;
        }

        set({
          items: [
            ...get().items,
            {
              key,
              productId: item.productId,
              name: item.name,
              price: item.price,
              image: item.image,
              size: item.size,
              color: item.color,
              quantity,
            },
          ],
          isDrawerOpen: true,
        });
      },
      removeItem: (key) =>
        set({ items: get().items.filter((line) => line.key !== key) }),
      updateQuantity: (key, quantity) => {
        if (quantity < 1) {
          set({ items: get().items.filter((line) => line.key !== key) });
          return;
        }

        set({
          items: get().items.map((line) =>
            line.key === key
              ? { ...line, quantity: Math.min(10, quantity) }
              : line,
          ),
        });
      },
      clear: () => set({ items: [] }),
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set({ isDrawerOpen: !get().isDrawerOpen }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "ea-studio-cart",
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);

export function useCartSubtotal() {
  return useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
}

export function useCartItemCount() {
  return useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
}

export function useHasHydrated() {
  return useCartStore((state) => state.hasHydrated);
}
