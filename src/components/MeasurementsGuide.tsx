import { Ruler } from "lucide-react";
import camisetaMedidas from "@/assets/camiseta-medidas.png";

const measurements = [
  { label: "Largo buso", value: "72 cm", description: "De hombro a dobladillo" },
  { label: "Largo manga", value: "23 cm", description: "Desde costura del hombro" },
  { label: "Contorno manga", value: "36 cm", description: "Circunferencia de la manga" },
  { label: "Ancho pecho", value: "44 cm", description: "De axila a axila" },
  { label: "Ancho espalda", value: "44 cm", description: "Parte más ancha" },
  { label: "Cintura", value: "102 cm", description: "Contorno inferior" },
];

export const MeasurementsGuide = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Ruler className="w-5 h-5 text-primary" />
        <h4 className="font-display font-semibold text-foreground">Medidas de la camiseta</h4>
      </div>

      {/* Image with measurement indicators */}
      <div className="relative bg-white rounded-xl overflow-hidden border border-border">
        <img 
          src={camisetaMedidas} 
          alt="Diagrama de medidas de la camiseta" 
          loading="lazy"
          className="w-full h-auto"
        />
        
        {/* Measurement labels overlaid on image */}
        <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full whitespace-nowrap">
          Largo: 72 cm
        </div>
        
        <div className="absolute top-[22%] left-[18%] bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full whitespace-nowrap">
          Manga: 23 cm
        </div>
        
        <div className="absolute top-[32%] right-[12%] bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full whitespace-nowrap">
          Ø Manga: 36 cm
        </div>
        
        <div className="absolute top-[42%] left-[50%] transform -translate-x-1/2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full whitespace-nowrap">
          Pecho: 44 cm
        </div>
        
        <div className="absolute bottom-[12%] left-[50%] transform -translate-x-1/2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full whitespace-nowrap">
          Cintura: 102 cm
        </div>
      </div>

      {/* Measurements list */}
      <div className="grid grid-cols-2 gap-2">
        {measurements.map((item, index) => (
          <div 
            key={index} 
            className="p-3 rounded-lg bg-secondary/50 border border-border"
          >
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-muted-foreground">{item.label}</span>
              <span className="font-display font-bold text-foreground">{item.value}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center italic">
        * Medidas tomadas con la prenda extendida
      </p>
    </div>
  );
};
