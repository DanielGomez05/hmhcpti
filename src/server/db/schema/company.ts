import { relations } from 'drizzle-orm';
import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

import { user } from './user';

export const company = mysqlTable('Companies', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 100 }),
  sector: varchar('sector', { length: 50 }),
  location: varchar('location', { length: 100 }),
  userId: varchar('userId', { length: 32 }).references(() => user.id),
});

export const companyRelations = relations(company, ({ one }) => ({
  user: one(user, {
    fields: [company.userId],
    references: [user.id],
  }),
}));

export default company;
