import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
import p4 from "@/assets/project-4.png";
import p5 from "@/assets/project-5.png";
import p6 from "@/assets/project-6.png";

const projects = [
  {
    img: p1,
    title: "PeakQuest",
    category: "Mobile App",
    description: "Friendly travel application with a modern login screen, destination cards, and offline support built with Flutter.",
    tags: ["Flutter", "Dart", "UI/UX"],
    accent: "from-primary to-primary-glow",
  },
  {
    img: p2,
    title: "Ecommerce Design",
    category: "Mobile App",
    description: "E-Commerce application UI screens featuring wireframes, high-fidelity mockups, and complete user journeys.",
    tags: ["Figma", "UI/UX", "Web"],
    accent: "from-accent to-primary",
  },
  {
    img: p3,
    title: "Driver App",
    category: "Mobile App",
    description: "Comprehensive driver application built using Flutter to manage ride requests, track earnings, and navigate seamlessly.",
    tags: ["Flutter", "Maps API", "Mobile"],
    accent: "from-primary to-accent",
  },
  {
    img: p4,
    title: "EchoYak",
    category: "Mobile App",
    description: "Real-time communication app featuring seamless group chat, interactive stories, and precision meeting calls.",
    tags: ["Flutter", "WebRTC", "UI/UX"],
    accent: "from-accent to-primary-glow",
  },
  {
    img: p5,
    title: "Multi-tenant RAG",
    category: "Web App",
    description: "Enterprise multi-tenant Retrieval-Augmented Generation website for semantic search and AI insights.",
    tags: ["Web", "AI", "RAG"],
    accent: "from-primary-glow to-accent",
  },
  {
    img: p6,
    title: "Multi-tenant RAG App",
    category: "Mobile App",
    description: "Robust Flutter application bringing advanced Multi-tenant RAG AI capabilities to mobile platforms.",
    tags: ["Flutter", "AI", "Mobile"],
    accent: "from-primary to-accent",
  },
];

const ProjectCard = ({ p, i }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], ["7deg", "-7deg"]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], ["-7deg", "7deg"]), { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 1200 }}
      className="group relative glass-card rounded-[2rem] flex flex-col h-full overflow-hidden hover:border-primary/80 hover:shadow-[0_0_40px_-15px_rgba(0,123,255,0.4)] transition-all duration-300"
    >
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20 mix-blend-overlay`} />
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />
        <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs font-mono font-medium tracking-wide">
          {p.category}
        </div>
        <div className="absolute top-4 right-4 h-12 w-12 grid place-items-center rounded-full bg-gradient-primary text-primary-foreground translate-x-2 -translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-glow">
          <ArrowUpRight size={20} />
        </div>
      </div>
      <div className="p-6 flex flex-col grow justify-between" style={{ transform: "translateZ(20px)" }}>
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-all">
            {p.title}
          </h3>
          <p className="text-sm text-foreground/80 leading-relaxed font-medium">{p.description}</p>
        </div>
        
        <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] uppercase font-mono font-bold tracking-wider px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
          <button className="shrink-0 ml-4 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:scale-110 hover:shadow-[0_0_20px_rgba(0,123,255,0.5)] transition-all duration-300">
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };



  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-pill-blue">
              <span className="h-1 w-6 bg-pill-blue rounded-full" /> FEATURED PROJECTS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              A showcase of my <span className="text-gradient-projects">mobile</span> and <span className="text-gradient-projects">web</span> apps.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')} 
                className="h-11 w-11 rounded-full border border-primary/30 bg-background/50 backdrop-blur-md grid place-items-center text-primary hover:bg-primary hover:text-white transition-all hover:shadow-[0_0_15px_rgba(0,123,255,0.4)]"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="h-11 w-11 rounded-full border border-primary/30 bg-background/50 backdrop-blur-md grid place-items-center text-primary hover:bg-primary hover:text-white transition-all hover:shadow-[0_0_15px_rgba(0,123,255,0.4)]"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>

        <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing">
          {projects.map((p, i) => (
            <div key={p.title} className="w-[85vw] sm:w-[380px] lg:w-[420px] shrink-0 snap-start">
              <ProjectCard p={p} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



