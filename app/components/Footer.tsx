"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brand-darkest text-white pt-24 pb-12 px-8 md:px-16 lg:px-24 xl:px-40 w-full border-t border-brand-accent/20">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row justify-between gap-16 mb-24">
        <div className="w-full lg:w-1/3 space-y-8">
          <div className="flex items-center gap-2">
            <img
              src="/logos/logoblanco.webp"
              alt="SIMAC Logo"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-white/90 text-sm max-w-xs leading-relaxed">
            Soluciones integrales en energía solar, refrigeración industrial y proyectos eléctricos de alta eficiencia en Baja California Sur.
          </p>
          <div className="space-y-2">
            <p className="text-sm font-medium text-brand-sky">Llámanos:</p>
            <p className="text-2xl font-bold">+(52) 612 169 3053</p>
            <p className="text-sm text-white/90 mt-2">simac.ingenieria@gmail.com</p>
          </div>
        </div>
        
        <div className="w-full lg:w-2/3 flex flex-wrap gap-16 justify-start lg:justify-end">
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Secciones</h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li><a href="#inicio" className="hover:text-brand-accent transition">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-brand-accent transition">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-brand-accent transition">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-brand-accent transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Redes Sociales</h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li><a href="https://www.facebook.com/multimardecortes1" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition">Facebook</a></li>
              <li><a href="https://wa.me/5216121693053" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 text-sm text-white/90">
              <li><a href="#" className="hover:text-brand-accent transition">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-accent transition">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-dark pt-8 border-t border-white/10">
        <p>Toronja 4440, La Paz, Baja California Sur, México 23078</p>
        <p>© 2026 SIMAC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
