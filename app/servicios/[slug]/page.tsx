"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import CTA from "@/app/components/CTA";

const servicesData = {
  "solar": {
    title: "Instalación y Diseño Fotovoltaico",
    tag: "Energía Solar",
    desc: "Sistemas solares personalizados para cada necesidad, reducción de consumo, respaldo de energía en baterías y sistemas independientes de la red.",
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
    desc: "Proyección, instalación y mantenimiento a equipos de climatización comercial y residencial.",
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
    desc: "Ejecución de obra eléctrica en baja y media tensión, mantenimiento eléctrico y detección de puntos de falla de acuerdo a la NOM-001.",
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
    desc: "Diseño, instalación y mantenimiento a cámaras frías de uso comercial para media y baja temperatura.",
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

      {/* Respaldo Técnico y Partners Section */}
      <section className="py-32 px-8 md:px-16 lg:px-24 xl:px-40 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 transform translate-x-20"></div>
        
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-brand-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Calidad Garantizada</span>
              <h3 className="text-4xl lg:text-5xl font-semibold uppercase tracking-tight leading-none mb-8">Respaldo de Ingeniería</h3>
              <p className="text-white/70 font-light leading-relaxed text-lg mb-12">
                Utilizamos exclusivamente equipos de grado industrial y componentes certificados internacionalmente para asegurar que cada proyecto supere las normativas vigentes.
              </p>
              
              <div className="space-y-6">
                {service.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-brand-accent/30 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-brand-accent text-xl">check_circle</span>
                    </div>
                    <span className="text-lg font-medium tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-sm p-12 border border-white/10">
              <h4 className="text-brand-sky font-bold text-xs uppercase tracking-widest mb-12 text-center">Nuestros Aliados Estratégicos</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                <div className="opacity-60 hover:opacity-100 transition-opacity flex justify-center">
                  <Image src="/marcas/JA-solar-vico-export-solar_energy.png" alt="JA Solar" width={140} height={60} className="object-contain filter brightness-0 invert" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity flex justify-center">
                  <Image src="/marcas/Luxpower-logo111-1030x186.png" alt="Luxpower" width={140} height={60} className="object-contain filter brightness-0 invert" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity flex justify-center">
                  <Image src="/marcas/logo-aires-mirage.png" alt="Mirage" width={140} height={60} className="object-contain filter brightness-0 invert" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity flex justify-center">
                  <Image src="/marcas/logo.png" alt="Partner" width={80} height={40} className="object-contain filter brightness-0 invert" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity flex justify-center">
                  <Image src="/marcas/1.png" alt="LONGi Solar" width={140} height={60} className="object-contain filter brightness-0 invert" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity flex justify-center">
                  <Image src="/marcas/2.png" alt="Solis Inverters" width={140} height={60} className="object-contain filter brightness-0 invert" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity flex justify-center">
                  <Image src="/marcas/3.png" alt="Victron Energy" width={140} height={60} className="object-contain filter brightness-0 invert" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity flex justify-center">
                  <Image src="/marcas/logo-1.png" alt="Sol-Ark" width={140} height={60} className="object-contain filter brightness-0 invert" />
                </div>
              </div>
              <div className="mt-16 pt-12 border-t border-white/10">
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-3xl font-bold text-brand-accent">25+</p>
                      <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Años de Garantía</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-brand-accent">24/7</p>
                      <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Soporte Técnico</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
