import Image from 'next/image';

export const About = () => {
  return (
    <>
      {/* Sección principal */}
      <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:px-8 xl:gap-16">
        <div className="lg:w-1/2">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/Icono2.png"
              alt="Gráfico sobre qué es HMHCPTI"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
        <div className="space-y-6 text-center lg:w-1/2 lg:text-left">
          <h2 className="text-4xl font-bold md:text-5xl">
            ¿Qué es <span className="text-[#9FB816]">HMHCPTI</span>?
          </h2>
          <p className="text-lg md:text-xl">
            Nuestra herramienta te ayuda a medir y monitorear la huella de
            carbono de tus proyectos de TI, impulsando tu compromiso con la
            sostenibilidad.
          </p>
          <div className="flex justify-center gap-4 lg:justify-start">
            <button className="rounded-md bg-white px-6 py-3 text-lg text-[#001E2B] hover:bg-gray-100">
              Probar ahora
            </button>
            <a
              href="#funcionamiento"
              className="rounded-md border border-white bg-[#001E2B] px-6 py-3 text-lg text-white hover:bg-[#0a2c3a]"
            >
              Mostrar más
            </a>
          </div>
        </div>
      </section>

      {/* Sección: Cómo funciona */}
      <section
        id="funcionamiento"
        className="bg-gray-100 py-20 transition-colors duration-300 dark:bg-[#001E2B]"
      >
        <div className="container mx-auto space-y-12 px-4 text-center">
          <h3 className="text-3xl font-bold">
            ¿Cómo funciona nuestra herramienta?
          </h3>
          <div className="flex flex-col items-start justify-center gap-12 md:flex-row">
            <div className="mx-auto max-w-sm space-y-4">
              <div className="mx-auto flex size-8 items-center justify-center rounded-md bg-[#9FB816] font-bold text-white">
                1
              </div>
              <h4 className="text-xl font-semibold">Recopilación de Datos</h4>
              <p>
                Conecta tus proyectos y activos para recopilar datos precisos
                sobre el consumo de energía y recursos de tus proyectos de TI.
              </p>
            </div>
            <div className="mx-auto max-w-sm space-y-4">
              <div className="mx-auto flex size-8 items-center justify-center rounded-md bg-[#9FB816] font-bold text-white">
                2
              </div>
              <h4 className="text-xl font-semibold">
                Visualización e Informes
              </h4>
              <p>
                Genera informes detallados con gráficos y visualizaciones para
                comprender y comunicar el impacto ambiental.
              </p>
            </div>
            <div className="mx-auto max-w-sm space-y-4">
              <div className="mx-auto flex size-8 items-center justify-center rounded-md bg-[#9FB816] font-bold text-white">
                3
              </div>
              <h4 className="text-xl font-semibold">
                Cálculo de la Huella de Carbono
              </h4>
              <p>
                Nuestra metodología analiza los datos y calcula la huella de
                carbono de cada proyecto, por activo.
              </p>
            </div>
          </div>
          <a
            href="#metodologia"
            className="mt-10 inline-block font-semibold text-[#9FB816] hover:underline"
          >
            Mostrar metodología ↓
          </a>
        </div>
      </section>

      {/* Sección: ¿Por qué medir? */}
      <section id="metodologia" className="bg-white py-20 dark:bg-[#001E2B]">
        <div className="container mx-auto space-y-12 px-4 text-center">
          <h3 className="text-3xl font-bold">
            ¿Por qué medir la Huella de Carbono?
          </h3>
          <div className="flex flex-col justify-center gap-12 md:flex-row">
            <div className="mx-auto max-w-sm space-y-4">
              <h4 className="text-xl font-semibold">
                Cumplimiento Regulatorio
              </h4>
              <p>
                Genera informes detallados con gráficos y visualizaciones para
                comprender y comunicar el impacto ambiental.
              </p>
            </div>
            <div className="mx-auto max-w-sm space-y-4">
              <h4 className="text-xl font-semibold">Ventaja Competitiva</h4>
              <p>
                Nuestra metodología analiza los datos y calcula la huella de
                carbono de cada proyecto, por activo.
              </p>
            </div>
            <div className="mx-auto max-w-sm space-y-4">
              <h4 className="text-xl font-semibold">Recopilación de Datos</h4>
              <p>
                Conecta tus proyectos y activos para recopilar datos precisos
                sobre el consumo de energía y recursos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
