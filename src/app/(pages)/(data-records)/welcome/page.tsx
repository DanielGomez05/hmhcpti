'use client';

import Link from 'next/link';

export default function BienvenidaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#001E2B] text-[#001E2B] dark:text-white px-4 py-10">
      <section className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          ¡Bienvenido a nuestra Herramienta para medir la Huella de Carbono para los Proyectos de TI!
        </h1>
        <p className="text-lg">Estamos ansiosos por empezar.</p>
        <p className="text-md">
          Necesitaremos que nos proporciones la siguiente información:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left mt-10">
          {/* EMPRESA */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Tipo de Empresa</h2>
            <p className="mb-4 text-sm">
              En esta sección necesitaremos que nos proporcione los datos necesarios sobre el tipo de empresa. Para determinar un semáforo comparativo.
            </p>
            <Link
              href="/entreprise"
              className="inline-block bg-[#001E2B] text-white px-4 py-2 rounded hover:bg-[#0a2c3a]"
            >
              Registrar Empresa
            </Link>
          </div>

          {/* ACTIVOS */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Recursos Tecnológicos</h2>
            <p className="mb-4 text-sm">
              En esta sección necesitaremos que nos proporciones los datos necesarios para obtener el consumo eléctrico total de los activos tecnológicos.
            </p>
            <Link
              href="/actives"
              className="inline-block bg-[#001E2B] text-white px-4 py-2 rounded hover:bg-[#0a2c3a]"
            >
              Registrar Activos
            </Link>
          </div>

          {/* PROYECTOS */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Proyectos</h2>
            <p className="mb-4 text-sm">
              En esta sección necesitaremos que nos proporciones los datos necesarios de los proyectos TI de la empresa. Para vincular los activos que corresponden.
            </p>
            <Link
              href="/proyects"
              className="inline-block bg-[#001E2B] text-white px-4 py-2 rounded hover:bg-[#0a2c3a]"
            >
              Registrar Proyectos
            </Link>
          </div>

          {/* USUARIOS */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Usuarios adicionales</h2>
            <p className="mb-4 text-sm">
              En esta sección necesitaremos que nos proporciones los datos de los usuarios que podrán agregar activos o proyectos aparte de usted.
            </p>
            <Link
              href="/users"
              className="inline-block bg-[#001E2B] text-white px-4 py-2 rounded hover:bg-[#0a2c3a]"
            >
              Registrar Usuarios
            </Link>
          </div>
        </div>

        <p className="text-sm mt-8 border-t pt-4">
          Nota al usuario: Es necesario que cubra los 4 rubros iniciales. Al completarlos, la vista bienvenida se quedará eliminada definitivamente y se abrirán los demás campos.
        </p>
      </section>
    </main>
  );
}
