
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 mb-6">
              <Zap size={14} className="mr-1" />
              <span>Solución Integral para Manufactura</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Optimiza tu <span className="gradient-text">consumo energético</span> industrial
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Plataforma inteligente que monitorea, analiza y optimiza el consumo energético en tiempo real para reducir costos operativos y mejorar la sostenibilidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Solicitar Demo
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Ver Planes
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center">
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <BarChart2 size={16} className="text-blue-600" />
                </div>
                <p className="text-sm font-medium">Ahorro energético de hasta 30%</p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <Shield size={16} className="text-blue-600" />
                </div>
                <p className="text-sm font-medium">Cumplimiento normativo garantizado</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[550px]">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-center">
                  <div className="flex space-x-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4">
                  <img alt="Dashboard de gestión energética" className="w-full h-auto rounded-md shadow-sm" src="/images/energy-dashboard-hero.png" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
