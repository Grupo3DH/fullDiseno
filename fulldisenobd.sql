-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fd
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(11) DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `product_id` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `status_id` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`,`product_id`,`user_id`,`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'blanco'),(2,'verde'),(3,'azul'),(4,'negro'),(5,'jean'),(6,'rosa'),(7,'gris');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(1000) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'campera jean1615478294884.jpg',1,'2021-03-11 15:58:14','2021-03-11 15:58:14',NULL),(4,'swetter verde1615478446144.JPG',16,'2021-03-11 16:00:46','2021-03-11 16:00:46',NULL),(5,'campera jean1615486135940.jpg',17,'2021-03-11 18:08:56','2021-03-11 18:08:56',NULL),(6,'campera jean1615487488093.jpg',18,'2021-03-11 18:31:28','2021-03-11 18:31:28',NULL),(7,'swetter verde1615495256020.JPG',19,'2021-03-11 20:40:56','2021-03-11 20:40:56',NULL),(8,'overall1615495592106.jpg',20,'2021-03-11 20:46:32','2021-03-11 20:46:32',NULL),(9,'campera jean negrx1615495730133.JPG',21,'2021-03-11 20:48:50','2021-03-11 20:48:50',NULL),(10,'buzo1615497235771.jpg',22,'2021-03-11 21:13:55','2021-03-11 21:13:55',NULL),(11,'camisa1615497349439.jpg',23,'2021-03-11 21:15:49','2021-03-11 21:15:49',NULL),(12,'campera1615577453413.jpg',24,'2021-03-12 19:30:53','2021-03-12 19:30:53',NULL),(13,'jean1615577834039.jpg',25,'2021-03-12 19:37:14','2021-03-12 19:37:14',NULL),(14,'camisa1615578029872.jpg',26,'2021-03-12 19:40:29','2021-03-12 19:40:29',NULL),(15,'campera1615578393705.jpg',27,'2021-03-12 19:46:33','2021-03-12 19:46:33',NULL),(16,'bermuda1615578930503.jpg',28,'2021-03-12 19:55:30','2021-03-12 19:55:30',NULL),(17,'blazer1615579078021.jpg',29,'2021-03-12 19:57:58','2021-03-12 19:57:58',NULL);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'campera jean','campera unisex',4300,2,1,5,'2021-03-11 15:58:14','2021-03-11 18:28:03','2021-03-11 18:28:03'),(16,'swetter verde','swetter verde unisex',8700,2,1,2,'2021-03-11 16:00:46','2021-03-11 18:26:36','2021-03-11 18:26:36'),(17,'campera jean','sxdjasdnjkasdljasd',4556,2,1,4,'2021-03-11 18:08:56','2021-03-11 18:22:55','2021-03-11 18:22:55'),(18,'campera','campera   unisex, Una campera atemporal, Su suave tejido, cuello alto y corte holgado crean una prenda que combina el estilo clásico con la comodidad. ',3800,2,1,5,'2021-03-11 18:31:28','2021-03-11 21:17:20',NULL),(19,'buzo','Llena tu vida de color. Esta Campera Adicolor presenta un diseño clásico disponible en colores de inspiración retro. El logotipo del trébol deconstruido en la parte frontal aporta un toque extra de estilo. ',4300,2,1,2,'2021-03-11 20:40:56','2021-03-11 21:17:42',NULL),(20,'overall','Tu estilo es distintivo. Tus gustos son únicos. Destacate entre la multitud cada vez que te ponés este overall, Su diseño de corte holgado con un Trifolio 3D en el frente se ve genial con un jean de bota campana, un jardinero o una pollera en A. Las posibilidades son infinitas.',8400,1,1,5,'2021-03-11 20:46:32','2021-03-11 20:46:32',NULL),(21,'campera','Todos estamos conectados. Si querés vivir una vida plena te tiene que importar la salud del planeta en el que vivimos todos. Esta campera esta hecha con materiales reciclados y teñidos con tinturas naturales. ',4500,3,1,4,'2021-03-11 20:48:50','2021-03-11 21:18:00',NULL),(22,'buzo','A finales de los 90 la moda urbana dominaba. Este buzo corto evoca esta era. Usalo para crear un look retro o moderno, vos elegís. ',4500,2,1,1,'2021-03-11 21:13:55','2021-03-11 21:13:55',NULL),(23,'camisa ','¿Qué tanto puedes combinar una sola prenda? esta camisa te permite mil estilos, unisex ',1200,3,1,1,'2021-03-11 21:15:49','2021-03-12 01:03:41',NULL),(24,'campera','Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño',4800,2,1,5,'2021-03-12 19:30:53','2021-03-12 19:30:53',NULL),(25,'jean','Todo el confort de una prenda para estar en casa, con la flexibilidad para hacer todas tus actividades. Hace tus movimientos favoritos con este pantalón',5500,3,1,5,'2021-03-12 19:37:14','2021-03-12 19:37:14',NULL),(26,'camisa','camisa larga de jean unisex, estilo cualquiera puede llevarlo.',9800,3,1,5,'2021-03-12 19:40:29','2021-03-12 19:40:29',NULL),(27,'campera','campera rompevientos ,  con hilos reciclados  ',7800,2,1,6,'2021-03-12 19:46:33','2021-03-12 19:46:33',NULL),(28,'bermuda','Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Jh Bb Short podés dejar una reseña abajo; siempre nos encanta conocer tu opinión.',4600,2,1,1,'2021-03-12 19:55:30','2021-03-12 19:55:30',NULL),(29,'blazer ','Sus detalles ajustables en la visera y el dobladillo ofrecen cobertura adicional para protegerte del frío, mientras que sus cierres alargados y agujeros perforados permiten una óptima circulación del aire ',9800,3,1,7,'2021-03-12 19:57:58','2021-03-12 21:53:13',NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` varchar(100) NOT NULL,
  `status_id` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`,`cart_id`,`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,'s'),(2,'m'),(3,'l');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'en_stock'),(2,'en_carrito'),(3,'vendido');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `admin` tinyint(4) NOT NULL,
  `avatar` varchar(1000) NOT NULL,
  `sale_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`,`sale_id`,`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'usuariouno','usuario1@dh.com','$2a$12$LCbs5DR5U/V7mjrvI0xZluYFJqQfTl3qZ2XuAKu5o/DfcpNXjcL8O',0,'usuario1@dh.com1615592771322.webp',0,0,'2021-03-12 23:46:11','2021-03-12 23:46:11',NULL),(2,'dos','dos@dh.com','$2a$12$9dFcIDsO/IXBc3yKDIn32euPQcwllsJMDrUu/wK7Q7xY22sAriJY.',0,'dos@dh.com1615598053834.jpg',0,0,'2021-03-13 01:14:14','2021-03-13 01:14:14',NULL),(3,'Admin','melii.aa@hotmail.com','$2a$12$UCvOt/oldpzBqEMxPDZq2O0Y1SsSjvFuw.0GrJ6MvT8qfvJzklDSS',1,'melii.aa@hotmail.com1615598231915.webp',0,0,'2021-03-13 01:17:12','2021-03-13 01:17:12',NULL),(4,'rocko','ro@dh.com','$2a$12$4XX6D8iX/iU4aCWYFLjs8eZQ4LTc75WYX2ioBOhwu9qveEYeEHVH6',0,'ro@dh.com1615665386085.jpg',0,0,'2021-03-13 19:56:26','2021-03-13 19:56:26',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-13 17:11:21
