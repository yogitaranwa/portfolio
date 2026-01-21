"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: Text moves faster than mountains
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-brand-light flex items-center justify-center"
    >
      {/* 1. TEXT LAYER */}
      <motion.div style={{ y: textY }} className="relative z-10 text-center px-4 mb-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter uppercase">
            YOGITA KUMARI
            </h1>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <h2 className="text-lg md:text-2xl font-medium text-brand-DEFAULT mt-4 tracking-[0.3em] uppercase">
            UI/UX • ML • ART
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2 tracking-widest uppercase">
              Student at IIIT Manipur
            </p>
        </motion.div>
      </motion.div>

      {/* 2. BACKGROUND MOUNTAIN */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-x-0 bottom-0 z-0 w-full"
      >
        <svg
          className="w-full h-auto text-emerald-200"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.6"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      {/* 3. FOREGROUND MOUNTAIN */}
      <div className="absolute inset-x-0 bottom-0 z-20 w-full pointer-events-none">
         <svg
          className="w-full h-auto text-brand-DEFAULT"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase opacity-80">Welcome</span>
        <ArrowDown size={20} />
      </motion.div>
    </div>
  );
}