import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const CookiesPolicyPage = () => {
  const lastUpdated = "21 de Mayo, 2025";

  return (
    <PageLayout 
      title={<>Política de <span className="gradient-text">Cookies</span></>}
      subtitle={`Última actualización: ${lastUpdated}`}
    >
      <div className="prose dark:prose-invert max-w-none">
        <p>Esta Política de Cookies explica qué son las cookies y cómo las usamos en EnergyPro ("nosotros", "nuestro", "nos"). Debes leer esta política para que puedas entender qué tipo de cookies usamos, o la información que recopilamos usando cookies y cómo se usa esa información.</p>
        <p>Las cookies no suelen contener ninguna información que identifique personalmente a un usuario, pero la información personal que almacenamos sobre ti puede estar vinculada a la información almacenada y obtenida de las cookies. Para obtener más información sobre cómo usamos, almacenamos y mantenemos seguros tus datos personales, consulta nuestra Política de Privacidad.</p>

        <h2>¿Qué son las Cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu navegador o disco duro de tu computadora o dispositivo móvil cuando visitas una página web o aplicación. Las cookies funcionan para hacer tu experiencia de navegación en nuestro sitio lo más fluida posible y recuerdan tus preferencias para que no tengas que introducir tus datos una y otra vez.</p>
        <p>Existen diferentes tipos de cookies. Algunas cookies provienen directamente de nuestro sitio web y otras provienen de terceros que colocan cookies en nuestro sitio.</p>
        <p>Las cookies pueden almacenarse durante diferentes períodos de tiempo en tu navegador o dispositivo. Las cookies de sesión se eliminan de tu computadora o dispositivo cuando cierras tu navegador web. Las cookies persistentes permanecerán almacenadas en tu computadora o dispositivo hasta que se eliminen o hasta que alcancen su fecha de caducidad.</p>

        <h2>¿Cómo Usamos las Cookies?</h2>
        <p>Usamos cookies para los siguientes propósitos:</p>
        <ul className="list-disc pl-5">
          <li><strong>Cookies Esenciales:</strong> Estas cookies son necesarias para que el sitio web funcione correctamente. Te permiten navegar por nuestro sitio y usar nuestras funciones. Sin estas cookies, no se pueden proporcionar servicios como el inicio de sesión seguro o la visualización de contenido.</li>
          <li><strong>Cookies de Rendimiento y Analíticas:</strong> Estas cookies recopilan información sobre cómo los visitantes usan nuestro sitio web, por ejemplo, qué páginas visitan con más frecuencia y si reciben mensajes de error de las páginas web. Estas cookies no recopilan información que identifique a un visitante. Toda la información que estas cookies recopilan es agregada y, por lo tanto, anónima. Solo se usa para mejorar cómo funciona el sitio web.</li>
          <li><strong>Cookies de Funcionalidad:</strong> Estas cookies permiten que el sitio web recuerde las elecciones que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y proporcionan funciones mejoradas y más personales. Por ejemplo, un sitio web puede proporcionarte informes meteorológicos locales o noticias de tráfico almacenando en una cookie la región en la que te encuentras actualmente.</li>
          <li><strong>Cookies de Publicidad o Segmentación:</strong> Estas cookies se utilizan para entregar anuncios más relevantes para ti y tus intereses. También se utilizan para limitar el número de veces que ves un anuncio, así como para ayudar a medir la efectividad de la campaña publicitaria. Suelen ser colocadas por redes publicitarias con el permiso del operador del sitio web.</li>
        </ul>

        <h2>Tus Opciones Respecto a las Cookies</h2>
        <p>Cuando visitas nuestro sitio por primera vez, te presentamos un banner de cookies que te informa sobre el uso de cookies y te proporciona un enlace a esta Política de Cookies. Tienes la opción de aceptar todas las cookies o gestionar tus preferencias.</p>
        <p>La mayoría de los navegadores te permiten controlar las cookies a través de la configuración de 'preferencias'. Sin embargo, si limitas la capacidad de los sitios web para establecer cookies, puedes empeorar tu experiencia general de usuario, ya que ya no estará personalizada para ti. También puede impedirte guardar configuraciones personalizadas como la información de inicio de sesión.</p>
        <p>Si no deseas recibir cookies, puedes cambiar la configuración de tu navegador en tu computadora u otro dispositivo que estés usando para acceder a nuestros servicios. Si usas nuestro Sitio sin cambiar la configuración de tu navegador, asumiremos que estás feliz de recibir todas las cookies en el Sitio.</p>
        
        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-md">
            <h3 className="text-lg font-semibold mb-3">Gestionar Preferencias de Cookies</h3>
            <p className="text-sm mb-4">Puedes ajustar tus preferencias de cookies para este sitio en cualquier momento a través de nuestro panel de control de cookies (si está disponible) o modificando la configuración de tu navegador.</p>
            <Button onClick={() => alert('El panel de control de cookies se implementaría aquí.')}>
                Gestionar Preferencias de Cookies
            </Button>
        </div>
        
        <h2>Cambios a esta Política de Cookies</h2>
        <p>Podemos actualizar nuestra Política de Cookies de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Cookies en esta página.</p>
        <p>Se te aconseja revisar esta Política de Cookies periódicamente para cualquier cambio. Los cambios a esta Política de Cookies son efectivos cuando se publican en esta página.</p>

        <h2>Contáctanos</h2>
        <p>Si tienes alguna pregunta sobre esta Política de Cookies, puedes contactarnos:</p>
        <ul className="list-none pl-0">
            <li>Por correo electrónico: cookies@energypro.es</li>
            <li>Visitando esta página en nuestro sitio web: energypro.es/contacto</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default CookiesPolicyPage;