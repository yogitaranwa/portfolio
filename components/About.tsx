"use client";
import { motion } from "framer-motion";
import { Figma, Terminal, Cpu, Palette, MapPin, Github, Linkedin, ArrowRight, MousePointer2, Code, Brush } from "lucide-react";
import Image from "next/image";

// Firefly Component (Atmosphere)
const FireflyBackground = () => {
    const fireflies = [...Array(15)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {fireflies.map((fly) => (
                <motion.div
                    key={fly.id}
                    className="absolute w-1 h-1 bg-[#10B981] rounded-none blur-[1px] opacity-40"
                    animate={{
                        y: [0, -100],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{ duration: fly.duration, repeat: Infinity, delay: fly.delay }}
                    style={{ left: fly.left, top: fly.top }}
                />
            ))}
        </div>
    );
};

export default function About() {
    return (
        <section id="about" className="relative z-50 min-h-screen bg-[#003329] py-24 px-4 flex items-center justify-center overflow-hidden">

            {/* Background: Angular gradient slices */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#10B981]/5 to-transparent pointer-events-none" />
            <FireflyBackground />

            {/* THE GRID LAYOUT EXPLAINED:
         12 Columns Total.
         Row 1: Bio (8 cols) | Stats (4 cols)
         Row 2: Bio (continues) | Image (4 cols starts)
         Row 3: Tech Stack (8 cols) | Image (continues)
      */}
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(100px,auto)] relative z-10">

                {/* --- BLOCK 1: MAIN BIO (Spans 8 cols, 2 rows) --- */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-8 md:row-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 flex flex-col justify-between hover:border-[#10B981]/50 transition-all duration-300 group h-full"
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#10B981] rotate-45" /> {/* Diamond Shape */}
                            <span className="text-sm font-bold text-[#10B981] tracking-widest font-oswald">ABOUT_ME</span>
                        </div>

                        <h2 className="text-4xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter font-oswald uppercase">
                            Logic Meets <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#6EE7B7]">Artistry.</span>
                        </h2>

                        <p className="text-emerald-100/70 text-lg leading-relaxed max-w-2xl font-light border-l-2 border-[#10B981]/30 pl-6">
                            I'm <b>Yogita Kumari</b>, a pre-final year student at <b>IIIT Manipur</b>.
                            I treat code like architecture—building strong, angular foundations for fluid, organic user experiences.
                            From <span className="text-white font-bold">Machine Learning</span> models to <span className="text-white font-bold">Figma</span> prototypes, I bridge the gap between data and design.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 mt-12">
                        {/* Wrap the button in an anchor tag pointing to your file in /public */}
                        <a
                            href="\Yogita_Resume(3).pdf"
                            download="Yogita_Kumari_Resume.pdf" // This forces the browser to download it instead of opening it
                            className="flex items-center gap-3 text-sm font-bold text-[#003329] bg-[#10B981] px-8 py-4 hover:bg-white hover:text-black transition-all hover:translate-x-1 uppercase tracking-wider cursor-pointer"
                        >
                            Download Resume <ArrowRight size={18} />
                        </a>
                        <div className="flex gap-3">
                            <a href="https://github.com/yogitaranwa" className="p-4 bg-white/5 border border-white/10 text-white hover:bg-[#10B981] hover:text-[#003329] transition-all"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/yogita-kumari-090277297/" className="p-4 bg-white/5 border border-white/10 text-white hover:bg-[#10B981] hover:text-[#003329] transition-all"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </motion.div>

                {/* --- BLOCK 2: STATS (Spans 4 cols, 1 row) --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-4 bg-[#002b22] border border-white/10 p-8 flex flex-col justify-center relative group h-full"
                >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#10B981]/30" />

                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-[#10B981]">
                                <MapPin size={18} />
                                <h3 className="text-sm font-bold tracking-widest uppercase">Location</h3>
                            </div>
                            <p className="text-white text-xl font-oswald tracking-wide">MANIPUR, INDIA</p>
                        </div>

                        <div className="w-full h-px bg-white/10" />

                        <div>
                            <div className="flex items-center gap-2 mb-2 text-[#10B981]">
                                <Terminal size={18} />
                                <h3 className="text-sm font-bold tracking-widest uppercase">Education</h3>
                            </div>
                            <p className="text-white text-xl font-oswald tracking-wide">B.TECH CSE (2023-27)</p>
                        </div>
                    </div>
                </motion.div>

                {/* --- BLOCK 3: PROFILE IMAGE (Spans 4 cols, 2 rows) --- */}
                {/* Note: This visually appears in Row 2, Col 9 on desktop */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-4 md:row-span-2 relative min-h-[400px] md:min-h-full border border-white/10 group overflow-hidden"
                >
                    {/* Sharp Image Container */}
                    <div className="absolute inset-0 bg-[#001e18]">
                        <Image
                            src="/pfp.jpeg"
                            alt="Yogita"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003329] via-transparent to-transparent opacity-90" />

                    <div className="absolute bottom-0 left-0 w-full p-8">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                            </span>
                            <span className="text-[#10B981] text-xs font-bold uppercase tracking-widest">Available</span>
                        </div>
                        <p className="text-white font-bold text-2xl font-oswald uppercase tracking-wide leading-none">
                            Open for <br /> Internships
                        </p>
                    </div>
                </motion.div>

                {/* --- BLOCK 4: TECH STACK (Spans 8 cols, 1 row) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-8 bg-white/5 border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-8 h-full"
                >
                    <div className="shrink-0 text-left">
                        <div className="flex items-center gap-2 mb-1">
                            <MousePointer2 size={16} className="text-[#10B981]" />
                            <h3 className="text-lg font-bold text-white font-oswald tracking-wide">ARSENAL</h3>
                        </div>
                        <p className="text-xs text-emerald-100/50 uppercase tracking-widest">My Tools</p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-end">
                        {[
                            { icon: Figma, label: "FIGMA" },
                            { icon: Palette, label: "CANVA" },
                            { icon: Terminal, label: "PYTHON" },
                            { icon: Github, label: "GIT" },
                            { icon: Code, label: "C" },
                            { icon: Code, label: "C++" },
                            { icon: Cpu, label: "DSA" },
                            { icon: Brush, label: "ADOBE" },
                        ].map((tool, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-[#002b22] border border-[#10B981]/20 px-5 py-3 hover:border-[#10B981] hover:bg-[#10B981] group/tag transition-all cursor-default">
                                <tool.icon size={16} className="text-[#10B981] group-hover/tag:text-[#003329] transition-colors" />
                                <span className="text-sm font-bold text-white group-hover/tag:text-[#003329] tracking-wider font-oswald transition-colors">{tool.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}