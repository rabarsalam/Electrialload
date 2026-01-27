"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiMail } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";

const NAV_ITEMS = [
  { id: 1, key: "Home", url: "/" },
  { id: 2, key: "Our Services", url: "/services" },
  { id: 3, key: "Projects", url: "/projects" },
  { id: 4, key: "About", url: "/about" },
];

const LANGS = [
  { code: "en", label: "English", flag: "/flags/us.svg" },
  { code: "ar", label: "Arabic", flag: "/flags/ar.svg" },
  { code: "ku", label: "Kurdish", flag: "/flags/ku.svg" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("NavBarPage");
  const langRef = useRef<HTMLDivElement>(null);

  /* ---------- Close mobile menu on resize ---------- */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ---------- Scroll blur ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Close language dropdown on outside click ---------- */
  useEffect(() => {
    function close(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  /* ---------- Active route ---------- */
  const isActive = (url: string) =>
    pathname === `/${locale}${url}` || pathname === `/${locale}${url}/`;

  /* ---------- Locale switch ---------- */
  const getLocalePath = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLocale;
    return "/" + segments.join("/");
  };

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled ? "bg-white/80 backdrop-blur border-b shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden text-xl text-white bg-gray-900 p-2 rounded-lg"
              >
                <FiMenu />
              </button>

              <Link
                href={`/${locale}`}
                className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900"
              >
                Electrical Load
              </Link>
            </div>

            {/* Center (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={`/${locale}${item.url}`}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive(item.url)
                      ? "text-white bg-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {/* Desktop Contact */}
              <Link
                href={`/${locale}/contact`}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                <FiMail className="text-base" />
                {t("Contact")}
              </Link>

              {/* Desktop Language */}
              <div className="relative hidden sm:block" ref={langRef}>
                <button
                  onClick={() => setLangOpen((v) => !v)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <Image
                    src={LANGS.find((l) => l.code === locale)!.flag}
                    alt="lang"
                    width={22}
                    height={16}
                    className="rounded-sm"
                  />
                </button>

                <div
                  className={`absolute right-0 mt-2 w-44 max-w-[90vw] bg-white rounded-xl shadow-lg border overflow-hidden transition-all origin-top-right ${
                    langOpen
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0 pointer-events-none"
                  }`}
                >
                  {LANGS.map((lang) => (
                    <Link
                      key={lang.code}
                      href={getLocalePath(lang.code)}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2 text-sm transition ${
                        locale === lang.code
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.label}
                        width={22}
                        height={16}
                        className="rounded-sm"
                      />
                      <span>{t(lang.label)}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Icon */}
              <Link
                href={`/${locale}/contact`}
                className="sm:hidden p-2 rounded-lg bg-gray-900 text-white text-xl"
              >
                <FiMail />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ===================== MOBILE BACKDROP ===================== */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ===================== MOBILE SLIDE MENU ===================== */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 w-[280px] bg-white shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        <div className="p-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/${locale}${item.url}`}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                isActive(item.url)
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}

          {/* Mobile Contact Button */}
          <Link
            href={`/${locale}/contact`}
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 mt-4 px-4 py-3 rounded-lg bg-gray-900 text-white font-medium"
          >
            <FiMail />
            {t("Contact")}
          </Link>

          {/* Mobile Language Selector */}
          <div className="pt-4 mt-4 border-t space-y-1">
            <p className="px-2 text-xs font-semibold uppercase text-gray-500">
              {t("Language")}
            </p>
            {LANGS.map((lang) => (
              <Link
                key={lang.code}
                href={getLocalePath(lang.code)}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
                  locale === lang.code
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Image
                  src={lang.flag}
                  alt={lang.label}
                  width={22}
                  height={16}
                  className="rounded-sm"
                />
                <span>{t(lang.label)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
