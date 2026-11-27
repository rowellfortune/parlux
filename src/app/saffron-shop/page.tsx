import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ShopCatalog from "@/components/ShopCatalog";

// Metadata for the shop page, used by search engines and link previews.
export const metadata = {
  title: "Saffron Shop | Parlux Persian Imports",
  description: "Shop Parlux Persian Grade 1 saffron, saffron coffee, and saffron tea. Order on WhatsApp.",
};

// Shop page: intro line, the product grid with an order summary, and the shared header and footer.
export default function SaffronShopPage() {
  return (
    <>
      <SiteHeader />

      <main className="section">
        <div className="container">
          <p className="eyebrow">Saffron shop</p>
          <h1 className="display">Pure Persian saffron, ready to order</h1>
          <p className="lead">
            Add what you want, then send your order on WhatsApp. We confirm availability and the final total before you pay.
          </p>

          <ShopCatalog />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
