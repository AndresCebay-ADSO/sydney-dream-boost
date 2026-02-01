import heroImage from "@/assets/hero.webp";
import sidneyMeta from "@/assets/sidney-1.jpg";
import camisetaImage from "@/assets/camisa-pecho.png";
import sidneyOpera from "@/assets/sidney-2.avif";

const galleryItems = [
  {
    title: "Berlín 2025",
    image: heroImage,
  },
  {
    title: "Cruzando la meta",
    image: sidneyMeta,
  },
  {
    title: "Camiseta Legacy",
    image: camisetaImage,
  },
  {
    title: "Destino: Sídney 2026",
    image: sidneyOpera,
  },
];

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

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group aspect-[4/3] bg-neutral-800 overflow-hidden relative"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-white text-lg uppercase tracking-wider font-medium">
                  {item.title}
                </span>
              </div>
            </div>
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
