import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 bg-white text-slate-900 transition-colors duration-300 md:mt-24 dark:bg-[#001E2B] dark:text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/Pie.png"
              alt="Logo"
              width={56}
              height={56}
              className="mb-4 h-auto w-12 md:w-14"
              priority
            />
            <h2 className="text-left text-lg leading-relaxed text-lime-500 dark:text-[#9FB816]">
              Herramienta para medir la huella de carbono de los Proyectos de TI
            </h2>
          </div>

          {/* Acerca de */}
          <div className="space-y-3">
            <h3 className="mb-2 text-xl font-bold md:mb-4">Acerca de</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/acerca-de" className="hover:text-[#9FB816]">
                  ¿Qué es HMHCPTI?
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#9FB816]">
                  ¿Quiénes somos?
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#9FB816]">
                  Misión
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#9FB816]">
                  Visión
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <h3 className="mb-2 text-xl font-bold md:mb-4">Contacto</h3>
            <div className="space-y-2">
              <p>Tel: (+52) 55-5555-5555</p>
              <p>Lunes a sábado 9am - 5pm</p>
              <p>
                <a
                  href="mailto:contacto@hmhcpti.com"
                  className="hover:text-[#9FB816]"
                >
                  contacto@hmhcpti.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:soporte@hmhcpti.com"
                  className="hover:text-[#9FB816]"
                >
                  soporte@hmhcpti.com
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="mb-2 text-xl font-bold md:mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-[#9FB816]"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-[#9FB816]"
                title="Twitter"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-[#9FB816]"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-[#9FB816]"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-gray-700">
          <p className="text-sm md:text-base">
            &copy; 2024 HMHCPTI. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
