import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/contact";

// Sticky top bar shared by every page: logo, section links, and a WhatsApp button.
// Section links use "/#anchor" so they also work from inner pages such as /contact.
export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="/" className="brand" aria-label="Parlux Persian Imports home">
          <Image src="/images/logo.png" alt="Parlux, Essence of Persia" width={507} height={436} priority />
        </a>

        <nav className="nav" aria-label="Main">
          <a href="/saffron-shop">Shop</a>
          <a href="/#about">About</a>
          <a href="/tea-infusion">Tea</a>
          <a href="/contact">Contact</a>
        </nav>

        <a className="button button-primary" href={WHATSAPP_LINK}>
          WhatsApp us
        </a>
      </div>
    </header>
  );
}
