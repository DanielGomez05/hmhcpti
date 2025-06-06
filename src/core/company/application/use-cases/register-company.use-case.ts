'use server';

import { prisma } from '@/server/lib/prisma';
import { type Company as PrismaCompany } from '@prisma/client'; // Usa el tipo correcto exportado por Prisma

export const registerCompanyUseCase = async (
  input: {
    name: string;
    location: string;
    type: string;
    userId: string;
  }
): Promise<PrismaCompany> => {
  const newCompany = await prisma.company.create({
    data: {
      name: input.name,
      location: input.location,
      typeOfCompany: input.type, // ← Asume que tu campo en schema.prisma es 'sector'
      user: {
        connect: {
          id: input.userId,
        },
      },
    },
  });

  return newCompany;
};
