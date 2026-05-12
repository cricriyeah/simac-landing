"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface HorizontalGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

export function HorizontalGallery({ images, title, subtitle }: HorizontalGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-8 md:px-16 lg:px-24 xl:px-40 mb-12 flex items-end justify-between">
        <div>
          {subtitle && (
            <span className="font-bold text-[10px] sm:text-xs text-brand-sky tracking-[0.4em] uppercase block mb-4">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark uppercase tracking-tight">
              {title}
            </h2>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:border-brand-dark hover:text-white transition-all cursor-pointer"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:border-brand-dark hover:text-white transition-all cursor-pointer"
            aria-label="Next"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-8 md:px-16 lg:px-24 xl:px-40"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="snap-start flex-none w-[85vw] sm:w-[45vw] lg:w-[35vw] aspect-[4/3] relative bg-gray-50 overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
               <span className="text-white text-xs font-medium uppercase tracking-widest">{image.alt}</span>
            </div>
          </motion.div>
        ))}
        {/* Spacer at the end */}
        <div className="flex-none w-8 md:w-16 lg:w-24" />
      </div>
    </section>
  );
}
