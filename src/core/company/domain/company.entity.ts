import { z } from 'zod';

import { CompanySector, CompanyType, Role } from '@/server/lib/constants';

export const companySchema = z.object({
  id: z.number(),
  name: z.string().max(100),
  location: z.string().max(100),
  userId: z.string().max(32),
  sector: z.enum([
    CompanySector.TRANSPORT,
    CompanySector.INDUSTRY,
    CompanySector.ENERGY,
    CompanySector.AGRICULTURE,
    CompanySector.RESIDENTIAL,
    CompanySector.WASTE,
  ]),
  type: z.enum([
    CompanyType.MICRO,
    CompanyType.SMALL,
    CompanyType.MEDIUM,
    CompanyType.LARGE,
  ]),
});

export type Company = z.infer<typeof companySchema>;

export const createCompanySchema = companySchema.pick({
  name: true,
  location: true,
  sector: true,
  type: true,
  userId: true,
});

export type CreateCompany = z.infer<typeof createCompanySchema>;
