import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    year: "2026 — Present",
    title: "Flutter Developer",
    org: "Younderbots Company",
    description: "Developing cross-platform mobile applications using Flutter and Firebase, ensuring high performance and seamless user experience.",
  },
  {
    type: "edu",
    year: "2022 — 2026",
    title: "B.Tech - Information Technology",
    org: "Sri Shanmugha College of Engineering and Technology",
    description: "Specializing in software development and mobile technologies. Expected graduation May 2026.",
  },
  {
    type: "edu",
    year: "2019 — 2022",
    title: "HSC & SSLC",
    org: "Kamaraj Boys Higher Secondary School, Erode",
    description: "Completed secondary and higher secondary education with a focus on science and mathematics.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-pill-blue">
            <span className="h-1 w-6 bg-pill-blue rounded-full" /> JOURNEY
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Experience & <span className="text-gradient-experience">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const Icon = item.type === "work" ? Briefcase : GraduationCap;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative grid md:grid-cols-2 gap-4 md:gap-12 ${isLeft ? "" : "md:[direction:rtl]"}`}
                >
                  <div className={`pl-14 md:pl-0 md:[direction:ltr] ${isLeft ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className="glass-card rounded-[2rem] p-6 hover:border-primary/80 hover:shadow-[0_0_40px_-15px_rgba(0,123,255,0.25)] transition-all duration-300 inline-block text-left max-w-md group">
                      <div className="text-xs font-mono font-semibold tracking-wider text-accent mb-2">{item.year}</div>
                      <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">{item.title}</h3>
                      <div className="text-sm font-medium text-primary/80 mb-3">{item.org}</div>
                      <p className="text-sm text-foreground/80 leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </div>
                  {/* Icon dot */}
                  <div className="absolute left-0 md:left-1/2 top-4 md:-translate-x-1/2 h-12 w-12 rounded-full bg-gradient-primary grid place-items-center shadow-[0_0_20px_rgba(0,123,255,0.4)] [direction:ltr]">
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;



