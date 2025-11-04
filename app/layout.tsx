import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Manrope } from "next/font/google";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Elysian Academy",
  description:
    "Elysian Academy is a forward-thinking preparatory school where curiosity, creativity, and character flourish."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
