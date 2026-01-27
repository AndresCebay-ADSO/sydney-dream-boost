import { Star, Shield, Truck, Clock } from "lucide-react";

interface SocialProofProps {
  availableShirts: number;
}

export const SocialProof = ({ availableShirts }: SocialProofProps) => {
  const soldCount = 100 - availableShirts;
  const progressPercentage = (soldCount / 100) * 100;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress section */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Progreso de la campaña</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              <span className="text-gradient-gold">{soldCount}</span> de 100 camisetas vendidas
            </h2>

            {/* Progress bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="h-4 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000 ease-out shadow-gold"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>{soldCount} vendidas</span>
                <span>{availableShirts} disponibles</span>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Shield, 
                title: "Pago Seguro", 
                description: "Pagas solo cuando recibes tu camiseta" 
              },
              { 
                icon: Truck, 
                title: "Envío Nacional", 
                description: "Entregamos a cualquier ciudad de Colombia" 
              },
              { 
                icon: Star, 
                title: "Calidad Premium", 
                description: "Material deportivo de alta calidad" 
              },
              { 
                icon: Clock, 
                title: "Edición Limitada", 
                description: "Solo 100 unidades disponibles" 
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial / Message */}
          <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-card border border-primary/20 shadow-glow">
            <p className="text-xl sm:text-2xl font-display text-foreground italic">
              "Cada camiseta vendida me acerca un paso más a Sídney. Gracias por creer en este sueño."
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                MP
              </div>
              <div className="text-left">
                <p className="font-semibold">Martín Perdomo</p>
                <p className="text-sm text-muted-foreground">Atleta Colombiano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
