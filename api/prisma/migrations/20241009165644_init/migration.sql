-- CreateTable
CREATE TABLE `autenticacao` (
    `idautenticacao` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NULL,
    `senha` VARCHAR(80) NULL,
    `googleId` TEXT NULL,

    PRIMARY KEY (`idautenticacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
