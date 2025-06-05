import { z } from 'zod';

import { Role } from '@/server/lib/constants';

export const userSchema = z.object({
  id: z.string(),
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  email: z.string().min(1).max(100),
  role: z
    .enum([Role.ADMIN, Role.TI, Role.SUSTAINABILITY])
    .transform((val) => val as Role),
});

export type User = z.infer<typeof userSchema>;

export const createUserSchema = userSchema.pick({
  id: true,
  firstName: true,
  lastName: true,
  email: true,
  role: true,
});

export type CreateUser = z.infer<typeof createUserSchema>;
