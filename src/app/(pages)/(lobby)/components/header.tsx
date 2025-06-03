'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('hmhcpti-theme');
    if (stored === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('hmhcpti-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('hmhcpti-theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-colors dark:bg-[#001E2B]">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Nombre */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/images/Pie.png" alt="Logo" width={56} height={56} />
          <span className="text-lg font-semibold leading-tight text-lime-600 dark:text-[#9FB816] md:text-xl">
            HMHCPTI
          </span>
        </Link>

        {/* Navegación */}
        <nav className="hidden items-center gap-6 text-black dark:text-white lg:flex">
          <Link href="/index" className="text-inherit hover:text-[#9FB816]">
            Inicio
          </Link>
          <Link href="/acerca_de" className="text-inherit hover:text-[#9FB816]">
            ¿Qué es HMHCPTI?
          </Link>
          <Link href="#" className="text-inherit hover:text-[#9FB816]">
            Recursos
          </Link>
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
            Probar Ahora
          </button>
          <button className="rounded-md border border-slate-900 px-4 py-2 text-sm text-slate-900 hover:bg-slate-100 dark:border-white dark:text-white dark:hover:bg-slate-800">
            <Link href="/iniciar_sesion" className="...">
              Iniciar Sesión
            </Link>
          </button>
          <button
            aria-label="Cambiar tema"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2"
          >
            <Image
              src={darkMode ? '/images/Luna.png' : '/images/Sol.png'}
              alt="Toggle Theme"
              width={28}
              height={28}
            />
          </button>
        </nav>
      </div>
    </header>
  );
}
