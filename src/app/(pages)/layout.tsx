import type { Viewport } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { fontMono, fontSans } from '@/app/lib/fonts';
import { cn } from '@/app/lib/utils';
import { ThemeProvider } from '@/app/components/providers/theme-provider';
import { TailwindIndicator } from '@/app/components/tailwind-indicator';

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
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
