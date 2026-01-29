"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FiZap,
  FiStar,
  FiWifi,
  FiTool,
  FiAlertCircle,
  FiTrendingUp,
} from "react-icons/fi";

type ServiceSlug =
  | "electrical-installations"
  | "lighting-systems"
  | "network-setup"
  | "maintenance-support"
  | "emergency-repairs"
  | "energy-optimization";

type ServiceProject = {
  id: number;
  name: string;
  client: string;
  location: string;
  scope: string;
  year: string;
  status: string;
};

const ICONS = {
  "electrical-installations": FiZap,
  "lighting-systems": FiStar,
  "network-setup": FiWifi,
  "maintenance-support": FiTool,
  "emergency-repairs": FiAlertCircle,
  "energy-optimization": FiTrendingUp,
} as const;

export default function ServiceDetailPage() {
  const t = useTranslations("ServicesPage");
  const locale = useLocale();
  const params = useParams<{ slug: ServiceSlug }>();
  const slug = params.slug;

  const config = useMemo(() => {
    const base: Record<
      ServiceSlug,
      {
        title: string;
        description: string;
        gradient: string;
        projects: ServiceProject[];
      }
    > = {
      "electrical-installations": {
        title: t("service1"),
        description: t("service1Desc"),
        gradient: "from-yellow-400 to-yellow-600",
        projects: [
          {
            id: 1,
            name: "Residential Tower Wiring",
            client: "Skyline Residences",
            location: "Erbil",
            scope: "Complete LV distribution and apartment wiring",
            year: "2024",
            status: "Completed",
          },
          {
            id: 2,
            name: "Industrial Plant Power",
            client: "North Steel Factory",
            location: "Duhok",
            scope: "Main panels, MCCs, and power distribution",
            year: "2023",
            status: "Completed",
          },
        ],
      },
      "lighting-systems": {
        title: t("service2"),
        description: t("service2Desc"),
        gradient: "from-blue-400 to-blue-600",
        projects: [
          {
            id: 3,
            name: "Mall Façade Lighting",
            client: "City Center Mall",
            location: "Erbil",
            scope: "Architectural façade and parking lighting",
            year: "2024",
            status: "In progress",
          },
          {
            id: 4,
            name: "Hospital Interior Lighting",
            client: "Kurdistan Medical Center",
            location: "Sulaymaniyah",
            scope: "Energy‑efficient interior LED upgrade",
            year: "2022",
            status: "Completed",
          },
        ],
      },
      "network-setup": {
        title: t("service3"),
        description: t("service3Desc"),
        gradient: "from-green-400 to-green-600",
        projects: [
          {
            id: 5,
            name: "Campus Fiber Network",
            client: "Tech University",
            location: "Erbil",
            scope: "Fiber backbone and structured cabling",
            year: "2023",
            status: "Completed",
          },
          {
            id: 6,
            name: "Office Network Upgrade",
            client: "Global Logistics",
            location: "Duhok",
            scope: "Cat6A recabling, Wi‑Fi and rack re‑design",
            year: "2024",
            status: "Completed",
          },
        ],
      },
      "maintenance-support": {
        title: t("service4"),
        description: t("service4Desc"),
        gradient: "from-purple-400 to-purple-600",
        projects: [
          {
            id: 7,
            name: "Preventive Maintenance Program",
            client: "Business Park",
            location: "Erbil",
            scope: "Monthly inspection and reporting",
            year: "2024",
            status: "Ongoing",
          },
        ],
      },
      "emergency-repairs": {
        title: t("service5"),
        description: t("service5Desc"),
        gradient: "from-red-400 to-red-600",
        projects: [
          {
            id: 8,
            name: "Emergency Feeder Repair",
            client: "Cold Storage Facility",
            location: "Erbil",
            scope: "Night‑shift troubleshooting and cable replacement",
            year: "2024",
            status: "Completed",
          },
        ],
      },
      "energy-optimization": {
        title: t("service6"),
        description: t("service6Desc"),
        gradient: "from-indigo-400 to-indigo-600",
        projects: [
          {
            id: 9,
            name: "Energy Audit & Retrofit",
            client: "City Hotel",
            location: "Sulaymaniyah",
            scope: "Audit, LED retrofit and panel optimization",
            year: "2023",
            status: "Completed",
          },
        ],
      },
    };

    return base[slug] ?? base["electrical-installations"];
  }, [slug, t]);

  const Icon = ICONS[slug] ?? FiZap;

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/project-2.jpeg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{t("title")}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {config.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
                {config.description}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-200">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Electrical Loads • {locale.toUpperCase()}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  {config.projects.length} projects delivered
                </span>
              </div>
            </div>

            <div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur shadow-2xl">
              <div
                className={`absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${config.gradient} opacity-40 blur-3xl`}
              />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-black/20 px-4 py-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${config.gradient} text-white`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-300">
                      Key service
                    </p>
                    <p className="text-sm font-semibold">{config.title}</p>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-100">
                  <li>• Detailed engineering and on‑site supervision</li>
                  <li>• Compliance with local and international standards</li>
                  <li>• Clear documentation and as‑built drawings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects cards */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Recent projects for this service
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                    {project.name}
                  </h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Client:</span> {project.client}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Location:</span>{" "}
                  {project.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Scope:</span> {project.scope}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                    {project.status}
                  </span>
                  <Link
                    href={`/${locale}/projects`}
                    className="text-gray-700 hover:text-yellow-600 font-medium"
                  >
                    View all projects
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table view */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6">
              <h3 className="text-sm font-semibold text-gray-900">
                Project summary table
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Overview of where we delivered this service.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Project
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Client
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Location
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Year
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {config.projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">
                        {project.name}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {project.client}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {project.location}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        {project.year}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                          {project.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

