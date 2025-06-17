import React from 'react';
import PageLayout from '@/components/PageLayout';

const TermsOfServicePage = () => {
  const lastUpdated = "21 de Mayo, 2025";

  return (
    <PageLayout 
      title={<>Términos de <span className="gradient-text">Servicio</span></>}
      subtitle={`Última actualización: ${lastUpdated}`}
    >
      <div className="prose dark:prose-invert max-w-none">
        <p>Bienvenido a EnergyPro. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web y los servicios de EnergyPro Solutions S.L., ubicados en energypro.es.</p>
        <p>Al acceder a este sitio web y utilizar nuestros servicios, aceptamos que aceptas estos términos y condiciones. No continúes usando EnergyPro si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.</p>

        <h2>1. Licencia</h2>
        <p>A menos que se indique lo contrario, EnergyPro Solutions S.L. y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en EnergyPro. Todos los derechos de propiedad intelectual están reservados. Puedes acceder a esto desde EnergyPro para tu propio uso personal sujeto a las restricciones establecidas en estos términos y condiciones.</p>
        <p>No debes:</p>
        <ul className="list-disc pl-5">
          <li>Republicar material de EnergyPro</li>
          <li>Vender, alquilar o sublicenciar material de EnergyPro</li>
          <li>Reproducir, duplicar o copiar material de EnergyPro</li>
          <li>Redistribuir contenido de EnergyPro</li>
        </ul>
        <p>Este Acuerdo comenzará en la fecha del presente.</p>

        <h2>2. Cuentas de Usuario</h2>
        <p>Para acceder a ciertas funciones de nuestros Servicios, es posible que debas registrarte para obtener una cuenta. Cuando te registras para una cuenta, debes proporcionar información precisa y completa. Eres el único responsable de la actividad que ocurre en tu cuenta, y debes mantener segura la contraseña de tu cuenta. Debes notificarnos inmediatamente cualquier violación de seguridad o uso no autorizado de tu cuenta.</p>
        
        <h2>3. Uso Aceptable</h2>
        <p>Aceptas no utilizar los Servicios:</p>
        <ul className="list-disc pl-5">
            <li>De cualquier manera que viole cualquier ley o regulación local, nacional o internacional aplicable.</li>
            <li>Con el propósito de dañar o intentar dañar a menores de cualquier manera.</li>
            <li>Para transmitir, o procurar el envío de, cualquier material publicitario o promocional no solicitado o no autorizado o cualquier otra forma de solicitud similar (spam).</li>
            <li>Para transmitir a sabiendas cualquier dato, enviar o cargar cualquier material que contenga virus, troyanos, gusanos, bombas de tiempo, registradores de pulsaciones de teclas, spyware, adware o cualquier otro programa dañino o código informático similar diseñado para afectar negativamente el funcionamiento de cualquier software o hardware informático.</li>
        </ul>

        <h2>4. Suscripciones y Pagos</h2>
        <p>Algunos de nuestros Servicios se facturan por suscripción. Se te facturará por adelantado de forma recurrente y periódica (como mensual o anual), dependiendo del tipo de plan de suscripción que selecciones al comprar una Suscripción.</p>
        <p>Al final de cada Período de Facturación, tu Suscripción se renovará automáticamente bajo las mismas condiciones exactas a menos que la canceles o EnergyPro Solutions S.L. la cancele. Puedes cancelar la renovación de tu Suscripción ya sea a través de la página de configuración de tu cuenta en línea o contactando al equipo de soporte al cliente de EnergyPro Solutions S.L.</p>

        <h2>5. Limitación de Responsabilidad</h2>
        <p>En la máxima medida permitida por la ley aplicable, en ningún caso EnergyPro Solutions S.L., ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo, sin limitación, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de (i) tu acceso o uso o incapacidad para acceder o usar el Servicio; (ii) cualquier conducta o contenido de cualquier tercero en el Servicio; (iii) cualquier contenido obtenido del Servicio; y (iv) acceso no autorizado, uso o alteración de tus transmisiones o contenido, ya sea basado en garantía, contrato, agravio (incluyendo negligencia) o cualquier otra teoría legal, ya sea que hayamos sido informados o no de la posibilidad de dicho daño, e incluso si se determina que un remedio establecido en este documento ha fallado en su propósito esencial.</p>

        <h2>6. Cambios a los Términos</h2>
        <p>Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar al menos 30 días de aviso antes de que entren en vigor los nuevos términos. Lo que constituye un cambio material se determinará a nuestra sola discreción.</p>
        <p>Al continuar accediendo o utilizando nuestro Servicio después de que esas revisiones entren en vigor, aceptas estar sujeto a los términos revisados. Si no estás de acuerdo con los nuevos términos, por favor deja de usar el Servicio.</p>

        <h2>7. Ley Aplicable</h2>
        <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus disposiciones sobre conflicto de leyes.</p>

        <h2>8. Contáctanos</h2>
        <p>Si tienes alguna pregunta sobre estos Términos, por favor contáctanos:</p>
        <ul className="list-none pl-0">
            <li>Por correo electrónico: legal@energypro.es</li>
            <li>Visitando esta página en nuestro sitio web: energypro.es/contacto</li>
            <li>Por correo postal: Calle Innovación, 123, 28001 Madrid, España</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default TermsOfServicePage;