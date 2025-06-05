import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 bg-white dark:bg-[#001E2B]">
      {/* Imagen ocupando todo el alto */}
      <div className="hidden md:block h-full w-full">
        <img
          src="/images/IniciarSesion.png" // Asegúrate de que este archivo esté en /public/images/
          alt="Iniciar sesión"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Formulario de Clerk */}
      <div className="flex items-center justify-center p-8">
        <SignIn
          appearance={{
            elements: {
              card: 'shadow-lg border rounded-xl w-full max-w-md bg-white dark:bg-[#001E2B]',
              headerTitle: 'text-2xl font-semibold text-center text-[#001E2B] dark:text-white',
              formButtonPrimary:
                'mt-4 bg-[#9FB816] hover:bg-[#8fa00f] text-white w-full',
            },
          }}
        />
      </div>
    </div>
  );
}
