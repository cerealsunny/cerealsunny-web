import type { Metadata } from "next";
import { Playfair_Display, Barlow_Condensed, Poetsen_One } from "next/font/google";

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

const poetsen = Poetsen_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poetsen",
});

import "./globals.css";
import { SITE_URL, SITE_IS_INDEXABLE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cereal Sunny",
  description: "Fabricante de cereales de alta calidad para distribuidores.",
  // noindex intencional: este dominio es el staging de Vercel, no el dominio final.
  // Cambiar SITE_IS_INDEXABLE a true cuando cerealsunny.com esté conectado.
  robots: {
    index: SITE_IS_INDEXABLE,
    follow: true,
  },
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
    streetAddress: "Av. Guaicaipuro, El Rosal, Torre Forum, Piso 8",
    addressLocality: "Caracas",
    addressRegion: "Miranda",
    postalCode: "1060",
    addressCountry: "VE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${barlow.variable} ${poetsen.variable}`}>
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
