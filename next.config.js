/** @type {import('next').NextConfig} */
const nextConfig = {
	// Habilita React Strict Mode para mejores prácticas de desarrollo
	reactStrictMode: true,
  
	// Configuración de imágenes para permitir dominios externos si los necesitas
	images: {
	  domains: [],
	  unoptimized: true,
	  // Puedes añadir dominios si necesitas cargar imágenes de fuentes externas
	  // Por ejemplo: domains: ['images.unsplash.com', 'example.com']
	},
  
	output: "export",
  
	// Configuración de internacionalización (i18n) si la necesitas
	// i18n: {
	//   locales: ['es'],
	//   defaultLocale: 'es',
	// },
  
	// Configuración experimental (descomenta si necesitas alguna característica experimental)
	// experimental: {
	//   appDir: true,
	// },
  
	// Configuración de redirecciones si las necesitas
	// async redirects() {
	//   return [
	//     {
	//       source: '/old-page',
	//       destination: '/new-page',
	//       permanent: true,
	//     },
	//   ]
	// },
  
	// Configuración de encabezados HTTP si los necesitas
	// async headers() {
	//   return [
	//     {
	//       source: '/(.*)',
	//       headers: [
	//         {
	//           key: 'X-Content-Type-Options',
	//           value: 'nosniff',
	//         },
	//         {
	//           key: 'X-Frame-Options',
	//           value: 'DENY',
	//         },
	//         {
	//           key: 'X-XSS-Protection',
	//           value: '1; mode=block',
	//         },
	//       ],
	//     },
	//   ]
	// },
  }
  
  module.exports = nextConfig
  
  