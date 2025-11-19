
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: "Small",
    price: "50",
    description: "Hasta 10 assets/medidores",
    features: [
      "Monitoreo en tiempo real",
      "Alertas básicas",
      "Informes mensuales",
      "Soporte por email"
    ]
  },
  {
    name: "Medium",
    price: "100",
    description: "Hasta 50 assets/medidores",
    features: [
      "Todo lo del plan Small",
      "Reportes avanzados",
      "Análisis predictivo básico",
      "Soporte prioritario en horario laboral"
    ],
    popular: true
  },
  {
    name: "Large",
    price: "~500",
    description: "Hasta varios cientos de assets/medidores",
    features: [
      "Todo lo del plan Medium",
      "Capas de alerta avanzadas",
      "Detección de fugas/anomalías",
      "SLA de soporte extendido"
    ]
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Ilimitado (número de assets/medidores)",
    features: [
      "Todo lo del plan Large",
      "Integraciones a medida",
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
            Estructura de <span className="gradient-text">Precios y Monetización</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Modelos basados en la cantidad de assets/medidores, pensados para escalar con tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border bg-card p-6 shadow-sm ${
                plan.popular ? 'border-brand-g7 shadow-[0_0_0_3px_rgba(0,114,151,0.08)] dark:shadow-none' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-brand-g7 px-3 py-1 text-xs font-medium text-white">
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
                      <span className="text-3xl font-bold">${plan.price}</span>
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

        {/* Detalle de estructura y notas de precios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white/60 dark:bg-gray-800/50 border p-8 md:p-12 text-gray-900 dark:text-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Detalles del modelo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h4 className="font-semibold mb-2">Modelo propuesto por assets/medidores</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                <li>Small: hasta 10 assets</li>
                <li>Medium: hasta 50 assets</li>
                <li>Large: hasta varios cientos assets</li>
                <li>Enterprise: ilimitado</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Rangos de precios estimados</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                <li>Pequeñas: $50/mes</li>
                <li>Medianas: $100/mes</li>
                <li>Grandes: ~$500/mes</li>
              </ul>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-6 text-sm md:text-base">
            <ul className="list-disc pl-5 space-y-2">
              <li>Tarifa de implementación única + cuota anual recurrente</li>
              <li>Costos adicionales por assets extra si exceden límites del plan</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="group">
              Solicitar una demostración personalizada
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
