import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, LifeBuoy, MessageSquare, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: "Primeros Pasos",
    questions: [
      { q: "¿Cómo creo una cuenta en EnergyPro?", a: "Puedes solicitar una demo y nuestro equipo te guiará en el proceso de creación de cuenta y configuración inicial." },
      { q: "¿Qué requisitos técnicos necesito para usar EnergyPro?", a: "EnergyPro es una plataforma web, por lo que solo necesitas un navegador moderno y conexión a internet. Para la recolección de datos, se pueden requerir sensores compatibles que nuestro equipo puede proveer o integrar." },
      { q: "¿Ofrecen un período de prueba gratuito?", a: "Ofrecemos demostraciones personalizadas y, en algunos casos, pilotos guiados para que puedas evaluar la plataforma con tus propios datos." }
    ]
  },
  {
    category: "Uso de la Plataforma",
    questions: [
      { q: "¿Cómo interpreto los dashboards de consumo?", a: "Nuestros dashboards están diseñados para ser intuitivos. Además, ofrecemos capacitación y documentación detallada. Puedes ver el consumo general, por máquina, por línea de producción, etc." },
      { q: "¿Puedo personalizar las alertas?", a: "Sí, puedes configurar umbrales personalizados para diferentes métricas y recibir notificaciones por email o SMS cuando se superen." },
      { q: "¿Cómo se generan los informes?", a: "Los informes se pueden generar automáticamente con la frecuencia que elijas (diaria, semanal, mensual) o bajo demanda. Son personalizables en formato y contenido." }
    ]
  },
  {
    category: "Integraciones y Hardware",
    questions: [
      { q: "¿EnergyPro se integra con mi sistema SCADA/ERP actual?", a: "Sí, contamos con APIs y protocolos estándar para integrarnos con la mayoría de los sistemas SCADA y ERP del mercado. Contáctanos para evaluar tu caso específico." },
      { q: "¿Qué tipo de sensores son compatibles?", a: "Trabajamos con una amplia gama de sensores de energía, flujo, temperatura, etc. Podemos asesorarte sobre los más adecuados para tu instalación o integrar los que ya posees." }
    ]
  },
  {
    category: "Soporte y Facturación",
    questions: [
      { q: "¿Cómo contacto con el soporte técnico?", a: "Puedes contactar a nuestro equipo de soporte a través de email, teléfono o el portal de cliente. Los tiempos de respuesta varían según tu plan de servicio." },
      { q: "¿Cuáles son las opciones de pago?", a: "Aceptamos transferencias bancarias y pagos con tarjeta de crédito para las suscripciones mensuales o anuales." }
    ]
  }
];

const HelpCenterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) || q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <PageLayout 
      title={<>Centro de <span className="gradient-text">Ayuda</span></>}
      subtitle="Encuentra respuestas a tus preguntas frecuentes, tutoriales y recursos para sacar el máximo provecho de EnergyPro."
    >
      <div className="mb-10">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Busca en nuestras FAQs..." 
            className="text-lg py-6 pl-12 pr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {filteredFaqs.length > 0 ? (
        <Accordion type="multiple" className="w-full space-y-4">
          {filteredFaqs.map(category => (
            category.questions.length > 0 && (
              <div key={category.category}>
                <h2 className="text-2xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">{category.category}</h2>
                {category.questions.map((faq, index) => (
                  <AccordionItem value={`${category.category}-${index}`} key={index} className="bg-white dark:bg-gray-800/50 border dark:border-gray-700 rounded-md shadow-sm">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-base font-medium">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-400">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            )
          ))}
        </Accordion>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400 py-8">
          No se encontraron preguntas frecuentes que coincidan con tu búsqueda. Intenta con otros términos.
        </p>
      )}

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <LifeBuoy className="h-10 w-10 text-primary mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Soporte Técnico</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">¿No encuentras lo que buscas? Nuestro equipo está listo para ayudarte.</p>
          <Button variant="outline">Contactar Soporte</Button>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <MessageSquare className="h-10 w-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Únete a nuestro foro comunitario para compartir ideas y soluciones.</p>
          <Button variant="outline">Ir al Foro</Button>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <BookOpen className="h-10 w-10 text-purple-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Documentación</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Explora guías detalladas y manuales técnicos.</p>
          <Button variant="outline" asChild><Link to="/documentacion">Ver Documentación</Link></Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default HelpCenterPage;