'use server';

import { prisma } from '@/server/lib/prisma';
export enum UserRole {
  ADMIN = 'ADMIN',
  IT_ENGINEER = 'IT_ENGINEER',
  SUSTAINABILITY_ENGINEER = 'SUSTAINABILITY_ENGINEER',
}

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export const createUserUseCase = async (input: CreateUserInput) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        firstName: input.name,
        email: input.email,
        password: input.password, // en producción usa bcrypt
        role: input.role,
      },
    });

    return { success: true, data: newUser };
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return { success: false, error: 'No se pudo registrar el usuario' };
  }
};

