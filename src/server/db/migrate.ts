import config from '$/drizzle.config';
import { migrate } from 'drizzle-orm/mysql2/migrator';

import { db } from './';

console.log('🚀 Entrando a migrate.ts');

export async function runMigrate() {
  console.log('⏳ Running migrations...');

  const start = Date.now();

  await migrate(db, { migrationsFolder: config.out! });

  const end = Date.now();

  console.log(`✅ Migrations completed in ${end - start}ms`);

  process.exit(0);
}

runMigrate().catch((err) => {
  console.error('❌ Migration failed');
  console.error(err);
  process.exit(1);
});
