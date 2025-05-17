import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"

export default function HeaderBienvenida() {
  const router = useRouter()
  const [nombreUsuario, setNombreUsuario] = useState("Usuario")
  const [horaActual, setHoraActual] = useState("")
  const [modoOscuro, setModoOscuro] = useState(false)

  useEffect(() => {
    // Obtener el nombre desde localStorage
    const nombreCompleto = localStorage.getItem("nombreUsuario") || "Usuario"
    const primerNombre = nombreCompleto.trim().split(" ")[0] || "Usuario"
    setNombreUsuario(primerNombre)

    // Actualizar hora cada segundo
    const actualizarHora = () => {
      const hoy = new Date()
      const fecha = hoy.toLocaleDateString("es-MX", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      const hora = hoy.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setHoraActual(`${fecha.charAt(0).toUpperCase() + fecha.slice(1)} ${hora}`)
    }

    actualizarHora()
    const intervalo = setInterval(actualizarHora, 1000)
    return () => clearInterval(intervalo)
  }, [])

  const cerrarSesion = () => {
    localStorage.clear()
    router.push("/iniciar_sesion")
  }

  const toggleModoOscuro = () => {
    document.documentElement.classList.toggle("dark")
    setModoOscuro(!modoOscuro)
  }

  return (
    <header className="flex flex-col bg-white dark:bg-[#001E2B] shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo y nombre */}
        <div className="flex items-center space-x-3">
          <Image src="/images/Pie.png" alt="Logo" width={38} height={38} />
          <span className="font-century font-light text-xs leading-4 text-left text-[#9FB816] hidden sm:block">
            Herramienta para medir la huella de carbono de los
            <br />
            Proyectos de TI
          </span>
        </div>

        {/* Menú de navegación */}
        <nav className="hidden md:flex space-x-6 text-[15px]">
          <Link href="/bienvenida" className="text-[#9FB816] font-semibold border-b border-[#9FB816]">Bienvenida</Link>
          <Link href="/empresa" className="hover:text-[#9FB816]">Empresa</Link>
          <Link href="/activos" className="hover:text-[#9FB816]">Activos</Link>
          <Link href="/proyectos" className="hover:text-[#9FB816]">Proyectos</Link>
          <Link href="/usuarios" className="hover:text-[#9FB816]">Usuarios</Link>
        </nav>

        {/* Hora, usuario, botones */}
        <div className="flex items-center space-x-4 text-sm">
          <span className="hidden sm:block">{horaActual}</span>
          <div className="h-5 border-l border-gray-400"></div>
          <Image src="/images/Usuario.png" alt="Usuario" width={20} height={20} />
          <span className="hidden sm:inline">¡Hola {nombreUsuario}!</span>
          <button onClick={toggleModoOscuro}>
            <Image
              src={modoOscuro ? "/images/Luna.png" : "/images/Sol.png"}
              alt="Modo Oscuro"
              width={22}
              height={22}
            />
          </button>
          <button onClick={cerrarSesion}>
            <Image src="/images/Cerrar Sesión.png" alt="Cerrar Sesión" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

