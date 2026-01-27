import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOrderClick: () => void;
}

export const Header = ({ onOrderClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-lg sm:text-xl">
            <span className="text-gradient-gold">Team Tincho</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("historia")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Historia
            </button>
            <button 
              onClick={() => scrollToSection("producto")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Producto
            </button>
            <Button 
              onClick={onOrderClick}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-gold-light font-display font-semibold shadow-gold"
            >
              Reservar ahora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("historia")}
                className="text-left py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Historia
              </button>
              <button 
                onClick={() => scrollToSection("producto")}
                className="text-left py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Producto
              </button>
              <Button 
                onClick={() => {
                  onOrderClick();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-primary text-primary-foreground hover:bg-gold-light font-display font-semibold shadow-gold"
              >
                Reservar ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
