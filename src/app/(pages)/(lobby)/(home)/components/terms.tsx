'use client';

import { Card, CardContent } from "@/app/components/ui/card";

export default function Terms() {
  return (
    <section className="px-6 py-10 md:px-20">
      <Card className="max-w-5xl mx-auto">
        <CardContent className="space-y-6 py-8 text-justify">
          <h2 className="text-3xl font-semibold text-center">Términos y Condiciones de Uso</h2>

          <p>
            Bienvenido a nuestra aplicación de cálculo de huella de carbono para proyectos de TI. Al acceder o utilizar esta aplicación, usted acepta cumplir y estar sujeto a los siguientes Términos y Condiciones de Uso. Si no está de acuerdo con estos términos, no debe utilizar la aplicación.
          </p>

          <ol className="space-y-4 list-decimal list-inside">
            <li>
              <strong>Aceptación de los Términos:</strong> Al registrarse en la aplicación y crear proyectos en ella, usted acepta y está de acuerdo con estos Términos y Condiciones. Nos reservamos el derecho de modificar estos términos en cualquier momento, y cualquier cambio será efectivo una vez publicado en la aplicación. Le recomendamos revisar estos términos periódicamente.
            </li>

            <li>
              <strong>Descripción del Servicio:</strong> Nuestra aplicación ofrece una herramienta para calcular la huella de carbono de proyectos de TI, permitiéndole:
              <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                <li>Registrar proyectos con información sobre el número de personas involucradas y los activos utilizados.</li>
                <li>Calcular el consumo de energía y las emisiones de CO₂ basadas en normas internacionales (ISO 14000 e ISO 50000).</li>
                <li>Generar recomendaciones personalizadas para reducir el impacto ambiental.</li>
                <li>Clasificar las emisiones en niveles (verde, amarillo, rojo) según los límites permitidos en México.</li>
              </ul>
            </li>

            <li>
              <strong>Registro y Responsabilidad del Usuario:</strong> Para utilizar la aplicación, debe crear una cuenta proporcionando información precisa, completa y actualizada. Usted es responsable de mantener la confidencialidad de su cuenta y de cualquier actividad que ocurra en ella. En caso de acceso no autorizado a su cuenta, debe notificarnos de inmediato.
              <br />
              <br />
              Responsabilidades del usuario:
              <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                <li>Proporcionar información veraz y completa en los formularios de registro y creación de proyectos.</li>
                <li>No utilizar la aplicación para fines ilegales o no autorizados.</li>
                <li>Abstenerse de intentar acceder a sistemas no autorizados o interferir en el funcionamiento de la aplicación.</li>
              </ul>
            </li>

            <li>
              <strong>Uso de la Información y Propiedad Intelectual:</strong> Toda la información introducida en la aplicación es propiedad del usuario; sin embargo, al usar la aplicación, usted nos otorga una licencia limitada para utilizar la información de sus proyectos exclusivamente con el fin de proporcionar los cálculos de huella de carbono y recomendaciones de sostenibilidad.
              <br />
              <br />
              <strong>Derechos de Propiedad Intelectual:</strong> Todos los derechos de propiedad intelectual sobre la aplicación, incluyendo su diseño, código fuente, contenido, marcas y logotipos, son de nuestra propiedad o han sido licenciados adecuadamente. Usted no adquiere ningún derecho de propiedad sobre la aplicación ni sus componentes. Queda prohibido copiar, modificar, distribuir, transmitir, exhibir o crear obras derivadas de cualquier parte de la aplicación sin nuestro consentimiento expreso.
            </li>

            <li>
              <strong>Privacidad y Protección de Datos:</strong> Nos comprometemos a proteger su privacidad conforme a nuestro Aviso de Privacidad. La información recopilada a través de la aplicación será tratada de acuerdo con los términos establecidos en dicho aviso. Al utilizar la aplicación, usted acepta las prácticas descritas en el Aviso de Privacidad.
            </li>

            <li>
              <strong>Limitación de Responsabilidad:</strong> Nuestro objetivo es proporcionar un servicio preciso y fiable; sin embargo, no garantizamos la exactitud de los cálculos de huella de carbono ni de las recomendaciones generadas. La aplicación y sus contenidos se ofrecen "tal cual", sin garantías de ningún tipo.
              <br />
              <br />
              No asumimos responsabilidad por:
              <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                <li>Errores o inexactitudes en los datos proporcionados por los usuarios.</li>
                <li>Resultados del cálculo de huella de carbono o recomendaciones generadas en base a datos incorrectos o incompletos.</li>
                <li>Daños indirectos, incidentales o consecuentes derivados del uso de la aplicación.</li>
              </ul>
              Usted acepta que el uso de la aplicación es bajo su propio riesgo y que no somos responsables de ninguna decisión o acción tomada en base a los resultados proporcionados.
            </li>

            <li>
              <strong>Suspensión y Terminación del Servicio:</strong> Nos reservamos el derecho de suspender o terminar su acceso a la aplicación en cualquier momento, sin previo aviso, en caso de que consideremos que usted ha violado estos Términos y Condiciones, o si consideramos que su uso de la aplicación puede perjudicar a otros usuarios o a nuestra operación. En caso de terminación, usted ya no tendrá acceso a su cuenta ni a los datos almacenados en ella, y nos reservamos el derecho de eliminar su información después de un período razonable.
            </li>

            <li>
              <strong>Modificaciones a la Aplicación:</strong> Nos reservamos el derecho de modificar o descontinuar, temporal o permanentemente, la aplicación o cualquiera de sus funciones sin previo aviso. No seremos responsables ante usted ni ante terceros por cualquier modificación, suspensión o interrupción del servicio.
            </li>

            <li>
              <strong>Ley Aplicable y Jurisdicción:</strong> Estos Términos y Condiciones se rigen por las leyes de la Ciudad de México y las leyes federales de México, aplicables en la materia. Cualquier disputa que surja en relación con estos términos o con el uso de la aplicación será sometida a la jurisdicción exclusiva de los tribunales de la Ciudad de México.
            </li>

            <li>
              <strong>Contacto:</strong> Si tiene preguntas o comentarios sobre estos Términos y Condiciones, o si desea reportar una infracción, puede ponerse en contacto con nosotros a través del correo electrónico: <br />
              <a href="mailto:soporte@hmhcp.ti" className="text-blue-600 underline">soporte@hmhcp.ti</a>
            </li>
          </ol>
        </CardContent>
      </Card>
    </section>
  );
}
