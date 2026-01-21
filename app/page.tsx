import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* A blank section so you can scroll and see the effect */}
      <section className="h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-dark">My Projects</h2>
          <p className="text-gray-500 mt-2">The mountains above should move as you scroll here.</p>
        </div>
      </section>
    </main>
  );
}