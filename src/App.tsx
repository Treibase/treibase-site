import { useEffect, useState } from "react";

export default function App() {
  const [active, setActive] = useState("about");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = ["about", "vision", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* NAV */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10 sticky top-0 backdrop-blur-md bg-black/60 z-50">
        <h1 className="text-xl font-bold tracking-wide">Treibase</h1>

        <nav className="space-x-6 text-sm">
          {["about", "vision", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`transition ${
                active === id
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Building Autonomous <br /> AI Systems
        </h2>

        <p className="mt-6 text-white/60 max-w-xl">
          Treibase is an AI development studio focused on building agents that think,
          decide, and execute real-world workflows.
        </p>

        <button
          onClick={() => scrollToSection("about")}
          className="mt-8 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/80 transition"
        >
          Explore Projects
        </button>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-8 py-20 border-t border-white/10 min-h-[60vh]"
      >
        <h3 className="text-2xl font-semibold mb-4">About Treibase</h3>
        <p className="text-white/60 max-w-2xl">
          Treibase is an independent AI-focused studio building systems that move beyond
          simple responses into autonomous execution.
        </p>
      </section>

      {/* VISION */}
      <section
        id="vision"
        className="px-8 py-20 border-t border-white/10 min-h-[60vh]"
      >
        <h3 className="text-2xl font-semibold mb-4">Vision</h3>
        <p className="text-white/60 max-w-2xl">
          We believe the future of software is agent-driven — where systems understand
          intent and take meaningful actions autonomously.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 py-20 border-t border-white/10 min-h-[60vh]"
      >
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-white/60">Email: isaacprogi@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-white/40 py-10 border-t border-white/10">
        © {new Date().getFullYear()} Treibase
      </footer>
    </div>
  );
}