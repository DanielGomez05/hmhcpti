import Image from "next/image"
import { Calculator, BarChart2 } from "lucide-react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function AcercaDe() {
  return (
    <div className="font-century bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* ¿Qué es HMHCPTI? Section */}
        <section id="que-es" className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  ¿Qué es <span className="text-lime-500">HMHCPTI</span>?
                </h1>
                <p className="text-gray-600 mb-8 text-lg sm:text-xl">
                  Nuestra herramienta te ayuda a medir y monitorear la huella de carbono de tus proyectos de TI,
                  impulsando tu compromiso con la sostenibilidad.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-lg hover:bg-slate-800 transition-colors">
                    Probar ahora
                  </button>
                  <button className="bg-neutral-200 text-black px-6 py-3 rounded-lg text-lg hover:bg-neutral-300 transition-colors">
                    Mostrar más
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative w-full h-[300px] md:h-[350px]">
                  <div className="absolute inset-0 border-[3px] border-lime-500 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md">
                    <div className="relative w-[200px] h-[150px]">
                      <Image src="/images/Icono1.png" alt="Monitor" fill priority className="object-contain" />
                    </div>
                  </div>
                  <div className="absolute top-[10%] right-[10%]">
                    <Calculator size={40} className="text-slate-900" />
                  </div>
                  <div className="absolute bottom-[10%] right-[20%]">
                    <BarChart2 size={40} className="text-slate-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Cómo funciona? Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Cómo funciona nuestra herramienta?</h2>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -z-10"></div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-4">Recopilación de Datos</h3>
                    <p className="mb-8">
                      Conecta tus proyectos y activos para recopilar datos precisos sobre el consumo de energía y
                      recursos de tus proyectos de TI.
                    </p>
                    <div className="w-16 h-16 flex items-center justify-center bg-lime-500 text-white rounded-lg text-2xl font-bold">
                      1
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-lime-500 text-white rounded-lg text-2xl font-bold mb-8">
                      2
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Cálculo de la Huella de Carbono</h3>
                    <p>
                      Nuestra metodología analiza los datos y calcula la huella de carbono de cada proyecto, por activo.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-4">Visualización e Informes</h3>
                    <p className="mb-8">
                      Genera informes detallados con gráficas y visualizaciones para comprender y comunicar el impacto
                      ambiental.
                    </p>
                    <div className="w-16 h-16 flex items-center justify-center bg-lime-500 text-white rounded-lg text-2xl font-bold">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

