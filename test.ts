import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

console.log('UserRole enum:', UserRole);
console.log('ADMIN value:', UserRole.ADMIN);
