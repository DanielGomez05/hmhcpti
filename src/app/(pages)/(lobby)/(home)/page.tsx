import Image from "next/image";

export default function Home() {
  return (
    <div className="font-century flex min-h-screen flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
      {/* <Header /> */}

      <main className="flex-grow">
        <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-12 sm:px-6 md:py-24 lg:flex-row lg:px-8 xl:gap-16">
          <div className="space-y-6 md:space-y-10 lg:w-1/2">
            <h2 className="text-3xl font-semibold leading-snug sm:text-4xl lg:text-5xl">
              <span className="block">
                Conoce tu huella de Carbono, entrega información valiosa y toma
                medidas con
              </span>
              <span className="block font-bold text-[#9FB816]">HMHCPTI</span>
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl lg:text-2xl">
              Nuestra herramienta te ayuda a medir y monitorear la huella de
              carbono de tus proyectos de TI, impulsando tu compromiso con la
              sostenibilidad.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-6 py-3 text-lg text-[#001E2B] transition-colors hover:bg-gray-100 sm:text-xl">
                Probar ahora
              </button>
              <button className="rounded-lg border border-white bg-[#001E2B] px-6 py-3 text-lg text-white transition-colors hover:bg-[#0a2c3a] sm:text-xl">
                Mostrar más
              </button>
            </div>
          </div>

          <div className="mt-8 w-full max-w-2xl lg:mt-0 lg:w-1/2">
            <div className="relative aspect-[4/3] w-full">
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

      {/* <Footer /> */}
    </div>
  );
}
