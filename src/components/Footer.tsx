import { MapPin, Instagram, Youtube, Facebook } from "lucide-react";

// TikTok icon component (no disponible en lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Historia", href: "#historia" },
  { label: "Camiseta", href: "#producto" },
  { label: "Galería", href: "#galeria" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/tincho___________/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/people/Mart%C3%ADn-Perdomo/61572307716831/", label: "Facebook" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@martin_perdomo25", label: "TikTok" },
  { icon: Youtube, href: "https://www.youtube.com/@paracutiti", label: "YouTube" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container px-4 sm:px-6 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Brand section */}
            <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                Team Tincho
              </h3>
              <div className="w-10 h-1 bg-primary rounded-full mb-3" />
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 max-w-sm">
                Apoya a Martín Perdomo en su camino hacia la Maratón de Sídney 2026.
              </p>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>La Plata</span>
                <span className="text-primary">→</span>
                <span>Sidney</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Navegación
              </h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="md:col-span-1">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Redes Sociales
              </h4>

              {/* Social icons */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container px-4 sm:px-6 py-4 sm:py-6">
          <div className="max-w-6xl mx-auto text-center text-xs sm:text-sm text-muted-foreground">
            <p>
              Hecho con poco tiempo por Andrés Cebay y Camero Bastidas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
