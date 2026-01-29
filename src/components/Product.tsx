import { useState } from "react";
import { Check, Package, Truck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SizeFinder } from "@/components/SizeFinder";
import camisetaImage from "@/assets/camiseta-berlin.png";

interface ProductProps {
  onOrderClick: () => void;
  availableShirts: number;
}

const features = [
  { icon: Package, text: "Material deportivo de alta calidad" },
  { icon: Truck, text: "Envío a domicilio" },
  { icon: Check, text: "Pago contraentrega seguro" },
];

export const Product = ({ 
  onOrderClick, 
  availableShirts 
}: ProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isSizeFinderOpen, setIsSizeFinderOpen] = useState(false);

  return (
    <section id="producto" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Producto Exclusivo</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Camiseta Oficial
              <span className="text-gradient-gold"> Team Tincho</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Edición limitada de 100 unidades. Cada camiseta representa tu apoyo al sueño de Martín.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-card border border-border shadow-glow">
                <img 
                  src={camisetaImage}
                  alt="Camiseta Team Tincho - Road to Sydney 2026"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-secondary animate-pulse" />
                )}
              </div>

              {/* Availability badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border border-primary px-6 py-3 rounded-full shadow-gold">
                <span className="text-sm font-medium">
                  Quedan <span className="text-primary font-bold">{availableShirts}</span> de 100
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Road to Sydney 2026</h3>
                <p className="text-muted-foreground">
                  Camiseta deportiva de alta calidad con diseño exclusivo que representa 
                  el viaje de Martín hacia la Maratón de Sídney.
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-gradient-gold">$80.000</span>
                <span className="text-muted-foreground">COP</span>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Talla única badge */}
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">Talla única</span>
                  <p className="text-sm text-muted-foreground">Diseño versátil que se adapta a todos</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  onClick={onOrderClick}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-gold-light font-display font-semibold text-lg py-6 shadow-gold hover:shadow-glow transition-all duration-300"
                >
                  Reservar ahora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setIsSizeFinderOpen(true)}
                  className="border-border hover:border-primary/50 font-display font-medium text-lg py-6 transition-all duration-300"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  ¿Es para mí?
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                🔒 Tu información está segura. Pago al momento de la entrega.
              </p>

              {/* Size Finder Modal */}
              <SizeFinder 
                open={isSizeFinderOpen}
                onClose={() => setIsSizeFinderOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
