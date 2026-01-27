"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiMapPin, FiTag } from "react-icons/fi";

export default function ProjectDetailPage() {
  const t = useTranslations("ProjectsPage");
  const params = useParams();
  const locale = params?.locale as string;
  const projectId = parseInt(params?.id as string) || 1;

  // In a real app, this would fetch from an API
  const project = {
    id: projectId,
    title: `Project ${projectId}`,
    category: ["residential", "commercial", "industrial"][(projectId - 1) % 3],
    image: `/images/project-${((projectId - 1) % 8) + 1}.jpeg`,
    description: `This is a detailed description of Project ${projectId}. It showcases our expertise in ${["residential", "commercial", "industrial"][(projectId - 1) % 3]} electrical installations.`,
    date: "2024",
    location: "Kurdistan Region, Iraq",
    images: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      src: `/images/project-${((projectId + i - 1) % 8) + 1}.jpeg`,
    })),
  };

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px] mb-12">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <div className="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30 mb-4">
              <span className="text-sm font-medium text-yellow-300 capitalize">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.images.map((img) => (
                <div
                  key={img.id}
                  className="relative aspect-square rounded-xl overflow-hidden bg-gray-100"
                >
                  <Image
                    src={img.src}
                    alt={`${project.title} - Image ${img.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiTag className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Category</p>
                    <p className="text-lg font-semibold text-gray-900 capitalize">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiCalendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Year</p>
                    <p className="text-lg font-semibold text-gray-900">{project.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-lg font-semibold text-gray-900">{project.location}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href={`/${locale}/contact`}
                    className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-4 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl text-center"
                  >
                    Get Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
