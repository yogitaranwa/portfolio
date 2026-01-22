"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { PenTool, Code2, Cpu } from "lucide-react";
import { MouseEvent } from "react";

const services = [
  { icon: PenTool, title: "UI/UX DESIGN", desc: "Designing intuitive, user-centric interfaces. From wireframing to high-fidelity prototypes, focusing on aesthetics and usability." },
  { icon: Code2, title: "FULL STACK DEV", desc: "Building responsive, fast web applications using Next.js and Tailwind CSS. Clean code and smooth animations are my priority." },
  { icon: Cpu, title: "MACHINE LEARNING", desc: "Developing predictive models and AI solutions using Python and TensorFlow, bridging the gap between data and real-world applications." },
];

function SpotlightCard({ children, index }: { children: React.ReactNode; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative border border-gray-200 bg-gray-50 overflow-hidden p-10 hover:border-[#10B981] transition-colors duration-300"
    >
      {/* SPOTLIGHT GRADIENT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-32 bg-white px-6 relative">
      {/* Jagged Top Divider to break the straight line */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-[#003329]"></path>
          </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#10B981] tracking-widest font-oswald uppercase mb-2">My Expertise</h2>
          <h3 className="text-5xl font-bold text-[#171717] font-oswald uppercase tracking-tighter">
            What I Do
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <SpotlightCard key={idx} index={idx}>
              <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6 text-[#171717] shadow-sm">
                <service.icon size={24} />
              </div>
              <h4 className="text-2xl font-bold text-[#171717] mb-4 font-oswald uppercase tracking-wide">
                {service.title}
              </h4>
              <p className="text-gray-500 leading-relaxed font-lato">
                {service.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}