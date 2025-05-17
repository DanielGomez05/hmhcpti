import HeaderBienvenida from "../components/header_Bienvenida";
import Footer from "../components/footer";

export default function Bienvenida() {
  return (
    <div className="font-century min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
      <HeaderBienvenida />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="bg-white dark:bg-[#001E2B] shadow-md rounded-lg px-8 py-12 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            ¡Bienvenido a nuestra Herramienta para medir la
            <br /> Huella de Carbono para los Proyectos de TI!
          </h1>

          <p className="text-xl text-center mb-8">
            Estamos ansiosos por empezar.
          </p>

          <p className="text-center text-lg mb-12">
            Necesitaremos que nos proporciones la siguiente información:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">Tipo de Empresa</h3>
              <p className="text-sm">
                En esta sección necesitaremos que nos proporcione los datos necesarios sobre el tipo de empresa. Para determinar un semáforo comparativo.
              </p>
              <button className="mt-4 bg-[#001E2B] text-white px-4 py-2 rounded-md hover:bg-[#0a2c3a]">
                Registrar Empresa
              </button>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">Recursos Tecnológicos</h3>
              <p className="text-sm">
                En esta sección necesitaremos que nos proporcione los datos necesarios para obtener el consumo eléctrico total de los activos tecnológicos:
              </p>
              <button className="mt-4 bg-[#001E2B] text-white px-4 py-2 rounded-md hover:bg-[#0a2c3a]">
                Registrar Activos
              </button>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">Proyectos</h3>
              <p className="text-sm">
                En esta sección necesitaremos que nos proporcione los datos necesarios de los proyectos TI de la empresa. Para vincular los activos que correspondan:
              </p>
              <button className="mt-4 bg-[#001E2B] text-white px-4 py-2 rounded-md hover:bg-[#0a2c3a]">
                Registrar Proyectos
              </button>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">Usuarios adicionales</h3>
              <p className="text-sm">
                En esta sección necesitaremos que nos proporcione los datos de los usuarios que podrán agregar activos o proyectos aparte de usted:
              </p>
              <button className="mt-4 bg-[#001E2B] text-white px-4 py-2 rounded-md hover:bg-[#0a2c3a]">
                Registrar Usuarios
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-600 dark:text-gray-300">
            Nota al usuario: Es necesario que cubra los 4 rubros iniciales. Al completarlos la vista bienvenida se quedará eliminada definitivamente y se abrirán los demás campos.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
