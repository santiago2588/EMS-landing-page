
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Currency, Leaf } from 'lucide-react';

const stats = [
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    value: "30%",
    label: "Reducción de consumo",
    description: "Promedio de ahorro energético"
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    value: "3",
    label: "Meses",
    description: "Retorno de inversión promedio"
  },
  {
    icon: <Currency className="h-8 w-8 text-blue-600" />,
    value: "45%",
    label: "Ahorro en dolares",
    description: "Reducción en factura energetica en dolares"
  },
  {
    icon: <Leaf className="h-8 w-8 text-blue-600" />,
    value: "60%",
    label: "Reducción de emisiones",
    description: "Menor huella de carbono"
  }
];

const Stats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="stats-gradient rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Resultados <span className="gradient-text">Comprobados</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Nuestros clientes han experimentado mejoras significativas en su eficiencia energética y reducción de costo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">{stat.label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
