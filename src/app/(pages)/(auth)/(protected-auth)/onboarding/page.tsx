'use client';

import { useRouter } from 'next/navigation';

export default function OnboardingForm() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí podrías enviar la información a tu backend o guardar en DB
    // await fetch('/api/onboarding', { ... })

    router.push('/bienvenida'); // Redirección al finalizar
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Tus inputs aquí */}
      <button type="submit" className="btn btn-primary">
        Comenzar
      </button>
    </form>
  );
}
