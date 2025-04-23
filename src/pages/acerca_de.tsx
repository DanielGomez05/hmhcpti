import Image from "next/image"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function AcercaDe() {
  return (
    <div className="font-century bg-white min-h-screen flex flex-col text-slate-900">
      <Header />

      <main className="flex-grow">
        {/* Sección Principal */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Qué es <span className="text-lime-600">HMHCPTI</span>?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Nuestra herramienta te ayuda a medir y monitorear la huella de carbono de tus proyectos de TI,
            impulsando tu compromiso con la sostenibilidad.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/evaluacion">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-md text-lg hover:bg-slate-800">
                Probar ahora
              </button>
            </Link>
            <button className="bg-gray-200 text-slate-900 px-6 py-3 rounded-md text-lg hover:bg-gray-300">
              Mostrar más
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/Icono2.png" // Aquí se usa el nombre correcto
              alt="Gráfico sobre qué es HMHCPTI"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </section>

        {/* ¿Cómo funciona nuestra herramienta? */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center space-y-12">
            <h3 className="text-3xl font-bold">¿Cómo funciona nuestra herramienta?</h3>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <div className="space-y-4 max-w-sm mx-auto">
                <h4 className="text-xl font-semibold">Recopilación de Datos</h4>
                <p>
                  Conecta tus proyectos y activos para recopilar datos precisos sobre el consumo de energía y recursos.
                </p>
              </div>
              <div className="space-y-4 max-w-sm mx-auto">
                <h4 className="text-xl font-semibold">Visualización e Informes</h4>
                <p>
                  Genera informes detallados con gráficos y visualizaciones para comunicar el impacto ambiental.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Cálculo de la Huella de Carbono</h4>
              <p className="max-w-2xl mx-auto">
                Nuestra metodología analiza los datos y calcula la huella de carbono de cada proyecto, por activo.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

