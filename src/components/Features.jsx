
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  BellRing, 
  Cpu, 
  LineChart, 
  Settings, 
  Zap, 
  AlertTriangle, 
  Lightbulb
} from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
    title: "Monitoreo en Tiempo Real",
    description: "Visualiza el consumo energético de cada máquina y proceso en tiempo real con actualizaciones instantáneas."
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-600" />,
    title: "Análisis Predictivo",
    description: "Algoritmos de IA que predicen patrones de consumo y sugieren ajustes para optimizar la eficiencia."
  },
  {
    icon: <BellRing className="h-10 w-10 text-blue-600" />,
    title: "Alertas Inteligentes",
    description: "Recibe notificaciones inmediatas sobre anomalías o picos de consumo para actuar rápidamente."
  },
  {
    icon: <LineChart className="h-10 w-10 text-blue-600" />,
    title: "Informes Detallados",
    description: "Genera reportes personalizados sobre consumo, costos y eficiencia para toma de decisiones."
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-blue-600" />,
    title: "Detección de Fugas",
    description: "Identifica automáticamente fugas energéticas y áreas de mejora en tus instalaciones."
  },
  {
    icon: <Settings className="h-10 w-10 text-blue-600" />,
    title: "Automatización",
    description: "Configura reglas para automatizar ajustes en equipos según condiciones predefinidas."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
    title: "Recomendaciones Personalizadas",
    description: "Recibe sugerencias específicas para tu industria basadas en mejores prácticas del sector."
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: "Gestión de Picos",
    description: "Controla y reduce los picos de demanda para evitar penalizaciones en la factura eléctrica."
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="caracteristicas" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Características <span className="gradient-text">Avanzadas</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Nuestra plataforma ofrece herramientas potentes para transformar la gestión energética de tu planta manufacturera.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
