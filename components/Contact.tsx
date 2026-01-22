"use client";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-50 py-32 bg-[#003329] px-6 overflow-hidden">
      
      {/* 1. TOPOGRAPHIC PATTERN OVERLAY */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2310B981' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
      />
      
      {/* 2. GRADIENT ORB */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10B981] rounded-full blur-[150px] opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        {/* LEFT: Heading & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
             <span className="w-12 h-[2px] bg-[#10B981]" />
             <h2 className="text-sm font-bold text-[#10B981] tracking-[0.3em] uppercase">Contact</h2>
          </div>
          
          <h3 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] font-oswald uppercase tracking-tighter">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399]">Talk.</span>
          </h3>
          
          <p className="text-emerald-100/60 text-lg mb-12 max-w-md font-lato">
            I'm currently open for internships and freelance opportunities. 
          </p>

          <div className="space-y-8">
            <a href="mailto:yogita@example.com" className="flex items-center gap-6 text-white group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-[#10B981] group-hover:text-[#003329] transition-all duration-300">
                <Mail size={28} />
              </div>
              <div>
                 <p className="text-xs text-[#10B981] font-bold uppercase tracking-widest mb-1">Email Me</p>
                 <span className="text-2xl font-oswald tracking-wide">yogita@example.com</span>
              </div>
            </a>
            
            <div className="flex items-center gap-6 text-white">
              <div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10">
                <MapPin size={28} />
              </div>
              <div>
                 <p className="text-xs text-[#10B981] font-bold uppercase tracking-widest mb-1">Location</p>
                 <span className="text-2xl font-oswald tracking-wide">IIIT MANIPUR, INDIA</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: The Form */}
        <motion.form 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 p-10 border-l border-white/10"
        >
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#10B981] uppercase tracking-widest">Your Name</label>
            <input 
              type="text" 
              placeholder="ENTER NAME" 
              className="w-full bg-transparent border-b-2 border-white/20 p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#10B981] transition-colors font-oswald tracking-wider text-xl"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#10B981] uppercase tracking-widest">Your Email</label>
            <input 
              type="email" 
              placeholder="ENTER EMAIL" 
              className="w-full bg-transparent border-b-2 border-white/20 p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#10B981] transition-colors font-oswald tracking-wider text-xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#10B981] uppercase tracking-widest">Message</label>
            <textarea 
              rows={4}
              placeholder="TELL ME ABOUT YOUR PROJECT..." 
              className="w-full bg-transparent border-b-2 border-white/20 p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#10B981] transition-colors font-oswald tracking-wider text-xl resize-none"
            />
          </div>

          <button className="w-full py-6 bg-[#10B981] text-[#003329] font-bold text-xl uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 mt-4">
            SEND MESSAGE <Send size={20} />
          </button>
        </motion.form>

      </div>
    </section>
  );
}