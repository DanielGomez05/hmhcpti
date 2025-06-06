'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useUser, UserButton } from '@clerk/nextjs';

export default function DataHeader() {
  const [dateTime, setDateTime] = useState(new Date());
  const { user } = useUser();

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = dateTime.toLocaleTimeString('es-MX', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const firstName = user?.firstName || 'Usuario';

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow">
      <div className="flex items-center space-x-4">
        <img src= "/images/Logo.png" alt="Logo HMHCPTI" className="h-12 w-auto" />
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/welcome" className="text-green-700 border-b-2 border-green-700 pb-1">
            Bienvenida
          </Link>
          <Link href="/enterprise">Empresa</Link>
          <Link href="/actives">Activos</Link>
          <Link href="/projects">Proyectos</Link>
          <Link href="/users">Usuarios</Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4 text-sm">
        <span className="text-gray-600">{formattedDate}</span>
        <span className="text-gray-600">{formattedTime}</span>
        <span className="font-medium">¡Hola {firstName}!</span>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
