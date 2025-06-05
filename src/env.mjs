import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const stringBoolean = z.coerce.string().transform((val) => val === "true").default("false");

expand(config());

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

    // Puedes usar NEON_URL como respaldo si lo necesitas
    DATABASE_URL: z.string().url().or(z.literal('')).default(process.env.NEON_URL ?? '').refine(
      (str) => !!str && !str.includes('YOUR_MYSQL_URL_HERE'),
      'DATABASE_URL is not properly set or still pointing to a placeholder.'
    ),

    CLERK_SECRET_KEY: z.string(),
    DB_MIGRATING: stringBoolean,
    DB_SEEDING: stringBoolean,
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL ?? process.env.NEON_URL,  // fallback dinámico
    DB_MIGRATING: process.env.DB_MIGRATING,
    DB_SEEDING: process.env.DB_SEEDING,

    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
