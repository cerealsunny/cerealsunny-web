import type { Metadata } from "next";
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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
