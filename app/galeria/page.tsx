"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Lightbox from "@/app/components/Lightbox";
import { useState } from "react";

const galleryImages = [
  // Originales
  { src: "/proyectos/docecuarenta/DJI_0294.jpg", alt: "Doce Cuarenta Solar", size: "large" },
  { src: "/proyectos/castillo/DJI_0532.JPG", alt: "Residencia Castillo Aérea", size: "normal" },
  { src: "/proyectos/paraiso/DJI_0317.jpg", alt: "Residencia Paraiso", size: "normal" },
  { src: "/proyectos/docecuarenta/DJI_0287.jpg", alt: "Paneles instalados", size: "tall" },
  { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop", alt: "Mantenimiento Industrial", size: "wide" },
  { src: "/proyectos/castillo/hero.JPG", alt: "Instalación en casa moderna", size: "normal" },
  { src: "/proyectos/paraiso/DJI_0316.jpg", alt: "Costa BCS Paneles", size: "tall" },
  { src: "/proyectos/docecuarenta/IMG_20260401_140538.jpg", alt: "Conexiones eléctricas", size: "normal" },
  { src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop", alt: "Técnico trabajando", size: "normal" },
  
  // Nuevas fotos de la carpeta /galeria
  { src: "/galeria/DJI_0322.jpg", alt: "Vista aérea de instalación", size: "large" },
  { src: "/galeria/IMG_20260612_185607.jpg", alt: "Detalle de trabajo", size: "normal" },
  { src: "/galeria/20260620_111327.jpg", alt: "Sistemas industriales", size: "normal" },
  { src: "/galeria/DJI_0554.JPG", alt: "Paneles fotovoltaicos", size: "wide" },
  { src: "/galeria/IMG_20260505_180400.jpg", alt: "Conexiones solares", size: "normal" },
  { src: "/galeria/DJI_0581.JPG", alt: "Estructuras solares", size: "tall" },
  { src: "/galeria/DJI_0539.JPG", alt: "Sistema de montaje", size: "normal" },
  { src: "/galeria/IMG_20260306_134904.jpg", alt: "Instalación eléctrica", size: "normal" },
  { src: "/galeria/DJI_0323.jpg", alt: "Perspectiva de la azotea", size: "normal" },
  { src: "/galeria/IMG_20260526_195657.jpg", alt: "Operación y mantenimiento", size: "wide" },
  { src: "/galeria/DJI_0591.JPG", alt: "Vista de planta solar", size: "normal" },
  { src: "/galeria/20260619_190123.jpg", alt: "Equipos en sitio", size: "tall" },
  { src: "/galeria/DJI_0325.jpg", alt: "Desempeño energético", size: "normal" },
  { src: "/galeria/IMG_20260216_123057.jpg", alt: "Instalación de paneles", size: "normal" },
  { src: "/galeria/DJI_0550.JPG", alt: "Alineación de estructuras", size: "large" },
  { src: "/galeria/DJI_0594.JPG", alt: "Integración arquitectónica", size: "wide" },
  { src: "/galeria/IMG_20260505_180352.jpg", alt: "Conexiones de voltaje", size: "tall" },
  { src: "/galeria/20260620_111320.jpg", alt: "Mantenimiento industrial", size: "normal" },
  { src: "/galeria/IMG_20260615_105424.jpg", alt: "Configuración de inversores", size: "normal" },
  { src: "/galeria/DJI_0592.JPG", alt: "Monitoreo del sistema", size: "normal" },
  { src: "/galeria/DJI_0318.jpg", alt: "Paneles instalados", size: "normal" }
];

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <section className="pt-40 pb-20 px-8 md:px-16 lg:px-24 xl:px-40 bg-brand-dark border-b border-white/10">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Nuestra Experiencia</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white uppercase tracking-tighter leading-[0.9] text-soft-shadow">
              Galería de Proyectos
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-8 md:px-16 lg:px-24 xl:px-40 flex-grow bg-gray-50">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 grid-flow-dense auto-rows-[300px]">
            {galleryImages.map((img, i) => {
              // Determine span classes based on 'size'
              let spanClass = "col-span-1 row-span-1";
              if (img.size === "large") spanClass = "md:col-span-2 md:row-span-2";
              else if (img.size === "wide") spanClass = "md:col-span-2 row-span-1";
              else if (img.size === "tall") spanClass = "col-span-1 row-span-2";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
                  className={`relative overflow-hidden group cursor-pointer bg-brand-dark ${spanClass}`}
                  onClick={() => setSelectedImage({ src: img.src, alt: img.alt })}
                >
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-brand-darkest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {img.alt}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      <Lightbox 
        src={selectedImage?.src || null} 
        alt={selectedImage?.alt} 
        onClose={() => setSelectedImage(null)} 
      />
    </main>
  );
}
