import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Services from "@/components/portfolio/Services";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Custom cursor glow (desktop only)
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    setIsFine(window.matchMedia("(pointer: fine)").matches);
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    document.title = "Meganathan Raj";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Portfolio of Meganathan Raj",
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen noise">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-primary z-[60] origin-left"
      />

      {/* Cursor glow */}
      {isFine && (
        <div
          aria-hidden
          className="pointer-events-none fixed z-40 h-[500px] w-[500px] rounded-full blur-3xl transition-transform duration-300"
          style={{
            left: pos.x - 250,
            top: pos.y - 250,
            background: "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 60%)",
          }}
        />
      )}

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;



