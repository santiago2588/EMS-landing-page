
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Small",
    annualPrice: "500",
    implementationFee: "150",
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
    annualPrice: "1,000",
    implementationFee: "400",
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
    annualPrice: "5,000",
    implementationFee: "1,000",
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
            Modelo transparente: Tarifa de implementación única + Suscripción anual escalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border bg-card p-6 shadow-sm ${plan.popular ? 'border-brand-g7 shadow-[0_0_0_3px_rgba(0,114,151,0.08)] dark:shadow-none' : ''
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
                {plan.price === "Personalizado" ? (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">${plan.annualPrice}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">/año</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500 font-medium">
                      + ${plan.implementationFee} Implementación única
                    </div>
                  </>
                )}
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

        {/* Complementary Section: What's Included */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900/60 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-g7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">¿Qué cubre la Implementación?</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <Check size={18} className="mr-2 text-brand-g7 mt-1 shrink-0" />
                <span>Configuración inicial de la plataforma y carga de assets.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="mr-2 text-brand-g7 mt-1 shrink-0" />
                <span>Migración de datos históricos (si aplica).</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="mr-2 text-brand-g7 mt-1 shrink-0" />
                <span>Capacitación personalizada para tu equipo operativo.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="mr-2 text-brand-g7 mt-1 shrink-0" />
                <span>Configuración de alertas y reportes a medida.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-900/60 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Beneficios de la Suscripción</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <Check size={18} className="mr-2 text-green-500 mt-1 shrink-0" />
                <span>Acceso continuo a la plataforma y actualizaciones.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="mr-2 text-green-500 mt-1 shrink-0" />
                <span>Almacenamiento seguro de datos en la nube.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="mr-2 text-green-500 mt-1 shrink-0" />
                <span>Soporte técnico prioritario y mantenimiento.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="mr-2 text-green-500 mt-1 shrink-0" />
                <span>Monitoreo de seguridad y backups automáticos.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Final CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-brand-g7 px-6 py-12 md:px-12 text-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para optimizar tu consumo energético?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Agenda una demostración hoy mismo y descubre cómo EnergyPro puede reducir tus costos operativos desde el primer mes.
            </p>
            <Button
              size="lg"
              className="bg-white text-brand-g7 hover:bg-blue-50 font-semibold px-8"
            >
              Solicitar Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
