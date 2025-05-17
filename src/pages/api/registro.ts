// src/pages/api/registro.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import prisma from '../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const { nombre, correo, password } = req.body

  if (!nombre || !correo || !password) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        correo,
        contrasena: hashedPassword, // Asegúrate de que el modelo tenga 'contrasena'
      },
    })

    return res.status(201).json({ mensaje: 'Usuario creado correctamente', usuario: nuevoUsuario })
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear usuario' })
  }
}

