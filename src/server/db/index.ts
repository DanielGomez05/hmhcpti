import { env } from '@/env.mjs';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  uri: env.DATABASE_URL,
  connectionLimit: env.DB_MIGRATING || env.DB_SEEDING ? 1 : 10,
});

export const db = drizzle(pool, {
  logger: true,
});

export type db = typeof db;

export default db;
