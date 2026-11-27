import type { Metadata } from "next";
import "./globals.css";

// Site-wide metadata. Titles and descriptions drive search results and link previews.
export const metadata: Metadata = {
  title: "Parlux Persian Imports | Premium Persian Saffron",
  description:
    "ISO 3632 certified Persian Grade 1 saffron, hand-harvested in Iran. Parlux Persian Imports in Suriname.",
};

// Root layout: wraps every page with the <html> and <body> tags.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
