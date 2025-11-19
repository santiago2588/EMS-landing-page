import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Estrategias Clave para Reducir el Consumo Energético en la Industria Manufacturera",
    date: "15 de Mayo, 2025",
    author: "Equipo EnergyPro",
    excerpt: "Descubre cómo pequeñas y medianas empresas manufactureras pueden implementar estrategias efectivas para disminuir su huella energética y costos operativos...",
    imageSlug: "factory-sunset-silhouette",
    category: "Eficiencia Energética"
  },
  {
    id: 2,
    title: "El Papel de la Inteligencia Artificial en la Gestión Energética Moderna",
    date: "28 de Abril, 2025",
    author: "Dr. Ana Torres",
    excerpt: "La IA está revolucionando la forma en que gestionamos la energía. Analizamos cómo los algoritmos predictivos y el machine learning optimizan el consumo...",
    imageSlug: "ai-circuit-board-energy",
    category: "Tecnología"
  },
  {
    id: 3,
    title: "Normativa ISO 50001: Guía Práctica para la Implementación en Plantas de Producción",
    date: "10 de Abril, 2025",
    author: "Carlos Solís, Consultor Energético",
    excerpt: "La certificación ISO 50001 no solo mejora la eficiencia, sino que también abre nuevas oportunidades de mercado. Te guiamos paso a paso...",
    imageSlug: "iso-certificate-document",
    category: "Normativas"
  }
];

const BlogPage = () => {
  return (
    <PageLayout
      title={<>Nuestro <span className="gradient-text">Blog</span></>}
      subtitle="Mantente al día con las últimas noticias, tendencias y consejos sobre gestión energética en la industria manufacturera."
    >
      <div className="space-y-12">
        {blogPosts.map(post => (
          <article key={post.id} className="flex flex-col md:flex-row gap-6 md:gap-8 items-center group">
            <div className="md:w-1/3 w-full">
              <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={`/images/${post.imageSlug}.png`} alt={`Imagen del post ${post.title}`} />
              </Link>
            </div>
            <div className="md:w-2/3 w-full">
              <p className="text-sm text-primary mb-1 font-medium">{post.category}</p>
              <h2 className="text-2xl font-bold mb-2">
                <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">{post.title}</Link>
              </h2>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
              <Button variant="link" asChild className="p-0 h-auto text-primary group-hover:underline">
                <Link to={`/blog/${post.id}`}>
                  Leer más <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button>Cargar más artículos</Button>
      </div>
    </PageLayout>
  );
};

export default BlogPage;