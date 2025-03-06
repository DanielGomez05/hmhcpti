import Image from "next/image"
import Link from "next/link"
import { Calculator, BarChart2 } from "lucide-react"
import React from "react"

export default function AcercaDe() {
  return (
    <div className="font-century bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo y título */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Image src="/images/Pie.png" alt="Logo" width={56} height={56} className="w-12 md:w-14 h-auto" />
              <h1 className="text-lime-500 text-sm md:text-xl leading-tight">
                Herramienta para medir la huella de carbono de los Proyectos de TI
              </h1>
            </div>

            {/* Menú para desktop */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <Link href="/" className="text-black hover:text-lime-500 text-lg">
                Inicio
              </Link>
              <Link href="/acerca-de" className="text-black hover:text-lime-500 text-lg">
                ¿Qué es HMHCPTI?
              </Link>
              <Link href="#" className="text-black hover:text-lime-500 text-lg">
                Recursos
              </Link>
              <div className="flex space-x-2">
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm md:text-base">
                  Probar Ahora
                </button>
                <button className="border-2 border-slate-900 px-4 py-2 rounded-lg text-sm md:text-base">
                  Iniciar Sesión
                </button>
              </div>
            </nav>

            {/* Menú móvil */}
            <button className="lg:hidden p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ¿Qué es HMHCPTI? Section */}
        <section id="que-es" className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  ¿Qué es <span className="text-lime-500">HMHCPTI</span>?
                </h1>
                <p className="text-gray-600 mb-8 text-lg sm:text-xl">
                  Nuestra herramienta te ayuda a medir y monitorear la huella de carbono de tus proyectos de TI,
                  impulsando tu compromiso con la sostenibilidad.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-lg hover:bg-slate-800 transition-colors">
                    Probar ahora
                  </button>
                  <button className="bg-neutral-200 text-black px-6 py-3 rounded-lg text-lg hover:bg-neutral-300 transition-colors">
                    Mostrar más
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative w-full h-[300px] md:h-[350px]">
                  <div className="absolute inset-0 border-[3px] border-lime-500 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md">
                    <Image src="/images/Icono1.png" alt="Monitor" width={200} height={150} className="w-full h-auto" />
                  </div>
                  <div className="absolute top-[10%] right-[10%]">
                    <Calculator size={40} className="text-slate-900" />
                  </div>
                  <div className="absolute bottom-[10%] right-[20%]">
                    <BarChart2 size={40} className="text-slate-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Cómo funciona? Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Cómo funciona nuestra herramienta?</h2>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -z-10"></div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-4">Recopilación de Datos</h3>
                    <p className="mb-8">
                      Conecta tus proyectos y activos para recopilar datos precisos sobre el consumo de energía y
                      recursos de tus proyectos de TI.
                    </p>
                    <div className="w-16 h-16 flex items-center justify-center bg-lime-500 text-white rounded-lg text-2xl font-bold">
                      1
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-lime-500 text-white rounded-lg text-2xl font-bold mb-8">
                      2
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Cálculo de la Huella de Carbono</h3>
                    <p>
                      Nuestra metodología analiza los datos y calcula la huella de carbono de cada proyecto, por activo.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-4">Visualización e Informes</h3>
                    <p className="mb-8">
                      Genera informes detallados con gráficas y visualizaciones para comprender y comunicar el impacto
                      ambiental.
                    </p>
                    <div className="w-16 h-16 flex items-center justify-center bg-lime-500 text-white rounded-lg text-2xl font-bold">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-12 md:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <Image src="/images/Pie.png" alt="Logo" width={56} height={56} className="w-12 md:w-14 h-auto mb-4" />
              <h2 className="text-lime-500 text-center md:text-left text-lg leading-relaxed">
                Herramienta para medir la huella
                <br />
                de carbono de los Proyectos de TI
              </h2>
            </div>

            {/* Acerca de */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-2 md:mb-4">Acerca de</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/acerca-de" className="hover:text-lime-500">
                    ¿Qué es HMHCPTI?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-500">
                    ¿Quiénes somos?
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-500">
                    Misión
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lime-500">
                    Visión
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-2 md:mb-4">Contacto</h3>
              <div className="space-y-2">
                <p>Tel: (+52) 55-5555-5555</p>
                <p>Lunes a sábado 9am - 5pm</p>
                <p>
                  <a href="mailto:contacto@hmhcpti.com">contacto@hmhcpti.com</a>
                </p>
                <p>
                  <a href="mailto:soporte@hmhcpti.com">soporte@hmhcpti.com</a>
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-2 md:mb-4">Síguenos</h3>
              <div className="flex space-x-4">{/* Íconos sociales */}</div>
            </div>
          </div>

          {/* Derechos de autor */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm md:text-base">&copy; 2024 HMHCPTI. Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

