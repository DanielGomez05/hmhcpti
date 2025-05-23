import { currentUser } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const user = await currentUser()

  return <>Hola {user?.firstName}</>;
}
