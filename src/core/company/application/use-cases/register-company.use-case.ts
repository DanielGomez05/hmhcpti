import { type Company, type CreateCompany } from '@/core/company/domain';

import { db } from '@/server/db';
import { companies } from '@/server/db/schema';

export type IRegisterCompanyUseCase = ReturnType<typeof registerCompanyUseCase>;

export const registerCompanyUseCase = async (
  input: CreateCompany
): Promise<Company> => {
  const [newCompany] = await db
    .insert(companies)
    .values({
      name: input.name,
      location: input.location,
      sector: input.sector,
      type: input.type,
      userId: input.userId,
    })
    .returning();

  return newCompany;
};
