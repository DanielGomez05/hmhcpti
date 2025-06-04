import Link from 'next/link';

import { siteConfig } from '@/app/config/site';
import { ThemeToggle } from '@/app/components/layouts/theme-toggle';
import { Logo } from '@/app/components/logo';
import { Shell } from '@/app/components/shells/shell';

export const SiteFooter = () => {
  return (
    <footer className="w-full border-t bg-background">
      <Shell>
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 pt-8 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Logo href="/" />
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="xxs:grid-cols-2 grid flex-1 grid-cols-1 gap-10 sm:grid-cols-4"
          >
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? '_blank' : undefined}
                        rel={link?.external ? 'noreferrer' : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            Built by{' '}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              HMHCPTI
              <span className="sr-only">Github</span>
            </Link>
            .
          </div>
          <ThemeToggle />
        </section>
      </Shell>
    </footer>
  );
};
