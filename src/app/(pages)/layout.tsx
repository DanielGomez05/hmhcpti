import type { Viewport } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { fontMono, fontSans } from '@/app/lib/fonts';
import { cn } from '@/app/lib/utils';

import '@/app/styles/globals.css';

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body
          className={cn(
            'bg-background min-h-screen font-sans antialiased',
            fontSans.variable,
            fontMono.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
