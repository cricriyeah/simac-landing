"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-darkest text-white pt-32 pb-24 px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="text-brand-sky text-sm font-medium uppercase tracking-widest mb-4 block">Contacto</span>
            <h1 className="text-4xl lg:text-6xl font-semibold mb-8 leading-tight">Hablemos de su próximo proyecto</h1>
            <p className="text-white/90 text-lg font-light leading-relaxed">
              Estamos listos para asesorarle en soluciones de energía solar, climatización y proyectos eléctricos industriales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-brand-dark mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-brand-sky text-3xl">call</span>
                  <div>
                    <p className="text-sm text-brand-dark font-medium uppercase tracking-widest mb-1">Teléfono</p>
                    <p className="text-xl font-medium text-brand-dark">+(52) 612 169 3053</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-brand-sky text-3xl">mail</span>
                  <div>
                    <p className="text-sm text-brand-dark font-medium uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl font-medium text-brand-dark">simac.ingenieria@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-brand-sky text-3xl">location_on</span>
                  <div>
                    <p className="text-sm text-brand-dark font-medium uppercase tracking-widest mb-1">Dirección</p>
                    <p className="text-xl font-medium text-brand-dark leading-snug">Toronja 4440, La Paz, BCS, México 23078</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 border-l-4 border-brand-accent">
              <h3 className="font-semibold text-brand-dark mb-2">Horario de Atención</h3>
              <p className="text-brand-dark/80 text-sm italic">Soporte técnico 24/7 para pólizas de mantenimiento.</p>
              <p className="text-brand-dark/80 text-sm mt-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p className="text-brand-dark/80 text-sm">Sábado: 9:00 AM - 1:00 PM</p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 shadow-2xl border border-gray-100"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <span className="material-symbols-outlined text-7xl text-green-500 mb-6 animate-bounce">check_circle</span>
                <h2 className="text-3xl font-semibold mb-4">¡Mensaje Enviado!</h2>
                <p className="text-gray-500">Un ingeniero se pondrá en contacto con usted en breve.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-brand-sky font-semibold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark/90 font-bold uppercase tracking-wider">Nombre Completo</label>
                    <input required type="text" className="w-full bg-slate-50 border border-gray-200 px-4 py-3 focus:border-brand-sky outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark/90 font-bold uppercase tracking-wider">Email</label>
                    <input required type="email" className="w-full bg-slate-50 border border-gray-200 px-4 py-3 focus:border-brand-sky outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-dark/90 font-bold uppercase tracking-wider">Servicio de Interés</label>
                  <select className="w-full bg-slate-50 border border-gray-200 px-4 py-3 focus:border-brand-sky outline-none transition-colors">
                    <option>Instalación Fotovoltaica</option>
                    <option>Climatización HVAC</option>
                    <option>Proyectos Eléctricos</option>
                    <option>Mantenimiento Industrial</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-dark/90 font-bold uppercase tracking-wider">Mensaje</label>
                  <textarea required rows={5} className="w-full bg-slate-50 border border-gray-200 px-4 py-3 focus:border-brand-sky outline-none transition-colors resize-none"></textarea>
                </div>
                <button 
                  disabled={status === "sending"}
                  type="submit" 
                  className="w-full bg-brand-dark text-white py-4 font-bold uppercase tracking-widest hover:bg-brand-sky transition-all duration-500 disabled:bg-gray-400"
                >
                  {status === "sending" ? "Enviando..." : "Enviar Solicitud"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      {/* Map Section */}
      <section className="w-full h-[450px] bg-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.854653634354!2d-110.3155!3d24.1425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86afd3f89078f46b%3A0x6a0c0a0c0a0c0a0c!2sToronja%204440%2C%20Indeco%2C%2023078%20La%20Paz%2C%20B.C.S.!5e0!3m2!1ses-419!2smx!4v1714980000000!5m2!1ses-419!2smx" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
