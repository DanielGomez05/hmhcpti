import { relations } from 'drizzle-orm';
import { pgEnum, pgTable, varchar } from 'drizzle-orm/pg-core';
import * as t from 'drizzle-orm/pg-core';

import { Role } from '@/server/lib/constants';

import { companies } from './companies';

export const roleEnum = pgEnum('role', [
  Role.ADMIN,
  Role.TI,
  Role.SUSTAINABILITY,
]);

export const users = pgTable(
  'users',
  {
    id: varchar('id', { length: 32 }).primaryKey(),
    firstName: varchar('first_name', { length: 50 }),
    lastName: varchar('last_name', { length: 50 }),
    email: varchar('email', { length: 100 }).unique(),
    role: roleEnum('role'),
  },
  (table) => [t.uniqueIndex('email_idx').on(table.email)]
);

export const usersRelations = relations(users, ({ many }) => ({
  companies: many(companies),
}));

export default users;
