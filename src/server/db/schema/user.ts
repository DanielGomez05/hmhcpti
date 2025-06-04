import { relations } from 'drizzle-orm';
import { mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import * as t from 'drizzle-orm/mysql-core';

import { Role } from '@/server/lib/constants';

import { company } from './company';

export const user = mysqlTable(
  'Users',
  {
    id: varchar('id', { length: 32 }).primaryKey(),
    firstName: varchar('first_name', { length: 50 }),
    lastName: varchar('last_name', { length: 50 }),
    email: varchar('email', { length: 100 }).unique(),
    role: mysqlEnum('role', [Role.ADMIN, Role.TI, Role.SUSTAINABILITY]),
  },
  (table) => [t.uniqueIndex('email_idx').on(table.email)]
);

export const userRelations = relations(user, ({ many }) => ({
  companies: many(company),
}));

export default user;
