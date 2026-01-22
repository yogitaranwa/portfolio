import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";      // Parallax Mountains
import About from "@/components/About";    // Sharp Bento Grid
import Services from "@/components/Services"; // White Technical Grid
import Gallery from "@/components/Gallery";   // Light Blue Marquee
import Experience from "@/components/Experience"; // Dark Timeline
import Contact from "@/components/Contact";   // Dark Form
import GrainOverlay from "@/components/GrainOverlay"; 

export default function Home() {
  return (
    <main className="bg-[#003329] selection:bg-[#10B981] selection:text-[#003329]">
      <Navbar />
      
      {/* 1. HERO: The Hook */}
      <Hero />
      
      {/* 2. ABOUT: The Story (Dark) */}
      <About />
      
      {/* 3. SERVICES: The Skills (White) */}
      <Services />
      
      {/* 5. EXPERIENCE: The Proof (Dark) */}
      <Experience />

      {/* 4. GALLERY: The Work (Light Blue) */}
      <Gallery />
      
      {/* 6. CONTACT: The Action (Dark) */}
      <Contact />

      <GrainOverlay />
      
      {/* FOOTER */}
      <footer className="py-10 text-center bg-[#002b22] border-t border-white/5 relative z-50">
        <p className="text-emerald-100/30 text-xs tracking-[0.2em] font-oswald uppercase">
          © 2026 Yogita Kumari • Engineered in Next.js
        </p>
      </footer>
    </main>
  );
}