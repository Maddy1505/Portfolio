import { motion } from "framer-motion";
import { Award, Coffee, Sparkles, Zap, Smartphone, Code2, Layers } from "lucide-react";
import avatar from "@/assets/ai-avatar.png";

const highlights = [
  { icon: Code2, label: "Clean Code", value: "Scalable architecture" },
  { icon: Zap, label: "High Performance", value: "60fps animations" },
  { icon: Smartphone, label: "Cross-Platform", value: "iOS & Android" },
  { icon: Layers, label: "Modern Stack", value: "Flutter SDK" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md rounded-3xl overflow-hidden glass-card">
            <img
              src={avatar}
              alt="Meganathan Raj"
              loading="lazy"
              width={768}
              height={960}
              className="h-full w-full object-cover shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 max-w-[220px] shadow-elegant">
            <div className="flex items-center gap-2 text-xs font-mono text-accent mb-1">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              currently
            </div>
            <div className="font-display font-semibold">Flutter Developer at Younderbots Company</div>
          </div>
          <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-gradient-primary blur-2xl opacity-60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-pill-blue">
            <span className="h-1 w-6 bg-pill-blue rounded-full" /> ABOUT ME
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.1]">
            Designing <span className="text-gradient-about">intentional</span> products.
            Shipping them in <span className="text-gradient-about">Flutter</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            A passionate and innovative UI/UX Designer and Flutter Developer with hands-on experience in designing and
            developing user-centric digital solutions. I specialize in creating seamless and visually appealing interfaces for web
            and mobile applications, combining my design expertise with efficient coding in Flutter.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="glass-card rounded-2xl p-4 hover:border-primary/40 transition-colors group"
              >
                <h.icon size={20} className="text-accent mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-display font-semibold text-sm">{h.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{h.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



