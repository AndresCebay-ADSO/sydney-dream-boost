import { MapPin, Trophy, Shirt, Target } from "lucide-react";
import sidneyImage1 from "@/assets/sidney-1.jpg";
import sidneyImage2 from "@/assets/sidney-2.avif";
import sidneyImage3 from "@/assets/sidney-3.jpg";

const galleryItems = [
  {
    icon: Trophy,
    title: "Legacy Berlin 2025",
    description: "El inicio de un legado que trasciende fronteras",
    gradient: "from-amber-500/20 to-primary/20",
  },
  {
    icon: Target,
    title: "Cruzando la meta",
    description: "Cada paso es una victoria, cada meta un nuevo comienzo",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: Shirt,
    title: "Camiseta Legacy",
    description: "Viste el sueño, sé parte de la historia",
    gradient: "from-accent/20 to-amber-500/20",
  },
  {
    icon: MapPin,
    title: "Rumbo a Sídney, Australia",
    description: "2026: donde los sueños se hacen realidad",
    gradient: "from-primary/20 to-amber-500/20",
    images: [sidneyImage1, sidneyImage2, sidneyImage3],
  },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">El Viaje</span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 px-2">
              Una historia
              <span className="text-gradient-gold"> en movimiento</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
              Cada etapa de este viaje representa un paso hacia el sueño más grande
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${item.gradient} border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden`}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  {/* Sydney Images */}
                  {item.images && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {item.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="aspect-square rounded-lg overflow-hidden border border-border/50">
                          <img 
                            src={img} 
                            alt={`Sídney ${imgIndex + 1}`} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-10 sm:mt-16 text-center">
            <p className="text-base sm:text-xl font-display text-muted-foreground italic px-4">
              "Nunca permitas que alguien te diga que tus sueños son imposibles"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
