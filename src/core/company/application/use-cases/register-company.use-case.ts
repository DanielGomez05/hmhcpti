import { type Company, type CreateCompany } from '@/core/company/domain';
import { prisma } from '@/server/lib/prisma';

export const registerCompanyUseCase = async (
  input: CreateCompany
): Promise<any> => {
  const newCompany = await prisma.company.create({
    data: {
      name: input.name,
      location: input.location,
      typeOfCompany: input.type,
    },
  });

  return newCompany;
};
