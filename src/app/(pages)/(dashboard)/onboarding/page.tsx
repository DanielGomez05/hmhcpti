'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { completeOnboarding } from './actions';
import { Shell } from '@/app/components/shells/shell';
import { Role } from '@/server/lib/constants';

export default function OnboardingPage() {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      const userId = localStorage.getItem('userId');
      const firstName = localStorage.getItem('firstName') ?? undefined;
      const lastName = localStorage.getItem('lastName') ?? '';
      const email = localStorage.getItem('email');

      if (!userId || !email) {
        router.push('/');
        return;
      }

      try {
        await completeOnboarding({
          id: userId,
          firstName,
          lastName,
          email,
          role: Role.SUSTAINABILITY
        });
      } catch (err) {
        console.error('Onboarding failed:', err);
      } finally {
        router.push('/');
      }
    };

    run();
  }, [router]);

  return (
    <Shell className="h-[calc(100vh-4rem)] max-w-screen-sm">
      Onboarding...
    </Shell>
  );
}
