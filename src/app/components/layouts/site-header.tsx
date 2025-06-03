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
      <div className="container flex h-16 items-center">
        <MainNav items={mainNavItems ?? siteConfig.mainNav} />
        <MobileNav mainNavItems={mainNavItems ?? siteConfig.mobileNavs} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            {user ? (
              <UserButton user={user} />
            ) : (
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: 'sm',
                })}
              >
                Iniciar sesión
                <span className="sr-only">Sign In</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </Header>
  );
};
