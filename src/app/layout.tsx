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
      <head><meta name="google-site-verification" content="n4dp_votmfEmmkd9YdQ9UruL1KanMe6DhUkOVbCOb70" /></head>
      <body className={`${archivo.variable} antialiased bg-stone-100 text-stone-900 font-sans`}>{children}</body>
    </html>
  );
}
