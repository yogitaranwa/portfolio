"use client";
import { 
  motion, 
  useAnimationFrame, 
  useMotionValue, 
  useTransform, 
  useScroll, 
  useVelocity, 
  useSpring 
} from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// --- DATA ---
const items = [
  { id: 1, title: "DASHBOARDS", category: "UI/UX", src: "/gallery/dashboard.png" },
  { id: 2, title: "PORTFOLIOS", category: "UI/UX", src: "/gallery/portfolio.png" },
  { id: 3, title: "APPs", category: "APP", src: "/gallery/APP.png" },
  { id: 4, title: "LANDING PAGES", category: "UI/UX", src: "/gallery/WEBSITES.png" },
  { id: 5, title: "SOCIAL MEDIA", category: "DESIGN", src: "/gallery/SOCIAL MEDIA CONTENT.png" },
  { id: 6, title: "TECHFEST", category: "DESIGN", src: "/gallery/TECHFEST.png" },
];

// Duplicate items 4 times to ensure seamless infinite looping
const marqueeItems = [...items, ...items, ...items, ...items];

// WRAP LOGIC: Loops the value between -25% and 0%
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Gallery() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  // --- PRECISE CONTROL CONFIGURATION ---
  
  // 1. Calculate exact width of one photo in % (Total loop is 25%, 6 items)
  const ITEM_WIDTH = 25 / items.length; // ~4.166%

  // 2. We use a "Target" ref to track where we should be
  const targetX = useRef(0);
  
  // 3. Auto-Scroll Speed (Very Slow)
  const baseVelocity = -0.005; 
  
  // 4. Smoothness: Lower = Slower/Smoother slide, Higher = Snappier
  const LERP_FACTOR = 0.05; 

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], { clamp: false });

  useAnimationFrame((t, delta) => {
    // A. Auto-Scroll: Always slowly move the target
    let moveBy = baseVelocity * (delta / 1000) * 100; 

    // B. Parallax: Speed up auto-scroll when page is scrolled
    if (velocityFactor.get() !== 0) {
      moveBy += velocityFactor.get() * moveBy;
    }
    
    targetX.current += moveBy;

    // C. The Magic: Smoothly move 'baseX' towards 'targetX'
    // This creates the smooth slide effect when we jump the target
    const current = baseX.get();
    const diff = targetX.current - current;
    
    // Only update if there is a difference to save resources
    if (Math.abs(diff) > 0.001) {
       baseX.set(current + diff * LERP_FACTOR);
    } else {
       // If very close, just snap to keep it clean (optional, but good for drift)
       baseX.set(targetX.current);
    }
  });

  // --- BUTTON CONTROLS ---
  // Instead of physics "force", we now move the target by EXACTLY one photo width.
  
  const handlePrev = () => {
    targetX.current += ITEM_WIDTH; // Move target 1 item RIGHT
  };

  const handleNext = () => {
    targetX.current -= ITEM_WIDTH; // Move target 1 item LEFT
  };

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  return (
    <section id="work" className="py-24 bg-[#D8EAF0] overflow-hidden relative">
      
      {/* HEADER + CONTROLS */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between select-none">
        <div className="border-l-4 border-[#10B981] pl-6">
          <h2 className="text-sm font-bold text-[#003329] tracking-widest uppercase mb-1">Selected Works</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-[#171717] uppercase tracking-tighter">
            The Gallery
          </h3>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex gap-4 mb-2">
          <button 
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border-2 border-[#003329]/10 flex items-center justify-center hover:bg-[#10B981] hover:border-[#10B981] hover:text-white transition-all active:scale-95 text-[#003329]"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={handleNext}
            className="w-14 h-14 rounded-full border-2 border-[#003329]/10 flex items-center justify-center hover:bg-[#10B981] hover:border-[#10B981] hover:text-white transition-all active:scale-95 text-[#003329]"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex gap-6 pl-6"
          style={{ x }} 
        >
          {marqueeItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="relative h-[450px] w-[320px] md:h-[550px] md:w-[420px] bg-white flex-shrink-0 group border border-white shadow-2xl overflow-hidden select-none"
            >
              <Image 
                src={item.src} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              <div className="absolute top-6 right-6 bg-white px-3 py-1 text-xs font-bold text-black uppercase tracking-widest z-10">
                {item.category}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
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