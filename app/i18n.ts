export const locales = ["en", "ku", "ar"] as const;
export const defaultLocale = "en";

export const localeDirection: Record<string, "ltr" | "rtl"> = {
  en: "ltr",
  ku: "rtl",
  ar: "rtl",
};
