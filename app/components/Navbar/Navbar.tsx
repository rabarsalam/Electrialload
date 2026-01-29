"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiMail, FiChevronDown } from "react-icons/fi";
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
  const isRTL = locale === "ar" || locale === "ku";

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
    // Get current pathname segments
    const segments = pathname.split("/").filter(Boolean);

    // If first segment is a locale, replace it; otherwise add new locale at start
    if (
      segments.length > 0 &&
      (segments[0] === "en" || segments[0] === "ar" || segments[0] === "ku")
    ) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    // If only locale (home page), return just /locale
    if (segments.length === 1) {
      return `/${newLocale}`;
    }

    return "/" + segments.join("/");
  };

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled
            ? "bg-white/85 backdrop-blur border-b border-gray-200/70 shadow-sm"
            : "bg-white/70 backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div
            className={`flex h-16 md:h-20 items-center justify-between gap-2 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            {/* Brand + mobile menu */}
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/60 p-2 text-xl text-gray-900 shadow-sm hover:bg-white transition"
                aria-label="Open menu"
              >
                <FiMenu />
              </button>

              <Link
                href={`/${locale}`}
                className="min-w-0 inline-flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-white/60 transition"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white text-sm font-bold">
                  EL
                </span>
                <span className="truncate text-base sm:text-lg font-extrabold tracking-tight text-gray-900">
                  Electrical Loads
                </span>
              </Link>
            </div>

            {/* Desktop center nav */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="flex items-center gap-1 rounded-2xl border border-gray-200 bg-white/70 p-1 shadow-sm">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${locale}${item.url}`}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                      isActive(item.url)
                        ? "bg-gray-900 text-white shadow"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-shrink-0 items-center gap-2">
              {/* Desktop Contact */}
              <Link
                href={`/${locale}/contact`}
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition"
              >
                <FiMail className="text-base" />
                {t("Contact")}
              </Link>

              {/* Language */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/60 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white transition"
                  aria-label="Change language"
                >
                  <Image
                    src={LANGS.find((l) => l.code === locale)!.flag}
                    alt="lang"
                    width={20}
                    height={14}
                    className="rounded-sm"
                  />
                  <span className="hidden sm:inline">
                    {locale.toUpperCase()}
                  </span>
                  <FiChevronDown className="text-gray-500" />
                </button>

                <div
                  className={`absolute mt-2 w-52 max-w-[90vw] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all ${
                    isRTL ? "start-0 origin-top-left" : "end-0 origin-top-right"
                  } ${
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
                      className={`flex items-center justify-between gap-3 px-4 py-3 text-sm transition ${
                        locale === lang.code
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="inline-flex items-center gap-3">
                        <Image
                          src={lang.flag}
                          alt={lang.label}
                          width={22}
                          height={16}
                          className="rounded-sm"
                        />
                        <span>{t(lang.label)}</span>
                      </span>
                      {locale === lang.code ? (
                        <span className="text-xs opacity-80">●</span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile contact icon */}
              <Link
                href={`/${locale}/contact`}
                className="sm:hidden inline-flex items-center justify-center rounded-xl bg-gray-900 p-2 text-xl text-white"
                aria-label="Contact"
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
        className={`fixed top-0 bottom-0 z-50 w-[290px] bg-white shadow-2xl transform transition-transform duration-300 ${
          isRTL ? "right-0" : "left-0"
        } ${
          menuOpen
            ? "translate-x-0"
            : isRTL
              ? "translate-x-full"
              : "-translate-x-full"
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
