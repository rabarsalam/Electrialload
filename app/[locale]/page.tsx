"use client";
export const dynamic = "force-dynamic";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import HomeProjects from "./HomeProjects";
import {
  FiZap,
  FiStar,
  FiWifi,
  FiTool,
  FiAlertCircle,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const serviceIcons = [
  FiZap,
  FiStar,
  FiWifi,
  FiTool,
  FiAlertCircle,
  FiTrendingUp,
];

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const services = [
    {
      icon: 0,
      title: t("service1"),
      desc: t("service1Desc"),
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: 1,
      title: t("service2"),
      desc: t("service2Desc"),
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: 2,
      title: t("service3"),
      desc: t("service3Desc"),
      color: "from-green-400 to-green-600",
    },
    {
      icon: 3,
      title: t("service4"),
      desc: t("service4Desc"),
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: 4,
      title: t("service5"),
      desc: t("service5Desc"),
      color: "from-red-400 to-red-600",
    },
    {
      icon: 5,
      title: t("service6"),
      desc: t("service6Desc"),
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  const stats = [
    { value: "10+", label: t("stat1Label") },
    { value: "500+", label: t("stat2Label") },
    { value: "100%", label: t("stat3Label") },
    { value: "24/7", label: t("stat4Label") },
  ];

  const features = [t("feature1"), t("feature2"), t("feature3"), t("feature4")];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950 p-4">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/BackGround-1.jpeg"
            alt="Electrical Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/90 to-gray-900/80" />
        </div>

        {/* Subtle animated glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-yellow-500/15 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          {/* Left: Text */}
          <div className="max-w-xl space-y-8 text-center lg:text-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-semibold text-yellow-200 backdrop-blur">
              <FiZap className="h-4 w-4" />
              <span>{t("heroBadge")}</span>
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">{t("heroTitle")}</span>
                <span className="mt-1 block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  {t("heroTitleHighlight")}
                </span>
              </h1>
              <p className="mt-4 text-base text-gray-300 sm:text-lg md:text-xl">
                {t("heroSubtitle")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:justify-start">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-3 text-sm font-semibold text-gray-900 shadow-xl shadow-yellow-500/40 transition hover:from-yellow-500 hover:to-yellow-600"
              >
                {t("heroCTA")}
                <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <FiPhone className="h-5 w-5" />
                {t("heroContact")}
              </Link>
            </div>

            {/* Small trust bar */}
            <div className="mt-4 flex flex-col items-center gap-3 text-xs text-gray-300 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>24/7 • {t("stat4Label")}</span>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-gray-600/60 to-transparent sm:block" />
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-2xl sm:p-8 lg:mx-0">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-yellow-300">
              {t("servicesBadge")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/10 p-4 text-center"
                >
                  <div className="text-2xl font-bold text-yellow-400 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-gray-300 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-6">
                {t("aboutBadge")}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("aboutTitle")}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                {t("aboutText")}
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                      <FiCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 mt-8 text-gray-900 font-semibold hover:text-yellow-600 transition-colors group"
              >
                {t("aboutLink")}
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-96 lg:h-125 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/project-1.jpeg"
                alt={t("aboutImageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
              {t("servicesBadge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("servicesTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("servicesSubtitle")}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon];
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
                >
                  {/* Gradient Top Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`}
                  ></div>

                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Learn More Link */}
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-yellow-600 transition-colors group/link"
                    >
                      {t("serviceLearnMore")}
                      <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
            >
              {t("servicesCTA")}
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 md:py-32 bg-linear-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
              {t("projectsBadge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("projectsTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("projectsSubtitle")}
            </p>
          </div>

          {/* Projects Grid */}
          <HomeProjects />

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              {t("projectsViewAll")}
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-yellow-500/30">
                {t("contactBadge")}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t("contactTitle")}
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t("contactText")}
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <FiPhone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      {t("contactPhoneLabel")}
                    </p>
                    <a
                      href="https://wa.me/9647701519683"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("PhoneNumber")}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <FiMail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      {t("contactEmailLabel")}
                    </p>
                    <a
                      href="mailto:e.loads@yahoo.com"
                      className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors"
                    >
                      e.loads@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      {t("contactAddressLabel")}
                    </p>
                    <p className="text-white font-semibold text-lg">
                      Kurdistan Region, Iraq
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">
                {t("contactFormTitle")}
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t("contactFormName")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  placeholder={t("contactFormEmail")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                />
                <textarea
                  placeholder={t("contactFormMessage")}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
                >
                  {t("contactFormSubmit")}
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors group"
                >
                  {t("contactViewFull")}
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
