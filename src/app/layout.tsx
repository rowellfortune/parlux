import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

// Display serif for headings. Cormorant has the high contrast and thin strokes of luxury editorial type.
const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display-face",
  display: "swap",
});

// Body sans for navigation, buttons, and paragraphs. Montserrat stays readable at small sizes.
const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body-face",
  display: "swap",
});

// Site-wide metadata. Titles and descriptions drive search results and link previews.
export const metadata: Metadata = {
  title: "Parlux Persian Imports | Premium Persian Saffron",
  description:
    "ISO 3632 certified Persian Grade 1 saffron, hand-harvested in Iran. Parlux Persian Imports in Suriname.",
};

// Root layout: wraps every page with the <html> and <body> tags and loads the two font families.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
