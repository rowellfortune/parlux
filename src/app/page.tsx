import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/contact";

// Product cards shown in the "Our products" section.
const PRODUCTS = [
  {
    title: "Super Negin Saffron",
    badge: "ISO 3632 certified",
    image: "/images/Saffron-1-670x1024.jpg",
    text: "The highest grade of Persian saffron, known for deep red threads, rich aroma, and vibrant color. Perfect for gourmet cooking, desserts, tea, and natural health remedies.",
    href: "/contact",
  },
  {
    title: "Dubai Coffee",
    badge: "Coffee infusion",
    image: "/images/saffron-coffee-2-670x1024.jpg",
    text: "Your favorite coffee, elevated with the golden touch of Parlux Premium Persian Saffron. Infuse it yourself for a rich, aromatic cup that captures the taste of true indulgence.",
    href: "/contact",
  },
  {
    title: "Persian Tea Infusions",
    badge: "Tea infusions",
    image: "/images/saffron-thee-1-670x1024.jpg",
    text: "A royal blend of fine Persian tea infused with Parlux Premium Saffron and a touch of cardamom, cinnamon, clove, or ginger. A warm, soothing cup with the flavors of Persia.",
    href: "/tea-infusion",
  },
];

// Home page: hero, products, saffron explainer, uses, closing call to action.
export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <Products />
        <WhatIsSaffron />
        <SaffronUses />
        <ClosingCta />
      </main>

      <SiteFooter />
    </>
  );
}

// Hero block: headline, short intro, two calls to action, and the banner photo.
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-copy">
          <p className="eyebrow">Premium Persian Grade 1 Saffron</p>
          <h1 className="display">Taste the Luxury of Pure Persian Perfection</h1>
          <p className="lead">
            Our Premium Persian Grade 1 Saffron is hand-harvested from the finest fields of Iran, delivering
            unmatched aroma, color, and taste. Experience the world&apos;s most exquisite saffron, only from Parlux.
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

        <figure className="hero-media">
          <Image src="/images/saffron-banner-1024x576.jpg" alt="Saffron threads on a warm background" fill priority sizes="(min-width: 860px) 50vw, 100vw" />
        </figure>
      </div>
    </section>
  );
}

// Product grid: three cards, each with a photo, badge, description, and link.
function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <p className="eyebrow">Our products</p>
        <h2 className="display">We Have The Best Persian Saffron and More</h2>

        <div className="grid-3" style={{ marginTop: "2.5rem" }}>
          {PRODUCTS.map((product) => (
            <article className="card" key={product.title}>
              <figure className="card-media">
                <Image src={product.image} alt={product.title} fill sizes="(min-width: 860px) 33vw, 100vw" />
              </figure>
              <div className="card-body">
                <span className="badge">{product.badge}</span>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <a className="link" href={product.href}>
                  Read more &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Explainer: what saffron is, with the crocus photo beside it.
function WhatIsSaffron() {
  return (
    <section className="section" id="about" style={{ background: "var(--color-paper)" }}>
      <div className="container split">
        <figure className="split-media">
          <Image src="/images/Crocus.jpg" alt="Crocus sativus flower" fill sizes="(min-width: 860px) 50vw, 100vw" />
        </figure>

        <div className="prose">
          <p className="eyebrow">Imported from Iran</p>
          <h2 className="display">What is Saffron?</h2>
          <p>
            Saffron is the world&apos;s most precious spice, known as the &ldquo;Red Gold&rdquo; of Persia. It is
            hand-harvested from the delicate stigma of the Crocus sativus flower. It takes around 150,000 flowers to
            produce just one kilogram.
          </p>
          <p>
            Renowned for its deep crimson color, rich aroma, and luxurious flavor, saffron has been treasured for
            centuries in Persian culture, fine cuisine, and natural wellness.
          </p>
          <p>
            At Parlux, we source only Premium Persian Grade 1 Saffron, carefully selected for its purity, potency, and
            vibrant character. That gives every strand an unmatched sensory experience.
          </p>
        </div>
      </div>
    </section>
  );
}

// Uses section: cooking, drinks, and wellness, with the food photo beside it.
function SaffronUses() {
  return (
    <section className="section">
      <div className="container split">
        <div className="prose">
          <p className="eyebrow">Uses</p>
          <h2 className="display">What can Saffron be used for?</h2>
          <p>
            Saffron is a symbol of luxury and wellness. Its distinct flavor, golden hue, and natural aroma make it a
            favorite among chefs, artisans, and wellness enthusiasts around the world.
          </p>
          <p>
            Use Parlux Premium Persian Saffron to elevate gourmet rice dishes, desserts, sauces, soups, and stews. Infuse
            it into tea, milk, or coffee for a warm, aromatic indulgence. Beyond the kitchen, saffron is valued for its
            natural antioxidants that support calmness, vitality, and balance.
          </p>
        </div>

        <figure className="split-media">
          <Image src="/images/food.jpg" alt="Saffron used in a dish" fill sizes="(min-width: 860px) 50vw, 100vw" />
        </figure>
      </div>
    </section>
  );
}

// Closing call to action: the bespoke, partnership, and wholesale path.
function ClosingCta() {
  return (
    <section className="section cta-band">
      <div className="container">
        <p className="eyebrow" style={{ color: "var(--color-gold-soft)" }}>
          Bespoke orders and wholesale
        </p>
        <h2 className="display">Taste the Luxury of Pure Persian Perfection</h2>
        <p>
          Indulge in the world&apos;s finest saffron, crafted with heritage, purity, and excellence. For bespoke orders,
          partnerships, or premium wholesale inquiries, connect with Parlux.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <a className="button button-primary" href={WHATSAPP_LINK}>
            WhatsApp us
          </a>
          <a className="button button-ghost" href={PHONE_LINK} style={{ borderColor: "var(--color-gold-soft)", color: "var(--color-paper)" }}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
