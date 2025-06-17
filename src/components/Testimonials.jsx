
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "EnergyPro transformó nuestra operación. Redujimos nuestro consumo energético en un 35% en solo 6 meses y mejoramos significativamente nuestra huella ambiental.",
    author: "Carlos Méndez",
    position: "Director de Operaciones",
    company: "Industrias Metalúrgicas del Norte",
    rating: 5
  },
  {
    quote: "La capacidad de monitorear en tiempo real cada máquina nos ha permitido identificar ineficiencias que nunca hubiéramos detectado. El ROI fue mucho más rápido de lo esperado.",
    author: "Ana Martínez",
    position: "Gerente de Planta",
    company: "Textiles Modernos S.A.",
    rating: 5
  },
  {
    quote: "El soporte técnico es excepcional. Nos ayudaron a personalizar la plataforma para nuestras necesidades específicas y siempre están disponibles cuando los necesitamos.",
    author: "Miguel Rodríguez",
    position: "Jefe de Mantenimiento",
    company: "Alimentos Procesados del Sur",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Lo que dicen nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Empresas líderes en el sector manufacturero confían en EnergyPro para optimizar su consumo energético.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
