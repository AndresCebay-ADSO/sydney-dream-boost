import { Heart, Flag, Trophy, Users } from "lucide-react";

export const Story = () => {
  return (
    <section id="historia" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-[0.25em]">HISTORIA</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mt-3 sm:mt-4 px-2">
              Martin, De Berlin
              <span className="text-gradient-gold"> a Sidney</span>
            </h2>
          </div>

          {/* Story content */}
          <div className="space-y-5 sm:space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            <p className="text-foreground text-lg sm:text-xl font-medium leading-relaxed">
              Martín es un joven de 18 años de La Plata, Huila, que sin tener muchos recursos decidió 
              tomarse en serio el deporte y ponerse una meta enorme: correr la Maratón de Berlín.
            </p>
            
            <p>
              Empezó entrenando duro y mostrando su proceso en <strong className="text-foreground">TikTok</strong>, 
              <strong className="text-foreground"> Instagram</strong> y <strong className="text-foreground">YouTube</strong>. 
              Poco a poco la gente del pueblo lo fue conociendo y creyendo en él, tanto que comenzó a tocar 
              puertas en tiendas, restaurantes y empresas locales hasta conseguir patrocinio.
            </p>

            <p>
              Con ese apoyo viajó a Berlín, corrió la maratón, la terminó y regresó a Colombia habiendo 
              cumplido su sueño. <strong className="text-foreground">Lejos de conformarse</strong>, ahora ya 
              está trabajando por su siguiente reto: correr la <strong className="text-foreground">Maratón de Sídney</strong>.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-10 sm:mt-16">
            {[
              { icon: Trophy, value: "42.195", label: "Kilómetros", suffix: "km" },
              { icon: Flag, value: "100", label: "Camisetas", suffix: "" },
              { icon: Heart, value: "1", label: "Sueño", suffix: "" },
              { icon: Users, value: "∞", label: "Apoyo", suffix: "" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-4" />
                <div className="font-display text-xl sm:text-3xl font-bold text-foreground">
                  {stat.value}
                  <span className="text-primary text-sm sm:text-lg">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-10 sm:mt-16 text-center px-2">
            <p className="text-lg sm:text-2xl font-display italic text-foreground">
              "Haz de tu vida un sueño y de tu sueño una realidad"
            </p>
            <cite className="block mt-3 sm:mt-4 text-primary font-medium text-sm sm:text-base">— Martín Perdomo</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
