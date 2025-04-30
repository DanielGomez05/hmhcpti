import Image from "next/image"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function AcercaDe() {
  return (
    <div className="font-century min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300 scroll-smooth">
      <Header />

      <main className="flex-grow">
        {/* Sección principal */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/Icono2.png"
                alt="Gráfico sobre qué es HMHCPTI"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              ¿Qué es <span className="text-[#9FB816]">HMHCPTI</span>?
            </h2>
            <p className="text-lg md:text-xl">
              Nuestra herramienta te ayuda a medir y monitorear la huella de carbono de tus proyectos de TI, impulsando tu compromiso con la sostenibilidad.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="bg-white text-[#001E2B] px-6 py-3 rounded-md text-lg hover:bg-gray-100">Probar ahora</button>
              <a href="#funcionamiento" className="bg-[#001E2B] text-white border border-white px-6 py-3 rounded-md text-lg hover:bg-[#0a2c3a]">
                Mostrar más
              </a>
            </div>
          </div>
        </section>

        {/* Sección: Cómo funciona */}
        <section id="funcionamiento" className="bg-gray-100 dark:bg-[#001E2B] py-20 transition-colors duration-300">
          <div className="container mx-auto px-4 text-center space-y-12">
            <h3 className="text-3xl font-bold">¿Cómo funciona nuestra herramienta?</h3>
            <div className="flex flex-col md:flex-row justify-center gap-12 items-start">
              <div className="space-y-4 max-w-sm mx-auto">
                <div className="text-white bg-[#9FB816] rounded-md w-8 h-8 flex items-center justify-center mx-auto font-bold">1</div>
                <h4 className="text-xl font-semibold">Recopilación de Datos</h4>
                <p>Conecta tus proyectos y activos para recopilar datos precisos sobre el consumo de energía y recursos de tus proyectos de TI.</p>
              </div>
              <div className="space-y-4 max-w-sm mx-auto">
                <div className="text-white bg-[#9FB816] rounded-md w-8 h-8 flex items-center justify-center mx-auto font-bold">2</div>
                <h4 className="text-xl font-semibold">Visualización e Informes</h4>
                <p>Genera informes detallados con gráficos y visualizaciones para comprender y comunicar el impacto ambiental.</p>
              </div>
              <div className="space-y-4 max-w-sm mx-auto">
                <div className="text-white bg-[#9FB816] rounded-md w-8 h-8 flex items-center justify-center mx-auto font-bold">3</div>
                <h4 className="text-xl font-semibold">Cálculo de la Huella de Carbono</h4>
                <p>Nuestra metodología analiza los datos y calcula la huella de carbono de cada proyecto, por activo.</p>
              </div>
            </div>
            <a href="#metodologia" className="inline-block mt-10 text-[#9FB816] font-semibold hover:underline">Mostrar metodología ↓</a>
          </div>
        </section>

        {/* Sección: ¿Por qué medir? */}
        <section id="metodologia" className="py-20 bg-white dark:bg-[#001E2B]">
          <div className="container mx-auto px-4 text-center space-y-12">
            <h3 className="text-3xl font-bold">¿Por qué medir la Huella de Carbono?</h3>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <div className="space-y-4 max-w-sm mx-auto">
                <h4 className="text-xl font-semibold">Cumplimiento Regulatorio</h4>
                <p>Genera informes detallados con gráficos y visualizaciones para comprender y comunicar el impacto ambiental.</p>
              </div>
              <div className="space-y-4 max-w-sm mx-auto">
                <h4 className="text-xl font-semibold">Ventaja Competitiva</h4>
                <p>Nuestra metodología analiza los datos y calcula la huella de carbono de cada proyecto, por activo.</p>
              </div>
              <div className="space-y-4 max-w-sm mx-auto">
                <h4 className="text-xl font-semibold">Recopilación de Datos</h4>
                <p>Conecta tus proyectos y activos para recopilar datos precisos sobre el consumo de energía y recursos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Metodología visual */}
        <section className="py-20 bg-[#9FB816] text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-12">Metodología para calcular la Huella de Carbono de los Proyectos de TI</h3>
            <Image
              src="/images/Metodologia.png"
              alt="Metodología visual"
              width={1200}
              height={600}
              className="mx-auto"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

