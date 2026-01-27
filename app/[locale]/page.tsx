import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              {t("heroTitle")}
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
              {t("heroSubtitle")}
            </p>
            <a
              href="#services"
              className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-400 transition"
            >
              {t("heroCTA")}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("aboutTitle")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("aboutText")}
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("servicesTitle")}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {t(`service${i}`)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t(`service${i}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("projectsTitle")}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="group relative h-48 rounded-xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={`/images/project-${i}.jpeg`}
                  alt={t("projectsItemAlt", { i })}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="/images/fallback.jpg"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-12 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {t("contactTitle")}
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-gray-700 mb-4">{t("contactText")}</p>
                <p className="text-gray-900 font-semibold">
                  📞 +964 770 151 9683
                </p>
                <p className="text-gray-900 font-semibold">
                  📧 e.loads@yahoo.com
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t("contactFormName")}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  placeholder={t("contactFormEmail")}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none"
                />
                <textarea
                  placeholder={t("contactFormMessage")}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black transition"
                >
                  {t("contactFormSubmit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
