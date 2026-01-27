import { Heart, Instagram, Mail } from "lucide-react";

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
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contacto@teamtincho.com" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
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
