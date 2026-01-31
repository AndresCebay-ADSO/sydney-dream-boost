import { useState } from "react";
import { Check, Package, Truck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SizeFinder } from "@/components/SizeFinder";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import camisetaImage from "@/assets/camiseta-berlin.png";
import camisaPecho from "@/assets/camisa-pecho.png";
import camisaEspalda from "@/assets/camisa-espalda.png";
import camisaDetalle from "@/assets/camisa-detalle.jpg";

interface ProductProps {
  onOrderClick: () => void;
}

const features = [
  { icon: Package, text: "Material deportivo de alta calidad" },
  { icon: Truck, text: "Envío a domicilio" },
  { icon: Check, text: "Pago contraentrega seguro" },
];

const productImages = [
  { src: camisetaImage, alt: "Camiseta Team Tincho - Vista principal" },
  { src: camisaPecho, alt: "Camiseta Team Tincho - Vista frontal" },
  { src: camisaEspalda, alt: "Camiseta Team Tincho - Vista trasera" },
  { src: camisaDetalle, alt: "Camiseta Team Tincho - Detalle del diseño" },
];

export const Product = ({ onOrderClick }: ProductProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isSizeFinderOpen, setIsSizeFinderOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const isMobile = useIsMobile();

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <section id="producto" className="py-16 sm:py-24 bg-charcoal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold px-2">
              <span className="text-gradient-gold">Berlin Legacy</span> 2025
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Product Images */}
            <div className="relative">
              {isMobile ? (
                /* Mobile Carousel */
                <Carousel className="w-full">
                  <CarouselContent>
                {productImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-card border border-border shadow-glow">
                          <img 
                            src={image.src}
                            alt={image.alt}
                            className={`w-full h-full object-contain transition-opacity duration-500 ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => handleImageLoad(index)}
                          />
                          {!loadedImages.has(index) && (
                            <div className="absolute inset-0 bg-secondary animate-pulse" />
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              ) : (
                /* Desktop Grid with main image and thumbnails */
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-card border border-border shadow-glow">
                    <img 
                      src={productImages[selectedImage].src}
                      alt={productImages[selectedImage].alt}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${loadedImages.has(selectedImage) ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(selectedImage)}
                    />
                    {!loadedImages.has(selectedImage) && (
                      <div className="absolute inset-0 bg-secondary animate-pulse" />
                    )}
                  </div>
                  
                  {/* Thumbnails */}
                  <div className="grid grid-cols-4 gap-3">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          selectedImage === index 
                            ? 'border-primary shadow-gold' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Product Details */}
            <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">Road to Sydney 2026</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Camiseta deportiva de alta calidad con diseño exclusivo que representa 
                  el viaje de Martín hacia la Maratón de Sídney.
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold">$80.000</span>
                <span className="text-sm sm:text-base text-muted-foreground">COP</span>
              </div>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Talla única badge */}
              <div className="p-3 sm:p-4 rounded-lg bg-primary/10 border border-primary/30 flex items-center gap-2 sm:gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium text-sm sm:text-base text-foreground">Talla única</span>
                  <p className="text-xs sm:text-sm text-muted-foreground">Diseño versátil que se adapta a todos</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button 
                  size="lg" 
                  onClick={onOrderClick}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-gold-light font-display font-semibold text-base sm:text-lg py-5 sm:py-6 shadow-gold hover:shadow-glow transition-all duration-300"
                >
                  Reservar ahora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setIsSizeFinderOpen(true)}
                  className="border-border hover:border-primary/50 font-display font-medium text-base sm:text-lg py-5 sm:py-6 transition-all duration-300"
                >
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  ¿Es para mí?
                </Button>
              </div>

              <p className="text-center text-xs sm:text-sm text-muted-foreground">
                🔒 Tu información está segura. Pago al momento de la entrega.
              </p>

              {/* Inspirational quote */}
              <p className="text-center text-xs sm:text-sm italic text-muted-foreground pt-4 border-t border-border">
                "El único que define lo que puedes lograr eres tú"
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
