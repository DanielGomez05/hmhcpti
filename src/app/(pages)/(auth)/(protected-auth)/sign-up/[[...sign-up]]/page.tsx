'use client';

import { SignUp } from '@clerk/nextjs';
import { useState } from 'react';

export default function SignUpPage() {
  const [tipo, setTipo] = useState<'nuevo' | 'unirse' | null>(null);

  if (!tipo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h2 className="text-xl font-semibold">¿Cómo deseas registrarte?</h2>
        <button
          onClick={() => setTipo('nuevo')}
          className="rounded bg-[#9FB816] px-6 py-3 text-white"
        >
          Crear nueva empresa
        </button>
        <button
          onClick={() => setTipo('unirse')}
          className="rounded border border-[#9FB816] px-6 py-3 text-[#9FB816]"
        >
          Unirse a una empresa existente
        </button>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block h-full w-full">
        <img
          src={
            tipo === 'nuevo'
              ? '/images/register-image.png'
              : '/images/unirse-image.png'
          }
          alt="Registro"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center p-8">
        <SignUp
          afterSignUpUrl={
            tipo === 'nuevo' ? '/onboarding' : '/asociar-a-empresa'
          }
          appearance={{
            elements: {
              card: 'shadow-lg border rounded-xl w-full max-w-md bg-white',
            },
          }}
        />
      </div>
    </div>
  );
}
