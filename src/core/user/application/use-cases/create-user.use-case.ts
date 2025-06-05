

import { AuthenticationError } from '@/core/shared/domain';

import { type CreateUser, type User } from '@/core/user/domain';

import { db } from '@/server/db';
import { users } from '@/server/db/schema';
import { eq } from 'drizzle-orm';


export type ICreateUserUseCase = ReturnType<typeof createUserUseCase>;

export const createUserUseCase = async (input: CreateUser): Promise<User> => {

  const existingUser = await db.query.users.findFirst({ where: eq(users.id, input.id) });

  if (existingUser) {
    throw new AuthenticationError('Existing User');
  }

  const [newUser] = await db.insert(users).values({
    id: input.id,
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    role: input.role,
  }).returning();

  return newUser

};
