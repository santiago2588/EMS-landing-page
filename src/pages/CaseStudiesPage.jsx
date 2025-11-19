import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, TrendingUp, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    company: "Industrias Metalúrgicas Alpha",
    industry: "Metalurgia",
    challenge: "Altos costos energéticos en hornos de fundición y laminadoras, superando el 20% de los costos operativos.",
    solution: "Implementación de EnergyPro para monitoreo en tiempo real, análisis predictivo y optimización de ciclos de hornos. Instalación de sensores en 50 puntos clave.",
    results: [
      "Reducción del 22% en el consumo energético total en 8 meses.",
      "Ahorro de $150,000 anuales en costos de energía.",
      "Disminución del 15% en emisiones de CO2.",
      "Mejora del 10% en la eficiencia de los hornos."
    ],
    imageSlug: "metal-factory-workers",
    testimonial: "EnergyPro nos dio una visibilidad sin precedentes de nuestro consumo. Ahora tomamos decisiones basadas en datos que impactan directamente nuestra rentabilidad y sostenibilidad.",
    contactPerson: "Elena Vargas, Directora de Operaciones"
  },
  {
    id: 2,
    company: "Textiles Innovadores Beta",
    industry: "Textil",
    challenge: "Consumo energético elevado en maquinaria de teñido y secado, con picos de demanda frecuentes que generaban penalizaciones.",
    solution: "Plataforma EnergyPro para gestión de picos de demanda, optimización de horarios de producción y alertas de consumo anómalo en tiempo real.",
    results: [
      "Reducción del 18% en el consumo energético global.",
      "Eliminación completa de penalizaciones por picos de demanda ($30,000 anuales).",
      "Ahorro de $95,000 anuales en la factura eléctrica.",
      "Mejora de la planificación de la producción gracias a la predictibilidad del consumo."
    ],
    imageSlug: "textile-factory-colorful-threads",
    testimonial: "Con EnergyPro, no solo ahorramos dinero, sino que también mejoramos nuestra planificación y reducimos nuestro impacto ambiental. Es una herramienta esencial.",
    contactPerson: "Ricardo Morales, Gerente de Planta"
  },
  {
    id: 3,
    company: "Alimentos Procesados Gamma",
    industry: "Alimentación",
    challenge: "Alto consumo en sistemas de refrigeración y cadenas de producción continua, con dificultades para identificar puntos de fuga energética.",
    solution: "EnergyPro con módulos de detección de fugas y optimización de sistemas HVAC. Integración con sistema SCADA existente.",
    results: [
      "Identificación y corrección de 5 fugas energéticas principales, ahorrando un 8% del consumo total.",
      "Reducción del 12% en el consumo de los sistemas de refrigeración.",
      "Ahorro total de $70,000 anuales.",
      "Cumplimiento proactivo de normativas ISO 50001."
    ],
    imageSlug: "food-processing-plant-conveyor-belt",
    testimonial: "La capacidad de EnergyPro para integrarse con nuestros sistemas y detectar fugas ocultas ha sido un cambio de juego. Lo recomendamos ampliamente.",
    contactPerson: "Luisa Fernández, Jefa de Sostenibilidad"
  }
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const CaseStudiesPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold mb-4 sm:text-5xl"
          >
            Casos de <span className="gradient-text">Éxito</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Descubre cómo EnergyPro ha ayudado a empresas manufactureras como la tuya a alcanzar sus objetivos de eficiencia energética y sostenibilidad.
          </motion.p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-card p-6 sm:p-8 rounded-xl shadow-lg border border-border"
            >
              <div className={`relative order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                   <img  class="w-full h-full object-cover" alt={`Planta de ${study.industry}`} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
              </div>
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center text-sm text-brand-g7 mb-2">
                  <Building size={16} className="mr-2" />
                  <span>{study.industry}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">{study.company}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4"><strong>Desafío:</strong> {study.challenge}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6"><strong>Solución EnergyPro:</strong> {study.solution}</p>
                
                <h3 className="text-lg font-semibold mb-2">Resultados Clave:</h3>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-brand-g7/10 dark:bg-brand-g7/30">
                        <TrendingUp size={12} className="text-brand-g7" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6 italic border-l-4 border-brand-g7">
                  <p className="text-gray-700 dark:text-gray-300">"{study.testimonial}"</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">- {study.contactPerson}</p>
                </div>
                
                <Button variant="outline" asChild>
                  <Link to={`/casos-de-exito/${study.id}`}>
                    Leer más detalles
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: caseStudies.length * 0.2 + 0.3 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Contacta con nuestro equipo para una demostración personalizada y descubre cómo EnergyPro puede transformar tu operación.
          </p>
          <Button size="lg" className="group" asChild>
            <Link to="/#precios">
              Solicitar Demo
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudiesPage;