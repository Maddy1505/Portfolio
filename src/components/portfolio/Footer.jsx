import { Github, Linkedin, Twitter, Dribbble, Heart } from "lucide-react";

const quickLinks = ["Home", "About", "Skills", "Projects", "Services", "Contact"];
const socials = [
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Dribbble, href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 mt-12">
      <div className="container py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground font-display font-bold shadow-glow">
              M
            </span>
            <span className="font-display font-semibold text-lg">
              Meganathan Raj<span className="text-accent">.</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            UI/UX Designer & Flutter Developer crafting premium digital products
            from Coimbatore, India. Available for freelance work worldwide.
          </p>
          <div className="flex gap-2 pt-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="h-9 w-9 rounded-xl glass grid place-items-center hover:bg-gradient-primary hover:text-primary-foreground transition-all"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm">Get in touch</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>meganathanmm197@gmail.com</li>
            <li>+91 75300 26010</li>
            <li>Coimbatore, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="container py-5 flex justify-center text-center text-xs text-muted-foreground">
          <div>© 2026 Meganathan Raj. All rights reserved.</div>
          {/* <div className="flex items-center gap-1.5">
            Crafted with <Heart size={12} className="text-primary fill-primary" /> and a lot of coffee.
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;



