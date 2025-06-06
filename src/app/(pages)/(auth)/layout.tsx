import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

export default async function ProtectedAuthLayout({
  children,
}: React.PropsWithChildren) {
  const { userId } = await auth();

  console.log({ userId });

  return <>{children}</>;
}
