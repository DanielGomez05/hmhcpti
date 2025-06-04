'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icons } from '$/src/app/components/icons';
import { TypeCompany } from '$/src/server/lib/constants';
import {
  companySchema,
  TCompany,
} from '$/src/shared/validations/company.validation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/app/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  UncontrolledFormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

export const RegisterCompanyForm = () => {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<TCompany>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: '',
      location: '',
    },
  });

  function onSubmit({ ...data }: TCompany) {
    startTransition(async () => {
      const toastId = toast.loading(`Agregando el producto ${data.name}...`);

      try {
        // await createProduct.mutateAsync(createData);

        toast.success(`Producto ${data.name} agregado correctamente.`, {
          id: toastId,
        });

        form.reset();
      } catch (error) {
        toast.error('Ocurrio un error');
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
                <Input
                  placeholder="Escribe el nombre de la empresa aqui."
                  {...field}
                />
              </FormControl>
              <UncontrolledFormMessage
                message={
                  form.formState.errors.typeOfCompany &&
                  'Ups! Debes elegir un nombre válido'
                }
              />
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
                <Input
                  placeholder="Escribe la dirección de la empresa aqui."
                  {...field}
                />
              </FormControl>
              <UncontrolledFormMessage
                message={
                  form.formState.errors.typeOfCompany &&
                  'Ups! Debes escribir una dirección válida'
                }
              />
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
                  <SelectItem value={TypeCompany.MICRO}>
                    Microempresa (Tiene hasta 10 trabajadores)
                  </SelectItem>
                  <SelectItem value={TypeCompany.SMALL}>
                    Pequeña empresa (Tiene entre 11 y 30 trabajadores)
                  </SelectItem>
                  <SelectItem value={TypeCompany.MEDIUM}>
                    Mediana empresa (Tiene entre 31 y 100 trabajadores)
                  </SelectItem>
                  <SelectItem value={TypeCompany.LARGE}>
                    Gran empresa (Tiene más de 250 trabajadores)
                  </SelectItem>
                </SelectContent>
              </Select>
              <UncontrolledFormMessage
                message={
                  form.formState.errors.typeOfCompany &&
                  'Ups! Debes elegir un tipo de empresa válido'
                }
              />
            </FormItem>
          )}
        />
        <Button
          onClick={() => void form.trigger(['name', 'typeOfCompany'])}
          className="w-fit"
          disabled={isPending}
        >
          {isPending && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Registrar empresa
          <span className="sr-only">Add Category</span>
        </Button>
      </form>
    </Form>
  );
};
