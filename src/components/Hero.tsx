import { ArrowDown, MapPin, Calendar, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

interface HeroProps {
  onOrderClick: () => void;
  availableShirts: number;
}

export const Hero = ({ onOrderClick, availableShirts }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Solo <span className="text-primary font-bold">{availableShirts}</span> camisetas disponibles
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Martín Perdomo
            <span className="block text-gradient-gold mt-2">Camino a Sidney 2026</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Un colombiano que representará a su país en una de las 7 maratones más importantes del mundo
          </p>

          {/* Event info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Sídney, Australia</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>30 de agosto, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="w-4 h-4 text-primary" />
              <span>42.195 km</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              onClick={onOrderClick}
              className="bg-primary text-primary-foreground hover:bg-gold-light font-display font-semibold text-lg px-8 py-6 shadow-gold hover:shadow-glow transition-all duration-300"
            >
              Reservar mi camiseta
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-border hover:bg-secondary font-display font-medium text-lg px-8 py-6"
            >
              Conocer la historia
            </Button>
          </div>

          {/* Trust badge */}
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
            💳 Pago contraentrega • Sin riesgos • Pagas cuando recibas tu camiseta
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
