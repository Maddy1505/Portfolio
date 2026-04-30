import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "meganathanmm197@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 75300 26010" },
  { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu, India" },
];

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbwu8aoHbpHj-NY1cKqyS339i7U4iIm_qknMTcYyGEYFdOtWYN3cpy8aSqQ2RSQiMpf-/exec";
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch(scriptURL, { 
      method: "POST", 
      body: JSON.stringify(data), 
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      }
    })
      .then((response) => {
        setSending(false);
        toast.success("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        setSending(false);
        toast.error("Something went wrong. Please try again later.");
        console.error("Error!", error.message);
      });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-pill-blue">
            <span className="h-1 w-6 bg-pill-blue rounded-full" /> GET IN TOUCH
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Let's build something <span className="text-gradient-contact">unforgettable</span>.
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? Drop a message — I reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 glass-card rounded-3xl p-7 space-y-6 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative space-y-1">
              <h3 className="font-display text-xl font-semibold">Contact info</h3>
              <p className="text-sm text-muted-foreground">Reach me through any channel.</p>
            </div>
            <div className="relative space-y-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-3 group">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                    <c.icon size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative pt-4 border-t border-border/50">
              <div className="text-xs text-muted-foreground mb-3">FOLLOW ME</div>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="h-10 w-10 rounded-xl glass grid place-items-center hover:bg-gradient-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 glass-card rounded-3xl p-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground">YOUR NAME</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground">EMAIL</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-muted-foreground">SUBJECT</label>
              <input
                type="text"
                name="subject"
                placeholder="Let's work together"
                className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-muted-foreground">MESSAGE</label>
              <textarea
                required
                rows={5}
                name="message"
                placeholder="Tell me about your project..."
                className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow hover:shadow-[0_0_80px_hsl(var(--primary)/0.6)] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



