'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { useWindowScroll } from '@/app/hooks/use-window-scroll';
import { Button } from '@/app/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { Icons } from '@/app/components/icons';

export const ThemeToggle = () => {
  const { setTheme } = useTheme();
  const [{ isScrolled }] = useWindowScroll();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Open theme toggle"
          variant="outline"
          size="icon"
          className={`relative transition-all delay-150 ${!isScrolled && 'border-transparent'}`}
        >
          <Icons.sun
            className={`absolute size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${isScrolled && 'hover:text-slate-900  dark:text-slate-400 dark:hover:text-slate-100'}`}
          />
          <Icons.moon
            className={`absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${isScrolled && 'hover:text-slate-900  dark:text-slate-400 dark:hover:text-slate-100'}`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => void setTheme('light')}>
          <Icons.sun className="mr-2 size-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => void setTheme('dark')}>
          <Icons.moon className="mr-2 size-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => void setTheme('system')}>
          <Icons.laptop className="mr-2 size-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
