import type { Metadata } from "next";
import { Playfair_Display, Barlow_Condensed } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-playfair",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
});

import "./globals.css";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cereal Sunny",
  description: "Fabricante de cereales de alta calidad para distribuidores.",
  openGraph: {
    title: "Cereal Sunny — Fabricante de Cereales para Distribuidores",
    description:
      "Cereal Sunny: fabricante venezolano de cereales de alta calidad. Venta exclusiva a distribuidores mayoristas.",
    type: "website",
    locale: "es_VE",
    siteName: "Cereal Sunny",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cereal Sunny",
  url: SITE_URL,
  telephone: "+58-212-953-9897",
  email: "info@cerealsunny.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caracas",
    addressCountry: "VE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${barlow.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
