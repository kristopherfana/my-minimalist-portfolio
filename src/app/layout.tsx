import "./globals.css";

import { Archivo } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
  description: "Created with Frontend Tribe",
};

const archivo = Archivo({
  display: "swap",
  subsets: ["latin"],
  weight: 'variable',
  variable: '--font-archivo',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased bg-stone-100 text-stone-900 font-sans`}>{children}</body>
    </html>
  );
}
