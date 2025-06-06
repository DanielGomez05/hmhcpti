'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Imagen lateral */}
      <div className="hidden md:block h-full w-full">
        <img
          src="/images/Registrar.png"
          alt="Registro"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Formulario de Clerk */}
      <div className="flex items-center justify-center p-8">
        <SignUp
          redirectUrl="/src/app/(pages)/(data-records)/welcome/page.tsx"         // ← se usa al iniciar sesión si ya está logueado
          afterSignUpUrl="/src/app/(pages)/(data-records)/welcome/page.tsx"      // ← se usa justo después de registrarse
          appearance={{
            elements: {
              card: 'shadow-lg border rounded-xl w-full max-w-md bg-white',
              headerTitle:
                'text-2xl font-semibold text-center text-[#001E2B]',
              formButtonPrimary:
                'mt-4 bg-[#9FB816] hover:bg-[#8fa00f] text-white w-full',
            },
          }}
        />
      </div>
    </div>
  );
}
