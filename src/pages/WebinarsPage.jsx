import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const webinars = [
  {
    id: 1,
    title: "Optimización Energética Avanzada con IA y Machine Learning",
    date: "25 de Junio, 2025",
    time: "16:00 CEST",
    duration: "60 min",
    description: "Explora cómo las últimas tecnologías de IA pueden ayudarte a predecir consumos, optimizar procesos y reducir drásticamente los costos energéticos en tu planta.",
    speaker: "Dr. Eva Ramos, Experta en IA Energética",
    status: "Próximo",
    imageSlug: "ai-data-visualization-webinar",
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Cumplimiento de ISO 50001: Estrategias Prácticas con EnergyPro",
    date: "10 de Junio, 2025",
    time: "11:00 CEST",
    duration: "45 min",
    description: "Aprende a utilizar EnergyPro para simplificar el proceso de certificación ISO 50001, desde la recolección de datos hasta la generación de informes de cumplimiento.",
    speaker: "Luis Vega, Consultor Senior en Normativas",
    status: "Grabación Disponible",
    imageSlug: "iso-certification-webinar-screen",
    recordingLink: "#",
    slidesLink: "#"
  },
  {
    id: 3,
    title: "Casos de Éxito: Transformación Energética en la Industria Metalúrgica",
    date: "20 de Mayo, 2025",
    time: "15:00 CEST",
    duration: "50 min",
    description: "Clientes de la industria metalúrgica comparten sus experiencias y resultados obtenidos tras implementar EnergyPro, detallando ahorros y mejoras operativas.",
    speaker: "Clientes Destacados y Equipo EnergyPro",
    status: "Grabación Disponible",
    imageSlug: "metal-factory-presentation-webinar",
    recordingLink: "#",
    slidesLink: "#"
  }
];

const WebinarsPage = () => {
  return (
    <PageLayout
      title={<>Webinars y <span className="gradient-text">Eventos</span></>}
      subtitle="Participa en nuestros webinars en vivo o accede a grabaciones pasadas para aprender de expertos y descubrir las mejores prácticas en gestión energética."
    >
      <div className="space-y-10">
        {webinars.map(webinar => (
          <div key={webinar.id} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-6 bg-white dark:bg-gray-800/50 border dark:border-gray-700 rounded-lg shadow-sm transition-all hover:shadow-md">
            <div className="md:col-span-1">
              <img className="w-full h-48 object-cover rounded-md" src={`/images/${webinar.imageSlug}.png`} alt={`Webinar: ${webinar.title}`} />
            </div>
            <div className="md:col-span-2">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${webinar.status === 'Próximo' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                {webinar.status}
              </span>
              <h2 className="text-xl font-bold mb-2">{webinar.title}</h2>
              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-3 gap-x-4 gap-y-1">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" /> {webinar.date}
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" /> {webinar.time} ({webinar.duration})
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>Ponente:</strong> {webinar.speaker}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{webinar.description}</p>

              <div className="flex flex-wrap gap-3">
                {webinar.status === 'Próximo' && (
                  <Button asChild>
                    <a href={webinar.registrationLink} target="_blank" rel="noopener noreferrer">
                      Registrarse Ahora <ExternalLink size={16} className="ml-2" />
                    </a>
                  </Button>
                )}
                {webinar.status === 'Grabación Disponible' && (
                  <>
                    <Button variant="outline" asChild>
                      <a href={webinar.recordingLink} target="_blank" rel="noopener noreferrer">
                        <Video size={16} className="mr-2" /> Ver Grabación
                      </a>
                    </Button>
                    {webinar.slidesLink && (
                      <Button variant="outline" asChild>
                        <a href={webinar.slidesLink} target="_blank" rel="noopener noreferrer">
                          <Download size={16} className="mr-2" /> Descargar Diapositivas
                        </a>
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">¿Te perdiste alguno? Explora nuestro archivo completo o suscríbete para no perderte los próximos.</p>
        <Button variant="secondary">Ver todos los webinars pasados</Button>
      </div>
    </PageLayout>
  );
};

export default WebinarsPage;