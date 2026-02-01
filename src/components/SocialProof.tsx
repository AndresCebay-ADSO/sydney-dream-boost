import { Star, Shield, Truck, Clock } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Trust badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
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
                className="text-center p-4 sm:p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
