'use server'

import { prisma } from '@/server/lib/prisma'
import { type TCompany } from '@/shared/validations/company.validation'

export async function registerCompany(data: TCompany) {
  try {
    const newCompany = await prisma.company.create({
      data: {
        name: data.name,
        location: data.location,
        typeOfCompany: data.typeOfCompany,
      },
    });

    return { success: true, data: newCompany };
  } catch (error) {
    console.error('Error al registrar empresa:', error);
    return { success: false, error: 'Ocurrió un error al registrar la empresa' };
  }
}
