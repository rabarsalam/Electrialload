"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {t("title")}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          {t("description")}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-400 transition"
        >
          {t("backToHome")}
        </Link>
      </div>
    </div>
  );
}
