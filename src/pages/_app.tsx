import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HMHCPTI - Huella de Carbono para Proyectos de TI</title>
        <meta
          name="description"
          content="Herramienta para medir la huella de carbono de los Proyectos de TI"
        />
        <link href="https://fonts.cdnfonts.com/css/century-gothic" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
