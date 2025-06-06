-- Paso 1: Permitir que userId sea NULL temporalmente
ALTER TABLE "Company" ADD COLUMN "userId" TEXT;

-- Paso 2 (opcional): Asignar valores por defecto a los registros existentes
-- Usa un ID válido de usuario si tienes usuarios en la tabla "User"
-- En este ejemplo se asigna un ID ficticio. Asegúrate de reemplazarlo con uno real
UPDATE "Company" SET "userId" = 'placeholder-user-id' WHERE "userId" IS NULL;

-- Paso 3 (opcional): Hacer el campo obligatorio después de asignar valores
ALTER TABLE "Company" ALTER COLUMN "userId" SET NOT NULL;

-- Crear tabla de usuarios
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- Crear índice único para email
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- Crear la relación entre Company y User
ALTER TABLE "Company" ADD CONSTRAINT "Company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
