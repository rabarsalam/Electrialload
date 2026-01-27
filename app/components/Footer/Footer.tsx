import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Electrical Load</h3>
          <p className="text-sm leading-relaxed">{t("description")}</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t("links")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/en" className="hover:text-white">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/en/about" className="hover:text-white">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/en/services" className="hover:text-white">
                {t("services")}
              </Link>
            </li>
            <li>
              <Link href="/en/projects" className="hover:text-white">
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link href="/en/contact" className="hover:text-white">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {t("servicesTitle")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>{t("service1")}</li>
            <li>{t("service2")}</li>
            <li>{t("service3")}</li>
            <li>{t("service4")}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t("contactTitle")}</h4>
          <p className="text-sm mb-2">📞 +964 770 151 9683</p>
          <p className="text-sm mb-2">📧 e.loads@yahoo.com</p>
          <p className="text-sm">📍 Iraq</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Electrical Load. {t("rights")}
      </div>
    </footer>
  );
}
