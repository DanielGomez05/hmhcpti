import { type Metadata } from 'next';
import { env } from '@/env.mjs';
import { SignIn } from '@clerk/nextjs';

import { Shell } from '@/app/components/shells/shell';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Sign In',
  description: 'Sign in to your account',
};

export default function SignInPage() {
  return (
    <Shell className="max-w-lg">
      <SignIn />
    </Shell>
  );
}
