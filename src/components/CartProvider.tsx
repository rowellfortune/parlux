"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { findProduct, type Product } from "@/lib/products";

// One line in the cart: which product, and how many.
export type CartLine = {
  slug: string;
  quantity: number;
};

// Everything the cart UI and the add buttons can use.
type CartContextValue = {
  lines: CartLine[];
  // Total number of items across all lines.
  itemCount: number;
  // Adds one unit of a product, or increases its quantity.
  addItem: (slug: string) => void;
  // Sets a line's quantity. Zero or less removes the line.
  setQuantity: (slug: string, quantity: number) => void;
  // Empties the cart.
  clear: () => void;
};

// localStorage key. Versioned so a future cart format can replace this one safely.
const STORAGE_KEY = "parlux-cart-v1";

// Context object. Components read it through useCart().
const CartContext = createContext<CartContextValue | null>(null);

// Reads the saved cart. Returns an empty cart if storage is blocked or the data is bad.
function loadCart(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line): line is CartLine =>
        typeof line?.slug === "string" && typeof line?.quantity === "number" && line.quantity > 0,
    );
  } catch {
    return [];
  }
}

// Saves the cart. Failures are ignored, because the cart still works for this visit.
function saveCart(lines: CartLine[]): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // Storage can be full or disabled. The cart keeps working in memory.
  }
}

// Wraps the shop in cart state. Loads the saved cart after mount to avoid server/client mismatch.
export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  // Load the saved cart once, on the client.
  useEffect(() => {
    setLines(loadCart());
    setReady(true);
  }, []);

  // Save every change, but only after the initial load so an empty cart can't overwrite saved data.
  useEffect(() => {
    if (ready) saveCart(lines);
  }, [lines, ready]);

  // Builds the context value. Memoized so consumers only re-render when the cart changes.
  const value = useMemo<CartContextValue>(() => {
    // Adds one unit, or starts a new line.
    const addItem = (slug: string) => {
      setLines((current) => {
        const existing = current.find((line) => line.slug === slug);
        if (existing) {
          return current.map((line) => (line.slug === slug ? { ...line, quantity: line.quantity + 1 } : line));
        }
        return [...current, { slug, quantity: 1 }];
      });
    };

    // Sets an exact quantity. Anything at or below zero removes the line.
    const setQuantity = (slug: string, quantity: number) => {
      setLines((current) =>
        quantity <= 0
          ? current.filter((line) => line.slug !== slug)
          : current.map((line) => (line.slug === slug ? { ...line, quantity } : line)),
      );
    };

    // Empties the cart.
    const clear = () => setLines([]);

    return {
      lines,
      itemCount: lines.reduce((sum, line) => sum + line.quantity, 0),
      addItem,
      setQuantity,
      clear,
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Reads the cart from the nearest CartProvider. Throws if used outside one, which catches wiring mistakes early.
export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}

// Looks up each cart line's product and returns the pairs that exist in the catalog.
export function resolveLines(lines: CartLine[]): { product: Product; quantity: number }[] {
  return lines.flatMap((line) => {
    const product = findProduct(line.slug);
    return product ? [{ product, quantity: line.quantity }] : [];
  });
}
