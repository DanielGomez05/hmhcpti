import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer'
import crypto from 'crypto'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const { nombre, correo, password } = req.body

  if (!nombre || !correo || !password) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }

  // Crear un hash de la contraseña
  const hashedPassword = await bcrypt.hash(password, 10)

  // Generar un token único para la verificación de correo
  const tokenVerificacion = crypto.randomBytes(32).toString('hex')

  try {
    // Crear un nuevo usuario en la base de datos
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        correo,
        contrasena: hashedPassword,
        token_verificacion: tokenVerificacion, // Guardar el token de verificación
      },
    })

    // Configurar el transporte para nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Si usas Gmail, cambia el servicio según sea necesario
      auth: {
        user: 'tu-correo@gmail.com',  // Tu correo de Gmail
        pass: 'tu-contraseña',         // O usa una contraseña de aplicación si es necesario
      },
    })

    // Enviar el correo con el enlace de verificación
    const mailOptions = {
      from: 'tu-correo@gmail.com',
      to: correo,
      subject: 'Verificación de correo electrónico',
      text: `Hola ${nombre},\n\nHaz clic en el siguiente enlace para verificar tu correo electrónico:\n\nhttp://localhost:3000/api/verificar_correo?token=${tokenVerificacion}\n\nGracias por registrarte!`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error al enviar el correo:', error)
        return res.status(500).json({ error: 'Error al enviar correo de verificación' })
      } else {
        console.log('Correo enviado:', info.response)
      }
    })

    return res.status(201).json({ mensaje: 'Usuario creado correctamente, verifica tu correo.' })
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear usuario' })
  }
}
