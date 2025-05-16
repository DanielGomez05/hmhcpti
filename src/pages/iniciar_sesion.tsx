import Footer from "../components/footer"
import Image from "next/image"
import Link from "next/link"
import HeaderSimple from "../components/header_simple"

export default function IniciarSesion() {
  return (
    <div className="font-century min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
      <HeaderSimple />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-white dark:bg-[#001E2B] shadow-md rounded-lg overflow-hidden">
          {/* Formulario */}
          <div className="w-full lg:w-1/2 px-6 py-10 space-y-6">
            <h2 className="text-3xl font-bold text-center lg:text-left">Iniciar Sesión</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg font-medium">
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
                  required
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Recuérdame</label>
              </div>
              <button
                type="submit"
                className="bg-[#001E2B] text-white px-6 py-2 rounded-lg hover:bg-[#0a2c3a] transition-colors"
              >
                Iniciar Sesión
              </button>
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
          <div className="w-full lg:w-1/2 relative h-100 lg:h-[700px]">
            <Image
              src="/images/Iniciar Sesion.png"
              alt="Sustentabilidad"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}