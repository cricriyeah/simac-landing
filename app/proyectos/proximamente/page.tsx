"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ComingSoonPage() {
  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex items-center justify-center px-8 pt-32 pb-20">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Proyecto en Desarrollo</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white uppercase tracking-tighter leading-none mb-8 text-soft-shadow">
              Próximamente
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-12"></div>
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Estamos preparando la documentación técnica y el material visual de este proyecto. 
              Vuelve pronto para conocer los detalles de ingeniería y los resultados obtenidos.
            </p>
            
            <a 
              href="/#proyectos" 
              className="inline-flex items-center gap-3 text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-brand-dark transition-all duration-300 group"
            >
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Ver otros proyectos
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
