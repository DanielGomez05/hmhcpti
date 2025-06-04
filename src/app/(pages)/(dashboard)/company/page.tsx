import { currentUser } from '@clerk/nextjs/server';

import { Typography } from '@/app/components/ui/typography';
import { Shell } from '@/app/components/shells/shell';

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <Shell variant="centered" className="pb-12 md:pb-14">
      <Typography variant="h1">Registrar tipo de Empresa</Typography>
    </Shell>
  );
}
