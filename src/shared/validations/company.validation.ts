import { z } from 'zod';

export const companySchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),

  typeOfCompany: z.string().min(1),
});

export type TCompany = z.infer<typeof companySchema>;
