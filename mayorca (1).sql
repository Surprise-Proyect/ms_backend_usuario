-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-05-2024 a las 18:35:16
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mayorca`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_BUSCAR_USUARIO` (IN `_NOMBRE` VARCHAR(20))   BEGIN
SELECT NOMBRE, CLAVE FROM USUARIO WHERE NOMBRE = _NOMBRE LIMIT 1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREAR_USUARIO` (IN `_Nombre` VARCHAR(20), IN `_Apellido` VARCHAR(20), IN `_Clave` VARCHAR(500))   BEGIN
	INSERT INTO `usuario`(`nombre`, `apellido`, `clave`) 
    VALUES (_Nombre, _Apellido, _Clave);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR` (IN `_ID` INT)   BEGIN

DELETE FROM `usuario` WHERE ID = _ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_USUARIO` ()   BEGIN
	SELECT nombre, apellido, clave
	FROM usuario;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_USUARIO` (IN `_ID` INT, IN `_NOMBRE` VARCHAR(20), IN `_APELLIDO` VARCHAR(20), IN `_CLAVE` VARCHAR(50))   BEGIN
    UPDATE usuario
    SET nombre = _NOMBRE,
    apellido = _APELLIDO,
    clave = _CLAVE
    WHERE ID = _ID;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MOSTRAR_USUARIO` (IN `_ID` INT)   BEGIN
	SELECT nombre, apellido, clave
    FROM usuario WHERE id = _ID;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `clave` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `clave`) VALUES
(1, 'Klimber', 'Herrera', 'clave123'),
(2, 'Sneaker', 'Serna', 'klimberloaiza123'),
(4, 'Kinet', 'Herrera', 'enellimber'),
(5, 'Esneider', 'Giraldo', '$2b$04$tV.7yj3E5vI3ZO4QhXn/mO8HNveiKsj9FRP4Sep1Ilu'),
(6, 'Esneider', 'Giraldo', '$2b$04$x0kwySEnywWUvCesedtel.RzpKZMLq38fSH6s5FW3dC'),
(7, 'becerra', 'antonio', '$2b$04$NGz51R4TM1xFChfDaBrMq.VX45R3YEDOLpRUiGlpd8X'),
(8, 'a', 'undefined', '$2b$04$M3e0Fey8KxxlKTIhqyPnr.42a4GPRTU3QLdeRI.w0y3'),
(9, 'b', 'undefined', '$2b$04$HmR920Z79hxd.tpSG.IhIeoOu7nMojroWUfgti66YJU'),
(10, 'c', 'undefined', '$2b$04$0rR.n5eHVEwJhkdwhgkTeue2tE4/OMPXFhW.k7GLKdYHtzFwo5u0O'),
(11, 'climber', 'undefined', '$2b$04$LwB7PRr3XvAihFSaVswBRuZfR.eomWvioYze77RsdhGihlCJJXNB6'),
(12, 'climber', 'undefined', '$2b$04$cnphLhEwGK.I/A7YqAVtK.S.Hx.ykd7ZrS0OBeALQCjo8MPukg8HC'),
(13, 'climber', 'undefined', '$2b$04$Q1LJ/Id/uUN1Bga4kPOV9e8hGgbpF7StD2Z4d9XDc8RD5.MEi7rNW'),
(14, 'climber', 'undefined', '$2b$04$Ajcm9UI6KhJxOx7n1ipDmuquOHbJs9cbXMDLmKUEZ26zqNKy8ju9i'),
(15, 'climber', 'undefined', '$2b$04$kNOqCSfkIG9diWRM96iurON5sw1GspmrxmyamY8lZxNiYl6H8IkpK'),
(16, 'climber', 'undefined', '$2b$04$7zw6g86i25MoHrvehKdNjOCT5xIoGZ0ONyznrV8hav6A8AIXhOgFy'),
(17, 'climber', 'undefined', '$2b$04$uydyJ1lZAVc1L8ps3vxr/O7VhEiZYdFtSKaC9/lTEgqGzHA5Fnbde'),
(18, 'climber', 'undefined', '$2b$04$xf/fQq4MQHZmoi2lPBkw..9aMM43wXstuVdWdRRIxAO5qm/h66HSG'),
(19, 'climber', 'undefined', '$2b$04$ynsLB.vvjgNIznxAoxbyDeuLHXQ5RMbCo/QqN7kyywkGEUuiCLUiu'),
(20, 'climber', 'undefined', '$2b$04$284EiwZS1gmaVK8swkraguEv/p48vKH6tGmxGK7yy08e6YFWJacj.'),
(21, 'climber', 'undefined', '$2b$04$4oRFxBo.4kQWgN9jZEeoze/UYaV9/q/G2/lx7CxfMpmhYcKawHP3u'),
(22, 'climber', 'undefined', '$2b$04$pG.oKQasZP36L0/c/dp/GO7090uUZ6Xltn1q8DYDwswX3tabWcRBa'),
(23, 'climber', 'undefined', '$2b$04$C5GvxSkpt4BU3UR8qx8KF.3k7mWA.rN5MevpjjJGK9Qilsw29xR22'),
(24, 'climber', 'undefined', '$2b$04$ihc/sehsLsni5OSqvga89.vlZMePJckw4rSmIE3akaJ1d.U5vnQpm'),
(25, 'climber', 'undefined', '$2b$04$O7fTXsBz80J1UQPt9k.EZusAG7lwb1dgiS/m1sOdHwSZa45e9Sld2'),
(26, 'climber', 'undefined', '$2b$04$Qjgaq0PuzgQ/C.JkglvS3.5hGiVd4Vl1ZsV0VM1qlbzDq1UGOpciW'),
(27, 'climber', 'undefined', '$2b$04$ARfZsP8QxfDKmsUsunZD9eoIpaSWa0x2ULs4ovaZ9XDdsUw.ITMaC'),
(28, 'climber', 'undefined', '$2b$04$NnclM7Zcio1sfRn7CHGzN.8WVSILtVF46HQ0.7gN/UBGu0ytgEAgi'),
(29, 'climber', 'undefined', '$2b$04$BBBw/MESO5XJPrEkFEMXOO2xQUHTEB.NFJ5sZmDJq5UCuYpnZByN2'),
(30, 'climber', 'undefined', '$2b$04$he5Tbj//CUv606xvowVoSuX3MrQw0SO1J.iH3et8qSo3w/FaWge26'),
(31, 'climber', 'undefined', '$2b$04$430RzPsOMaqYcpF5F/8DiO0GZmU2E08nPrMX4PnFXhM7ZBW8OfpWS'),
(32, 'climber', 'undefined', '$2b$04$hhKwIj8w.fAkYRMJarRFC.adIR95klaT6PooF1uUFdBkEt/esj5La'),
(33, 'climber', 'undefined', '$2b$04$MyjKWlrEZPdPBTk91jMKJ.9tqeMcSmCgAY4dwb9XSISox2WL2Ro1m'),
(34, 'climdddber', 'undefined', '$2b$04$pDZfjP9a9qA9tqhGNi1yl.R9Xezt8.CjOsRpFQfqUM13aFn9uiVdq');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
