"use client";

import { useEffect } from "react";
import { useParams, usePathname } from "next/navigation";

export default function LanguageSync() {
  const params = useParams();
  const pathname = usePathname();
  const locale = params?.locale as string;

  useEffect(() => {
    // Update document language and direction when locale changes
    if (locale && typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" || locale === "ku" ? "rtl" : "ltr";
      
      // Update font class based on locale
      const body = document.body;
      body.classList.remove("font-arabic", "font-kurdish", "font-sans");
      
      if (locale === "ar") {
        body.classList.add("font-arabic");
      } else if (locale === "ku") {
        body.classList.add("font-kurdish");
      } else {
        body.classList.add("font-sans");
      }
    }
  }, [locale, pathname]);

  return null;
}
