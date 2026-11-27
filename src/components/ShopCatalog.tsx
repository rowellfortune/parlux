"use client";

import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/lib/contact";
import { PRODUCTS, type Product } from "@/lib/products";
import { resolveLines, useCart } from "@/components/CartProvider";

// Formats a price with its currency code. Returns "Price on request" when no price is set.
function formatPrice(product: Product): string {
  if (product.price === null) return "Price on request";
  return `${product.currency} ${product.price.toFixed(2)}`;
}

// Builds the WhatsApp order message from the cart lines. Lines without prices are listed with "price on request".
function buildOrderMessage(lines: ReturnType<typeof resolveLines>): string {
  const rows = lines.map(({ product, quantity }) => `- ${quantity} x ${product.name} (${formatPrice(product)})`);
  return ["Hello Parlux, I would like to order:", "", ...rows, "", "Please confirm availability and total."].join("\n");
}

// Full shop view: the product grid on the left and the order summary on the right.
export default function ShopCatalog() {
  return (
    <div className="shop-layout">
      <ProductGrid />
      <OrderSummary />
    </div>
  );
}

// Grid of product cards. Each card has an add button that adds one unit to the cart.
function ProductGrid() {
  const { addItem } = useCart();

  return (
    <div className="product-grid">
      {PRODUCTS.map((product) => (
        <article className="product-card" key={product.slug}>
          <figure className="product-card-media">
            <Image src={product.image} alt={product.name} fill sizes="(min-width: 860px) 33vw, 100vw" />
          </figure>
          <div className="product-card-body">
            {product.badge && <span className="badge">{product.badge}</span>}
            <h2>{product.name}</h2>
            <p>{product.summary}</p>
            <div className="product-card-footer">
              <span className="price">{formatPrice(product)}</span>
              <button className="button button-primary" type="button" onClick={() => addItem(product.slug)}>
                Add to order
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

// Cart panel: shows the lines, lets the visitor change quantities, and sends the order through WhatsApp.
function OrderSummary() {
  const { lines, itemCount, setQuantity, clear } = useCart();
  const resolved = resolveLines(lines);

  // A total only makes sense when every line has a price.
  const allPriced = resolved.every(({ product }) => product.price !== null);
  const total = resolved.reduce((sum, { product, quantity }) => sum + (product.price ?? 0) * quantity, 0);
  const currency = resolved[0]?.product.currency ?? "SRD";

  const orderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(resolved))}`;

  return (
    <aside className="order-summary" aria-label="Your order">
      <h2>Your order</h2>

      {itemCount === 0 ? (
        <p className="muted">Your order is empty. Add a product to start.</p>
      ) : (
        <>
          <ul className="order-lines">
            {resolved.map(({ product, quantity }) => (
              <li key={product.slug}>
                <div>
                  <strong>{product.name}</strong>
                  <span className="muted">{formatPrice(product)}</span>
                </div>
                <div className="quantity">
                  <button type="button" aria-label={`Remove one ${product.name}`} onClick={() => setQuantity(product.slug, quantity - 1)}>
                    &minus;
                  </button>
                  <span aria-live="polite">{quantity}</span>
                  <button type="button" aria-label={`Add one ${product.name}`} onClick={() => setQuantity(product.slug, quantity + 1)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="order-total">
            <span>Total</span>
            <span>{allPriced ? `${currency} ${total.toFixed(2)}` : "Confirmed on WhatsApp"}</span>
          </p>

          <a className="button button-primary" href={orderUrl} target="_blank" rel="noopener noreferrer">
            Order on WhatsApp
          </a>
          <button className="button-link" type="button" onClick={clear}>
            Clear order
          </button>
        </>
      )}
    </aside>
  );
}
