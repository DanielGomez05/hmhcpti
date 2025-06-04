import { env } from '@/env.mjs';

import type { FooterItem, MainNavItem } from '@/app/types/layouts';

export type SiteConfig = typeof siteConfig;

const links = {
  github: 'https://github.com/DanielGomez05/hmhcpti',
};

const homeNavs = [
  {
    title: '¿Qué es HMHCPTI?',
    href: '/#about',
  },
  {
    title: 'Misión',
    href: '/#mision',
  },
  {
    title: 'Visión',
    href: '/#vision',
  },
] as MainNavItem[];

const mainNavs = [
  {
    title: 'Inicio',
    href: '/#index',
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
  links,
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
