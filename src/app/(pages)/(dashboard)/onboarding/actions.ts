'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { clerkClient } from '@clerk/nextjs/server';

import { createUserSchema, type CreateUser } from '@/core/user/domain';
import { createUserUseCase } from '@/core/user/application';

import { getErrorMessage } from '@/app/lib/handle-error';

export const completeOnboarding = async (input: Partial<CreateUser>) => {
  try {
    const client = await clerkClient();
    const data = createUserSchema.parse(input);

    const newUser = await createUserUseCase(data);

    await client.users.updateUserMetadata(newUser.id, {
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
