import Footer from "../components/footer"
import Link from "next/link"
import HeaderSimple from "../components/header_simple"

export default function CrearCuenta() {
  return (
    <div className="font-century min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
      <HeaderSimple />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="bg-white dark:bg-[#001E2B] shadow-md rounded-lg px-8 py-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Cree su cuenta de HMHCPTI</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-lg font-medium">Nombre completo*</label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre completo"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
              />
            </div>
            <div>
              <label htmlFor="correo" className="block text-lg font-medium">Correo electrónico*</label>
              <input
                type="email"
                id="correo"
                placeholder="ejemplo@correo.com"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium">Contraseña*</label>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
              />
            </div>
            <div>
              <label htmlFor="confirmar" className="block text-lg font-medium">Confirmar contraseña*</label>
              <input
                type="password"
                id="confirmar"
                placeholder="Confirmar contraseña"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
              />
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300">
              Las contraseñas distinguen entre mayúsculas y minúsculas, y deben tener entre 8 y 10 caracteres.
              Además, deben incluir al menos un número (0-9), una letra mayúscula, una letra minúscula y uno de los siguientes caracteres:
              <br />
              <code className="text-xs">{'`! "#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'}</code>
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Al registrarse, confirma que está de acuerdo con que HMHCPTI trate sus datos personales tal como se describe en el
              <Link href="#" className="text-[#9FB816] hover:underline ml-1">Aviso de términos y condiciones</Link>.
            </p>

            <button type="submit" className="w-full bg-[#001E2B] text-white px-6 py-3 rounded-lg hover:bg-[#0a2c3a] transition-colors">
              Crear cuenta
            </button>

            <p className="text-center text-sm mt-4">
              ¿Ya tiene cuenta?
              <Link href="/iniciar_sesion" className="text-[#9FB816] hover:underline ml-1">Iniciar Sesión</Link>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}