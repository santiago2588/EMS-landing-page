import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/#caracteristicas", text: "Características" },
    { to: "/#beneficios", text: "Beneficios" },
    { to: "/casos-de-exito", text: "Casos de Éxito" },
    { to: "/calculadora-ahorro", text: "Calculadora" },
    { to: "/blog", text: "Blog" },
    { to: "/#precios", text: "Precios" }
  ];
  
  const handleNavLinkClick = (e, to) => {
    setIsMobileMenuOpen(false);
    if (to.startsWith("/#")) {
      e.preventDefault();
      const targetId = to.split("#")[1];
      
      if (location.pathname !== '/') {
        // Navigate to home page first, then scroll
        // This might require a more complex solution if instant scroll is needed after navigation
        // For simplicity, we'll navigate and let the user scroll or handle it on page load.
        // A better UX would involve passing state or using a context.
        window.location.href = `/${to}`; // Or useNavigate hook
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };


  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">EP</span>
              </div>
              <span className="font-bold text-xl">EnergyPro</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.text}
                to={link.to}
                onClick={(e) => handleNavLinkClick(e, link.to)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Iniciar Sesión
            </Button>
            <Button size="sm">Solicitar Demo</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.text}
                  to={link.to}
                  onClick={(e) => handleNavLinkClick(e, link.to)}
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.text}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" size="sm" className="w-full">
                  Iniciar Sesión
                </Button>
                <Button size="sm" className="w-full">
                  Solicitar Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;