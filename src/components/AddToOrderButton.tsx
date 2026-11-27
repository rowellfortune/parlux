"use client";

import { useCart } from "@/components/CartProvider";

// Props for the add-to-order button on a product page.
type AddToOrderButtonProps = {
  slug: string;
};

// Adds one unit of a product to the cart and confirms it, so the visitor sees the click worked.
export default function AddToOrderButton({ slug }: AddToOrderButtonProps) {
  const { addItem, lines } = useCart();
  const inOrder = lines.find((line) => line.slug === slug)?.quantity ?? 0;

  return (
    <div className="add-to-order">
      <button className="button button-primary" type="button" onClick={() => addItem(slug)}>
        Add to order
      </button>
      {inOrder > 0 && (
        <span className="muted" aria-live="polite">
          {inOrder} in your order
        </span>
      )}
    </div>
  );
}
