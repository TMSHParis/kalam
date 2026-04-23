import type { Metadata, Viewport } from "next";
import { Geist, Pacifico } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/lib/restaurant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kalam Montgeron — Sandwichs, Burgers & Toasts Halal",
    template: "%s · Kalam Montgeron",
  },
  description:
    "Kalam, restaurant halal à Montgeron (91230). Sandwichs signature, burgers, toasts, menus étudiant et enfant. Sur place, à emporter ou Uber Eats.",
  keywords: [
    "Kalam",
    "restaurant Montgeron",
    "halal Montgeron",
    "sandwich Montgeron",
    "burger Montgeron",
    "toast Montgeron",
    "kebab 91230",
    "Uber Eats Montgeron",
  ],
  openGraph: {
    title: "Kalam Montgeron — Sandwichs, Burgers & Toasts",
    description:
      "Restaurant halal à Montgeron. Carte signature, formules et livraison Uber Eats.",
    locale: "fr_FR",
    type: "website",
    siteName: "Kalam",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalam Montgeron",
    description: "Sandwichs, burgers et toasts halal à Montgeron.",
  },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#2d1340",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  servesCuisine: ["Sandwichs", "Burgers", "Toasts", "Halal"],
  telephone: restaurant.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.street,
    addressLocality: restaurant.address.city,
    postalCode: restaurant.address.zip,
    addressCountry: "FR",
  },
  openingHoursSpecification: restaurant.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.label,
    opens: h.open.replace("h", ":"),
    closes: h.close.replace("h", ":"),
  })),
  sameAs: [restaurant.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${pacifico.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-kalam-ink">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
