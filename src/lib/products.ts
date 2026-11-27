// Product catalog for the saffron shop.
// Edit this file to add products or set prices. A product with price set to null
// shows "Price on request" and is ordered through WhatsApp.

// Shape of one product in the catalog.
export type Product = {
  // URL-safe identifier, also used as the cart key.
  slug: string;
  name: string;
  // Short line shown under the name on the card.
  summary: string;
  // Longer description for the product detail view.
  description: string;
  // Path to an image in /public.
  image: string;
  // Price in the shop currency, or null when not yet set.
  price: number | null;
  // ISO currency code used when displaying the price.
  currency: "SRD" | "USD" | "EUR";
  // Optional label such as "ISO 3632 certified".
  badge?: string;
};

// The catalog. Names and descriptions come from the live parlux.sr site.
export const PRODUCTS: Product[] = [
  {
    slug: "super-negin-saffron",
    name: "Super Negin Saffron",
    summary: "The highest grade of Persian saffron.",
    description:
      "Deep red threads, rich aroma, and vibrant color. Perfect for gourmet cooking, desserts, tea, and natural health remedies.",
    image: "/images/Saffron-1-670x1024.jpg",
    price: null,
    currency: "SRD",
    badge: "ISO 3632 certified",
  },
  {
    slug: "dubai-coffee",
    name: "Dubai Coffee",
    summary: "Coffee elevated with Parlux saffron.",
    description:
      "Your favorite coffee, infused with Parlux Premium Persian Saffron for a rich, aromatic, and luxurious cup.",
    image: "/images/saffron-coffee-2-670x1024.jpg",
    price: null,
    currency: "SRD",
    badge: "Coffee infusion",
  },
  {
    slug: "persian-tea-infusion",
    name: "Persian Tea Infusion",
    summary: "Black tea with saffron, cardamom, cinnamon, ginger, and clove.",
    description:
      "Premium black tea leaves with Persian aromas. A warm, soothing cup with the flavors of Persia.",
    image: "/images/saffron-thee-1-670x1024.jpg",
    price: null,
    currency: "SRD",
    badge: "Tea infusion",
  },
];

// Looks up a product by slug. Returns undefined when no product matches.
export function findProduct(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}
