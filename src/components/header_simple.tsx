import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HeaderSimple() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header className="bg-white dark:bg-[#001E2B] shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo + título */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/Pie.png"
            alt="Logo HMHCPTI"
            width={48}
            height={48}
            className="w-12 h-auto"
            priority
          />
          <h1 className="text-lime-500 text-sm md:text-lg font-medium leading-tight">
            Herramienta para medir la<br />
            huella de carbono de los<br />
            Proyectos de TI
          </h1>
        </div>

        {/* Navegación */}
        <nav className="flex items-center space-x-6 text-sm md:text-base">
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/crear_cuenta" className="hover:underline">Registro</Link>
          <Link
            href="/iniciar_sesion"
            className="border border-[#001E2B] dark:border-white px-4 py-1 rounded-md hover:bg-[#001E2B] hover:text-white dark:hover:bg-white dark:hover:text-[#001E2B]"
          >
            Iniciar Sesión
          </Link>

          <button onClick={toggleDarkMode} className="ml-2">
            <Image
              src={isDarkMode ? "/images/Luna.png" : "/images/Sol.png"}
              alt="Modo"
              width={24}
              height={24}
              className="w-6 h-6"
              priority
            />
          </button>
        </nav>
      </div>
    </header>
  )
}
