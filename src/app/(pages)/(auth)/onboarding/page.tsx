'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function OnboardingPage() {
  const router = useRouter();
  const [form, setForm] = useState({ empresa: '', rol: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes guardar los datos en una API o metadata
    // await fetch('/api/onboarding', { method: 'POST', body: JSON.stringify(form) })

    router.push('/welcome');
  };

  return (
    <main className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-2xl font-bold mb-8 text-center">Completa tu registro</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre de la empresa</label>
          <input type="text" name="empresa"value={form.empresa} onChange={handleChange} required placeholder='Ej: Empresa S.A.'
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tu rol</label>
          <input type="text" name="rol" value={form.rol} onChange={handleChange} required placeholder='Ej: Gerente de TI'
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#9FB816] text-white py-2 rounded hover:bg-[#87a312]"
        >
          Continuar
        </button>
      </form>
    </main>
  );
}

