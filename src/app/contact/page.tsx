import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/contact";

// Metadata for the contact page, used by search engines and link previews.
export const metadata = {
  title: "Contact | Parlux Persian Imports",
  description: "Contact Parlux Persian Imports by phone, WhatsApp, or the enquiry form for bespoke and wholesale saffron orders.",
};

// Contact page: direct contact options first, then the enquiry form.
export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="section">
        <div className="container contact-layout">
          <div className="prose">
            <p className="eyebrow">Contact</p>
            <h1 className="display">Let&apos;s talk saffron</h1>
            <p>
              For bespoke orders, partnerships, or premium wholesale inquiries, reach us directly or send a message
              below.
            </p>

            <ul className="contact-list">
              <li>
                <span>Phone</span>
                <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a href={WHATSAPP_LINK}>Chat with us</a>
              </li>
            </ul>
          </div>

          <div className="contact-card">
            <h2>Send an enquiry</h2>
            <ContactForm />
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
