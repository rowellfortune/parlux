import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { WHATSAPP_LINK } from "@/lib/contact";

// Metadata for the tea infusion page, used by search engines and link previews.
export const metadata = {
  title: "Persian Tea Infusions | Parlux Persian Imports",
  description: "Black tea infused with Persian saffron, cardamom, cinnamon, ginger, and clove from Parlux Persian Imports.",
};

// Tea infusion page: intro with the first photo, flavor story, then the second photo and an order call to action.
export default function TeaInfusionPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="container split">
            <div className="prose">
              <p className="eyebrow">Tea infusion</p>
              <h1 className="display">Healthy Tea Infusions</h1>
              <p>
                Experience the elegance and warmth of true Persian tradition. Our Persian Tea Infusions are artfully
                crafted from premium black tea leaves and enriched with the finest Persian aromas: saffron, cardamom,
                cinnamon, ginger, and clove.
              </p>
              <p>
                Each blend captures the essence of Persian hospitality and heritage, offering a perfect harmony of
                sophistication and comfort. From the first sip, you will taste the richness of culture, the depth of
                flavor, and the timeless luxury that defines Persian tea.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={WHATSAPP_LINK}>
                  Order on WhatsApp
                </a>
                <a className="button button-ghost" href="/contact">
                  Contact us
                </a>
              </div>
            </div>

            <figure className="split-media">
              <Image src="/images/Tea-1.jpg" alt="Persian tea infusion with saffron" fill priority sizes="(min-width: 860px) 50vw, 100vw" />
            </figure>
          </div>
        </section>

        <section className="section cta-band">
          <div className="container">
            <p className="eyebrow" style={{ color: "var(--color-gold-soft)" }}>
              Persian perfection
            </p>
            <h2 className="display">Taste the luxury of Persian perfection</h2>
            <p>Discover the heart of Persia in every cup.</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a className="button button-primary" href={WHATSAPP_LINK}>
                WhatsApp us
              </a>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
