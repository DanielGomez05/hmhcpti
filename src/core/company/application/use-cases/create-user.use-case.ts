'use server';

import { prisma } from '@/server/lib/prisma';
import { UserRole } from '@prisma/client';

export async function createUserUseCase(input: {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}) {
  try {
    const newUser = await prisma.user.create({
      data: {
        firstName: input.name,
        email: input.email,
        password: input.password,
        role: input.role,
      },
    });

    return { success: true, data: newUser };
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return { success: false, error: 'No se pudo registrar el usuario' };
  }
}
