import { relations } from 'drizzle-orm';
import { integer, pgEnum, pgTable, varchar } from 'drizzle-orm/pg-core';

import { CompanySector, CompanyType } from '@/server/lib/constants';

import { users } from './users';

export const typeEnum = pgEnum('type', [
  CompanyType.MICRO,
  CompanyType.SMALL,
  CompanyType.MEDIUM,
  CompanyType.LARGE,
]);

export const sectorEnum = pgEnum('sector', [
  CompanySector.TRANSPORT,
  CompanySector.INDUSTRY,
  CompanySector.ENERGY,
  CompanySector.AGRICULTURE,
  CompanySector.RESIDENTIAL,
  CompanySector.WASTE,
]);

export const companies = pgTable('companies', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: varchar('name', { length: 100 }),
  location: varchar('location', { length: 100 }),
  sector: sectorEnum('sector'),
  type: typeEnum('type'),
  userId: varchar('userId', { length: 32 }).references(() => users.id),
});

export const companiesRelations = relations(companies, ({ one }) => ({
  user: one(users, {
    fields: [companies.userId],
    references: [users.id],
  }),
}));

export default companies;
