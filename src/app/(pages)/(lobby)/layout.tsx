import { currentUser } from '@clerk/nextjs/server';

import { SiteHeader } from '@/app/components/layouts/site-header';

import Footer from './components/footer';

interface LobbyLayoutProps extends React.PropsWithChildren {}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  const user = await currentUser();

  console.log(user);

  return (
    <>
      <SiteHeader user={user} />
      {children}
      <Footer />
    </>
  );
}
