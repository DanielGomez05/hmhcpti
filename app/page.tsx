import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Home() {
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

      {/* Contenido Principal */}
      <main id="app" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          {/* Texto */}
          <div className="lg:w-1/2 space-y-6 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <span className="text-black">
                Conoce tu huella de Carbono,
                <br />
                entrega información valiosa
                <br />y toma medidas con{" "}
              </span>
              <span className="text-lime-500">HMHCPTI</span>
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Nuestra herramienta te ayuda a medir y monitorear la huella de carbono de tus proyectos de TI, impulsando
              tu compromiso con la sostenibilidad.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-lg sm:text-xl hover:bg-slate-800 transition-colors">
                Probar ahora
              </button>
              <button className="bg-neutral-200 text-black px-6 py-3 rounded-lg text-lg sm:text-xl hover:bg-neutral-300 transition-colors">
                Mostrar más
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className="lg:w-1/2 w-full max-w-2xl mt-8 lg:mt-0">
            <Image
              src="/images/Icono1.png"
              alt="Huella de Carbono"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
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

