import {
  JetBrains_Mono as FontMono,
  Didact_Gothic as FontSans,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});
