import React from 'react';
import PageLayout from '@/components/PageLayout';

const PrivacyPolicyPage = () => {
  const lastUpdated = "21 de Mayo, 2025";

  return (
    <PageLayout 
      title={<>Política de <span className="gradient-text">Privacidad</span></>}
      subtitle={`Última actualización: ${lastUpdated}`}
    >
      <div className="prose dark:prose-invert max-w-none">
        <p>En EnergyPro ("nosotros", "nuestro", "nos"), respetamos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta política de privacidad te informará sobre cómo cuidamos tus datos personales cuando visitas nuestro sitio web (independientemente de dónde lo visites) o utilizas nuestros servicios, y te informará sobre tus derechos de privacidad y cómo la ley te protege.</p>

        <h2>1. Información Importante y Quiénes Somos</h2>
        <p><strong>Propósito de esta política de privacidad:</strong></p>
        <p>Esta política de privacidad tiene como objetivo darte información sobre cómo EnergyPro recopila y procesa tus datos personales a través de tu uso de este sitio web y nuestros servicios, incluyendo cualquier dato que puedas proporcionar a través de este sitio web cuando te registras para una demo, utilizas nuestra calculadora de ahorros, o te suscribes a nuestro boletín.</p>
        <p><strong>Controlador de datos:</strong></p>
        <p>EnergyPro Solutions S.L. es el controlador y responsable de tus datos personales.</p>
        <p><strong>Datos de contacto:</strong></p>
        <p>Si tienes alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, por favor contáctanos de la siguiente manera:</p>
        <ul className="list-none pl-0">
          <li>Nombre completo de la entidad legal: EnergyPro Solutions S.L.</li>
          <li>Dirección de correo electrónico: privacidad@energypro.es</li>
          <li>Dirección postal: Calle Innovación, 123, 28001 Madrid, España</li>
        </ul>

        <h2>2. Los Datos que Recopilamos Sobre Ti</h2>
        <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, los cuales hemos agrupado de la siguiente manera:</p>
        <ul className="list-disc pl-5">
          <li><strong>Datos de Identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.</li>
          <li><strong>Datos de Contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de correo electrónico y números de teléfono.</li>
          <li><strong>Datos Técnicos:</strong> incluye dirección de protocolo de internet (IP), tus datos de inicio de sesión, tipo y versión de navegador, configuración y ubicación de zona horaria, tipos y versiones de plug-in de navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utilizas para acceder a este sitio web.</li>
          <li><strong>Datos de Uso:</strong> incluye información sobre cómo utilizas nuestro sitio web, productos y servicios.</li>
          <li><strong>Datos de Marketing y Comunicaciones:</strong> incluye tus preferencias para recibir marketing de nosotros y nuestros terceros y tus preferencias de comunicación.</li>
        </ul>
        
        <h2>3. Cómo se Recopilan tus Datos Personales</h2>
        <p>Utilizamos diferentes métodos para recopilar datos de y sobre ti, incluyendo a través de:</p>
        <ul className="list-disc pl-5">
            <li><strong>Interacciones directas.</strong> Puedes darnos tu Identidad y Datos de Contacto rellenando formularios o manteniendo correspondencia con nosotros por correo postal, teléfono, correo electrónico u otro medio.</li>
            <li><strong>Tecnologías o interacciones automatizadas.</strong> A medida que interactúas con nuestro sitio web, podemos recopilar automáticamente Datos Técnicos sobre tu equipo, acciones de navegación y patrones. Recopilamos estos datos personales mediante el uso de cookies y otras tecnologías similares. Consulta nuestra política de cookies para más detalles.</li>
        </ul>

        <h2>4. Cómo Usamos tus Datos Personales</h2>
        <p>Solo usaremos tus datos personales cuando la ley nos lo permita. Comúnmente, usaremos tus datos personales en las siguientes circunstancias:</p>
        <ul className="list-disc pl-5">
          <li>Donde necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado contigo.</li>
          <li>Donde sea necesario para nuestros intereses legítimos (o los de un tercero) y tus intereses y derechos fundamentales no prevalezcan sobre esos intereses.</li>
          <li>Donde necesitemos cumplir con una obligación legal o regulatoria.</li>
        </ul>

        <h2>5. Divulgación de tus Datos Personales</h2>
        <p>Es posible que tengamos que compartir tus datos personales con las partes que se establecen a continuación para los fines establecidos en la tabla del párrafo 4 anterior.</p>
        <ul className="list-disc pl-5">
            <li>Terceros proveedores de servicios que actúan como procesadores.</li>
            <li>Asesores profesionales incluyendo abogados, banqueros, auditores y aseguradores.</li>
            <li>Autoridades fiscales, reguladores y otras autoridades.</li>
        </ul>

        <h2>6. Seguridad de los Datos</h2>
        <p>Hemos implementado medidas de seguridad apropiadas para evitar que tus datos personales se pierdan accidentalmente, se usen o se acceda a ellos de forma no autorizada, se alteren o se divulguen. Además, limitamos el acceso a tus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tengan una necesidad comercial de conocerlos.</p>

        <h2>7. Retención de Datos</h2>
        <p>Solo retendremos tus datos personales durante el tiempo que sea razonablemente necesario para cumplir los fines para los que los recopilamos, incluyendo para cumplir con cualquier requisito legal, regulatorio, fiscal, contable o de presentación de informes.</p>

        <h2>8. Tus Derechos Legales</h2>
        <p>Bajo ciertas circunstancias, tienes derechos bajo las leyes de protección de datos en relación con tus datos personales, incluyendo el derecho a solicitar acceso, corrección, eliminación, restricción u objeción al procesamiento, así como el derecho a la portabilidad de los datos y el derecho a retirar el consentimiento.</p>
        
        <p>Si deseas ejercer alguno de los derechos establecidos anteriormente, por favor contáctanos en privacidad@energypro.es.</p>

        <p>Esta política se actualiza periódicamente. Te recomendamos que la revises con regularidad.</p>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;