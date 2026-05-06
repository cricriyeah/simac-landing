"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import CTA from "@/app/components/CTA";

const servicesData = {
  "solar": {
    title: "Instalación y Diseño Fotovoltaico",
    tag: "Energía Solar",
    desc: "Diseñamos sistemas de paneles solares óptimos para el clima de BCS, garantizando el máximo ahorro para su hogar o industria.",
    longDesc: "Como Ingenieros Electromecánicos, diseñamos sistemas de paneles solares óptimos para las altas temperaturas de Baja California Sur. Realizamos estudios de viabilidad y retorno de inversión (ROI) precisos para garantizar el máximo ahorro y una rápida recuperación de la inversión.",
    features: [
      "Estudios de Viabilidad y Retorno de Inversión (ROI)",
      "Monitoreo y Mantenimiento Predictivo",
      "Pólizas Preventivas y Servicio a Contrato",
      "Instalación Certificada y Trámites CFE",
      "Garantía Extendida en Paneles y Microinversores",
      "Opciones de Financiamiento y Arrendamiento"
    ],
    benefits: [
      { title: "Eficiencia Energética", desc: "Sistemas optimizados para generar la máxima energía por metro cuadrado." },
      { title: "Ahorro Garantizado", desc: "Reducción drástica en sus costos operativos y recibos de CFE." },
      { title: "Soporte Técnico", desc: "Ingeniería local con respuesta inmediata y mantenimiento preventivo." }
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
  },
  "hvac": {
    title: "Climatización Industrial y Mantenimiento HVAC",
    tag: "Aire Acondicionado y Refrigeración",
    desc: "Soluciones integrales de climatización para hoteles, comercios e industrias, cubriendo desde unidades paquete hasta Chillers.",
    longDesc: "Mantenemos sus procesos productivos y productos frescos. Ofrecemos servicio técnico especializado y soluciones integrales de climatización (HVAC) para hoteles, comercios e industrias, cubriendo desde unidades paquete hasta Chillers de gran capacidad.",
    features: [
      "Mantenimiento Preventivo y Correctivo 24/7",
      "Diagnóstico y Optimización de Consumo Energético",
      "Instalación y Puesta en Marcha de Equipos (Paquetes, VRF)",
      "Servicio Técnico Especializado en Chillers",
      "Cálculo de Carga Térmica Industrial"
    ],
    benefits: [
      { title: "Operación Continua", desc: "Mantenimiento que garantiza que sus sistemas críticos nunca fallen." },
      { title: "Ahorro Eléctrico", desc: "Optimización de equipos para reducir el consumo de energía en refrigeración." },
      { title: "Confort Garantizado", desc: "Control preciso de temperatura y humedad en cualquier ambiente." }
    ],
    image: "https://images.unsplash.com/photo-1605276374104-162f1c4cb511?q=80&w=1200&auto=format&fit=crop"
  },
  "electrico": {
    title: "Proyectos Eléctricos Llave en Mano",
    tag: "Instalaciones Eléctricas",
    desc: "Ingeniería eléctrica completa asegurando el cumplimiento de normativas y la optimización de sus sistemas de energía.",
    longDesc: "Garantizamos la seguridad y eficiencia de su infraestructura eléctrica. Nuestro equipo de ingenieros diseña y ejecuta proyectos eléctricos completos, asegurando el cumplimiento de normativas y la optimización de sus sistemas de energía.",
    features: [
      "Corrección de Factor de Potencia y Calidad de Energía",
      "Cableado Estructurado y Canalizaciones Industriales",
      "Diseño de Subestaciones y Distribución Interna",
      "Cumplimiento de Normativa NOM-001-SEDE",
      "Tableros de Distribución y Fuerza"
    ],
    benefits: [
      { title: "Seguridad Industrial", desc: "Instalaciones que cumplen con los más altos estándares de seguridad." },
      { title: "Cero Penalizaciones", desc: "Eliminación de cargos por bajo factor de potencia en su facturación." },
      { title: "Infraestructura Robusta", desc: "Diseños preparados para el crecimiento y alta demanda de su empresa." }
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
  },
  "frigorifico": {
    title: "Cámaras Frigoríficas y Almacenamiento",
    tag: "Cámaras Frigoríficas",
    desc: "Soluciones especializadas en refrigeración de baja temperatura y conservación de productos.",
    longDesc: "Diseñamos e instalamos soluciones de refrigeración industrial de alto rendimiento. Nos especializamos en la optimización de la cadena de frío para proteger la integridad de sus productos comerciales e industriales.",
    features: [
      "Diseño e Instalación de Cámaras de Congelación",
      "Optimización de Flujo de Aire (AirFlow Optimization)",
      "Mantenimiento Preventivo y Correctivo (Cool Care)",
      "Monitoreo de Temperatura en Tiempo Real",
      "Servicios de Emergencia 24/7 (ChillOut Services)"
    ],
    benefits: [
      { title: "Control Total", desc: "Gestión precisa de la temperatura para la conservación óptima." },
      { title: "Eficiencia Térmica", desc: "Sistemas diseñados para minimizar pérdidas de frío y consumo eléctrico." },
      { title: "Respaldo SIMAC", desc: "Servicio técnico especializado con respuesta rápida ante cualquier falla." }
    ],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop"
  }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) return notFound();

  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="bg-brand-darkest text-white pt-40 pb-24 px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-brand-sky text-sm font-medium uppercase tracking-widest mb-4 block">{service.tag}</span>
            <h1 className="text-4xl lg:text-6xl font-semibold mb-8 leading-tight uppercase tracking-tight text-soft-shadow">{service.title}</h1>
            <p className="text-white/90 text-lg font-light leading-relaxed mb-10">
              {service.desc}
            </p>
            <div className="h-1 w-20 bg-brand-accent"></div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 xl:px-40 bg-white relative overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002b5e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
               <h2 className="text-sm font-bold text-brand-sky uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                 <span className="w-8 h-px bg-brand-sky"></span>
                 Descripción del Servicio
               </h2>
               <p className="text-2xl text-brand-dark leading-relaxed mb-8 font-light">
                 {service.longDesc}
               </p>
               <div className="flex gap-12 pt-8 border-t border-gray-100">
                  <div>
                    <p className="text-4xl font-bold text-brand-dark">100%</p>
                    <p className="text-xs uppercase tracking-widest text-brand-sky font-bold mt-1">Garantizado</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-brand-dark">+10</p>
                    <p className="text-xs uppercase tracking-widest text-brand-sky font-bold mt-1">Años Exp.</p>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 gap-6">
              {service.benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-8 border border-gray-100 hover:border-brand-sky transition-all duration-500 group flex items-center gap-8"
                >
                  <div className="w-16 h-16 bg-white flex-shrink-0 flex items-center justify-center border border-gray-100 group-hover:bg-brand-sky transition-colors">
                    <span className="material-symbols-outlined text-brand-sky group-hover:text-white transition-colors">
                      {i === 0 ? 'bolt' : i === 1 ? 'trending_up' : 'eco'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-brand-dark font-bold uppercase text-xs mb-2 tracking-[0.15em]">{benefit.title}</h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Showcase - Bento Grid */}
      <section className="py-24 px-8 md:px-16 lg:px-24 xl:px-40 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand-sky font-bold uppercase text-xs tracking-[0.3em] mb-4">Ingeniería de Detalle</h2>
              <h3 className="text-4xl lg:text-5xl font-semibold text-brand-dark uppercase tracking-tight leading-none text-soft-shadow">Capacidades Técnicas</h3>
            </div>
            <p className="text-brand-dark/50 font-light max-w-sm text-sm border-l border-gray-200 pl-6">
              Ejecución técnica respaldada por certificaciones internacionales y un equipo de ingeniería electromecánica especializado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[250px]">
            {/* Feature 1: Large Image Tile */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="md:col-span-4 lg:col-span-4 row-span-2 relative overflow-hidden group bg-brand-dark"
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkest via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <span className="bg-brand-accent text-brand-darkest text-[10px] font-bold uppercase px-3 py-1 mb-4 inline-block">Principal</span>
                <h4 className="text-3xl font-bold text-white uppercase tracking-tight leading-tight max-w-md">
                  {service.features[0]}
                </h4>
              </div>
            </motion.div>

            {/* Feature 2: Solid Color Tile */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-2 lg:col-span-2 row-span-1 bg-brand-sky p-10 flex flex-col justify-between text-white group hover:bg-brand-sky-hover transition-colors"
            >
              <span className="material-symbols-outlined text-4xl opacity-50">verified_user</span>
              <p className="text-xl font-bold uppercase leading-tight">{service.features[1]}</p>
            </motion.div>

            {/* Feature 3: Light Neutral Tile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-2 lg:col-span-2 row-span-1 bg-slate-50 p-10 border border-gray-100 flex flex-col justify-center group"
            >
              <h5 className="text-[10px] font-bold text-brand-sky uppercase tracking-widest mb-3">Especialidad</h5>
              <p className="text-xl font-medium text-brand-dark leading-snug group-hover:text-brand-sky transition-colors">{service.features[2]}</p>
            </motion.div>

            {/* Feature 4: High Contrast Tile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-3 lg:col-span-3 row-span-1 bg-brand-darkest p-10 text-white flex items-center justify-between group overflow-hidden relative"
            >
              <div className="relative z-10">
                 <p className="text-2xl font-bold uppercase tracking-tighter max-w-xs leading-none">{service.features[3]}</p>
              </div>
              <span className="material-symbols-outlined text-brand-accent text-7xl opacity-20 absolute -right-4 -bottom-4 group-hover:scale-125 transition-transform duration-1000">construction</span>
            </motion.div>

            {/* Feature 5: Minimal Info Tile */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-1 lg:col-span-3 row-span-1 border-2 border-dashed border-gray-100 p-10 flex flex-col justify-center items-center text-center group hover:border-brand-sky transition-colors"
            >
              <span className="material-symbols-outlined text-brand-sky text-4xl mb-4">settings_suggest</span>
              <p className="text-brand-dark font-bold uppercase text-xs tracking-[0.2em]">{service.features[4]}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
