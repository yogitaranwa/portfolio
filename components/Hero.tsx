"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // --- PARALLAX SETTINGS ---
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const leafX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const leafY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const hill1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const hill4X = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const hill5X = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Foreground moves UP. We increase the range slightly to make it more dynamic.
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center">
      {/* 1. HILL 1 (Back) */}
      <motion.div style={{ y: hill1Y }} className="absolute inset-0 z-0">
        <Image src="/parallax/hill1.png" alt="Hill 1" fill className="object-cover" priority />
      </motion.div>

      {/* 2. HILL 2 */}
      <div className="absolute inset-0 z-10">
        <Image src="/parallax/hill2.png" alt="Hill 2" fill className="object-cover" priority />
      </div>

      {/* 3. HILL 3 */}
      <div className="absolute inset-0 z-20">
        <Image src="/parallax/hill3.png" alt="Hill 3" fill className="object-cover" priority />
      </div>

      {/* 4. TEXT LAYER */}
      <motion.div style={{ y: textY }} className="relative z-30 text-center translate-y-[-50%]">
        <h1 className="text-[5rem] md:text-[6rem] font-bold text-[#171717] tracking-wide uppercase leading-none">
          YOGITA KUMARI
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff] tracking-[0.5em] uppercase px-4 py-2 mt-2">
          Designer & Engineer
        </h2>
      </motion.div>

      {/* 5. SIDE HILLS */}
      <motion.div style={{ x: hill4X }} className="absolute inset-0 z-40">
        <Image src="/parallax/hill4.png" alt="Hill 4" fill className="object-cover" priority />
      </motion.div>

      <motion.div style={{ x: hill5X }} className="absolute inset-0 z-40">
        <Image src="/parallax/hill5.png" alt="Hill 5" fill className="object-cover" priority />
      </motion.div>

      {/* 6. LEAF */}
      <motion.div style={{ x: leafX, y: leafY }} className="absolute top-0 right-0 w-full h-full z-50 pointer-events-none">
        <Image src="/parallax/leaf.png" alt="Leaf" fill className="object-cover" />
      </motion.div>

      {/* 7. FOREGROUND GROUP (Tree + Plant + Curtain Box) */}
      {/* We group these so the "Curtain" moves exactly with the images */}
      <motion.div 
        style={{ y: foregroundY }} 
        className="absolute inset-0 z-50 pointer-events-none"
      >
        {/* Tree */}
        <div className="absolute inset-0">
             <Image src="/parallax/tree.png" alt="Tree" fill className="object-cover" priority />
        </div>

        {/* Plant - LIFTED UP slightly using 'bottom-[-1%]' instead of 0 if needed, 
            but the main gap fix is the box below. */}
        <div className="absolute inset-0">
             <Image src="/parallax/plant.png" alt="Plant" fill className="object-cover" priority />
        </div>

        {/* --- THE FIX: EXTENSION BOX --- */}
        {/* This box hangs below the image. As the image moves UP, this box slides up to cover the gap. */}
        <div className="absolute top-[99%] left-0 w-full h-[50vh] bg-[#003329]" />
      </motion.div>
    </div>
  );
}