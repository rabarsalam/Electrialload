"use client";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t("infoTitle")}
                </h2>
                <p className="text-gray-600 text-lg">{t("description")}</p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <FiPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t("phone")}
                    </h3>
                    <a
                      href="https://wa.me/9647701519683"
                      className="text-gray-600 hover:text-yellow-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("PhoneNumber")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t("email")}
                    </h3>
                    <a
                      href="mailto:e.loads@yahoo.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      e.loads@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t("address")}
                    </h3>
                    <p className="text-gray-600">{t("addressValue")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <FiClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {t("hoursTitle")}
                    </h3>
                    <p className="text-gray-600">{t("hours")}</p>
                    <p className="text-gray-600">{t("hoursWeekend")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
