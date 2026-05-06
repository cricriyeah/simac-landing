"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";

const projectsData = {
  "residencia-castillo": {
    title: "Residencia Castillo",
    category: "Solar Fotovoltaico",
    location: "La Paz, BCS",
    challenge: "Instalación de sistema fotovoltaico de alta eficiencia en una residencia de diseño arquitectónico complejo, requiriendo integración estética total.",
    solution: "Diseño de estructura a medida y uso de microinversores para optimizar la generación sin afectar la estética visual de la propiedad.",
    result: "Ahorro energético del 100% y reducción total de la huella de carbono residencial.",
    image: "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?q=80&w=1200&auto=format&fit=crop",
    details: [
      { label: "Capacidad", value: "15 kWp" },
      { label: "Equipos", value: "Microinversores IQ8" },
      { label: "Integración", value: "Arquitectónica" }
    ]
  },
  "doce-cuarenta": {
    title: "Proyecto Doce cuarenta",
    category: "Solar Fotovoltaico",
    location: "La Paz, BCS",
    challenge: "Optimización energética para complejo comercial mediante la implementación de una planta solar fotovoltaica integrada.",
    solution: "Instalación de paneles de alta eficiencia y sistema de monitoreo en tiempo real para control de demanda máxima.",
    result: "Reducción significativa en la facturación eléctrica y estabilización del suministro.",
    image: "https://images.unsplash.com/photo-1605276374104-162f1c4cb511?q=80&w=1200&auto=format&fit=crop",
    details: [
      { label: "Servicio", value: "Solar Industrial" },
      { label: "Tecnología", value: "Monitoreo IOT" },
      { label: "Estado", value: "Operativo" }
    ]
  },
  "residencia-paraiso": {
    title: "Residencia Paraiso",
    category: "Solar Fotovoltaico",
    location: "La Paz, BCS",
    challenge: "Maximizar la generación solar en una propiedad de lujo frente al mar, enfrentando condiciones de alta salinidad y vientos fuertes.",
    solution: "Estructuras de aluminio anodizado de grado marino y paneles de alta resistencia mecánica con garantía extendida.",
    result: "Suministro eléctrico ininterrumpido y protección total contra la corrosión costera.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    details: [
      { label: "Tipo", value: "Residencial Premium" },
      { label: "Resistencia", value: "Grado Marino" },
      { label: "Ahorro", value: "98% Estimado" }
    ]
  },
  "mantenimiento-caracol": {
    title: "Mantenimiento Caracol",
    category: "Refrigeración",
    location: "Los Cabos, BCS",
    challenge: "Garantizar la operatividad total de sistemas de refrigeración críticos durante la temporada de mayor demanda térmica.",
    solution: "Implementación de póliza de mantenimiento preventivo integral y correctivo inmediato para sistemas de frío.",
    result: "Cero fallas en la cadena de frío y optimización del rendimiento de los equipos de refrigeración.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    details: [
      { label: "Servicio", value: "Refrigeración" },
      { label: "Respuesta", value: "Inmediata 24/7" },
      { label: "Mantenimiento", value: "Correctivo/Preventivo" }
    ]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) return notFound();

  return (
    <main className="bg-white">
      {/* Modern Clean Header */}
      <section className="pt-40 pb-20 px-8 md:px-16 lg:px-24 xl:px-40 bg-slate-50 border-b border-gray-100">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-sky font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Case Study / {project.category}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-brand-dark uppercase tracking-tighter leading-[0.9] mb-12 text-soft-shadow">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-gray-200 pt-12">
              {project.details.map((detail, i) => (
                <div key={i}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-sky font-bold mb-2">{detail.label}</p>
                  <p className="text-xl font-medium text-brand-dark">{detail.value}</p>
                </div>
              ))}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-sky font-bold mb-2">Ubicación</p>
                <p className="text-xl font-medium text-brand-dark">{project.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Large Impact Image */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-gray-100">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover" 
            priority 
          />
        </motion.div>
        <div className="absolute inset-0 bg-brand-darkest/10"></div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Sticky Challenge Label */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-dark mb-8 leading-none">
              El Desafío <br/>
              <span className="text-brand-sky">del Proyecto</span>
            </h2>
            <div className="w-16 h-1 bg-brand-accent"></div>
          </div>

          {/* Solution & Results */}
          <div className="lg:col-span-8 space-y-20">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-light text-brand-dark leading-relaxed"
            >
              {project.challenge}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t border-gray-100">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-brand-sky">lightbulb</span>
                   <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sky">Nuestra Solución</h3>
                </div>
                <p className="text-brand-dark/80 leading-relaxed text-lg font-medium">
                  {project.solution}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-brand-accent">verified</span>
                   <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sky">Resultado Final</h3>
                </div>
                <p className="text-xl md:text-2xl font-bold text-brand-dark leading-tight">
                  {project.result}
                </p>
              </motion.div>
            </div>

            {/* Gallery Mini-Grid */}
            <div className="grid grid-cols-2 gap-4 mt-20">
               <div className="aspect-video relative overflow-hidden bg-gray-50">
                  <Image src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop" alt="Proceso 1" fill className="object-cover hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="aspect-video relative overflow-hidden bg-gray-50">
                  <Image src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" alt="Proceso 2" fill className="object-cover hover:scale-105 transition-transform duration-700" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-[1920px] mx-auto px-8 md:px-16 lg:px-24 xl:px-40 flex justify-between items-center">
          <a href="/#proyectos" className="inline-flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark transition-all">
              <span className="material-symbols-outlined text-brand-dark group-hover:text-white transition-colors">arrow_back</span>
            </div>
            <span className="font-bold text-brand-dark uppercase tracking-widest text-xs">Todos los Proyectos</span>
          </a>
          
          <div className="hidden md:block">
             <p className="text-[10px] uppercase tracking-[0.5em] text-gray-300 font-bold">SIMAC Engineering © 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}
