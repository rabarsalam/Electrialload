import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import PageLoader from "@/app/components/PageLoader";
import SmoothScroll from "@/app/components/SmoothScroll";
import LanguageSync from "@/app/components/LanguageSync";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import { ToastProvider } from "@/app/components/ToastProvider";
import "../globals.css";

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
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  // Ensure all Server Components render in the correct locale
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ToastProvider>
        <LanguageSync />
        <PageLoader />
        <SmoothScroll />
        <ScrollToTopButton />
        <Navbar />
        {children}
        <Footer />
      </ToastProvider>
    </NextIntlClientProvider>
  );
}
