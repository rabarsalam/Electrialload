import { getTranslations } from "next-intl/server";
import Link from "next/link";
import {
  FiZap,
  FiStar,
  FiWifi,
  FiTool,
  FiAlertCircle,
  FiTrendingUp,
} from "react-icons/fi";

const serviceIcons = [
  FiZap,
  FiStar,
  FiWifi,
  FiTool,
  FiAlertCircle,
  FiTrendingUp,
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("ServicesPage");

  const services = [
    {
      icon: 0,
      title: t("service1"),
      description: t("service1Desc"),
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: 1,
      title: t("service2"),
      description: t("service2Desc"),
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: 2,
      title: t("service3"),
      description: t("service3Desc"),
      color: "from-green-400 to-green-600",
    },
    {
      icon: 3,
      title: t("service4"),
      description: t("service4Desc"),
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: 4,
      title: t("service5"),
      description: t("service5Desc"),
      color: "from-red-400 to-red-600",
    },
    {
      icon: 5,
      title: t("service6"),
      description: t("service6Desc"),
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            {t("subtitle")}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon];
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                  ></div>

                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-gray-800 mb-8">{t("ctaSubtitle")}</p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </main>
  );
}
