import { Typography } from '@/app/components/ui/typography';
import { Shell } from '@/app/components/shells/shell';

import { RegisterCompanyForm } from './components/register-company';

export default async function DashboardPage() {
  return (
    <Shell variant="centered" className="pb-12 md:pb-14">
      <Typography variant="h1">Registrar tipo de Empresa</Typography>
      <RegisterCompanyForm />
    </Shell>
  );
}
