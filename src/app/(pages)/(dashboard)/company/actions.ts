'use server';

import { revalidatePath } from 'next/cache';

import { createCompanySchema, type CreateCompany } from '@/core/company/domain';
import { registerCompanyUseCase } from '@/core/company/application';

import { getErrorMessage } from '@/app/lib/handle-error';

export const resgisterCompany = async (input: Partial<CreateCompany>) => {
  try {
    const data = createCompanySchema.parse(input);
    console.log({ data });
    const newCompany = await registerCompanyUseCase(data);

    revalidatePath('/');

    return {
      data: newCompany,
      error: null,
    };
  } catch (error) {
    console.log(error);

    return {
      data: null,
      error: getErrorMessage(error),
    };
  }
};
