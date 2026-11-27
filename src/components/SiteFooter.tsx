import { FACEBOOK_LINK, INSTAGRAM_LINK, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/contact";

// Footer shared by every page: copyright, phone, WhatsApp, and social links.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p style={{ margin: 0 }}>&copy; 2025 Parlux Persian Imports</p>
        <ul>
          <li>
            <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
          </li>
          <li>
            <a href={WHATSAPP_LINK}>WhatsApp</a>
          </li>
          <li>
            <a href={FACEBOOK_LINK}>Facebook</a>
          </li>
          <li>
            <a href={INSTAGRAM_LINK}>Instagram</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
