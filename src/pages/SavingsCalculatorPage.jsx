import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { DollarSign, Zap, ArrowRight, Percent } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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

const SavingsCalculatorPage = () => {
  const { toast } = useToast();
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [industryType, setIndustryType] = useState('general'); 
  const [potentialSaving, setPotentialSaving] = useState(15);
  const [calculatedSavings, setCalculatedSavings] = useState({ monthly: 0, annual: 0 });
  const [showResults, setShowResults] = useState(false);

  const industryFactors = {
    general: 0.15, // 15% base
    metalurgia: 0.22,
    textil: 0.18,
    alimentacion: 0.12,
    quimica: 0.20,
    automotriz: 0.17,
  };

  useEffect(() => {
    setPotentialSaving(Math.round(industryFactors[industryType] * 100));
  }, [industryType]);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (monthlyBill <= 0) {
      toast({
        title: "Error de cálculo",
        description: "Por favor, introduce un costo mensual válido.",
        variant: "destructive",
      });
      return;
    }

    const savingPercentage = potentialSaving / 100;
    const monthlySaving = monthlyBill * savingPercentage;
    const annualSaving = monthlySaving * 12;

    setCalculatedSavings({
      monthly: parseFloat(monthlySaving.toFixed(2)),
      annual: parseFloat(annualSaving.toFixed(2)),
    });
    setShowResults(true);
    
    toast({
        title: "Cálculo completado",
        description: `Ahorro estimado: $${monthlySaving.toFixed(2)} mensuales.`,
    });
  };

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
            Calculadora de <span className="gradient-text">Ahorro Energético</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Estima cuánto podrías ahorrar en tu factura energética implementando EnergyPro. Introduce tus datos y descubre tu potencial de ahorro.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-card p-6 sm:p-10 rounded-xl shadow-2xl border border-border"
        >
          <form onSubmit={handleCalculate} className="space-y-8">
            <div>
              <Label htmlFor="monthlyBill" className="text-lg font-medium flex items-center mb-2">
                <DollarSign size={20} className="mr-2 text-primary" />
                Costo Energético Mensual ($)
              </Label>
              <Input
                type="number"
                id="monthlyBill"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(parseFloat(e.target.value))}
                placeholder="Ej: 5000"
                className="text-lg"
                min="0"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Introduce tu gasto mensual aproximado en energía.</p>
            </div>

            <div>
              <Label htmlFor="industryType" className="text-lg font-medium flex items-center mb-2">
                <Zap size={20} className="mr-2 text-primary" />
                Tipo de Industria
              </Label>
              <select
                id="industryType"
                value={industryType}
                onChange={(e) => setIndustryType(e.target.value)}
                className="w-full p-3 border border-input rounded-md bg-background text-lg focus:ring-ring focus:border-ring"
              >
                <option value="general">General / Otra</option>
                <option value="metalurgia">Metalurgia</option>
                <option value="textil">Textil</option>
                <option value="alimentacion">Alimentación y Bebidas</option>
                <option value="quimica">Química</option>
                <option value="automotriz">Automotriz</option>
              </select>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Selecciona el sector que mejor describe tu actividad.</p>
            </div>
            
            <div>
              <Label htmlFor="potentialSaving" className="text-lg font-medium flex items-center mb-2">
                 <Percent size={20} className="mr-2 text-primary" />
                Potencial de Ahorro Estimado (%)
              </Label>
              <div className="flex items-center space-x-4">
                <Slider
                  id="potentialSaving"
                  min={5}
                  max={40}
                  step={1}
                  value={[potentialSaving]}
                  onValueChange={(value) => setPotentialSaving(value[0])}
                  className="flex-grow"
                />
                <span className="text-xl font-semibold w-16 text-right">{potentialSaving}%</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ajusta el porcentaje de ahorro potencial según tu conocimiento (estimación basada en industria).</p>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg group">
              Calcular Ahorro Potencial
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {showResults && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100 }}
              className="mt-10 pt-8 border-t border-border"
            >
              <h2 className="text-2xl font-bold text-center mb-6">
                Resultados Estimados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg text-center">
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-1">Ahorro Mensual Estimado</p>
                  <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                    ${calculatedSavings.monthly.toLocaleString('en-US')}
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg text-center">
                  <p className="text-sm text-green-700 dark:text-green-300 mb-1">Ahorro Anual Estimado</p>
                  <p className="text-4xl font-extrabold text-green-600 dark:text-green-400">
                    ${calculatedSavings.annual.toLocaleString('en-US')}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
                Estos cálculos son estimaciones basadas en los datos proporcionados y promedios del sector.
                Para un análisis detallado y personalizado, <Button variant="link" className="p-0 h-auto text-sm" asChild><a href="/#precios">solicita una demo</a></Button>.
              </p>
            </motion.div>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
            <h3 className="text-xl font-semibold mb-3">¿Cómo EnergyPro te ayuda a ahorrar?</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-left mx-auto max-w-md">
                <li>Monitoreo detallado del consumo por máquina y proceso.</li>
                <li>Identificación de picos de demanda y optimización de tarifas.</li>
                <li>Detección de fugas y anomalías en tiempo real.</li>
                <li>Recomendaciones de IA para mejorar la eficiencia operativa.</li>
                <li>Automatización de controles para reducir desperdicios.</li>
            </ul>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default SavingsCalculatorPage;