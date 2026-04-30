import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 aurora" />
      <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float-slow" />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              {"I'm ".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.03 }}
                  className="inline-block whitespace-pre"
                >
                  {c}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="inline-block text-gradient"
              >
                Meganathan Raj
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="inline-block text-gradient-soft"
                style={{ fontSize: '52px' }}
              >
                UI/UX Designer & Flutter Dev
              </motion.span>
              <span className="text-primary animate-blink">_</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              A passionate and innovative UI/UX Designer and Flutter Developer with hands-on experience in designing and
              developing user-centric digital solutions. I specialize in creating seamless and visually appealing interfaces for web
              and mobile applications, combining my design expertise with efficient coding in Flutter.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-medium text-primary-foreground shadow-glow hover:shadow-[0_0_80px_hsl(var(--primary)/0.6)] transition-all hover:-translate-y-0.5"
            >
              Hire Me
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 font-medium hover:border-primary/50 transition-all hover:-translate-y-0.5"
            >
              <Download size={18} className="text-accent" />
              View Projects
            </a>
          </motion.div>


        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-40 animate-pulse-glow" />
            <div className="absolute inset-8 rounded-full border border-primary/30 animate-spin-slow" />
            <div className="absolute inset-16 rounded-full border border-accent/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            <div className="relative h-full w-full rounded-full glass-card overflow-hidden animate-float">
              <img
                src={heroImg}
                alt="Meganathan Raj illustration"
                className="h-full w-full object-cover"
                width={1024}
                height={1024}
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-4 top-12 glass rounded-2xl px-4 py-2.5 shadow-card"
            >
              <div className="text-xs text-muted-foreground">Figma</div>
              <div className="font-display font-semibold text-sm">Design Expert</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-2 bottom-16 glass rounded-2xl px-4 py-2.5 shadow-card"
            >
              <div className="text-xs text-muted-foreground">Flutter</div>
              <div className="font-display font-semibold text-sm">Certified Dev</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono"
      >
        ↓ scroll
      </motion.div>
    </section>
  );
};

export default Hero;



