import { Heart, Flag, Trophy, Users } from "lucide-react";

export const Story = () => {
  return (
    <section id="historia" className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">La Historia</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Un sueño que cruza
              <span className="text-gradient-gold"> fronteras</span>
            </h2>
          </div>

          {/* Story content */}
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground text-xl font-medium">
              Martín Perdomo es un atleta colombiano que ha dedicado años de su vida al running, 
              superando obstáculos y persiguiendo un sueño que parecía imposible.
            </p>
            
            <p>
              El <strong className="text-foreground">30 de agosto de 2026</strong>, Martín representará a Colombia 
              en la <strong className="text-foreground">Maratón de Sídney</strong>, una de las siete maratones 
              más importantes del mundo y parte del prestigioso circuito World Marathon Majors.
            </p>

            <p>
              Pero llegar hasta allí requiere más que determinación. Los costos de viaje, inscripción 
              y preparación son significativos, y cada camiseta que adquieras es un paso más cerca 
              de hacer realidad este sueño.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Trophy, value: "42.195", label: "Kilómetros", suffix: "km" },
              { icon: Flag, value: "100", label: "Camisetas", suffix: "" },
              { icon: Heart, value: "1", label: "Sueño", suffix: "" },
              { icon: Users, value: "∞", label: "Apoyo", suffix: "" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {stat.value}
                  <span className="text-primary text-lg">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-16 text-center">
            <p className="text-xl sm:text-2xl font-display italic text-foreground">
              "Haz de tu vida un sueño y de tu sueño una realidad"
            </p>
            <cite className="block mt-4 text-primary font-medium">— Martín Perdomo</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
