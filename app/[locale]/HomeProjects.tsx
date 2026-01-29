"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ImageLightbox from "@/app/components/ImageLightbox";
import { useParams, useRouter } from "next/navigation";

export default function HomeProjects() {
  const t = useTranslations("HomePage");
  const params = useParams();
  const router = useRouter();
  const locale = params?.locale as string;

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const projects = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    image: `/images/project-${i + 1}.jpeg`,
    title: t("projectTitle", { i: i + 1 }),
    category: t("projectCategory", { i: i + 1 }),
  }));

  const projectImages = projects.map((p) => p.image);
  const projectTitles = projects.map((p) => p.title);

  const handleImageClick = (i: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(i);
    setOpen(true);
  };

  const handleCardClick = (projectId: number, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("img")) return;
    router.push(`/${locale}/projects/${projectId}`);
  };

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <div
            key={project.id}
            onClick={(e) => handleCardClick(project.id, e)}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <Image
              src={project.image}
              alt={t("projectsItemAlt", { i: project.id })}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              onClick={(e) => handleImageClick(i, e)}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.category}</p>
                <Link
                  href={`/${locale}/projects/${project.id}`}
                  className="mt-3 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t("viewDetails")}
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* View Icon */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FiArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        ))}
      </div>

      <ImageLightbox
        images={projectImages}
        titles={projectTitles}
        currentIndex={index}
        isOpen={open}
        onCloseAction={() => setOpen(false)}
        onChangeIndexAction={setIndex}
      />
    </>
  );
}
