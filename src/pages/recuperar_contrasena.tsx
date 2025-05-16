import HeaderSimple from "../components/header_simple"
import Footer from "../components/footer"

export default function RecuperarContrasena() {
  return (
    <div className="font-century min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
      <HeaderSimple />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="bg-white dark:bg-[#001E2B] shadow-md rounded-lg px-8 py-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Recuperar contraseña</h2>

          <p className="text-center text-lg mb-8">
            Proporcione su dirección de correo electrónico para restablecer su contraseña.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="correo" className="block text-lg font-medium">Correo electrónico*</label>
              <input
                type="email"
                id="correo"
                placeholder="ejemplo@correo.com"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 text-black"
              />
              <p className="text-sm text-red-500 mt-1">*Este campo es obligatorio</p>
            </div>

            <button
              type="submit"
              className="w-full border border-[#001E2B] dark:border-white text-[#001E2B] dark:text-white px-6 py-3 rounded-lg hover:bg-[#001E2B] hover:text-white dark:hover:bg-white dark:hover:text-[#001E2B] transition-colors"
            >
              Enviar correo electrónico de restablecimiento de contraseña
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
