import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import PageLoader from "@/app/components/PageLoader";
import SmoothScroll from "@/app/components/SmoothScroll";
import LanguageSync from "@/app/components/LanguageSync";
import "../globals.css";

// English font - Custom local font
const englishFont = localFont({
  src: "../../public/fonts/Roboto_SemiCondensed-MediumItalic.woff2",
  variable: "--font-geist-sans",
  weight: "700",
  display: "swap",
});

// Arabic font - Custom local font
const arabicFont = localFont({
  src: "../../public/fonts/TufuliArabicDEMO-Regular.woff2",
  variable: "--font-arabic",
  weight: "400",
  display: "swap",
});

// Kurdish font - Custom local font
const kurdishFont = localFont({
  src: "../../public/fonts/68_Sarchia_Nursi.woff2",
  variable: "--font-kurdish",
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Get font based on locale
function getFontClass(locale: string) {
  if (locale === "ar") {
    return `${arabicFont.variable} font-arabic`;
  } else if (locale === "ku") {
    return `${kurdishFont.variable} font-kurdish`;
  }
  return `${englishFont.variable} font-sans`;
}

export const metadata: Metadata = {
  title: "Electrical Loads",
  description: "Engineering & Electrical Services",
};

const locales = ["en", "ar", "ku"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // 🔥 THIS WAS BREAKING YOUR APP

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      dir={locale === "ar" || locale === "ku" ? "rtl" : "ltr"}
      className={`${englishFont.variable} ${arabicFont.variable} ${kurdishFont.variable} ${geistMono.variable}`}
    >
      <body className={`antialiased ${getFontClass(locale)}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageSync />
          <PageLoader />
          <SmoothScroll />
          <Navbar />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
