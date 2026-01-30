"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiGrid, FiHome, FiBriefcase, FiPackage } from "react-icons/fi";
import ImageLightbox from "@/app/components/ImageLightbox";

type FilterType = "all" | "residential" | "commercial" | "industrial";

export default function ProjectsClient() {
  const t = useTranslations("ProjectsPage");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") ||
    "all") as FilterType;
  const [activeFilter, setActiveFilter] = useState<FilterType>(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filters = [
    { id: "all" as FilterType, label: t("filterAll"), icon: FiGrid },
    {
      id: "residential" as FilterType,
      label: t("filterResidential"),
      icon: FiHome,
    },
    {
      id: "commercial" as FilterType,
      label: t("filterCommercial"),
      icon: FiBriefcase,
    },
    {
      id: "industrial" as FilterType,
      label: t("filterIndustrial"),
      icon: FiPackage,
    },
  ];

  const projects = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `/images/project-${(i % 8) + 1}.jpeg`,
    category: ["residential", "commercial", "industrial"][i % 3] as FilterType,
    title: `Project ${i + 1}`,
  }));

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const projectImages = filteredProjects.map((p) => p.image);
  const projectTitles = filteredProjects.map((p) => p.title);

  const handleImageClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
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

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeFilter === filter.id
                      ? "bg-yellow-500 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">{t("noProjectsFound")}</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project, index) => {
                return (
                  <Link
                    href={`/${locale}/projects/${project.id}`}
                    key={project.id}
                    className="group relative block aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <Image
                      src={project.image}
                      alt={`${t("projectDetails")} ${project.id}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleImageClick(index, e);
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 capitalize">
                          {project.category}
                        </p>
                        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium">
                          {t("viewProject")}
                        </button>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium capitalize opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.category}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <ImageLightbox
        images={projectImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onCloseAction={() => setLightboxOpen(false)}
        onChangeIndexAction={setLightboxIndex}
        titles={projectTitles}
      />
    </main>
  );
}
