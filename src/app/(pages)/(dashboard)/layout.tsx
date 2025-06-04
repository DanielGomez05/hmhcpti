import { currentUser } from '@clerk/nextjs/server';

import { SiteFooter } from '@/app/components/layouts/site-footer';
import { SiteHeader } from '@/app/components/layouts/site-header';

interface DasboardLayoutProps extends React.PropsWithChildren {}

export default async function DasboardLayout({
  children,
}: DasboardLayoutProps) {
  const user = await currentUser();

  return (
    <>
      <SiteHeader user={user} />
      {children}
      <SiteFooter />
    </>
  );
}
