import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "¿Cómo creo una cuenta en EnergyPro?",
    a: "Puedes solicitar una demo y nuestro equipo te guiará en el proceso de creación de cuenta y configuración inicial."
  },
  {
    q: "¿Qué requisitos técnicos necesito para usar EnergyPro?",
    a: "EnergyPro es una plataforma web, por lo que solo necesitas un navegador moderno y conexión a internet. Para la recolección de datos, se pueden requerir sensores compatibles que nuestro equipo puede proveer o integrar."
  },
  {
    q: "¿Ofrecen un período de prueba gratuito?",
    a: "Ofrecemos demostraciones personalizadas y, en algunos casos, pilotos guiados para que puedas evaluar la plataforma con tus propios datos."
  },
  {
    q: "¿Cómo interpreto los dashboards de consumo?",
    a: "Nuestros dashboards están diseñados para ser intuitivos. Además, ofrecemos capacitación y documentación detallada para entender el consumo general, por máquina, por línea de producción, etc."
  },
  {
    q: "¿Puedo personalizar las alertas?",
    a: "Sí, puedes configurar umbrales personalizados para diferentes métricas y recibir notificaciones por email o SMS cuando se superen."
  },
  {
    q: "¿Cómo se generan los informes?",
    a: "Los informes se pueden generar automáticamente con la frecuencia que elijas (diaria, semanal, mensual) o bajo demanda. Son personalizables en formato y contenido."
  }
];

const FAQs = () => {
  return (
    <section id="faqs" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Preguntas <span className="gradient-text">Frecuentes</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Respuestas rápidas a las dudas más comunes sobre EnergyPro.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="bg-white dark:bg-gray-900/60 border dark:border-gray-800 rounded-md shadow-sm"
            >
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-0 text-gray-600 dark:text-gray-400">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/ayuda">Ver todas las FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
