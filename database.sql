-- MySQL dump 10.13  Distrib 5.7.11, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: 
-- ------------------------------------------------------
-- Server version	5.7.11-log

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
-- Current Database: `hackatinder`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `hackatinder` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `hackatinder`;

--
-- Table structure for table `evaluation`
--

DROP TABLE IF EXISTS `evaluation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluation` (
  `evaluatingUser` int(11) NOT NULL,
  `evaluatedUser` int(11) NOT NULL,
  `datetime` datetime NOT NULL,
  `evaluation` tinyint(1) NOT NULL,
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `evaluating_user_fk` (`evaluatingUser`),
  KEY `evaluated_user_fk` (`evaluatedUser`),
  CONSTRAINT `evaluated_user_fk` FOREIGN KEY (`evaluatedUser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `evaluating_user_fk` FOREIGN KEY (`evaluatingUser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='column datetime may be a reserved word';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluation`
--

LOCK TABLES `evaluation` WRITE;
/*!40000 ALTER TABLE `evaluation` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `match`
--

DROP TABLE IF EXISTS `match`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `match` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId1` int(11) NOT NULL,
  `userId2` int(11) NOT NULL,
  `datetime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_1_match_fk` (`userId1`),
  KEY `user_2_match_fk` (`userId2`),
  CONSTRAINT `user_1_match_fk` FOREIGN KEY (`userId1`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_2_match_fk` FOREIGN KEY (`userId2`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='app level validation: user1''s id is greater than user2''s id';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `match`
--

LOCK TABLES `match` WRITE;
/*!40000 ALTER TABLE `match` DISABLE KEYS */;
/*!40000 ALTER TABLE `match` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(64) NOT NULL,
  `major` tinyint(2) unsigned NOT NULL,
  `semester` char(6) NOT NULL,
  `gender` tinyint(2) unsigned DEFAULT NULL,
  `enrolmentStatus` tinyint(2) unsigned NOT NULL,
  `educationLevel` tinyint(2) unsigned NOT NULL,
  `sexualOrientation` tinyint(2) unsigned DEFAULT NULL,
  `genderPreference` tinyint(2) unsigned DEFAULT NULL,
  `neighborhood` varchar(128) DEFAULT '',
  `phone` varchar(13) DEFAULT '',
  `birthday` date NOT NULL,
  `description` text,
  `matchMessage` text NOT NULL,
  `active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_block`
--

DROP TABLE IF EXISTS `user_block`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_block` (
  `blockingUserId` int(11) NOT NULL,
  `blockedUserId` int(11) NOT NULL,
  `datetime` datetime NOT NULL,
  PRIMARY KEY (`blockingUserId`,`blockedUserId`),
  KEY `blocking_user_fk` (`blockedUserId`),
  CONSTRAINT `blocked_user_fk` FOREIGN KEY (`blockingUserId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `blocking_user_fk` FOREIGN KEY (`blockedUserId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_block`
--

LOCK TABLES `user_block` WRITE;
/*!40000 ALTER TABLE `user_block` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_block` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_campus`
--

DROP TABLE IF EXISTS `user_campus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_campus` (
  `userId` int(11) NOT NULL,
  `campus` tinyint(2) NOT NULL,
  PRIMARY KEY (`userId`,`campus`),
  CONSTRAINT `userId_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_campus`
--

LOCK TABLES `user_campus` WRITE;
/*!40000 ALTER TABLE `user_campus` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_campus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_report`
--

DROP TABLE IF EXISTS `user_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_report` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(2) unsigned NOT NULL,
  `reportingUser` int(11) NOT NULL,
  `reportedUser` int(11) NOT NULL,
  `datetime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reportingUser_fk` (`reportingUser`),
  KEY `reportedUser_fk` (`reportedUser`),
  CONSTRAINT `reportedUser_fk` FOREIGN KEY (`reportedUser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reportingUser_fk` FOREIGN KEY (`reportingUser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_report`
--

LOCK TABLES `user_report` WRITE;
/*!40000 ALTER TABLE `user_report` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_social`
--

DROP TABLE IF EXISTS `user_social`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_social` (
  `userId` int(11) NOT NULL,
  `network` tinyint(2) NOT NULL,
  `networkHandle` varchar(64) DEFAULT '',
  PRIMARY KEY (`userId`,`network`),
  CONSTRAINT `userId_user_social_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_social`
--

LOCK TABLES `user_social` WRITE;
/*!40000 ALTER TABLE `user_social` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_social` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tag`
--

DROP TABLE IF EXISTS `user_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_tag` (
  `userId` int(11) NOT NULL,
  `tag` varchar(128) NOT NULL,
  PRIMARY KEY (`userId`,`tag`),
  CONSTRAINT `user_tag_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tag`
--

LOCK TABLES `user_tag` WRITE;
/*!40000 ALTER TABLE `user_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_tag` ENABLE KEYS */;
UNLOCK TABLES;
