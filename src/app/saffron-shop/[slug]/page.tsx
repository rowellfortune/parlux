import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AddToOrderButton from "@/components/AddToOrderButton";
import { PRODUCTS, findProduct, type Product } from "@/lib/products";

// Tells Next.js which product pages to build ahead of time, one per catalog entry.
export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

// Route params arrive as a promise in this Next.js version, so the page awaits them.
type PageProps = {
  params: Promise<{ slug: string }>;
};

// Builds the page title and description from the product, for search results and link previews.
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return { title: "Product not found | Parlux Persian Imports" };
  return {
    title: `${product.name} | Parlux Persian Imports`,
    description: product.summary,
  };
}

// Product detail page: photo, name, price, description, and the add-to-order button.
// Unknown slugs get the standard 404 page.
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  return (
    <>
      <SiteHeader />

      <main className="section">
        <div className="container">
          <a className="back-link" href="/saffron-shop">
            &larr; Back to the shop
          </a>

          <div className="product-detail">
            <figure className="product-detail-media">
              <Image src={product.image} alt={product.name} fill priority sizes="(min-width: 860px) 50vw, 100vw" />
            </figure>

            <div className="product-detail-body">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

// Product name, badge, price, description, and the add-to-order control.
function ProductInfo({ product }: { product: Product }) {
  return (
    <>
      {product.badge && <span className="badge">{product.badge}</span>}
      <h1 className="display">{product.name}</h1>
      <p className="price price-large">
        {product.price === null ? "Price on request" : `${product.currency} ${product.price.toFixed(2)}`}
      </p>
      <p className="lead">{product.description}</p>
      <AddToOrderButton slug={product.slug} />
      <p className="form-note">Add it to your order, then send the order on WhatsApp from the shop.</p>
    </>
  );
}
