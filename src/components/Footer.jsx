import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const quickLinks = [
    { to: "/#caracteristicas", text: "Características" },
    { to: "/#beneficios", text: "Beneficios" },
    { to: "/casos-de-exito", text: "Casos de Éxito" },
    { to: "/calculadora-ahorro", text: "Calculadora" },
    { to: "/#precios", text: "Precios" },
    { to: "/blog", text: "Blog" } 
  ];

  const resourceLinks = [
    { to: "/ayuda", text: "Centro de Ayuda" },
    { to: "/documentacion", text: "Documentación" },
    { to: "/webinars", text: "Webinars" }
  ];
  
  const handleNavLinkClick = (e, to) => {
    if (to.startsWith("/#")) {
      e.preventDefault();
      const targetId = to.split("#")[1];
      
      if (location.pathname !== '/') {
         window.location.href = `/${to}`;
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">EP</span>
              </div>
              <span className="font-bold text-xl text-white">EnergyPro</span>
            </Link>
            <p className="mb-4 text-gray-400">
              Soluciones avanzadas de gestión energética para la industria manufacturera.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <p className="font-semibold text-white mb-4">Enlaces Rápidos</p>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                 <li key={link.text}>
                    <Link 
                      to={link.to} 
                      onClick={(e) => handleNavLinkClick(e, link.to)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
          
          <div>
            <p className="font-semibold text-white mb-4">Recursos</p>
            <ul className="space-y-2">
              {resourceLinks.map(link => (
                <li key={link.text}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
               <li>
                <Link to="/casos-de-exito" className="text-gray-400 hover:text-white transition-colors">Casos de Éxito</Link>
              </li>
              <li>
                <Link to="/calculadora-ahorro" className="text-gray-400 hover:text-white transition-colors">Calculadora de Ahorro</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="font-semibold text-white mb-4">Contacto</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-blue-500" />
                <span>Calle Innovación, 123<br />28001 Madrid, España</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-500" />
                <span>+34 91 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-500" />
                <span>info@energypro.es</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EnergyPro. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/politica-privacidad" className="text-sm text-gray-500 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/terminos-servicio" className="text-sm text-gray-500 hover:text-white transition-colors">
              Términos de Servicio
            </Link>
            <Link to="/cookies" className="text-sm text-gray-500 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;