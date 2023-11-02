CREATE TABLE `users` (
`id` INT NOT NULL AUTO_INCREMENT,

`username` VARCHAR(16) NOT NULL,
`pw` VARCHAR(64) NOT NULL,
`display_name` VARCHAR(16) NOT NULL,
`profile_image` VARCHAR(128) NOT NULL,
`profile_message` VARCHAR(128) NOT NULL,
`withdrawal` TINYINT NOT NULL DEFAULT 0,
`date_engagement` DATETIME NOT NULL,

PRIMARY KEY (`id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `channels` (
`id` INT NOT NULL AUTO_INCREMENT,

`name` VARCHAR(32) NOT NULL,
`created_by` INT NOT NULL,
`channel_link` VARCHAR(128) NOT NULL,
`maximun_capacity` INT NOT NULL,
`withdrawal` TINYINT NOT NULL DEFAULT 0,
`date_created` DATETIME NOT NULL,

PRIMARY KEY (`id`),

FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `chats` (
`id` INT NOT NULL AUTO_INCREMENT,

`message` TEXT NOT NULL,
`created_by` INT NOT NULL,
`channel` INT NOT NULL,
`date_created` DATETIME NOT NULL,

PRIMARY KEY (`id`),

FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE CASCADE,
FOREIGN KEY (`channel`) REFERENCES `channels`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `blocks` (
`id` INT NOT NULL AUTO_INCREMENT,

`blocked_by` INT NOT NULL,
`blocked_account` INT NOT NULL,
`date_created` DATETIME NOT NULL,

PRIMARY KEY (`id`),

FOREIGN KEY (`blocked_by`) REFERENCES `users`(`id`) ON DELETE CASCADE,
FOREIGN KEY (`blocked_account`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `follows` (
`id` INT NOT NULL AUTO_INCREMENT,

`follower` INT NOT NULL,
`followee` INT NOT NULL,
`date_created` DATETIME NOT NULL,

PRIMARY KEY (`id`),

FOREIGN KEY (`follower`) REFERENCES `users`(`id`) ON DELETE CASCADE,
FOREIGN KEY (`followee`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
