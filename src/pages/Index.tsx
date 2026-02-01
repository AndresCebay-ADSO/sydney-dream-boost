import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Product } from "@/components/Product";
import { Gallery } from "@/components/Gallery";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";
import { OrderModal } from "@/components/OrderModal";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOrderClick={handleOrderClick} />
      
      <main>
        <Hero onOrderClick={handleOrderClick} />
        
        <Story />
        
        <Product onOrderClick={handleOrderClick} />

        <Gallery />
        
        <SocialProof />
      </main>

      <Footer />

      {/* Order Modal */}
      <OrderModal 
        open={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onOrderComplete={() => {}}
      />

      {/* Scroll to Product Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
