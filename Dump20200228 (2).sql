CREATE DATABASE  IF NOT EXISTS `devicemanagement` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `devicemanagement`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: devicemanagement
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `ADDRESSID` int NOT NULL AUTO_INCREMENT,
  `COUNTRY` varchar(30) DEFAULT NULL,
  `STATE` varchar(30) DEFAULT NULL,
  `CITY` varchar(30) DEFAULT NULL,
  `PINCODE` int DEFAULT NULL,
  `ADDRESS` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`ADDRESSID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'INDIA','HARYANA','FARIDABAD',121002,'10,OLD FARIDABAD'),(2,'INDIA','HARYANA','FARIDABAD',121006,'35,BADKAL ROAD'),(3,'INDIA','DELHI','SOUTH DELHI',133689,'26,AMRIT NAGAR'),(4,'INDIA','HARYANA','GURUGRAM',137497,'ROOM NO-106,ZOLO CANVAS,SILOKHERI'),(5,'INDIA','UTTAR PRADESH','NOIDA',248979,'106,SECOND FLOOR,AMRAPALI SILICON CITY'),(6,'INIDA','HARYANA','FARIDABAD',121001,'999, g-BLOCK SECTOR-49');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assigndevice`
--

DROP TABLE IF EXISTS `assigndevice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assigndevice` (
  `ASSIGNID` int NOT NULL AUTO_INCREMENT,
  `USERID` int DEFAULT NULL,
  `DEVICEID` int DEFAULT NULL,
  `DATEOFALLOCATION` timestamp NULL DEFAULT NULL,
  `EXPECTEDRETURNDATE` timestamp NULL DEFAULT NULL,
  `ACTUALRETURNDATE` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ASSIGNID`),
  KEY `DEVICEID` (`DEVICEID`),
  KEY `useridad` (`USERID`),
  CONSTRAINT `assigndevice_ibfk_1` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`),
  CONSTRAINT `assigndevice_ibfk_2` FOREIGN KEY (`DEVICEID`) REFERENCES `devices` (`DEVICEID`),
  CONSTRAINT `DEVICEID` FOREIGN KEY (`DEVICEID`) REFERENCES `devices` (`DEVICEID`) ON DELETE CASCADE,
  CONSTRAINT `USERID` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`) ON DELETE CASCADE,
  CONSTRAINT `useridad` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assigndevice`
--

LOCK TABLES `assigndevice` WRITE;
/*!40000 ALTER TABLE `assigndevice` DISABLE KEYS */;
INSERT INTO `assigndevice` VALUES (1,4,2,'2020-02-06 02:30:01','2020-02-07 08:30:00','2020-02-07 10:30:00'),(3,2,7,'2020-02-08 04:00:01','2020-02-08 06:30:00','2020-02-08 06:30:00'),(4,1,1,'2020-02-08 04:00:20','2020-02-08 06:30:00','2020-02-08 07:00:00'),(5,1,6,'2020-02-08 09:00:20','2020-02-08 12:30:00','2020-02-08 13:00:00');
/*!40000 ALTER TABLE `assigndevice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devices`
--

DROP TABLE IF EXISTS `devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devices` (
  `DEVICEID` int NOT NULL AUTO_INCREMENT,
  `DEVICESTATUS` enum('ALLOCATED','FREE') DEFAULT NULL,
  `DEVICENAME` varchar(30) DEFAULT NULL,
  `SPECIFICATIONID` int DEFAULT NULL,
  PRIMARY KEY (`DEVICEID`),
  KEY `SPECIFICATIONID` (`SPECIFICATIONID`),
  CONSTRAINT `devices_ibfk_1` FOREIGN KEY (`SPECIFICATIONID`) REFERENCES `specification` (`SPECIFICATIONID`),
  CONSTRAINT `SPECIFICATIONID` FOREIGN KEY (`SPECIFICATIONID`) REFERENCES `specification` (`SPECIFICATIONID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devices`
--

LOCK TABLES `devices` WRITE;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;
INSERT INTO `devices` VALUES (1,'ALLOCATED','IPHONE6',5),(2,'ALLOCATED','MI',3),(3,'FREE','IDEAPAD330',2),(4,'FREE','JBL',6),(5,'FREE','IPHONE6',5),(6,'ALLOCATED','JBL',7),(7,'ALLOCATED','HP',8),(8,'FREE','IPHONEX',10),(9,'FREE','IPHONE5',5),(10,'FREE','DELL',8),(11,'FREE','DELL',9);
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faultydevice`
--

DROP TABLE IF EXISTS `faultydevice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faultydevice` (
  `FAULTID` int NOT NULL AUTO_INCREMENT,
  `USERID` int DEFAULT NULL,
  `DEVICEID` int DEFAULT NULL,
  `DESCRIPTION` varchar(200) DEFAULT NULL,
  `IMAGE` blob,
  `TIME` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`FAULTID`),
  KEY `DEVICEID1` (`DEVICEID`),
  KEY `useridfd` (`USERID`),
  CONSTRAINT `DEVICEID1` FOREIGN KEY (`DEVICEID`) REFERENCES `devices` (`DEVICEID`) ON DELETE CASCADE,
  CONSTRAINT `faultydevice_ibfk_1` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`),
  CONSTRAINT `faultydevice_ibfk_2` FOREIGN KEY (`DEVICEID`) REFERENCES `devices` (`DEVICEID`),
  CONSTRAINT `USERID1` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`) ON DELETE CASCADE,
  CONSTRAINT `useridfd` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faultydevice`
--

LOCK TABLES `faultydevice` WRITE;
/*!40000 ALTER TABLE `faultydevice` DISABLE KEYS */;
INSERT INTO `faultydevice` VALUES (1,4,2,'SOFTWARE ISSUE',NULL,'2020-02-08 04:10:04'),(2,1,1,'SOFTWARE ISSUE',NULL,'2020-02-08 14:10:04'),(3,2,7,'HARDWARE RELATED',NULL,'2020-02-27 10:15:22');
/*!40000 ALTER TABLE `faultydevice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newdevicerequest`
--

DROP TABLE IF EXISTS `newdevicerequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newdevicerequest` (
  `NEWREQUESTID` int NOT NULL AUTO_INCREMENT,
  `USERID` int DEFAULT NULL,
  `DESCRIPTION` varchar(200) DEFAULT NULL,
  `NEWREQUESTSTATUS` enum('ACCEPTED','REJECTED','PENDING') DEFAULT NULL,
  `DEVICETYPE` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`NEWREQUESTID`),
  KEY `useridndr` (`USERID`),
  CONSTRAINT `newdevicerequest_ibfk_1` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`),
  CONSTRAINT `USERID3` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`) ON DELETE CASCADE,
  CONSTRAINT `useridndr` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newdevicerequest`
--

LOCK TABLES `newdevicerequest` WRITE;
/*!40000 ALTER TABLE `newdevicerequest` DISABLE KEYS */;
INSERT INTO `newdevicerequest` VALUES (1,5,'Mi Super Bass Wireless Headphones with Super Powerful bass, up to 20hrs Battery Life, Bluetooth 5.0 Black and Gold','REJECTED','HEADPHONE'),(2,1,'ASUS VivoBook 14 X409FA-EK555T Intel Core i5 8th Gen 14-inch FHD Thin and Light Laptop 8GB RAM/512GB NVMe SSD/Windows 10/Integrated Graphics/1.6 kg Transparent Silver','PENDING','LAPTOP');
/*!40000 ALTER TABLE `newdevicerequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission` (
  `PERMISSIONID` int NOT NULL AUTO_INCREMENT,
  `PERMISSION` enum('READ','WRITE') DEFAULT NULL,
  PRIMARY KEY (`PERMISSIONID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (1,'READ'),(2,'WRITE');
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `REQUESTID` int NOT NULL AUTO_INCREMENT,
  `USERID` int DEFAULT NULL,
  `SPECIFICATIONID` int DEFAULT NULL,
  `PRIORITY` enum('LOW','MEDIUM','HIGH') DEFAULT NULL,
  `REQUESTSTATUS` enum('ACCEPTED','REJECTED','PENDING') DEFAULT NULL,
  PRIMARY KEY (`REQUESTID`),
  KEY `SPECIFICATIONID1` (`SPECIFICATIONID`),
  KEY `useridr` (`USERID`),
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`),
  CONSTRAINT `request_ibfk_2` FOREIGN KEY (`SPECIFICATIONID`) REFERENCES `specification` (`SPECIFICATIONID`),
  CONSTRAINT `SPECIFICATIONID1` FOREIGN KEY (`SPECIFICATIONID`) REFERENCES `specification` (`SPECIFICATIONID`) ON DELETE CASCADE,
  CONSTRAINT `USERID2` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`) ON DELETE CASCADE,
  CONSTRAINT `useridr` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (1,4,3,'HIGH','ACCEPTED'),(2,3,4,'LOW','PENDING'),(3,3,6,'HIGH','PENDING'),(4,6,10,'HIGH','PENDING'),(5,6,8,'HIGH','REJECTED');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `ROLEID` int NOT NULL AUTO_INCREMENT,
  `ROLENAME` enum('USER','ADMIN','SUPERADMIN') DEFAULT NULL,
  PRIMARY KEY (`ROLEID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'SUPERADMIN'),(2,'ADMIN'),(3,'USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolepermission`
--

DROP TABLE IF EXISTS `rolepermission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolepermission` (
  `ROLEPERMISSIONID` int NOT NULL AUTO_INCREMENT,
  `USERID` int DEFAULT NULL,
  `ROLEID` int DEFAULT NULL,
  `PERMISSIONID` int DEFAULT NULL,
  `STATUS` enum('ACTIVE','NOTACTIVE') DEFAULT NULL,
  PRIMARY KEY (`ROLEPERMISSIONID`),
  KEY `ROLEID` (`ROLEID`),
  KEY `PERMISSIONID` (`PERMISSIONID`),
  KEY `useridrp` (`USERID`),
  CONSTRAINT `PERMISSIONID` FOREIGN KEY (`PERMISSIONID`) REFERENCES `permission` (`PERMISSIONID`) ON DELETE CASCADE,
  CONSTRAINT `ROLEID` FOREIGN KEY (`ROLEID`) REFERENCES `role` (`ROLEID`) ON DELETE CASCADE,
  CONSTRAINT `rolepermission_ibfk_1` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`),
  CONSTRAINT `rolepermission_ibfk_2` FOREIGN KEY (`ROLEID`) REFERENCES `role` (`ROLEID`),
  CONSTRAINT `rolepermission_ibfk_3` FOREIGN KEY (`PERMISSIONID`) REFERENCES `permission` (`PERMISSIONID`),
  CONSTRAINT `USERID4` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`) ON DELETE CASCADE,
  CONSTRAINT `useridrp` FOREIGN KEY (`USERID`) REFERENCES `user` (`USERID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolepermission`
--

LOCK TABLES `rolepermission` WRITE;
/*!40000 ALTER TABLE `rolepermission` DISABLE KEYS */;
INSERT INTO `rolepermission` VALUES (1,1,1,2,'ACTIVE'),(2,2,2,2,'ACTIVE'),(3,2,2,1,'ACTIVE'),(4,1,1,1,'ACTIVE'),(5,3,3,1,'ACTIVE'),(6,4,3,1,'ACTIVE');
/*!40000 ALTER TABLE `rolepermission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specification`
--

DROP TABLE IF EXISTS `specification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specification` (
  `SPECIFICATIONID` int NOT NULL AUTO_INCREMENT,
  `DEVICETYPE` varchar(30) DEFAULT NULL,
  `PROCESSOR` varchar(30) DEFAULT NULL,
  `RAM` varchar(30) DEFAULT NULL,
  `HARDDISK` varchar(30) DEFAULT NULL,
  `OPERATINGSYSTEM` varchar(30) DEFAULT NULL,
  `GRAPHICCARD` varchar(30) DEFAULT NULL,
  `WIRELESS` enum('YES','NO') DEFAULT NULL,
  `BATTERYCAPACITY` varchar(30) DEFAULT NULL,
  `CHARGER` enum('YES','NO') DEFAULT NULL,
  `USBPORTTYPE` enum('A','B','C','-') DEFAULT NULL,
  `USBVERSION` enum('1.0','2.0','3.0','-') DEFAULT NULL,
  `ETHERNETPORTRJ45` enum('YES','NO') DEFAULT NULL,
  `HDMIPORTTYPE` enum('A','C','D','-') DEFAULT NULL,
  `SDCARDREADER` enum('YES','NO') DEFAULT NULL,
  `DISPLAYPORT` enum('YES','NO') DEFAULT NULL,
  `DVIPORT` enum('YES','NO') DEFAULT NULL,
  `VGAPORT` enum('YES','NO') DEFAULT NULL,
  `AUDIOJACK` enum('YES','NO') DEFAULT NULL,
  `THUNDERBOLT` enum('YES','NO') DEFAULT NULL,
  `LIGHTNINGPORT` enum('YES','NO') DEFAULT NULL,
  PRIMARY KEY (`SPECIFICATIONID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specification`
--

LOCK TABLES `specification` WRITE;
/*!40000 ALTER TABLE `specification` DISABLE KEYS */;
INSERT INTO `specification` VALUES (1,'LAPTOP','I5','4GB','520GB','WINDOWS',NULL,'NO','4000MAH','YES','A','2.0','NO','C','YES','YES','YES','YES','YES','NO','NO'),(2,'LAPTOP','I6','6GB','520GB','WINDOWS',NULL,'NO','4000MAH','YES','A','2.0','NO','C','YES','YES','YES','YES','YES','NO','NO'),(3,'MOBILE','DUAL-CORE','4GB','64GB','ANDROID',NULL,'YES','4000MAH','YES','-','1.0','NO','-','YES','NO','NO','NO','YES','NO','NO'),(4,'MOBILE','OCTA-CORE','6GB','128GB','ANDROID',NULL,'YES','4000MAH','YES','-','1.0','NO','-','YES','NO','NO','NO','YES','NO','NO'),(5,'MOBILE','OCTA-CORE','6GB','128GB','IOS',NULL,'YES','4000MAH','YES','-','1.0','NO','-','YES','NO','NO','NO','YES','NO','YES'),(6,'HEADPHONE',NULL,NULL,NULL,NULL,NULL,'YES','4000MAH','YES','-','1.0','NO','-','NO','NO','NO','NO','NO','NO','NO'),(7,'HEADPHONE',NULL,NULL,NULL,NULL,NULL,'NO',NULL,'NO','-','1.0','NO','-','NO','NO','NO','NO','NO','NO','NO'),(8,'DESKTOP','I3','4GB','320GB','UBUNTU',NULL,'NO',NULL,'NO','A','2.0','YES','A','NO','YES','YES','YES','YES','NO','NO'),(9,'DESKTOP','I7','2GB','720GB','LINUX','2GB','NO',NULL,'NO','B','3.0','YES','D','NO','YES','YES','YES','YES','YES','NO'),(10,'MOBILE','DUALCORE','2GB','32GB','IOS',NULL,'NO','5000MAH','YES','-','-','NO','-','NO','NO','NO','NO','YES','NO','YES');
/*!40000 ALTER TABLE `specification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `USERID` int NOT NULL AUTO_INCREMENT,
  `FIRSTNAME` varchar(20) DEFAULT NULL,
  `LASTNAME` varchar(20) DEFAULT NULL,
  `PHONE` varchar(10) DEFAULT NULL,
  `PASSWORD` varchar(20) DEFAULT NULL,
  `ACTIVESTATUS` enum('EMPLOYED','LEAVE') DEFAULT NULL,
  `EMAILADDRESS` varchar(30) DEFAULT NULL,
  `DESIGNATION` varchar(20) DEFAULT NULL,
  `ADDRESSID` int DEFAULT NULL,
  PRIMARY KEY (`USERID`),
  KEY `ADDRESSID` (`ADDRESSID`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`ADDRESSID`) REFERENCES `address` (`ADDRESSID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'NAMIT','CHAUHAN','7988293485','ABC@123','EMPLOYED','NCHAUHAN@EX2INDIA.COM','INTERN',1),(2,'MEGHA','GUPTA','7206068980','XYZ@123','EMPLOYED','MGUPTA@EX2INDIA.COM','INTERN',2),(3,'KOUSTUB','D','9734683856','ABC@123','EMPLOYED','KD@EX2INDIA.COM','INTERN',4),(4,'KHUSHI','SARKARI','2437357870','ABC@123','EMPLOYED','KSARKARI@EX2INDIA.COM','INTERN',6),(5,'RISHABH','BISHT','7896789677','PAGLA@123','LEAVE','RBISHT@EX2INDIA.COM','BELLBOY',5),(6,'JASVINDER','SINGH','0000000000','PARLOR@123','EMPLOYED','JSINGH@EX2INDIA.COM','INTERN',3);
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

-- Dump completed on 2020-02-28 12:23:43
