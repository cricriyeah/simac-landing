"use client";
import Image from "next/image";
import CTA from "./components/CTA";
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, end, { duration, ease: "easeOut" });
    }
  }, [inView, end, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const fastDuration = 0.4;

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: fastDuration, ease: "easeOut" } }
} as const;

const titleContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // Wait a fraction after Navbar
      staggerChildren: 0.08 // Fast word by word
    }
  }
} as const;

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: fastDuration, ease: "easeOut" } }
} as const;

const bottomStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8, // Start after title finishes
      staggerChildren: 0.15
    }
  }
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
} as const;

const smoothScrollTo = (targetId: string, duration: number) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-brand-light text-foreground selection:bg-brand-accent selection:text-brand-dark overflow-hidden">
      {/* Hero Section */}
      <section id="inicio" className="relative w-full h-[100vh] min-h-[700px] flex flex-col">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ 
              scale: videoEnded ? 1.1 : 1,
              filter: videoEnded ? "blur(10px) brightness(0.6)" : "blur(0px) brightness(1)"
            }}
            transition={{ 
              duration: 2.5, 
              ease: "easeInOut"
            }}
            className="w-full h-full relative"
          >
            <video
              autoPlay
              muted
              playsInline
              onTimeUpdate={(e) => {
                // Trigger blur effect 3 seconds before the end
                if (e.currentTarget.duration && e.currentTarget.currentTime >= e.currentTarget.duration - 3) {
                  setVideoEnded(true);
                }
              }}
              onEnded={() => setVideoEnded(true)}
              className="w-full h-full object-cover"
            >
              <source src="/videos/mp_.mp4" type="video/mp4" />
              {/* Fallback Image */}
              <img 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop" 
                alt="Instalación de paneles solares" 
                className="w-full h-full object-cover"
              />
            </video>
            {/* Dynamic Overlay */}
            <motion.div 
              animate={{ opacity: videoEnded ? 0.6 : 0.3 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-brand-darkest pointer-events-none z-10"
            />
          </motion.div>
          {/* Softened Gradient overlay to avoid hard 'strips' */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darkest/40 via-transparent to-brand-darkest/40"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex-1 flex flex-col justify-between px-8 md:px-16 lg:px-24 xl:px-40 pb-32 md:pb-12 w-full max-w-[1920px] mx-auto mt-[80px]">
          <div className="pt-20 lg:pt-24 w-full">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={titleContainerVariant}
              className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.05] tracking-tight max-w-5xl text-soft-shadow"
            >
              {"Energía Solar para la".split(" ").map((word, idx) => (
                <span key={idx} className="inline-block whitespace-nowrap"><motion.span variants={wordVariant} className="inline-block">{word}</motion.span>&nbsp;</span>
              ))}
              <br className="hidden md:block"/>
              {"Industria y el Hogar".split(" ").map((word, idx) => (
                <span key={idx+10} className="inline-block whitespace-nowrap"><motion.span variants={wordVariant} className="inline-block">{word}</motion.span>&nbsp;</span>
              ))}
            </motion.h1>

            <AnimatePresence>
              {videoEnded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-10 md:mt-12 flex justify-start md:justify-start"
                >
                  <button 
                    onClick={() => smoothScrollTo("servicios", 1000)}
                    className="bg-brand-accent text-brand-dark px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl shadow-brand-accent/30 w-full md:w-auto"
                  >
                    Conoce nuestros servicios
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={bottomStagger}
            className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-8 w-full"
          >
            <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
              <motion.p variants={fadeUpVariant} className="text-white/80 max-w-md text-sm md:text-base leading-relaxed">
                Reduce hasta un 99% tu recibo de CFE. Diseño e instalación <br className="hidden md:block"/> de Paneles Solares de alta eficiencia por Ingenieros Electromecánicos en BCS.
              </motion.p>
            </div>

            <motion.div variants={fadeUpVariant} className="flex flex-row justify-between md:justify-end gap-2 md:gap-12 items-center md:items-end w-full md:w-auto overflow-hidden">
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:flex-initial">
                <div className="flex items-baseline">
                  <span className="text-brand-accent font-medium text-2xl md:text-4xl tracking-tight leading-none">
                    <Counter end={15} />
                  </span>
                  <span className="text-brand-accent font-medium text-lg ml-0.5">+</span>
                </div>
                <p className="text-white/60 text-[0.5rem] md:text-[0.65rem] uppercase tracking-[0.15em] md:tracking-[0.2em] mt-2 font-medium">Años de <br className="hidden md:block"/> experiencia</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:flex-initial border-x border-white/10 md:border-none px-2 md:px-0">
                <div className="flex items-baseline">
                  <span className="text-brand-accent font-medium text-2xl md:text-4xl tracking-tight leading-none">
                    <Counter end={500} />
                  </span>
                  <span className="text-brand-accent font-medium text-lg ml-0.5">+</span>
                </div>
                <p className="text-white/60 text-[0.5rem] md:text-[0.65rem] uppercase tracking-[0.15em] md:tracking-[0.2em] mt-2 font-medium">Proyectos <br className="hidden md:block"/> realizados</p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:flex-initial">
                <div className="flex items-baseline">
                  <span className="text-brand-accent font-medium text-2xl md:text-4xl tracking-tight leading-none">
                    <Counter end={250} />
                  </span>
                  <span className="text-brand-accent font-medium text-lg ml-0.5">+</span>
                </div>
                <p className="text-white/60 text-[0.5rem] md:text-[0.65rem] uppercase tracking-[0.15em] md:tracking-[0.2em] mt-2 font-medium">Clientes <br className="hidden md:block"/> satisfechos</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Centered Bottom Arrow */}
        <AnimatePresence>
          {videoEnded && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
            >
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-brand-accent flex flex-col items-center cursor-pointer"
                onClick={() => smoothScrollTo("servicios", 1000)}
              >
                <span className="text-[0.6rem] uppercase tracking-[0.3em] mb-2 font-bold text-white/40">Deslizar</span>
                <span className="material-symbols-outlined text-4xl">expand_more</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Brands Carousel Section */}
      <section className="bg-white py-12 border-b border-gray-100 overflow-hidden relative">
        {/* Faded edges for premium feel */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex items-center">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            className="flex flex-nowrap gap-20 items-center"
          >
            {[
              "Trina Solar", "Jinko Solar", "SMA Solar", "Canadian Solar", "Fronius", 
              "Daikin", "York", "Carrier", "Honeywell", "Danfoss", "Schneider", "ABB"
            ].concat([
              "Trina Solar", "Jinko Solar", "SMA Solar", "Canadian Solar", "Fronius", 
              "Daikin", "York", "Carrier", "Honeywell", "Danfoss", "Schneider", "ABB"
            ]).map((brand, idx) => (
              <span 
                key={idx} 
                className="text-gray-300 hover:text-brand-accent transition-colors duration-500 text-xl font-medium uppercase tracking-[0.25em] whitespace-nowrap px-4"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Combined About Section (Nosotros + Liderazgo Local) */}
      <section id="nosotros" className="bg-white py-32 px-8 md:px-16 lg:px-24 xl:px-40 w-full overflow-hidden">
        <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-20 items-center">
          {/* Left: Image with Lightning Bolt */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-brand-dark shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop" 
                alt="Ingenieros SIMAC trabajando" 
                fill 
                className="object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700" 
              />
              <span className="absolute top-6 right-6 material-symbols-outlined text-7xl text-brand-accent drop-shadow-lg animate-float">electric_bolt</span>
            </div>
          </motion.div>

          {/* Right: Combined Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 border border-gray-200 text-xs font-medium text-brand-dark font-medium mb-6">Nosotros y Liderazgo Local</span>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-brand-dark leading-[1.1] mb-6">
                Ingeniería Electromecánica con <span className="text-brand-sky">Sello Sudcaliforniano</span>
              </h2>
              <div className="space-y-4 text-brand-dark text-sm max-w-lg">
                <p>Nuestra empresa es 100% sudcaliforniana, fundada por Ingenieros Electromecánicos egresados del ITLP con amplia experiencia y certificaciones de la industria.</p>
                <p>La ejecución técnica es impecable, diseñada para soportar el rigor del clima de Baja California Sur garantizando la máxima durabilidad de su inversión.</p>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Ingeniería con Certificación Local",
                "Soluciones Solar, Eléctrico y Clima",
                "Expertos en Cámaras Frigoríficas",
                "Respuesta rápida en todo BCS",
                "Proyectos Llave en Mano",
                "Mantenimiento Industrial 24/7"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 py-2">
                  <span className="material-symbols-outlined text-brand-accent text-xl">check_circle</span>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits Text Block */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        id="servicios" 
        className="bg-slate-50/50 pt-48 pb-24 px-8 md:px-16 lg:px-24 xl:px-40 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1920px] mx-auto"
      >
        <motion.h3 variants={fadeUpVariant} className="text-3xl lg:text-4xl font-medium tracking-tight text-brand-dark">Nuestros Servicios<br/> Especializados</motion.h3>
        <motion.div variants={fadeUpVariant} className="text-brand-dark space-y-4 text-sm max-w-md">
          <p>Ofrecemos diseño, instalación y mantenimiento con enfoque industrial, comercial y residencial. Un solo proveedor para todas sus necesidades energéticas.</p>
        </motion.div>
      </motion.section>

      {/* 4 Columns Icons */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="bg-slate-50/50 pb-48 px-8 md:px-16 lg:px-24 xl:px-40 max-w-[1920px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {[
          { title: "Energía Solar", slug: "solar", desc: "Estudios ROI, trámites CFE, microinversores y opciones de financiamiento y arrendamiento.", icon: "solar_power", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop" },
          { title: "Aire Acondicionado y Refrigeración", slug: "hvac", desc: "Instalación y mantenimiento 24/7 de equipos paquete, VRF y Chillers de gran capacidad.", icon: "factory", img: "https://images.unsplash.com/photo-1605276374104-162f1c4cb511?q=80&w=800&auto=format&fit=crop" },
          { title: "Instalaciones Eléctricas", slug: "electrico", desc: "Ingeniería llave en mano: Subestaciones, corrección de factor de potencia y cumplimiento NOM.", icon: "electric_bolt", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop" },
          { title: "Cámaras Frigoríficas", slug: "frigorifico", desc: "Diseño y mantenimiento de sistemas de congelación y conservación con monitoreo en tiempo real.", icon: "ac_unit", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            variants={fadeUpVariant} 
            onClick={() => window.location.href = `/servicios/${item.slug}`}
            className="bg-white border-t-4 border-t-brand-accent shadow-sm hover:shadow-2xl hover:shadow-brand-dark/10 hover:-translate-y-4 transition-all duration-500 group flex flex-col cursor-pointer overflow-hidden"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-3xl text-brand-sky">
                  {item.icon}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h4 className="font-semibold text-brand-dark mb-4 text-lg tracking-tight uppercase">{item.title}</h4>
              <p className="text-sm text-brand-dark leading-relaxed font-light">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Redesigned Process Section */}
      <section id="proceso" className="bg-brand-darkest text-white py-32 px-8 md:px-16 lg:px-24 xl:px-40 w-full overflow-hidden">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-sky text-sm font-medium uppercase tracking-widest mb-4 block">Metodología SIMAC</span>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1]">
                Ingeniería paso a paso para la <br/>
                <span className="text-brand-accent italic">máxima eficiencia</span>
              </h2>
            </div>
            <p className="text-white/90 text-sm max-w-sm font-light leading-relaxed">
              Transformamos sus necesidades energéticas en soluciones técnicas de alto rendimiento a través de cuatro etapas clave de nuestro proceso certificado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[32px] left-0 w-full h-px bg-white -z-0"></div>
            
            {[
              { step: "01", title: "Diagnóstico", icon: "search", desc: "Evaluación profunda de su perfil de consumo y viabilidad técnica en sitio." },
              { step: "02", title: "Ingeniería", icon: "architecture", desc: "Diseño ejecutivo a medida con selección de equipos de grado industrial." },
              { step: "03", title: "Ejecución", icon: "engineering", desc: "Instalación certificada, seguridad total y gestión completa ante CFE." },
              { step: "04", title: "Optimización", icon: "verified", desc: "Monitoreo continuo de rendimiento y pólizas de mantenimiento preventivo." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative z-10 group"
              >
                <div className="w-16 h-16 bg-brand-darkest border-2 border-white/40 flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500 rounded-full shadow-xl shadow-black/20">
                  <span className="material-symbols-outlined text-2xl text-white group-hover:text-brand-dark transition-colors duration-500">
                    {item.icon}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-sky text-xs font-bold tracking-widest">{item.step}</span>
                    <div className="h-px w-8 bg-brand-sky"></div>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="bg-brand-light py-24 px-8 md:px-16 lg:px-24 xl:px-40 max-w-[1920px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight max-w-lg text-brand-dark">Proyectos Ejecutados con Ingeniería de Excelencia</h2>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => {
                const container = document.getElementById('project-container');
                if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors text-brand-dark"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button 
              onClick={() => {
                const container = document.getElementById('project-container');
                if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors text-brand-dark"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </motion.div>
        
        <div 
          id="project-container"
          className="flex overflow-x-auto gap-10 pb-12 snap-x snap-mandatory no-scrollbar"
        >
          {[
            { 
              title: "Residencia Castillo", 
              tag: "Solar Fotovoltaico", 
              slug: "residencia-castillo",
              desc: "Sistema solar de alta gama con integración arquitectónica y máxima eficiencia energética.", 
              img: "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?q=80&w=1000&auto=format&fit=crop" 
            },
            { 
              title: "Proyecto Doce cuarenta", 
              tag: "Solar Fotovoltaico", 
              slug: "doce-cuarenta",
              desc: "Ingeniería de climatización industrial para espacios de alto rendimiento y diseño moderno.", 
              img: "https://images.unsplash.com/photo-1605276374104-162f1c4cb511?q=80&w=1000&auto=format&fit=crop" 
            },
            { 
              title: "Residencia Paraiso", 
              tag: "Solar Fotovoltaico", 
              slug: "residencia-paraiso",
              desc: "Solución de energía limpia de gran escala para residencia premium en zona costera.", 
              img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop" 
            },
            { 
              title: "Mantenimiento Caracol", 
              tag: "Refrigeración", 
              slug: "mantenimiento-caracol",
              desc: "Póliza de servicio integral y optimización de sistemas críticos para complejo de servicios.", 
              img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop" 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex-shrink-0 w-[340px] md:w-[520px] snap-start flex flex-col group cursor-pointer"
              onClick={() => window.location.href = `/proyectos/${item.slug}`}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden mb-6 bg-brand-dark">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute top-0 left-0 bg-brand-accent text-brand-dark text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">
                  {item.tag}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-brand-dark mb-3 group-hover:text-brand-sky transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-brand-dark leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>




      <CTA />

      {/* Footer */}
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
    </div>
  );
}
