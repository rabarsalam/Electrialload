"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Enable smooth scroll behavior globally
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    // Handle hash links
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href^='#']") as HTMLAnchorElement;
      
      if (link) {
        e.preventDefault();
        const hash = link.getAttribute("href");
        if (hash && hash !== "#") {
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              const offset = 80; // Navbar height
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }, 50);
        }
      }
    };

    // Handle hash on page load or pathname change
    const handleHashLoad = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        setTimeout(() => {
          const hash = window.location.hash;
          const element = document.querySelector(hash);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300);
      }
    };

    if (typeof document !== "undefined") {
      document.addEventListener("click", handleHashClick);
      handleHashLoad();
    }

    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("click", handleHashClick);
      }
    };
  }, [pathname]);

  return null;
}
