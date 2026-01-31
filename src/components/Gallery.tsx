import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroImage from "@/assets/hero.jpg";
import sidneyMeta from "@/assets/sidney-1.jpg";
import camisetaImage from "@/assets/camisa-pecho.png";
import sidneyOpera from "@/assets/sidney-2.avif";

const galleryItems = [
  {
    title: "BERLÍN 2025",
    image: heroImage,
  },
  {
    title: "CRUZANDO LA META",
    image: sidneyMeta,
  },
  {
    title: "CAMISETA LEGACY",
    image: camisetaImage,
  },
  {
    title: "RUMBO A SÍDNEY, AUSTRALIA",
    image: sidneyOpera,
  },
];

const GalleryCard = ({ item }: { item: typeof galleryItems[0] }) => (
  <div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
    {/* Background Image */}
    <img
      src={item.image}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    
    {/* Title */}
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
      <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide">
        {item.title}
      </h3>
    </div>

    {/* Hover effect border */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
  </div>
);

export const Gallery = () => {
  const isMobile = useIsMobile();

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wider">
              El Recorrido
            </h2>
          </div>

          {/* Mobile Carousel */}
          {isMobile ? (
            <Carousel className="w-full">
              <CarouselContent className="-ml-2">
                {galleryItems.map((item, index) => (
                  <CarouselItem key={index} className="pl-2 basis-[85%]">
                    <GalleryCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-6">
                <CarouselPrevious className="static translate-y-0 h-10 w-10" />
                <CarouselNext className="static translate-y-0 h-10 w-10" />
              </div>
            </Carousel>
          ) : (
            /* Desktop Grid */
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {galleryItems.map((item, index) => (
                <GalleryCard key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
