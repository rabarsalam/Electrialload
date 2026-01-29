"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  FiTarget,
  FiEye,
  FiAward,
  FiShield,
  FiUsers,
  FiBriefcase,
} from "react-icons/fi";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const staff = {
    leadership: [
      {
        name: "Eng. Ahmed Ali",
        role: "Managing Director",
        department: "Leadership",
        image: "/images/project-13.jpeg",
      },
      {
        name: "Eng. Sara Karim",
        role: "Head of Design",
        department: "Leadership",
        image: "/images/project-14.jpeg",
      },
      {
        name: "Eng. Baran Mohammed",
        role: "Site Operations Lead",
        department: "Leadership",
        image: "/images/project-15.jpeg",
      },
    ],
    engineering: [
      {
        name: "Eng. Dilan Hassan",
        role: "Electrical Engineer",
        department: "Engineering",
        image: "/images/project-10.jpeg",
      },
      {
        name: "Eng. Omar Aziz",
        role: "Electrical Engineer",
        department: "Engineering",
        image: "/images/project-11.jpeg",
      },
      {
        name: "Eng. Ranya Salim",
        role: "Design Engineer",
        department: "Engineering",
        image: "/images/project-12.jpeg",
      },
    ],
    field: [
      {
        name: "Mohammed Khalid",
        role: "Senior Technician",
        department: "Field Team",
        image: "/images/project-6.jpeg",
      },
      {
        name: "Soran Ahmed",
        role: "Technician",
        department: "Field Team",
        image: "/images/project-7.jpeg",
      },
      {
        name: "Ali Hussein",
        role: "Electrician",
        department: "Field Team",
        image: "/images/project-8.jpeg",
      },
      {
        name: "Kamal Saeed",
        role: "Cable Technician",
        department: "Field Team",
        image: "/images/project-9.jpeg",
      },
    ],
    admin: [
      {
        name: "Noor Ibrahim",
        role: "Admin / HR",
        department: "Administration",
        image: "/images/project-3.jpeg",
      },
      {
        name: "Zana Rashid",
        role: "Procurement",
        department: "Administration",
        image: "/images/project-4.jpeg",
      },
      {
        name: "Hawar Ahmed",
        role: "Accountant",
        department: "Administration",
        image: "/images/project-5.jpeg",
      },
    ],
  };

  const values = [
    {
      icon: FiAward,
      title: t("value1Title"),
      description: t("value1Description"),
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: FiShield,
      title: t("value2Title"),
      description: t("value2Description"),
      color: "from-green-400 to-green-600",
    },
    {
      icon: FiUsers,
      title: t("value3Title"),
      description: t("value3Description"),
      color: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/project-1.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <FiTarget className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t("missionTitle")}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("missionDescription")}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <FiEye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t("visionTitle")}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("visionDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("valuesTitle")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t("teamTitle")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              {t("teamSubtitle")}
            </p>
          </div>

          {(
            [
              ["leadership", t("leadershipTitle")],
              ["engineering", t("engineeringTitle")],
              ["field", t("fieldTitle")],
              ["admin", t("adminTitle")],
            ] as const
          ).map(([key, title]) => {
            const members = staff[key];
            return (
              <div key={key} className="mt-10 first:mt-0">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {title}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {members.length}
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {members.map((member) => (
                    <div
                      key={member.name}
                      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative h-24">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90" />
                        <div className="absolute inset-0 opacity-25">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-start gap-3 -mt-10">
                          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-white bg-gray-100 shadow-lg">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="pt-2 min-w-0">
                            <p className="truncate text-base font-bold text-gray-900">
                              {member.name}
                            </p>
                            <p className="text-sm font-semibold text-gray-600">
                              {member.role}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                          <FiBriefcase className="h-4 w-4 text-yellow-500" />
                          <span className="font-semibold text-gray-700">
                            {member.department}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                10+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                500+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                100%
              </div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                24/7
              </div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
