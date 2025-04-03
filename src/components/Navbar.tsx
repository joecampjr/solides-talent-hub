
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-solides-blue flex items-center">
              Solides<span className="text-solides-teal">TalentHub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#modules" className="text-foreground/80 hover:text-solides-blue transition-colors">
              Módulos
            </a>
            <a href="#features" className="text-foreground/80 hover:text-solides-blue transition-colors">
              Recursos
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-solides-blue transition-colors">
              Depoimentos
            </a>
            <Button className="bg-solides-blue hover:bg-solides-dark">
              Solicitar Demo
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-foreground" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-2">
            <a 
              href="#modules" 
              className="py-3 text-foreground/80 hover:text-solides-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Módulos
            </a>
            <a 
              href="#features" 
              className="py-3 text-foreground/80 hover:text-solides-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#testimonials" 
              className="py-3 text-foreground/80 hover:text-solides-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <Button className="mt-3 bg-solides-blue hover:bg-solides-dark">
              Solicitar Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
