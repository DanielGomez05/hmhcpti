import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function enviarCorreoVerificacion(email: string, token: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/verificar_correo?token=${token}`

  await transporter.sendMail({
    from: `"HMHCPTI" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: "Verifica tu cuenta",
    html: `<p>Gracias por registrarte en HMHCPTI.</p><p>Haz clic en el siguiente enlace para verificar tu correo:</p><a href="${url}">Verificar cuenta</a>`,
  })
}
