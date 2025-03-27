import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="font-century bg-white min-h-screen flex flex-col">
      <Header />

      {/* Contenido Principal */}
      <main id="app" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex-grow">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          {/* Texto */}
          <div className="lg:w-1/2 space-y-6 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <span className="text-black">
                Conoce tu huella de Carbono,
                <br />
                entrega información valiosa
                <br />y toma medidas con{" "}
              </span>
              <span className="text-lime-500">HMHCPTI</span>
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Nuestra herramienta te ayuda a medir y monitorear la huella de carbono de tus proyectos de TI, impulsando
              tu compromiso con la sostenibilidad.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg text-lg sm:text-xl hover:bg-slate-800 transition-colors">
                Probar ahora
              </button>
              <button className="bg-neutral-200 text-black px-6 py-3 rounded-lg text-lg sm:text-xl hover:bg-neutral-300 transition-colors">
                Mostrar más
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className="lg:w-1/2 w-full max-w-2xl mt-8 lg:mt-0">
            <div className="relative w-full aspect-[4/3]">
              <Image src="/images/Icono1.png" alt="Huella de Carbono" fill priority className="object-contain" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

