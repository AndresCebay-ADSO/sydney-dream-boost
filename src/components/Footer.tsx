import { Heart, Instagram, Youtube, Facebook } from "lucide-react";

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

export const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal border-t border-border">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo / Brand */}
          <div className="mb-6">
            <h3 className="font-display text-2xl font-bold">
              <span className="text-gradient-gold">Team Tincho</span>
            </h3>
            <p className="text-muted-foreground mt-2">Road to Sydney 2026</p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://www.youtube.com/@paracutiti" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/tincho___________/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@martin_perdomo25" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/people/Mart%C3%ADn-Perdomo/61572307716831/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Team Tincho. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-accent" /> en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
};
