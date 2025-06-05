'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

import { completeOnboarding } from './actions';
import { Shell } from '@/app/components/shells/shell';
import { Role } from '@/server/lib/constants';

export default function OnboardingPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const onboardingComplete = user.publicMetadata?.onboardingComplete;

    if (onboardingComplete === true) {
      router.push('/data-records/welcome'); // ✅ Redirección correcta
      return;
    }

    const run = async () => {
      try {
        await completeOnboarding({
          id: user.id,
          firstName: user.firstName ?? undefined,
          lastName: user.lastName ?? '',
          email: user.emailAddresses[0]?.emailAddress ?? '',
          role: Role.SUSTAINABILITY,
        });
        router.push('/data-records/welcome'); 
      } catch (err) {
        console.error('Onboarding failed:', err);
      }
    };

    void run();
  }, [isLoaded, user, router]);

  return (
    <Shell className="h-[calc(100vh-4rem)] max-w-screen-sm">
      Onboarding...
    </Shell>
  );
}
