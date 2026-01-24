"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023 - PRESENT",
    title: "B.TECH IN CSE",
    org: "IIIT MANIPUR",
    desc: "Maintaining a strong GPA while leading the college design club. Specializing in AI/ML and Data Science.",
  },
  {
    year: "OCT 2025 - PRESENT",
    title: "UI/UX INTERN",
    org: "ALTBRIDGE PARTNERS",
    desc: "Designed user flows and prototypes for a fintech product. Improved onboarding UX, boosting user retention by 15%.",
  },
  {
    year: "JUN 2025 - AUG 2025",
    title: "UI/UX INTERN",
    org: "ALIVEHIRE",
    desc: "Redesigned key interfaces for an HR platform using Figma. Conducted user testing to refine usability and visual design.",
  },
   {
    year: "MAY 2025 - JULY 2025",
    title: "SDE INTERN",
    org: "LUMOVATE INTELLIGENCE",
    desc: "Developed backend APIs using Node.js and Express for a healthcare app. Implemented database schemas in MongoDB.",
  },
];

export default function Experience() {
  return (
    <section className="py-32 bg-[#003329] px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10B981] opacity-5 pointer-events-none blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
           <span className="text-[#10B981] font-bold tracking-widest font-oswald uppercase text-sm">Career Path</span>
           <h2 className="text-5xl font-bold text-white font-oswald uppercase mt-2">My Journey</h2>
        </div>

        <div className="space-y-0 relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`md:flex items-center justify-between gap-16 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-12 last:mb-0`}
            >
              
              {/* Date Side */}
              <div className={`hidden md:block w-1/2 text-right ${idx % 2 !== 0 ? "text-left" : ""}`}>
                <span className="text-[#10B981] font-bold tracking-[0.2em] text-sm font-oswald">{item.year}</span>
              </div>

              {/* Square Node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#003329] border-2 border-[#10B981] -translate-x-[5px] md:-translate-x-1/2 rotate-45 z-10" />

              {/* Content Side */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0">
                 <div className="bg-white/5 border border-white/10 p-8 hover:border-[#10B981] transition-colors group">
                    <div className="md:hidden text-[#10B981] text-xs font-bold mb-2 font-oswald">{item.year}</div>
                    <h3 className="text-2xl font-bold text-white font-oswald uppercase tracking-wide">{item.title}</h3>
                    <h4 className="text-emerald-100/60 font-bold text-sm mb-4 uppercase tracking-wider">{item.org}</h4>
                    <p className="text-emerald-100/70 font-lato leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}