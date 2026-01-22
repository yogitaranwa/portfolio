"use client";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300 ${scrolled ? "bg-[#003329]/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="text-xl font-bold text-white tracking-tight cursor-pointer group">
        YOGITA<span className="text-[#10B981] group-hover:text-white transition-colors">.</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 text-xs font-bold text-white/80 uppercase tracking-widest">
        {["About", "Work", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="hover:text-[#10B981] transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#10B981] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white hover:text-[#10B981]">
        <Menu />
      </button>
    </motion.nav>
  );
}