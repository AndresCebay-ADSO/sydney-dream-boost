import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

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
            <button 
              onClick={() => scrollToSection("galeria")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Galería
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
            className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-[280px] bg-background border-border">
          <SheetHeader className="text-left mb-8">
            <SheetTitle className="text-gradient-gold font-display text-xl">
              Team Tincho
            </SheetTitle>
          </SheetHeader>
          
          <nav className="flex flex-col gap-2">
            <button 
              onClick={() => scrollToSection("historia")}
              className="text-left py-3 px-4 rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Historia
            </button>
            <button 
              onClick={() => scrollToSection("producto")}
              className="text-left py-3 px-4 rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Producto
            </button>
            <button 
              onClick={() => scrollToSection("galeria")}
              className="text-left py-3 px-4 rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Galería
            </button>
            
            <div className="pt-4 mt-4 border-t border-border">
              <Button 
                onClick={() => {
                  onOrderClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary text-primary-foreground hover:bg-gold-light font-display font-semibold shadow-gold"
              >
                Reservar ahora
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};