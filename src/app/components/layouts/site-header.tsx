import Link from 'next/link';
import type { User } from '@clerk/nextjs/server';

import { type MainNavItem } from '@/app/types/layouts';
import { siteConfig } from '@/app/config/site';
import { buttonVariants } from '@/app/components/ui/button';
import { Header } from '@/app/components/layouts/header';
import { MainNav } from '@/app/components/layouts/main-nav';
import { MobileNav } from '@/app/components/layouts/mobile-nav';
import { ThemeToggle } from '@/app/components/layouts/theme-toggle';
import { UserButton } from '@/app/components/layouts/user-button';

interface SiteHeaderProps {
  mainNavItems?: MainNavItem[];
  user: User | null;
}

export const SiteHeader = ({ mainNavItems, user }: SiteHeaderProps) => {
  return (
    <Header>
      <div className="container flex h-16 items-center justify-between">
        {/* Menú principal */}
        <MainNav items={mainNavItems ?? siteConfig.mainNav} />
        <MobileNav mainNavItems={mainNavItems ?? siteConfig.mobileNavs} />

        {/* Acciones al lado derecho */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {user ? (
            <UserButton user={user} />
          ) : (
            <>
              <Link
                href="/sign-in"
                className={buttonVariants({ size: 'sm', variant: 'outline' })}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({ size: 'sm' })}
              >
                Probar ahora
              </Link>
            </>
          )}
        </div>
      </div>
    </Header>
  );
};

