"use client";

import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  /** Function prop must be named *Action to satisfy Next.js serialization rules */
  onCloseAction: () => void;
  /** Function prop must be named *Action to satisfy Next.js serialization rules */
  onChangeIndexAction: (index: number) => void;
  titles?: string[];
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onCloseAction,
  onChangeIndexAction,
  titles = [],
}: ImageLightboxProps) {
  const prev = () =>
    onChangeIndexAction(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );

  const next = () =>
    onChangeIndexAction(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-9999 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onCloseAction}
    >
      {/* Close */}
      <button
        onClick={onCloseAction}
        className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        aria-label="Close"
      >
        <FiX className="w-6 h-6" />
      </button>

      {/* Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
          aria-label="Previous"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
          aria-label="Next"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={titles[currentIndex] || `Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {titles[currentIndex] && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm max-w-md text-center">
            {titles[currentIndex]}
          </div>
        )}
      </div>
    </div>
  );
}
