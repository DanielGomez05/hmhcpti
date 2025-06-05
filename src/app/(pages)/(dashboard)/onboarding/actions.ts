'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { clerkClient } from '@clerk/clerk-sdk-node'; // ✅ SDK correcto para server

import { createUserSchema, type CreateUser } from '@/core/user/domain';
import { createUserUseCase } from '@/core/user/application';

import { getErrorMessage } from '@/app/lib/handle-error';

export const completeOnboarding = async (input: Partial<CreateUser>) => {
  try {
    const data = createUserSchema.parse(input);
    const newUser = await createUserUseCase(data);

    await clerkClient.users.updateUserMetadata(newUser.id, {
      publicMetadata: {
        onboardingComplete: true,
      },
    });

    revalidatePath('/');
    redirect('/data-records/welcome'); // ✅ Redirección definitiva
  } catch (error) {
    console.log(getErrorMessage(error));
  }
};
