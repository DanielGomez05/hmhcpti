import { env } from '@/env.mjs';

import type { FooterItem, MainNavItem } from '@/app/types/layouts';

export type SiteConfig = typeof siteConfig;

const homeNavs = [
  {
    title: '¿Qué es HMHCPTI?',
    href: '/#about',
  },
  {
    title: 'Recursos',
    href: '/#resources',
  },
] as MainNavItem[];

const mainNavs = [
  {
    title: 'Inicio',
    href: '/#hero',
  },
  ...homeNavs,
] as MainNavItem[];

const mobileNavs = [
  {
    title: 'Inicio',
    href: '/#hero',
    items: homeNavs,
  },
] as MainNavItem[];

export const siteConfig = {
  name: 'HMHCPTI',
  description:
    'Herramienta para medir la huella de carbono de los Proyectos de TI',
  url: env.NEXT_PUBLIC_APP_URL,
  mainNav: mainNavs,
  homeNavs: homeNavs,
  mobileNavs: mobileNavs,
  footerNav: [
    {
      title: 'Inicio',
      items: homeNavs,
    },
  ] as FooterItem[],
};
