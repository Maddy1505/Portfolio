import { motion } from "framer-motion";
import {
  Figma, Palette, Layers, Smartphone, Code2, Database,
  GitBranch, Zap, Users, MessageSquare, Lightbulb, Target,
} from "lucide-react";

const categories = [
  {
    title: "Design",
    color: "from-primary to-primary-glow",
    skills: [
      { icon: Figma, name: "Figma", level: 95 },
      { icon: Palette, name: "Adobe XD", level: 88 },
      { icon: Layers, name: "Prototyping", level: 92 },
      { icon: Smartphone, name: "Mobile UI", level: 96 },
    ],
  },
  {
    title: "Development",
    color: "from-accent to-primary",
    skills: [
      { icon: Code2, name: "Flutter & Dart", level: 93 },
      { icon: Database, name: "Firebase", level: 85 },
      { icon: GitBranch, name: "Git & CI/CD", level: 82 },
      { icon: Database, name: "Rest API Integration", level: 90 },
    ],
  },
  {
    title: "Soft Skills",
    color: "from-primary-glow to-accent",
    skills: [
      { icon: Users, name: "Collaboration", level: 94 },
      { icon: MessageSquare, name: "Communication", level: 90 },
      { icon: Lightbulb, name: "Problem Solving", level: 95 },
      { icon: Target, name: "Product Thinking", level: 40 },
    ],
  },
];

const marqueeTech = [
  { name: "Flutter", slug: "flutter" },
  { name: "Figma", slug: "figma" },
  { name: "Dart", slug: "dart" },
  { name: "VS Code", slug: "vscode" },
  { name: "Android Studio", slug: "androidstudio" },
  { name: "Firebase", slug: "firebase" },
  { name: "Adobe XD", slug: "xd" },
  { name: "Material Design", slug: "materialui" },
  { name: "Supabase", slug: "supabase" },
  { name: "Git", slug: "git" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-pill-blue">
            <Zap size={12} className="text-pill-blue fill-pill-blue/20" /> SKILLS & STACK
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-gradient-skills">Skills</span> & <span className="text-gradient-skills">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass-card rounded-3xl p-6 group hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className={`absolute -top-px left-6 right-6 h-px bg-gradient-to-r ${cat.color} opacity-60`} />
              <h3 className="font-display text-xl font-semibold mb-6">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((s, i) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary/10 text-primary group-hover:text-accent transition-colors">
                      <s.icon size={18} />
                    </span>
                    <span className="text-sm font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative mt-20 py-6 border-y border-border/50 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="marquee gap-10 font-display text-3xl sm:text-5xl font-bold text-muted-foreground/30">
          {[...marqueeTech, ...marqueeTech].map((t, i) => (
            <span key={i} className="flex items-center gap-4 whitespace-nowrap group">
              <img 
                src={`https://skillicons.dev/icons?i=${t.slug}`} 
                alt={t.name}
                className="h-10 w-10 opacity-60 group-hover:opacity-100 transition-all group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <span className="text-2xl font-bold text-muted-foreground/40 group-hover:text-foreground transition-colors">{t.name}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/20 mx-8" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



