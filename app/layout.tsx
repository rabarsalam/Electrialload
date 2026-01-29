import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// English font - custom local
const englishFont = localFont({
  src: "../public/fonts/Roboto_SemiCondensed-MediumItalic.woff2",
  variable: "--font-geist-sans",
  weight: "700",
  display: "swap",
});

// Arabic font - custom local
const arabicFont = localFont({
  src: "../public/fonts/43_Sarchia_Hawre.woff2",
  variable: "--font-arabic",
  weight: "400",
  display: "swap",
});

// Kurdish font - custom local
const kurdishFont = localFont({
  src: "../public/fonts/43_Sarchia_Hawre.woff2",
  variable: "--font-kurdish",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Electrical Loads",
  description: "Engineering & Electrical Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${englishFont.variable} ${arabicFont.variable} ${kurdishFont.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
