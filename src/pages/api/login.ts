import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import prisma from '../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const { correo, contrasena } = req.body

  if (!correo || !contrasena) {
    return res.status(400).json({ error: 'Por favor ingresa correo y contraseña.' })
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { correo },
      select: {
        id: true,
        nombre: true,
        correo: true,
        contrasena: true,
        creadoEn: true,
        correo_verificado: true
      }
    })

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado.' })
    }

    const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena)

    if (!contrasenaValida) {
      return res.status(401).json({ error: 'Contraseña incorrecta.' })
    }

    if (!usuario.correo_verificado) {
      return res.status(403).json({ error: 'Debes verificar tu correo antes de iniciar sesión.' })
    }

    // ✅ Aquí podrías generar una sesión, token, etc.
    return res.status(200).json({
      mensaje: 'Inicio de sesión exitoso.',
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo
      },
      bienvenida: true
    })
  } catch (error) {
    return res.status(500).json({ error: 'Error en el servidor. Inténtalo de nuevo.' })
  }
}
