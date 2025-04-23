import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Logo y título */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/images/Pie.png" alt="Logo" width={56} height={56} />
          <span className="text-lime-600 font-semibold text-lg md:text-xl leading-tight">
            Herramienta para medir la huella de carbono de los Proyectos de TI
          </span>
        </Link>

        {/* Navegación */}
        <nav className="hidden lg:flex gap-6 items-center">
          <Link href="/" className="hover:text-lime-600 text-black text-base">Inicio</Link>
          <Link href="/acerca_de" className="hover:text-lime-600 text-black text-base">¿Qué es HMHCPTI?</Link>
          <Link href="#" className="hover:text-lime-600 text-black text-base">Recursos</Link>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-800">Probar Ahora</button>
          <button className="border border-slate-900 px-4 py-2 rounded-md text-sm hover:bg-slate-100">Iniciar Sesión</button>
        </nav>

        {/* Menú móvil */}
        <button className="lg:hidden p-2" aria-label="Abrir menú">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

