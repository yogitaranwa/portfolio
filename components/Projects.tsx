"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "SynapseMD",
    role: "ML & Healthcare",
    desc: "An AI-powered clinical assistant that helps doctors diagnose patients 40% faster using predictive models.",
    tags: ["Python", "TensorFlow", "React"],
    image: "bg-gradient-to-br from-emerald-900 to-black", 
  },
  {
    title: "AgriHive",
    role: "IoT Platform",
    desc: "Smart agriculture system connecting farmers to real-time soil data and market insights via IoT sensors.",
    tags: ["IoT", "Next.js", "Firebase"],
    image: "bg-gradient-to-br from-blue-900 to-black",
  },
  {
    title: "UI/UX Internship",
    role: "Fintech App",
    desc: "Redesigned the user onboarding flow for a major fintech startup, increasing retention by 15%.",
    tags: ["Figma", "User Research"],
    image: "bg-gradient-to-br from-purple-900 to-black",
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative z-50 py-32 bg-[#003329] px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 space-y-4"
        >
          <h2 className="text-sm font-bold text-[#10B981] tracking-[0.3em] uppercase">Selected Works</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Building digital <br/> <span className="text-[#10B981]">masterpieces.</span>
          </h3>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:bg-white/10 transition-colors"
            >
              {/* Project Info */}
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"/>
                  <span className="text-xs font-bold text-emerald-200 uppercase tracking-widest">{project.role}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#10B981] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-lg text-emerald-100/70 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex gap-3 pt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-emerald-100/60 bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Visual/Button */}
              <div className="md:col-span-5 flex justify-end">
                <a href="#" className="w-full aspect-video rounded-2xl overflow-hidden relative group/image block">
                   {/* Placeholder Gradient for Project Image */}
                   <div className={`absolute inset-0 ${project.image} transition-transform duration-500 group-hover/image:scale-110`} />
                   
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest">
                        View Case <ArrowUpRight />
                      </div>
                   </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}