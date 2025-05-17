import { useState } from "react"
import { useRouter } from "next/router"
import Footer from "../components/footer"
import Link from "next/link"
import HeaderSimple from "../components/header_simple"

export default function CrearCuenta() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [confirmar, setConfirmar] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [registroExitoso, setRegistroExitoso] = useState(false)
  const [cargando, setCargando] = useState(false)
  const router = useRouter()

  const manejarRegistro = async (e: React.FormEvent) => {
    e.preventDefault()
    setMensaje("")

    if (!nombre || !correo || !password || !confirmar) {
      setMensaje("Por favor, completa todos los campos.")
      return
    }

    if (password !== confirmar) {
      setMensaje("Las contraseñas no coinciden.")
      return
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,10}$/
    if (!regex.test(password)) {
      setMensaje("La contraseña no cumple con los requisitos.")
      return
    }

    try {
      setCargando(true)
      const res = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, password }),
      })

      const datos = await res.json()

      if (res.ok) {
        setRegistroExitoso(true)
        setNombre("")
        setCorreo("")
        setPassword("")
        setConfirmar("")
      } else {
        setMensaje(datos.error || "Hubo un error al registrar.")
      }
    } catch (error) {
      setMensaje("Error al conectar con el servidor.")
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="font-century min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
      <HeaderSimple />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="bg-white dark:bg-[#001E2B] shadow-md rounded-lg px-8 py-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
  				{registroExitoso ? "¡Felicidades!" : "Cree su cuenta de HMHCPTI"}
			</h2>

          {!registroExitoso ? (
            <form className="space-y-6" onSubmit={manejarRegistro}>
              <div>
                <label htmlFor="nombre" className="block text-lg font-medium">Nombre completo*</label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre completo"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
                />
              </div>
              <div>
                <label htmlFor="correo" className="block text-lg font-medium">Correo electrónico*</label>
                <input
                  type="email"
                  id="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg font-medium">Contraseña*</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
                />
              </div>
              <div>
                <label htmlFor="confirmar" className="block text-lg font-medium">Confirmar contraseña*</label>
                <input
                  type="password"
                  id="confirmar"
                  value={confirmar}
                  onChange={(e) => setConfirmar(e.target.value)}
                  placeholder="Confirmar contraseña"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
                />
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                Las contraseñas deben tener entre 8 y 10 caracteres, incluir un número, una mayúscula, una minúscula y un símbolo.
              </p>

              {mensaje && (
                <p className="text-center text-sm font-medium text-red-500 dark:text-lime-400">{mensaje}</p>
              )}

              <button
                type="submit"
                disabled={cargando}
                className="w-full bg-[#001E2B] text-white px-6 py-3 rounded-lg hover:bg-[#0a2c3a] transition-colors"
              >
                {cargando ? "Creando cuenta..." : "Crear cuenta"}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-lg font-semibold text-lime-500">
                ¡Cuenta creada! Por favor verifica tu correo electrónico.
              </p>
              <p className="text-sm">
                Una vez verificado, puedes continuar iniciando sesión.
              </p>
              <Link href="/iniciar_sesion" className="inline-block bg-[#001E2B] text-white px-6 py-3 rounded-lg hover:bg-[#0a2c3a] transition-colors">
                Ir a Iniciar Sesión
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

