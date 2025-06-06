/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `typeOfCompany` on the `Company` table. All the data in the column will be lost.
  - The `id` column on the `Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'IT_ENGINEER', 'SUSTAINABILITY_ENGINEER');

-- CreateEnum
CREATE TYPE "RecommendationType" AS ENUM ('REDUCTION', 'OPTIMIZATION', 'HARDWARE_CHANGE');

-- CreateEnum
CREATE TYPE "TrafficLevel" AS ENUM ('GREEN', 'YELLOW', 'RED');

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "typeOfCompany",
ADD COLUMN     "sector" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "phone" TEXT,
ALTER COLUMN "password" DROP NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "UserRole";

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Catalog" (
    "id" SERIAL NOT NULL,
    "assetType" TEXT,

    CONSTRAINT "Catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "model" TEXT,
    "serialNumber" TEXT,
    "physicalLocation" TEXT,
    "ipAddress" TEXT,
    "status" TEXT,
    "acquisitionDate" TIMESTAMP(3),
    "maintenanceDate" TIMESTAMP(3),
    "energyConsumption" DECIMAL(65,30),
    "dailyUsageHours" INTEGER,
    "acquisitionCost" DECIMAL(65,30),
    "catalogId" INTEGER NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetHistory" (
    "id" SERIAL NOT NULL,
    "acquisitionDate" TIMESTAMP(3),
    "maintenanceDate" TIMESTAMP(3),
    "details" TEXT,
    "dailyUsageHours" INTEGER,
    "annualUsageDays" INTEGER,
    "lifecycle" TEXT,
    "assetId" TEXT NOT NULL,

    CONSTRAINT "AssetHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calculator" (
    "id" TEXT NOT NULL,
    "energyConsumption" DECIMAL(65,30),
    "carbonFootprint" DECIMAL(65,30),

    CONSTRAINT "Calculator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetCalculation" (
    "id" SERIAL NOT NULL,
    "projectId" TEXT NOT NULL,
    "assetId" TEXT NOT NULL,
    "calculatorId" TEXT NOT NULL,
    "usageHours" INTEGER,
    "energyConsumed" DECIMAL(65,30),

    CONSTRAINT "AssetCalculation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recommendation" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "type" "RecommendationType",
    "estimatedImpact" DECIMAL(65,30),

    CONSTRAINT "Recommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecommendationForAsset" (
    "id" SERIAL NOT NULL,
    "recommendationId" TEXT NOT NULL,
    "calculationId" INTEGER NOT NULL,
    "reason" TEXT,

    CONSTRAINT "RecommendationForAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTrafficLight" (
    "id" SERIAL NOT NULL,
    "projectId" TEXT NOT NULL,
    "level" "TrafficLevel",
    "lowThreshold" DECIMAL(65,30),
    "highThreshold" DECIMAL(65,30),

    CONSTRAINT "ProjectTrafficLight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AssetCalculation_projectId_key" ON "AssetCalculation"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectTrafficLight_projectId_key" ON "ProjectTrafficLight"("projectId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "Catalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetHistory" ADD CONSTRAINT "AssetHistory_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetCalculation" ADD CONSTRAINT "AssetCalculation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetCalculation" ADD CONSTRAINT "AssetCalculation_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetCalculation" ADD CONSTRAINT "AssetCalculation_calculatorId_fkey" FOREIGN KEY ("calculatorId") REFERENCES "Calculator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationForAsset" ADD CONSTRAINT "RecommendationForAsset_recommendationId_fkey" FOREIGN KEY ("recommendationId") REFERENCES "Recommendation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendationForAsset" ADD CONSTRAINT "RecommendationForAsset_calculationId_fkey" FOREIGN KEY ("calculationId") REFERENCES "AssetCalculation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTrafficLight" ADD CONSTRAINT "ProjectTrafficLight_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
