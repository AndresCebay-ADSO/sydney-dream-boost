import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Product } from "@/components/Product";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";
import { SizeFinder } from "@/components/SizeFinder";
import { OrderModal, OrderData } from "@/components/OrderModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [isSizeFinderOpen, setIsSizeFinderOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [availableShirts, setAvailableShirts] = useState(87);
  const { toast } = useToast();

  const handleOrderClick = () => {
    if (!selectedSize) {
      // Scroll to product section if no size selected
      document.getElementById("producto")?.scrollIntoView({ behavior: "smooth" });
      toast({
        title: "Selecciona una talla",
        description: "Por favor elige tu talla antes de continuar.",
        variant: "destructive",
      });
      return;
    }
    setIsOrderModalOpen(true);
  };

  const handleOrderComplete = (order: OrderData) => {
    // Simular reducción de stock
    setAvailableShirts(prev => Math.max(0, prev - 1));
    console.log("Pedido completado:", order);
    // Aquí se integraría con el backend para guardar el pedido
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOrderClick={handleOrderClick} />
      
      <main>
        <Hero 
          onOrderClick={handleOrderClick} 
          availableShirts={availableShirts}
        />
        
        <Story />
        
        <Product 
          onOrderClick={handleOrderClick}
          onSizeFinderClick={() => setIsSizeFinderOpen(true)}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
          availableShirts={availableShirts}
        />
        
        <SocialProof availableShirts={availableShirts} />
      </main>

      <Footer />

      {/* Modals */}
      <SizeFinder 
        open={isSizeFinderOpen}
        onClose={() => setIsSizeFinderOpen(false)}
        onSizeSelect={setSelectedSize}
      />

      <OrderModal 
        open={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedSize={selectedSize}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
};

export default Index;
