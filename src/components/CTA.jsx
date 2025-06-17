
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: "Básico",
    price: "499",
    description: "Ideal para pequeñas plantas manufactureras",
    features: [
      "Monitoreo en tiempo real",
      "Alertas básicas",
      "Informes mensuales",
      "Soporte por email"
    ]
  },
  {
    name: "Profesional",
    price: "999",
    description: "Para plantas medianas con necesidades avanzadas",
    features: [
      "Todo lo del plan Básico",
      "Análisis predictivo",
      "Detección de fugas",
      "Soporte prioritario 24/5"
    ],
    popular: true
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    description: "Solución completa para grandes operaciones",
    features: [
      "Todo lo del plan Profesional",
      "Integración con sistemas existentes",
      "Consultoría energética",
      "Soporte dedicado 24/7"
    ]
  }
];

const CTA = () => {
  return (
    <section id="precios" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Planes <span className="gradient-text">Flexibles</span> para tu Empresa
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Ofrecemos soluciones adaptadas a las necesidades específicas de tu planta manufacturera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border bg-card p-6 shadow-sm ${
                plan.popular ? 'border-blue-500 shadow-blue-100 dark:shadow-none' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                  Más Popular
                </div>
              )}
              
              <div className="mb-5">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{plan.description}</p>
              </div>
              
              <div className="mb-5">
                <div className="flex items-baseline">
                  {plan.price !== "Personalizado" ? (
                    <>
                      <span className="text-3xl font-bold">€{plan.price}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">/mes</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold">{plan.price}</span>
                  )}
                </div>
              </div>
              
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
              >
                {plan.price === "Personalizado" ? "Contactar" : "Comenzar"}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu gestión energética?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Únete a cientos de empresas manufactureras que ya están ahorrando energía y reduciendo costos con EnergyPro.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 group">
            Solicitar una demostración personalizada
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
