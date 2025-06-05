'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { clerkClient } from '@clerk/clerk-sdk-node'; // ✅ uso correcto del SDK para server actions

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

    revalidatePath(`/`);
    redirect(`/welcome`);
  } catch (error) {
    console.log(getErrorMessage(error));
  }
};

