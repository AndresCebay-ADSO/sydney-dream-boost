import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Product } from "@/components/Product";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";
import { OrderModal } from "@/components/OrderModal";

const Index = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [availableShirts, setAvailableShirts] = useState(87);

  const handleOrderClick = () => {
    setIsOrderModalOpen(true);
  };

  const handleOrderComplete = () => {
    setAvailableShirts(prev => Math.max(0, prev - 1));
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
          availableShirts={availableShirts}
        />
        
        <SocialProof availableShirts={availableShirts} />
      </main>

      <Footer />

      {/* Order Modal */}
      <OrderModal 
        open={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
};

export default Index;
