CREATE TABLE `Companies` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100),
	`sector` varchar(50),
	`location` varchar(100),
	`userId` varchar(32),
	CONSTRAINT `Companies_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Users` (
	`id` varchar(32) NOT NULL,
	`first_name` varchar(50),
	`last_name` varchar(50),
	`email` varchar(100),
	`role` enum('Admin','IT Engineer','Sustainability Engineer'),
	CONSTRAINT `Users_id` PRIMARY KEY(`id`),
	CONSTRAINT `Users_email_unique` UNIQUE(`email`),
	CONSTRAINT `email_idx` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `Companies` ADD CONSTRAINT `Companies_userId_Users_id_fk` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE no action ON UPDATE no action;