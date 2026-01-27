import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/request";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  // Match all pathnames except for:
  // - api routes
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - files with an extension (e.g. .ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
