'use client';
import { useAuth } from "@clerk/nextjs";
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerCompany } from '@/server/actions/register-company.actions';
import { CompanyType } from '@/server/lib/constants';
import { type TCompany, companySchema } from '@/shared/validations/company.validation';

import { Button } from '@/app/components/ui/button';
import {
  Form, FormControl, FormField, FormItem, FormLabel, UncontrolledFormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/app/components/ui/select';
import { Icons } from '@/app/components/icons';

export const RegisterEnterpriseForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const { userId } = useAuth();
  const form = useForm<TCompany>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: '',
      location: '',
    },
  });

  function onSubmit(data: TCompany) {
    startTransition(async () => {
      const toastId = toast.loading(`Agregando empresa ${data.name}...`);
      try {
        const res = await registerCompany(data,userId!);
        if (res.success) {
          toast.success('Empresa registrada correctamente', { id: toastId });
          form.reset();
          router.push('actives');
        } else {
          toast.error(res.error || 'Ocurrió un error', { id: toastId });
        }
      } catch (error) {
        toast.error('Error inesperado al registrar', { id: toastId });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la Empresa</FormLabel>
              <FormControl>
                <Input placeholder="Escribe el nombre de la empresa aquí." {...field} />
              </FormControl>
              <UncontrolledFormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input placeholder="Dirección de la empresa" {...field} />
              </FormControl>
              <UncontrolledFormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="typeOfCompany"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de empresa</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu tipo de empresa" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={CompanyType.MICRO}>Microempresa (hasta 10)</SelectItem>
                  <SelectItem value={CompanyType.SMALL}>Pequeña (11 a 30)</SelectItem>
                  <SelectItem value={CompanyType.MEDIUM}>Mediana (31 a 100)</SelectItem>
                  <SelectItem value={CompanyType.LARGE}>Grande (más de 250)</SelectItem>
                </SelectContent>
              </Select>
              <UncontrolledFormMessage />
            </FormItem>
          )}
        />
        <Button
          onClick={() => void form.trigger(['name', 'typeOfCompany'])}
          className="w-fit"
          disabled={isPending}
        >
          {isPending && <Icons.spinner className="mr-2 size-4 animate-spin" />}
          Registrar empresa
        </Button>
      </form>
    </Form>
  );
};
