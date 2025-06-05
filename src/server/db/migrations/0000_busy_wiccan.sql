CREATE TYPE "public"."role" AS ENUM('Admin', 'IT Engineer', 'Sustainability Engineer');--> statement-breakpoint
CREATE TYPE "public"."sector" AS ENUM('transport', 'industry', 'energy', 'agriculture', 'residential', 'waste');--> statement-breakpoint
CREATE TYPE "public"."type" AS ENUM('Microenterprise', 'Small enterprise', 'Medium enterprise', 'Large enterprise');--> statement-breakpoint
CREATE TABLE "companies" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "companies_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(100),
	"location" varchar(100),
	"sector" "sector",
	"type" "type",
	"userId" varchar(32)
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(32) PRIMARY KEY NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"email" varchar(100),
	"role" "role",
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "companies" ADD CONSTRAINT "companies_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "email_idx" ON "users" USING btree ("email");