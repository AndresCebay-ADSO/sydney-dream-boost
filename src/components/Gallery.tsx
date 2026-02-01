import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Images imports
import heroImage from "@/assets/hero.webp";
import sidneyMeta from "@/assets/sidney-1.jpg";
import sidneyOpera from "@/assets/sidney-2.avif";
import sidney3 from "@/assets/sidney-3.jpg";
import legacy1 from "@/assets/legacy-1.avif";
import legacy2 from "@/assets/legacy-2.avif";
import legacy3 from "@/assets/legacy-3.avif";
import legacy4 from "@/assets/legacy-4.avif";

// Carousel data for each section
const carouselData = [
  {
    title: "Berlín 2025",
    images: [heroImage, sidneyMeta],
  },
  {
    title: "Cruzando la meta",
    images: [sidneyMeta, sidney3],
  },
  {
    title: "Camiseta Legacy",
    images: [legacy1, legacy2, legacy3, legacy4],
  },
  {
    title: "Destino: Sídney 2026",
    images: [sidneyOpera, sidney3, heroImage],
  },
];

interface GalleryCarouselProps {
  title: string;
  images: string[];
}

const GalleryCarousel = ({ title, images }: GalleryCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="group relative">
      {/* Title */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/70 to-transparent">
        <span className="text-white text-lg uppercase tracking-wider font-medium">
          {title}
        </span>
      </div>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden aspect-[4/3] bg-neutral-800">
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 h-full"
            >
              <img
                src={image}
                alt={`${title} - ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 z-10",
          "w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm",
          "flex items-center justify-center",
          "text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50",
          "disabled:opacity-30"
        )}
        disabled={!canScrollPrev && images.length <= 1}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={scrollNext}
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 z-10",
          "w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm",
          "flex items-center justify-center",
          "text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50",
          "disabled:opacity-30"
        )}
        disabled={!canScrollNext && images.length <= 1}
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
};

export const Gallery = () => {
  return (
    <section id="galeria" className="py-16 px-4 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-500 uppercase tracking-[0.25em] text-xs mt-3 block">
            GALERÍA
          </span>
          <h2 className="text-4xl md:text-6xl text-white font-display font-bold mt-3">
            El Recorrido
          </h2>
        </div>

        {/* Carousels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {carouselData.map((carousel, index) => (
            <GalleryCarousel
              key={index}
              title={carousel.title}
              images={carousel.images}
            />
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-3xl text-white/90 italic leading-relaxed">
            "Cada fotografía cuenta una historia de esfuerzo. Cada camiseta vendida escribe un nuevo capítulo."
          </blockquote>
          <p className="mt-5 text-neutral-400 uppercase tracking-wider text-xs">
            — Martín Perdomo
          </p>
        </div>
      </div>
    </section>
  );
};
