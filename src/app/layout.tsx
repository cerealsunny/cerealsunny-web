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

export const metadata: Metadata = {
  title: "Cereal Sunny",
  description: "Fabricante de cereales de alta calidad para distribuidores.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
