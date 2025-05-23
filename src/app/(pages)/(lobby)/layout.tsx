import Footer from './components/footer';
import Header from './components/header';

interface LobbyLayoutProps extends React.PropsWithChildren {}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
