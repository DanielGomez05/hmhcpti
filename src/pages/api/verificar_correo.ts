// src/pages/api/verificar_correo.ts
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query

  if (!token || typeof token !== 'string') {
    return res.status(400).send("Token inválido.")
  }

  const usuario = await prisma.usuario.findFirst({
    where: { token_verificacion: token },
  })

  if (!usuario) {
    return res.status(404).send("Token no válido o expirado.")
  }

  await prisma.usuario.update({
    where: { id: usuario.id },
    data: {
      correo_verificado: true,
      token_verificacion: null,
    },
  })

  return res.redirect('/iniciar_sesion?verificado=true')
}
