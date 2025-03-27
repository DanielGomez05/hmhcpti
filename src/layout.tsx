import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HMHCPTI - Huella de Carbono para Proyectos de TI",
  description: "Herramienta para medir la huella de carbono de los Proyectos de TI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.cdnfonts.com/css/century-gothic" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

