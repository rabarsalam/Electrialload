import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ar", "ku"] as const;

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is defined, fallback to default
  const validLocale = locale || "en";

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
