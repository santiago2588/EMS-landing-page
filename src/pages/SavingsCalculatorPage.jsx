import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  const [energyCost, setEnergyCost] = useState(0.12);
  const [efficiencyScore, setEfficiencyScore] = useState(70);

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Default efficiency scores by industry (0-100)
  // Lower score means more room for improvement
  const industryDefaults = {
    general: 70,
    metalurgia: 60,
    textil: 65,
    alimentacion: 75,
    quimica: 65,
    automotriz: 70,
  };

  useEffect(() => {
    setEfficiencyScore(industryDefaults[industryType]);
  }, [industryType]);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!Number.isFinite(monthlyBill) || monthlyBill <= 0) {
      toast({
        title: "Error de cálculo",
        description: "Por favor, introduce un costo mensual válido (mayor que 0).",
        variant: "destructive",
      });
      return;
    }
    if (!Number.isFinite(energyCost) || energyCost <= 0) {
      toast({
        title: "Error de cálculo",
        description: "Por favor, introduce un costo de energía válido.",
        variant: "destructive",
      });
      return;
    }

    // Logic: Target Efficiency is 95%. Potential saving is the gap.
    const targetEfficiency = 95;
    // Ensure we don't get negative savings if they claim 99% efficiency
    const potentialImprovement = Math.max(0, targetEfficiency - efficiencyScore);
    const savingPercentage = potentialImprovement / 100;

    const monthlySaving = monthlyBill * savingPercentage;
    const annualSaving = monthlySaving * 12;

    // Environmental Impact
    const estimatedMonthlyConsumptionKWh = monthlyBill / energyCost;
    const monthlyCo2SavedKg = estimatedMonthlyConsumptionKWh * savingPercentage * 0.5; // 0.5 kg CO2 per kWh approx
    const annualCo2SavedKg = monthlyCo2SavedKg * 12;
    const treesSaved = annualCo2SavedKg / 20; // Approx 20kg CO2 per tree per year

    setResults({
      monthlySaving: parseFloat(monthlySaving.toFixed(2)),
      annualSaving: parseFloat(annualSaving.toFixed(2)),
      projectedBill: parseFloat((monthlyBill - monthlySaving).toFixed(2)),
      annualCo2SavedKg: Math.round(annualCo2SavedKg),
      treesSaved: Math.round(treesSaved)
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
        <div className="text-center max-w-3xl mx-auto mb-12">
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
            Descubre cuánto puedes ahorrar optimizando tu eficiencia operativa con EnergyPro.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* INPUTS COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-6 sm:p-8 rounded-xl shadow-lg border border-border"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Zap className="mr-2 text-primary" /> Tus Datos
            </h2>
            <form onSubmit={handleCalculate} className="space-y-6">

              {/* Monthly Bill */}
              <div>
                <Label htmlFor="monthlyBill" className="text-base font-medium mb-2 block">
                  Costo Energético Mensual ($)
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    type="number"
                    id="monthlyBill"
                    value={monthlyBill}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setMonthlyBill(Number.isFinite(v) ? v : 0);
                    }}
                    className="pl-10 text-lg"
                    min="0"
                  />
                </div>
              </div>

              {/* Energy Cost */}
              <div>
                <Label htmlFor="energyCost" className="text-base font-medium mb-2 block">
                  Costo por kWh ($)
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    type="number"
                    id="energyCost"
                    value={energyCost}
                    step="0.01"
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setEnergyCost(Number.isFinite(v) ? v : 0);
                    }}
                    className="pl-10 text-lg"
                    min="0"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Promedio: $0.12 - $0.15</p>
              </div>

              {/* Industry Type */}
              <div>
                <Label htmlFor="industryType" className="text-base font-medium mb-2 block">
                  Tipo de Industria
                </Label>
                <select
                  id="industryType"
                  value={industryType}
                  onChange={(e) => setIndustryType(e.target.value)}
                  className="w-full p-3 border border-input rounded-md bg-background text-base focus:ring-ring focus:border-ring"
                >
                  <option value="general">General / Otra</option>
                  <option value="metalurgia">Metalurgia</option>
                  <option value="textil">Textil</option>
                  <option value="alimentacion">Alimentación y Bebidas</option>
                  <option value="quimica">Química</option>
                  <option value="automotriz">Automotriz</option>
                </select>
              </div>

              {/* Efficiency Score Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label htmlFor="efficiencyScore" className="text-base font-medium">
                    Eficiencia Operativa Actual
                  </Label>
                  <span className="text-sm font-bold bg-primary/10 text-primary px-2 py-1 rounded">
                    {efficiencyScore}%
                  </span>
                </div>
                <input
                  type="range"
                  id="efficiencyScore"
                  min="0"
                  max="100"
                  value={efficiencyScore}
                  onChange={(e) => setEfficiencyScore(parseInt(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Estimación de qué tan optimizados están tus procesos actuales (0% = Nada optimizado, 100% = Perfecto).
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg mt-4">
                Calcular Resultados <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </motion.div>

          {/* RESULTS COLUMN */}
          <div className="space-y-6">
            {showResults && results ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Main Savings Card */}
                <div className="bg-gradient-to-br from-brand-g7/20 to-brand-g1/20 p-6 rounded-xl border border-brand-g7/30">
                  <h3 className="text-xl font-semibold mb-4 text-center">Ahorro Potencial</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Mensual</p>
                      <p className="text-3xl font-bold text-brand-g7">${results.monthlySaving.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Anual</p>
                      <p className="text-3xl font-bold text-brand-g1">${results.annualSaving.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Chart Visualization */}
                <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                  <h4 className="font-semibold mb-4">Proyección Mensual</h4>
                  <div className="space-y-4">
                    {/* Current */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Actual</span>
                        <span className="font-medium">${monthlyBill.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-8 bg-muted rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gray-400/50 w-full"></div>
                      </div>
                    </div>
                    {/* Projected */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Con EnergyPro</span>
                        <span className="font-medium text-brand-g7">${results.projectedBill.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-8 bg-muted rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(results.projectedBill / monthlyBill) * 100}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-brand-g7"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Environmental Impact */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800 text-center">
                    <div className="mb-2 flex justify-center text-green-600 dark:text-green-400">
                      <Percent size={24} /> {/* Using Percent as placeholder for CO2 cloud if not available, or just text */}
                    </div>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-300">{results.annualCo2SavedKg.toLocaleString()} kg</p>
                    <p className="text-xs text-green-600/80 dark:text-green-400/80">CO2 Reducido / Año</p>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800 text-center">
                    <div className="mb-2 flex justify-center text-emerald-600 dark:text-emerald-400">
                      {/* Tree icon would be good here, using generic for now if not imported */}
                      <span className="text-2xl">🌳</span>
                    </div>
                    <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{results.treesSaved}</p>
                    <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80">Árboles Equivalentes</p>
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-muted-foreground border-2 border-dashed border-border rounded-xl min-h-[400px]">
                <div className="bg-muted p-4 rounded-full mb-4">
                  <Zap size={32} className="text-muted-foreground/50" />
                </div>
                <h3 className="text-xl font-medium mb-2">Esperando datos...</h3>
                <p className="max-w-xs">
                  Completa el formulario y presiona "Calcular" para ver tu proyección de ahorro personalizada.
                </p>
              </div>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-6">¿Por qué confiar en estos datos?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-4 rounded-lg bg-background border shadow-sm">
              <h4 className="font-semibold mb-2 text-brand-g7">Base de Datos Real</h4>
              <p className="text-sm text-muted-foreground">Utilizamos promedios de miles de instalaciones industriales reales.</p>
            </div>
            <div className="p-4 rounded-lg bg-background border shadow-sm">
              <h4 className="font-semibold mb-2 text-brand-g7">Cálculo Conservador</h4>
              <p className="text-sm text-muted-foreground">Nuestras estimaciones son prudentes para evitar falsas expectativas.</p>
            </div>
            <div className="p-4 rounded-lg bg-background border shadow-sm">
              <h4 className="font-semibold mb-2 text-brand-g7">Factores Específicos</h4>
              <p className="text-sm text-muted-foreground">Ajustamos el potencial según tu sector industrial específico.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default SavingsCalculatorPage;