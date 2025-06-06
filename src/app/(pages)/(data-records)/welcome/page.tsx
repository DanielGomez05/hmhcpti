import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">

      {/* Contenido principal */}
      <main className="px-10 py-8 text-center">
        <h1 className="text-2xl font-semibold mb-2">
          ¡Bienvenido a nuestra Herramienta para medir la Huella de Carbono para los Proyectos de TI!
        </h1>
        <p className="text-gray-700 mb-8">Estamos ansiosos por empezar.</p>
        <p className="text-lg font-medium mb-12">
          Necesitaremos que nos proporciones la siguiente información:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              title: 'Tipo de Empresa',
              desc: 'Proporciónanos los datos necesarios sobre el tipo de empresa.',
              link: '/enterprise',
              button: 'Registrar Empresa',
            },
            {
              title: 'Recursos Tecnológicos',
              desc: 'Dinos el consumo eléctrico total de los activos tecnológicos.',
              link: '/actives',
              button: 'Registrar Activos',
            },
            {
              title: 'Proyectos',
              desc: 'Proporciónanos los datos necesarios de los proyectos TI.',
              link: '/projects',
              button: 'Registrar Proyectos',
            },
            {
              title: 'Usuarios adicionales',
              desc: 'Proporciónanos los datos de usuarios que podrán agregar activos o proyectos.',
              link: '/users',
              button: 'Registrar Usuarios',
            },
          ].map((item, idx) => (
            <div key={idx} className="border p-6 rounded shadow-sm">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
              <Link href={item.link}>
                <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                  {item.button}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-12">
          Nota al usuario: Es necesario que cubras los 4 rubros iniciales. Al completarlos, la vista de bienvenida se eliminará y se abrirán los demás campos.
        </p>
      </main>
    </div>
  );
}

