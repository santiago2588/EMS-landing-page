import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download, FileText, Search, Layers, Settings, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  { 
    title: "Introducción a EnergyPro", 
    icon: <Layers className="h-5 w-5 mr-2 text-primary" />,
    articles: [
      { title: "Visión General de la Plataforma", slug: "overview" },
      { title: "Conceptos Clave de Gestión Energética", slug: "key-concepts" },
      { title: "Requisitos del Sistema", slug: "system-requirements" },
    ] 
  },
  { 
    title: "Configuración Inicial", 
    icon: <Settings className="h-5 w-5 mr-2 text-primary" />,
    articles: [
      { title: "Creación y Configuración de Cuenta", slug: "account-setup" },
      { title: "Instalación de Sensores y Hardware", slug: "sensor-installation" },
      { title: "Integración con Sistemas Existentes (SCADA, ERP)", slug: "integrations" },
    ]
  },
  { 
    title: "Uso de la Plataforma", 
    icon: <BarChart3 className="h-5 w-5 mr-2 text-primary" />,
    articles: [
      { title: "Navegación por el Dashboard Principal", slug: "dashboard-navigation" },
      { title: "Interpretación de Gráficos y Datos", slug: "data-interpretation" },
      { title: "Configuración de Alertas y Notificaciones", slug: "alerts-setup" },
      { title: "Generación de Informes Personalizados", slug: "report-generation" },
      { title: "Análisis Predictivo y Recomendaciones", slug: "predictive-analysis" },
    ]
  },
  {
    title: "Guías Avanzadas",
    icon: <FileText className="h-5 w-5 mr-2 text-primary" />,
    articles: [
      { title: "API para Desarrolladores", slug: "developer-api" },
      { title: "Optimización de Múltiples Sitios", slug: "multi-site-optimization" },
      { title: "Gestión de Cumplimiento Normativo", slug: "compliance-management" },
    ]
  }
];

const DocumentationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeArticle, setActiveArticle] = useState(null); // Example: { sectionTitle: "...", article: {title: "...", slug: "..."} }

  const handleArticleClick = (sectionTitle, article) => {
    setActiveArticle({ sectionTitle, article });
  };

  const filteredSections = sections.map(section => ({
    ...section,
    articles: section.articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.articles.length > 0);

  // Placeholder content for active article
  const ArticleDisplay = ({ articleData }) => {
    if (!articleData) {
      return (
        <div className="text-center py-10 text-gray-500">
          <FileText size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg">Selecciona un artículo de la barra lateral para ver su contenido.</p>
          <p className="text-sm mt-2">O utiliza la búsqueda para encontrar la información que necesitas.</p>
        </div>
      );
    }
    return (
      <div className="prose dark:prose-invert max-w-none p-1">
        <div className="flex justify-between items-center mb-6 pb-4 border-b">
          <div>
            <p className="text-sm text-primary">{articleData.sectionTitle}</p>
            <h1 className="text-3xl font-bold mt-1">{articleData.article.title}</h1>
          </div>
          <Button variant="outline" size="sm">
            <Download size={16} className="mr-2" />
            Descargar PDF
          </Button>
        </div>
        
        <p>Este es un contenido de marcador de posición para el artículo "<strong>{articleData.article.title}</strong>". En una aplicación real, aquí se mostraría el contenido completo del artículo, posiblemente cargado desde un CMS o archivos Markdown.</p>
        <h2 className="text-xl font-semibold mt-6">Subsección Ejemplo 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h2 className="text-xl font-semibold mt-4">Subsección Ejemplo 2</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul className="list-disc pl-6 my-4">
          <li>Punto importante uno.</li>
          <li>Otro punto clave.</li>
          <li>Consideración final.</li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto"><code>{'// Ejemplo de código\nfunction greet(name) {\n  console.log(`Hello, ${name}!`);\n}\ngreet("EnergyPro User");'}</code></pre>
        <p>Para más detalles, consulta la sección de <Link to="/ayuda" className="text-primary hover:underline">Preguntas Frecuentes</Link> o contacta con nuestro <Link to="/ayuda" className="text-primary hover:underline">equipo de soporte</Link>.</p>
      </div>
    );
  };

  return (
    <PageLayout 
      title={<>Documentación <span className="gradient-text">Técnica</span></>}
      subtitle="Explora nuestras guías detalladas, tutoriales y referencias de API para integrar y maximizar el uso de EnergyPro."
    >
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/3 lg:w-1/4 space-y-6">
          <div className="relative mb-6">
            <Input 
              type="text" 
              placeholder="Buscar en la documentación..." 
              className="py-3 pl-10 pr-4 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          {filteredSections.map(section => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-2 flex items-center text-gray-700 dark:text-gray-300">
                {section.icon} {section.title}
              </h3>
              <ul className="space-y-1 pl-2 border-l-2 border-gray-200 dark:border-gray-700">
                {section.articles.map(article => (
                  <li key={article.slug}>
                    <button 
                      onClick={() => handleArticleClick(section.title, article)}
                      className={`w-full text-left px-3 py-1.5 text-sm rounded-md flex justify-between items-center transition-colors
                        ${activeArticle?.article.slug === article.slug ? 'bg-blue-100 dark:bg-blue-900/30 text-primary font-medium' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/40'}`}
                    >
                      {article.title}
                      <ChevronRight size={14} className={`transition-opacity ${activeArticle?.article.slug === article.slug ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
           {filteredSections.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">No se encontraron artículos. Prueba con otra búsqueda.</p>
          )}
        </aside>
        <main className="md:w-2/3 lg:w-3/4">
          <ArticleDisplay articleData={activeArticle} />
        </main>
      </div>
    </PageLayout>
  );
};

export default DocumentationPage;