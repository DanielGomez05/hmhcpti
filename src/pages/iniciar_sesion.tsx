import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Footer from "../components/footer"
import Link from "next/link"
import HeaderSimple from "../components/header_simple"

export default function IniciarSesion() {
  const [correo, setCorreo] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [cargando, setCargando] = useState(false)
  const [mensajeVerificado, setMensajeVerificado] = useState("") // Nuevo estado para mensaje de verificación
  const router = useRouter()

  // Detectamos si el usuario ha verificado su correo
  useEffect(() => {
    if (router.query.verificado === "true") {
      setMensajeVerificado("Tu correo ha sido verificado exitosamente. Ya puedes iniciar sesión.")
    }
  }, [router.query.verificado]) // Se ejecuta cuando cambia el query

  const manejarLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!correo || !contrasena) {
      setMensaje("Por favor ingresa correo y contraseña.")
      return
    }

    setCargando(true)

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contrasena })
      })

      const datos = await res.json()

      if (!res.ok) {
        setMensaje(datos.error || "Error al iniciar sesión.")
      } else {
        localStorage.setItem("nombreUsuario", datos.usuario.nombre)
        router.push("/bienvenida")
      }
    } catch {
      setMensaje("Error de conexión con el servidor.")
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="font-century min-h-screen flex flex-col">
      <HeaderSimple />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-white dark:bg-[#001E2B] shadow-md rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2 px-6 py-10 space-y-6">
            <h2 className="text-3xl font-bold text-center lg:text-left">Iniciar Sesión</h2>

            {/* Mensaje de correo verificado */}
            {mensajeVerificado && (
              <div className="text-center text-green-600 mb-4">
                {mensajeVerificado}
              </div>
            )}

            <form className="space-y-4" onSubmit={manejarLogin}>
              <div>
                <label htmlFor="correo" className="block text-lg font-medium">Correo electrónico:</label>
                <input
                  type="email"
                  id="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="contrasena" className="block text-lg font-medium">Contraseña:</label>
                <input
                  type="password"
                  id="contrasena"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  placeholder="Contraseña"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-[#001E2B] text-white px-6 py-3 rounded-lg hover:bg-[#0a2c3a] transition-colors">
                {cargando ? "Ingresando..." : "Iniciar Sesión"}
              </button>
              {mensaje && <p className="text-sm text-center text-red-500">{mensaje}</p>}
            </form>

            <div className="text-sm text-center space-y-1">
              <p>
                ¿No puedes ingresar? <Link href="/recuperar_contrasena" className="text-[#9FB816] hover:underline">Recuperar contraseña</Link>
              </p>
              <p>
                ¿Nuevo en el sitio? <Link href="/crear_cuenta" className="text-[#9FB816] hover:underline">¡Regístrate!</Link>
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[700px]">
            <img src="/images/Iniciar Sesion.png" alt="Sustentabilidad" className="object-cover w-full h-full" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
