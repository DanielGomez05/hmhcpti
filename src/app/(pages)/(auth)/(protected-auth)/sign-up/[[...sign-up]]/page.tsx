import { type Metadata } from 'next';
import { env } from '@/env.mjs';
import { SignUp } from '@clerk/nextjs';

import { Shell } from '@/app/components/shells/shell';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Sign Up',
  description: 'Sign up for an account',
};

export default function SignUpPage() {
  return (
    <Shell className="max-w-lg">
      <SignUp />
    </Shell>
  );
}
