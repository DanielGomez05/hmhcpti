import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo y título */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Image src="/images/Pie.png" alt="Logo" width={56} height={56} className="w-12 md:w-14 h-auto" priority />
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
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>
  )
}

