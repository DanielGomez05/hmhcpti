import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("hmhcpti-theme")
    if (stored === "dark") setDarkMode(true)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add("dark")
      localStorage.setItem("hmhcpti-theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("hmhcpti-theme", "light")
    }
  }, [darkMode])

  return (
    <header className="bg-white dark:bg-[#001E2B] shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Logo + Nombre */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/images/Pie.png" alt="Logo" width={56} height={56} />
          <span className="text-lime-600 dark:text-[#9FB816] font-semibold text-lg md:text-xl leading-tight">
		  HMHCPTI
          </span>
		  

        </Link>

        {/* Navegación */}
        <nav className="hidden lg:flex gap-6 items-center text-black dark:text-white">
          <Link href="/" className="text-inherit hover:text-[#9FB816]">Inicio</Link>
          <Link href="/acerca_de" className="text-inherit hover:text-[#9FB816]">¿Qué es HMHCPTI?</Link>
          <Link href="#" className="text-inherit hover:text-[#9FB816]">Recursos</Link>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-800">Probar Ahora</button>
          <button className="border border-slate-900 dark:border-white text-slate-900 dark:text-white px-4 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
            Iniciar Sesión
          </button>
          <button
            aria-label="Cambiar tema"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2"
          >
            <Image
              src={darkMode ? "/images/Luna.png" : "/images/Sol.png"}
              alt="Toggle Theme"
              width={28}
              height={28}
            />
          </button>
        </nav>
      </div>
    </header>
  )
}

