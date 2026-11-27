"use client";

import { FormEvent, useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/contact";

// Shape of the values the visitor types into the form.
type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

// Empty starting values, used on first render and after a successful send.
const EMPTY_VALUES: FormValues = { name: "", phone: "", email: "", message: "" };

// Builds a WhatsApp click-to-chat URL with the enquiry text filled in.
// The text is URL-encoded so line breaks and special characters survive.
function buildWhatsAppUrl(values: FormValues): string {
  const lines = [
    "New enquiry from parlux.sr",
    "",
    `Name: ${values.name}`,
    `Phone: ${values.phone || "not given"}`,
    `Email: ${values.email || "not given"}`,
    "",
    values.message,
  ];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

// Contact form. Submitting opens WhatsApp with the enquiry pre-filled,
// because this site has no server to receive form posts.
export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [error, setError] = useState<string | null>(null);

  // Copies a single field's new value into state, keyed by the input name.
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  }

  // Checks the required fields, then opens WhatsApp with the enquiry.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.name.trim() || !values.message.trim()) {
      setError("Please add your name and a message.");
      return;
    }

    setError(null);
    window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
    setValues(EMPTY_VALUES);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" value={values.name} onChange={handleChange} required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={handleChange} />
        </label>
      </div>

      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} />
      </label>

      <label>
        <span>Comment or message *</span>
        <textarea name="message" rows={5} value={values.message} onChange={handleChange} required />
      </label>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button className="button button-primary" type="submit">
        Send via WhatsApp
      </button>
      <p className="form-note">Your message opens in WhatsApp. Check it, then tap send.</p>
    </form>
  );
}
