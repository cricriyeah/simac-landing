"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="bg-brand-darkest text-white py-24 px-8 md:px-16 lg:px-24 xl:px-40 w-full overflow-hidden relative">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 skew-x-[-20deg] translate-x-1/2"></div>
      
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
            Transforme el consumo energético de su <span className="text-brand-accent italic">empresa u hogar</span>
          </h2>
          <div className="space-y-8">
            <p className="text-white/90 text-sm max-w-md font-light leading-relaxed">
              Comience a ahorrar hoy mismo con SIMAC. Solicite su cotización o diagnóstico técnico para sus necesidades de energía solar, proyectos eléctricos o climatización.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/5216121693053" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-accent-hover transition-all rounded-sm hover:shadow-lg hover:shadow-brand-accent/20"
              >
                Solicitar Diagnóstico Gratis
              </a>
              <a 
                href="/contacto" 
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all rounded-sm"
              >
                Hablar con un Ingeniero
              </a>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-64 h-64 border-2 border-brand-accent/20 rounded-full flex items-center justify-center relative"
          >
            <div className="w-48 h-48 border border-brand-accent/40 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-brand-accent flex items-center justify-center rounded-full shadow-2xl shadow-brand-accent/40">
                 <span className="material-symbols-outlined text-brand-dark text-5xl animate-pulse">energy_savings_leaf</span>
              </div>
            </div>
            {/* Orbiting dots */}
            <div className="absolute inset-0 border border-brand-sky/20 rounded-full animate-[spin_10s_linear_infinite]">
              <div className="absolute -top-1 left-1/2 w-2 h-2 bg-brand-sky rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
