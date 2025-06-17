
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  const benefitsList = [
    "Reducción inmediata de costos operativos",
    "Cumplimiento de normativas energéticas y ambientales",
    "Identificación de ineficiencias y áreas de mejora",
    "Prolongación de la vida útil de equipos y maquinaria",
    "Mejora de la imagen corporativa y sostenibilidad",
    "Toma de decisiones basada en datos precisos",
    "Optimización de procesos de producción",
    "Reducción de la huella de carbono"
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-[550px]">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <img  alt="Análisis energético en planta manufacturera" className="w-full h-auto" src="https://images.unsplash.com/photo-1697869153348-d20999a62fcb" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold mb-6">
              Beneficios <span className="gradient-text">Tangibles</span> para tu Industria
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Implementar EnergyPro en tu planta manufacturera no solo reduce costos, sino que transforma tu operación hacia un modelo más eficiente y sostenible.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefitsList.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <Check size={14} className="text-blue-600" />
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button className="group">
              Descubrir más beneficios
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
