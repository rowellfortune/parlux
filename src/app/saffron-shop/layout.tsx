import type { ReactNode } from "react";
import { CartProvider } from "@/components/CartProvider";

// Layout for every shop route. Wraps the shop in cart state so any child can read or change the cart.
export default function ShopLayout({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
