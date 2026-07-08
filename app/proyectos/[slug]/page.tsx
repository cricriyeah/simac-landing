"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";

const projectsData = {
  "residencia-castillo": {
    title: "Residencia Castillo",
    category: "Solar Fotovoltaico",
    location: "La Paz, BCS",
    challenge: "Lograr una integración estética y funcional de un sistema de 15 kWp en una residencia de diseño contemporáneo, optimizando el espacio en techos y garantizando una generación máxima bajo las condiciones de calor extremo de La Paz.",
    solution: "Se implementó un sistema de microinversores Enphase IQ8 de última generación, permitiendo un monitoreo individual por panel y eliminando puntos de falla únicos. Se diseñó una estructura de aluminio anodizado de bajo perfil para minimizar el impacto visual.",
    result: "Reducción del 95% en la facturación eléctrica mensual y una producción anual estimada de 24,000 kWh, evitando la emisión de 12 toneladas de CO2 al año.",
    image: "/proyectos/castillo/hero.JPG",
    details: [
      { label: "Capacidad", value: "15 kWp" },
      { label: "Equipos", value: "Microinversores IQ8" },
      { label: "Integración", value: "Arquitectónica" }
    ],
    gallery: [
      { src: "/proyectos/castillo/DJI_0532.JPG", alt: "Vista aérea de la instalación" },
      { src: "/proyectos/castillo/DJI_0533.JPG", alt: "Detalles de paneles solares" },
      { src: "/proyectos/castillo/DJI_0534.JPG", alt: "Perspectiva de la azotea" },
      { src: "/proyectos/castillo/IMG-20260423-WA0016.jpg", alt: "Monitoreo del sistema" },
      { src: "/proyectos/castillo/IMG_20260423_162406.jpg", alt: "Instalación de inversores" },
      { src: "/proyectos/castillo/IMG_20260423_162409.jpg", alt: "Conexiones eléctricas" }
    ]
  },
  "doce-cuarenta": {
    title: "DoceCuarenta Centro",
    category: "Solar Comercial",
    location: "Centro, La Paz, BCS",
    challenge: "Proveer una solución de energía limpia y eficiente para la icónica cafetería de especialidad DoceCuarenta, ubicada en el corazón histórico de La Paz. El reto principal fue integrar un sistema fotovoltaico capaz de soportar la alta demanda de equipos de tostado y climatización, sin comprometer la estética de este reconocido punto de encuentro turístico y local.",
    solution: "Se diseñó e instaló una planta solar integrada con paneles de máxima eficiencia adaptados a la arquitectura del lugar. El sistema incluye tecnología de monitoreo en tiempo real (IoT) para gestionar de forma inteligente el consumo continuo del establecimiento en su horario extendido (7:00 AM - 10:00 PM).",
    result: "Autonomía energética que garantiza la operación continua del recinto, logrando una reducción drástica en la facturación eléctrica comercial y reforzando el firme compromiso de DoceCuarenta con la sustentabilidad ambiental en Baja California Sur.",
    image: "/proyectos/docecuarenta/portada.png",
    imagePosition: "center 25%",
    aboutCompany: {
      title: "Acerca de DoceCuarenta",
      logo: "/proyectos/docecuarenta/docelogo.jpg",
      description: "DoceCuarenta es una icónica cafetería de especialidad en Baja California Sur. Ubicada a un par de cuadras del emblemático malecón de La Paz, es célebre por su meticuloso proceso de tostado, su panadería artesanal y su gran ambiente que atrae tanto a la comunidad local como a visitantes de todo el mundo. Este proyecto subraya su visión vanguardista de integrar la sustentabilidad directamente en sus operaciones diarias."
    },
    details: [
      { label: "Giro", value: "Cafetería de Especialidad" },
      { label: "Ubicación", value: "Zona Centro, La Paz" },
      { label: "Tecnología", value: "Solar de Alta Eficiencia" }
    ],
    gallery: [
      { src: "/proyectos/docecuarenta/DJI_0286.jpg", alt: "Vista aérea de instalación solar" },
      { src: "/proyectos/docecuarenta/DJI_0287.jpg", alt: "Paneles solares instalados" },
      { src: "/proyectos/docecuarenta/DJI_0289.jpg", alt: "Instalación de paneles" },
      { src: "/proyectos/docecuarenta/DJI_0294.jpg", alt: "Planta Solar Comercial" },
      { src: "/proyectos/docecuarenta/DJI_0295.jpg", alt: "Instalación Solar" },
      { src: "/proyectos/docecuarenta/IMG_20260401_140535.jpg", alt: "Detalle de inversor y equipos" },
      { src: "/proyectos/docecuarenta/IMG_20260401_140538.jpg", alt: "Canalización y conexiones eléctricas" }
    ]
  },
  "residencia-paraiso": {
    title: "Residencia Paraíso",
    category: "Solar Fotovoltaico",
    location: "La Paz, BCS",
    challenge: "Maximizar la generación solar en una propiedad de lujo frente al mar, enfrentando condiciones de alta salinidad y vientos fuertes, manteniendo la integridad estética de la arquitectura.",
    solution: "Se instalaron estructuras de aluminio anodizado de grado marino y microinversores de alta resistencia. El diseño se adaptó a las pendientes naturales del techo para una integración visual fluida.",
    result: "Suministro eléctrico ininterrumpido con un ahorro estimado del 98%, protegiendo la inversión contra la corrosión costera por más de 25 años.",
    image: "/proyectos/paraiso/DJI_0317.jpg",
    details: [
      { label: "Tipo", value: "Residencial Premium" },
      { label: "Resistencia", value: "Grado Marino" },
      { label: "Ahorro", value: "98% Estimado" }
    ],
    gallery: [
      { src: "/proyectos/paraiso/DJI_0316.jpg", alt: "Vista aérea del complejo" },
      { src: "/proyectos/paraiso/DJI_0318.jpg", alt: "Paneles en azotea" },
      { src: "/proyectos/paraiso/IMG_20260421_180220.jpg", alt: "Detalle de instalación" },
      { src: "/proyectos/paraiso/IMG_20260421_180330.jpg", alt: "Componentes del sistema" }
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
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop", alt: "Equipos de Frío" },
      { src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop", alt: "Técnico en Operación" },
      { src: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=800&auto=format&fit=crop", alt: "Mantenimiento Preventivo" }
    ]
  }
};

import { HorizontalGallery } from "@/app/components/HorizontalGallery";
import Footer from "@/app/components/Footer";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) return notFound();

  return (
    <main className="bg-white">
      {/* Modern Clean Header - Royal Blue Background */}
      <section className="pt-40 pb-20 px-8 md:px-16 lg:px-24 xl:px-40 bg-brand-dark border-b border-white/10">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Case Study / {project.category}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white uppercase tracking-tighter leading-[0.9] mb-12 text-soft-shadow">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
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
            style={{ objectPosition: (project as any).imagePosition || 'center' }}
            priority 
          />
        </motion.div>
        <div className="absolute inset-0 bg-brand-darkest/10"></div>
      </section>

      {/* Horizontal Gallery Section */}
      <HorizontalGallery 
        images={project.gallery}
        title="Galería del Proyecto"
        subtitle="Evidencia y Detalles"
      />

      {/* Optional About Company Section */}
      {(project as any).aboutCompany && (
        <section className="py-24 px-8 md:px-16 lg:px-24 xl:px-40 bg-gray-50 border-y border-gray-200">
          <div className="max-w-[1920px] mx-auto flex flex-col items-center text-center">
            <span className="text-brand-accent font-bold text-xs uppercase tracking-[0.3em] mb-8 block">Acerca de la empresa</span>
            
            {(project as any).aboutCompany.logo && (
              <div className="relative w-48 h-24 mb-10 overflow-hidden mix-blend-multiply">
                <Image 
                  src={(project as any).aboutCompany.logo} 
                  alt="Logo de la empresa"
                  fill
                  className="object-contain"
                />
              </div>
            )}

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark mb-8">
              {(project as any).aboutCompany.title}
            </h2>
            <p className="text-lg md:text-xl font-medium text-brand-dark/70 leading-relaxed max-w-4xl mx-auto">
              {(project as any).aboutCompany.description}
            </p>
          </div>
        </section>
      )}

      {/* Narrative Section - Redesigned to match reference */}
      <section className="py-32 px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-[1920px] mx-auto space-y-24 lg:space-y-32">
          
          {/* Los Desafíos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-dark leading-none"
              >
                Los Desafíos
              </motion.h2>
              <div className="w-12 h-1 bg-brand-accent mt-6"></div>
            </div>
            <div className="lg:col-span-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl font-medium text-brand-dark/80 leading-relaxed"
              >
                {project.challenge}
              </motion.p>
            </div>
          </div>

          {/* Las Soluciones */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-dark leading-none"
              >
                Las Soluciones
              </motion.h2>
              <div className="w-12 h-1 bg-brand-accent mt-6"></div>
            </div>
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-brand-sky">lightbulb</span>
                   <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sky">Estrategia Implementada</h3>
                </div>
                <p className="text-lg md:text-xl font-medium text-brand-dark/80 leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </div>
          </div>

          {/* El Resultado */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-dark leading-none"
              >
                El Resultado
              </motion.h2>
              <div className="w-12 h-1 bg-brand-accent mt-6"></div>
            </div>
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-brand-accent">verified</span>
                   <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-sky">Impacto Final</h3>
                </div>
                <p className="text-lg md:text-xl font-medium text-brand-dark leading-tight">
                  {project.result}
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
