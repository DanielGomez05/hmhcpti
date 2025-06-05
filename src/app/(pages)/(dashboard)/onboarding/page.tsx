// /onboarding/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Role } from '@/server/lib/constants';


import { completeOnboarding } from './actions';
import { Shell } from '@/app/components/shells/shell';
type UserInfo = {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
};

export default function OnboardingComponent({ user }: { user: UserInfo }) {

  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      try {
        await completeOnboarding({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: Role.SUSTAINABILITY
        });
      } catch (error) {
        console.error('Onboarding failed:', error);
      } finally {
        router.push('/');
      }
    };

    run();
  }, []);

  return (
    <Shell className="h-[calc(100vh-4rem)] max-w-screen-sm">Onboarding...</Shell>
  );
}
