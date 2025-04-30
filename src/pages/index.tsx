import Image from "next/image"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="font-century min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          <div className="lg:w-1/2 space-y-6 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-snug font-semibold">
              <span className="block">
                Conoce tu huella de Carbono, entrega información valiosa y toma medidas con
              </span>
              <span className="block text-[#9FB816] font-bold">HMHCPTI</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
              Nuestra herramienta te ayuda a medir y monitorear la huella de carbono de tus proyectos de TI,
              impulsando tu compromiso con la sostenibilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#001E2B] px-6 py-3 rounded-lg text-lg sm:text-xl hover:bg-gray-100 transition-colors">
                Probar ahora
              </button>
              <button className="bg-[#001E2B] text-white border border-white px-6 py-3 rounded-lg text-lg sm:text-xl hover:bg-[#0a2c3a] transition-colors">
                Mostrar más
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-2xl mt-8 lg:mt-0">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/Icono1.png"
                alt="Huella de Carbono"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
