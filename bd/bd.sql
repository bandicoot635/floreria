-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema floreria
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema floreria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `floreria` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `floreria` ;

-- -----------------------------------------------------
-- Table `floreria`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `floreria`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `precio` VARCHAR(45) NOT NULL,
  `stock` INT NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `floreria`.`ventascabecera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `floreria`.`ventascabecera` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fechaventa` DATETIME NOT NULL,
  `empresa` VARCHAR(255) NOT NULL,
  `montototal` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `floreria`.`detallesdeventa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `floreria`.`detallesdeventa` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fkidcabecera` INT NOT NULL,
  `fkidproducto` INT NOT NULL,
  `cantidadvendida` INT NOT NULL,
  `unidad` VARCHAR(255) NOT NULL,
  `monto` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_detallesdeventa_productos1_idx` (`fkidproducto` ASC) VISIBLE,
  INDEX `fk_detallesdeventa_ventascabecera1_idx` (`fkidcabecera` ASC) VISIBLE,
  CONSTRAINT `fk_detallesdeventa_productos1`
    FOREIGN KEY (`fkidproducto`)
    REFERENCES `floreria`.`productos` (`id`),
  CONSTRAINT `fk_detallesdeventa_ventascabecera1`
    FOREIGN KEY (`fkidcabecera`)
    REFERENCES `floreria`.`ventascabecera` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `floreria`.`entradas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `floreria`.`entradas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productoid` INT NOT NULL,
  `fechaentrada` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `proveedor` VARCHAR(255) NOT NULL,
  `cantidadanterior` INT NOT NULL,
  `cantidadsurtida` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_entradas_productos_idx` (`productoid` ASC) VISIBLE,
  CONSTRAINT `fk_entradas_productos`
    FOREIGN KEY (`productoid`)
    REFERENCES `floreria`.`productos` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 22
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `floreria`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `floreria`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombredelpropietario` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `rol` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
