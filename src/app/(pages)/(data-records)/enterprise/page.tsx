import { Typography } from '@/app/components/ui/typography';
import { Shell } from '@/app/components/shells/shell';

import { RegisterEnterpriseForm } from './components/register-enterprise';

export default async function EnterprisePage() {
  return (
    <Shell variant="centered" className="pb-12 md:pb-14">
      <Typography variant="h1">Registrar tipo de Empresa</Typography>
      <RegisterEnterpriseForm />
    </Shell>
  );
}
