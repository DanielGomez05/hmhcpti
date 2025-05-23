import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).send('Método no permitido')
  }

  const { token } = req.query

  if (!token || typeof token !== 'string') {
    return res.status(400).send('Token inválido.')
  }

  try {
    // Buscar al usuario con el token de verificación
    const usuario = await prisma.usuario.findFirst({
      where: { token_verificacion: token },
    })

    // Si no encontramos un usuario con ese token, es porque el token es inválido o ha expirado
    if (!usuario) {
      return res.status(404).send('Token no válido o expirado.')
    }

    // Si el usuario existe y el token es válido, actualizamos su estado de verificación
    await prisma.usuario.update({
      where: { id: usuario.id },
      data: {
        correo_verificado: true, // Marcamos el correo como verificado
        token_verificacion: null, // Limpiamos el token de verificación
      },
    })

    // Redirigir a la página de inicio de sesión, con un mensaje indicando que la verificación fue exitosa
    return res.redirect('/iniciar_sesion?verificado=true')
  } catch (error) {
    return res.status(500).send('Error en el servidor.')
  }
}
