-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 27 Novembre 2014 à 18:25
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `oka`
--

-- --------------------------------------------------------

--
-- Structure de la table `cafe_bar`
--

CREATE TABLE IF NOT EXISTS `cafe_bar` (
  `nom` varchar(255) CHARACTER SET utf8 NOT NULL,
  `adresse` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `cafe_bar`
--

INSERT INTO `cafe_bar` (`nom`, `adresse`) VALUES
('Comptoir général', '80 quai de Jemmapes 75010 Paris'),
('Le Biloba', '12 rue Jean Jacques Rousseau 75010 Paris'),
('Ecolo Café', '257 rue St Denis 75002 Paris'),
('Puerto Cacao', '2 rue Théophile Roussel 75012 Paris'),
('HETIC', '27 Bis Rue du Progrès 93100 Montreuil');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
