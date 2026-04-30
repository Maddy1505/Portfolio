import { motion } from "framer-motion";
import { Palette, Smartphone, Code2, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Research-driven interfaces that feel intuitive, accessible, and on-brand.",
    deliverables: ["Wireframes", "Prototypes", "Design systems"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Native-feeling iOS & Android interfaces, optimized for every screen.",
    deliverables: ["iOS & Android", "Motion specs", "Handoff docs"],
  },
  {
    icon: Code2,
    title: "Flutter Development",
    description: "Production-ready cross-platform apps with clean architecture and CI/CD.",
    deliverables: ["One codebase", "Firebase & APIs", "Play Store launch"],
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern marketing sites and landing pages that convert — fast.",
    deliverables: ["Responsive UI", "Framer/React", "SEO-ready"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-pill-blue">
            <span className="h-1 w-6 bg-pill-blue rounded-full" /> WHAT I DO
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Services tailored for <span className="text-gradient-services">ambitious</span> teams.
            {/* Services designed to support <span className="text-gradient-services">forward-thinking</span> and growth-oriented teams. */}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass-card rounded-3xl p-6 group overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-2"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/30 transition-colors" />
              <div className="relative space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                  <s.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[3.5rem]">
                  {s.description}
                </p>
                <ul className="space-y-1.5 pt-2 border-t border-border/50">
                  {s.deliverables.map((d) => (
                    <li key={d} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all"
                >
                  Start a project <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



