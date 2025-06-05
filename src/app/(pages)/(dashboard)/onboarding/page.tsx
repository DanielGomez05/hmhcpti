import * as React from 'react';
import { redirect } from 'next/navigation';
import { auth, currentUser } from '@clerk/nextjs/server';

import { Role } from '@/server/lib/constants';

import { Shell } from '@/app/components/shells/shell';

import { completeOnboarding } from './actions';

export default async function OnboardingComponent() {
  const user = await currentUser();
  const { userId, sessionClaims } = await auth();

  if (!user || !userId || sessionClaims?.metadata.onboardingComplete === true) {
    redirect('/');
  }

  await completeOnboarding({
    id: userId,
    firstName: user.firstName ?? undefined,
    lastName: user.lastName ?? '',
    email: user.emailAddresses[0].emailAddress,
    role: Role.SUSTAINABILITY,
  });

  return (
    <Shell className="h-[calc(100vh-4rem)] max-w-screen-sm">Onboarding</Shell>
  );
}
