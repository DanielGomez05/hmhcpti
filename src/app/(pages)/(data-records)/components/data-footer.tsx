import Link from 'next/link';
import Image from 'next/image';

export default function DataFooter() {
  return (
    <footer className="bg-[#f7f7f7] text-sm text-gray-600 p-6">
      <div className="flex justify-between flex-wrap">
        <div>
          <img src="images/Pie.png" alt="Logo" className="h-6 mb-2" />
          <p>© 2024 HMHCPTI. Todos los derechos reservados</p>
        </div>
        <div>
          <h4 className="font-medium mb-1">Acerca de</h4>
          <ul className="space-y-1">
            <li><Link href="#">¿Qué es HMHCPTI?</Link></li>
            <li><Link href="#">¿Quiénes somos?</Link></li>
            <li><Link href="#">Misión</Link></li>
            <li><Link href="#">Visión</Link></li>
            <li><Link href="#">Mapa del Sitio</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-1">Soporte</h4>
          <ul className="space-y-1">
            <li><Link href="#">Preguntas Frecuentes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-1">Contacto</h4>
          <p>(+52) 55 5555 5555</p>
          <p>Lunes a sábado de 9:00am a 5:00 pm</p>
          <p className="mt-2">Correos:</p>
          <p>contacto@hmhcp.ti</p>
          <p>soporte@hmhcp.ti</p>
        </div>
      </div>
    </footer>
  );
}
