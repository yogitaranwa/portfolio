"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";

const items = [
  { id: 1, title: "SYNAPSE MD", category: "UI/UX", src: "bg-gradient-to-br from-emerald-900 to-black" },
  { id: 2, title: "GUTS / BERSERK", category: "ART", src: "bg-gradient-to-br from-gray-900 to-black" },
  { id: 3, title: "AGRIHIVE", category: "APP", src: "bg-gradient-to-br from-green-900 to-emerald-900" },
  { id: 4, title: "DEMON SLAYER", category: "ART", src: "bg-gradient-to-br from-blue-900 to-black" },
  { id: 5, title: "FINTECH APP", category: "DESIGN", src: "bg-gradient-to-br from-purple-900 to-black" },
  { id: 6, title: "PORTFOLIO", category: "DEV", src: "bg-gradient-to-br from-teal-900 to-black" },
];

const marqueeItems = [...items, ...items];

export default function Gallery() {
  return (
    <section id="work" className="py-24 bg-[#D8EAF0] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 mb-12 border-l-4 border-[#10B981] pl-6">
        <h2 className="text-sm font-bold text-[#003329] tracking-widest uppercase mb-1">Selected Works</h2>
        <h3 className="text-5xl md:text-6xl font-bold text-[#171717] uppercase tracking-tighter">
          The Gallery
        </h3>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex gap-4 pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" }}}
          style={{ willChange: "transform" }}
          whileHover={{ animationPlayState: "paused" }} 
        >
          {marqueeItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="relative h-[450px] w-[320px] md:h-[550px] md:w-[420px] bg-white flex-shrink-0 group cursor-pointer border border-white shadow-2xl"
            >
              <div className={`absolute inset-0 ${item.src} transition-transform duration-700 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              {/* Sharp geometric label */}
              <div className="absolute top-6 right-6 bg-white px-3 py-1 text-xs font-bold text-black uppercase tracking-widest">
                {item.category}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-3xl font-bold text-white uppercase leading-none mb-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                  {item.title}
                </h3>
                <div className="w-12 h-12 bg-[#10B981] flex items-center justify-center text-black hover:bg-white transition-colors">
                   <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}