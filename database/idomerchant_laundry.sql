-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 11, 2024 at 05:09 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `idomerchant_laundry`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer_masters`
--

CREATE TABLE `customer_masters` (
  `id` bigint UNSIGNED NOT NULL,
  `hosting_id` bigint UNSIGNED NOT NULL,
  `register_by_team_id` bigint UNSIGNED NOT NULL,
  `reg_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reg_date` date NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_code_id` bigint UNSIGNED DEFAULT NULL,
  `mobile` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cust_status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer_masters`
--

INSERT INTO `customer_masters` (`id`, `hosting_id`, `register_by_team_id`, `reg_no`, `reg_date`, `name`, `country_code_id`, `mobile`, `address`, `cust_status`, `email`, `password`, `remember_token`, `uuid`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, 1, 1, '0001', '2024-07-11', 'John Doe', 62, '253571476580', 'Jakarta', 'available', '0001@gmail.com', '$2y$12$GyoFXTARz9H47FIWj6H.Be1gEb68mSmCdumppCd7s5yrSh0tXkQtO', NULL, '207cc663-1c72-41d8-a3fd-9f2115874c75', '2024-07-11 04:47:10', 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `log_errors`
--

CREATE TABLE `log_errors` (
  `id` bigint UNSIGNED NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `filename` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2024_07_11_120219_create_customer_masters_table', 0),
(2, '2024_07_11_120219_create_failed_jobs_table', 0),
(3, '2024_07_11_120219_create_jobs_table', 0),
(4, '2024_07_11_120219_create_log_errors_table', 0),
(5, '2024_07_11_120219_create_model_has_permissions_table', 0),
(6, '2024_07_11_120219_create_model_has_roles_table', 0),
(7, '2024_07_11_120219_create_password_reset_tokens_table', 0),
(8, '2024_07_11_120219_create_permissions_table', 0),
(9, '2024_07_11_120219_create_personal_access_tokens_table', 0),
(10, '2024_07_11_120219_create_prefix_tags_table', 0),
(11, '2024_07_11_120219_create_role_has_permissions_table', 0),
(12, '2024_07_11_120219_create_roles_table', 0),
(13, '2024_07_11_120219_create_sessions_table', 0),
(14, '2024_07_11_120219_create_teams_table', 0),
(15, '2024_07_11_120219_create_users_table', 0);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_permissions`
--

INSERT INTO `model_has_permissions` (`permission_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 1),
(3, 'App\\Models\\User', 1),
(4, 'App\\Models\\User', 1),
(5, 'App\\Models\\User', 1),
(6, 'App\\Models\\User', 1),
(7, 'App\\Models\\User', 1),
(8, 'App\\Models\\User', 1),
(9, 'App\\Models\\User', 1),
(10, 'App\\Models\\User', 1),
(11, 'App\\Models\\User', 1),
(12, 'App\\Models\\User', 1),
(13, 'App\\Models\\User', 1),
(15, 'App\\Models\\User', 1),
(16, 'App\\Models\\User', 1),
(17, 'App\\Models\\User', 1),
(18, 'App\\Models\\User', 1),
(19, 'App\\Models\\User', 1),
(20, 'App\\Models\\User', 1),
(21, 'App\\Models\\User', 1),
(22, 'App\\Models\\User', 1),
(23, 'App\\Models\\User', 1),
(24, 'App\\Models\\User', 1),
(25, 'App\\Models\\User', 1),
(26, 'App\\Models\\User', 1),
(27, 'App\\Models\\User', 1),
(28, 'App\\Models\\User', 1),
(29, 'App\\Models\\User', 1),
(30, 'App\\Models\\User', 1),
(31, 'App\\Models\\User', 1),
(32, 'App\\Models\\User', 1),
(33, 'App\\Models\\User', 1),
(34, 'App\\Models\\User', 1),
(35, 'App\\Models\\User', 1),
(36, 'App\\Models\\User', 1),
(37, 'App\\Models\\User', 1),
(38, 'App\\Models\\User', 1),
(39, 'App\\Models\\User', 1),
(40, 'App\\Models\\User', 1),
(41, 'App\\Models\\User', 1),
(42, 'App\\Models\\User', 1),
(43, 'App\\Models\\User', 1),
(44, 'App\\Models\\User', 1),
(45, 'App\\Models\\User', 1),
(46, 'App\\Models\\User', 1),
(47, 'App\\Models\\User', 1),
(48, 'App\\Models\\User', 1),
(1, 'App\\Models\\User', 2),
(2, 'App\\Models\\User', 2),
(3, 'App\\Models\\User', 2),
(4, 'App\\Models\\User', 2),
(5, 'App\\Models\\User', 2),
(6, 'App\\Models\\User', 2),
(7, 'App\\Models\\User', 2),
(8, 'App\\Models\\User', 2),
(9, 'App\\Models\\User', 2),
(10, 'App\\Models\\User', 2),
(11, 'App\\Models\\User', 2),
(12, 'App\\Models\\User', 2),
(13, 'App\\Models\\User', 2),
(15, 'App\\Models\\User', 2),
(16, 'App\\Models\\User', 2),
(17, 'App\\Models\\User', 2),
(18, 'App\\Models\\User', 2),
(19, 'App\\Models\\User', 2),
(20, 'App\\Models\\User', 2),
(21, 'App\\Models\\User', 2),
(22, 'App\\Models\\User', 2),
(23, 'App\\Models\\User', 2),
(24, 'App\\Models\\User', 2),
(25, 'App\\Models\\User', 2),
(26, 'App\\Models\\User', 2),
(27, 'App\\Models\\User', 2),
(28, 'App\\Models\\User', 2),
(29, 'App\\Models\\User', 2),
(30, 'App\\Models\\User', 2),
(31, 'App\\Models\\User', 2),
(32, 'App\\Models\\User', 2),
(33, 'App\\Models\\User', 2),
(34, 'App\\Models\\User', 2),
(35, 'App\\Models\\User', 2),
(36, 'App\\Models\\User', 2),
(37, 'App\\Models\\User', 2),
(38, 'App\\Models\\User', 2),
(39, 'App\\Models\\User', 2),
(40, 'App\\Models\\User', 2),
(41, 'App\\Models\\User', 2),
(42, 'App\\Models\\User', 2),
(43, 'App\\Models\\User', 2),
(44, 'App\\Models\\User', 2),
(45, 'App\\Models\\User', 2),
(46, 'App\\Models\\User', 2),
(47, 'App\\Models\\User', 2),
(48, 'App\\Models\\User', 2),
(13, 'App\\Models\\User', 3),
(15, 'App\\Models\\User', 3),
(16, 'App\\Models\\User', 3),
(43, 'App\\Models\\User', 3),
(4, 'App\\Models\\User', 4),
(5, 'App\\Models\\User', 4),
(6, 'App\\Models\\User', 4),
(7, 'App\\Models\\User', 4),
(8, 'App\\Models\\User', 4),
(9, 'App\\Models\\User', 4),
(10, 'App\\Models\\User', 4),
(11, 'App\\Models\\User', 4),
(12, 'App\\Models\\User', 4),
(13, 'App\\Models\\User', 4),
(15, 'App\\Models\\User', 4),
(16, 'App\\Models\\User', 4),
(17, 'App\\Models\\User', 4),
(18, 'App\\Models\\User', 4),
(19, 'App\\Models\\User', 4),
(20, 'App\\Models\\User', 4),
(21, 'App\\Models\\User', 4),
(22, 'App\\Models\\User', 4),
(23, 'App\\Models\\User', 4),
(24, 'App\\Models\\User', 4),
(25, 'App\\Models\\User', 4),
(26, 'App\\Models\\User', 4),
(27, 'App\\Models\\User', 4),
(28, 'App\\Models\\User', 4),
(29, 'App\\Models\\User', 4),
(30, 'App\\Models\\User', 4),
(31, 'App\\Models\\User', 4),
(32, 'App\\Models\\User', 4),
(33, 'App\\Models\\User', 4),
(34, 'App\\Models\\User', 4),
(35, 'App\\Models\\User', 4),
(36, 'App\\Models\\User', 4),
(37, 'App\\Models\\User', 4),
(38, 'App\\Models\\User', 4),
(39, 'App\\Models\\User', 4),
(40, 'App\\Models\\User', 4),
(41, 'App\\Models\\User', 4),
(42, 'App\\Models\\User', 4),
(43, 'App\\Models\\User', 4),
(44, 'App\\Models\\User', 4),
(45, 'App\\Models\\User', 4),
(46, 'App\\Models\\User', 4),
(47, 'App\\Models\\User', 4),
(48, 'App\\Models\\User', 4),
(2, 'App\\Models\\User', 5),
(5, 'App\\Models\\User', 5),
(11, 'App\\Models\\User', 5),
(13, 'App\\Models\\User', 5),
(14, 'App\\Models\\User', 5),
(16, 'App\\Models\\User', 5),
(17, 'App\\Models\\User', 5),
(19, 'App\\Models\\User', 5),
(20, 'App\\Models\\User', 5),
(21, 'App\\Models\\User', 5),
(22, 'App\\Models\\User', 5),
(27, 'App\\Models\\User', 5),
(28, 'App\\Models\\User', 5),
(29, 'App\\Models\\User', 5),
(32, 'App\\Models\\User', 5),
(33, 'App\\Models\\User', 5),
(35, 'App\\Models\\User', 5),
(36, 'App\\Models\\User', 5),
(37, 'App\\Models\\User', 5),
(38, 'App\\Models\\User', 5),
(39, 'App\\Models\\User', 5),
(40, 'App\\Models\\User', 5),
(41, 'App\\Models\\User', 5),
(42, 'App\\Models\\User', 5),
(43, 'App\\Models\\User', 5),
(45, 'App\\Models\\User', 5),
(46, 'App\\Models\\User', 5),
(3, 'App\\Models\\User', 6),
(4, 'App\\Models\\User', 6),
(5, 'App\\Models\\User', 6),
(7, 'App\\Models\\User', 6),
(9, 'App\\Models\\User', 6),
(13, 'App\\Models\\User', 6),
(14, 'App\\Models\\User', 6),
(16, 'App\\Models\\User', 6),
(17, 'App\\Models\\User', 6),
(19, 'App\\Models\\User', 6),
(21, 'App\\Models\\User', 6),
(23, 'App\\Models\\User', 6),
(27, 'App\\Models\\User', 6),
(28, 'App\\Models\\User', 6),
(31, 'App\\Models\\User', 6),
(32, 'App\\Models\\User', 6),
(33, 'App\\Models\\User', 6),
(35, 'App\\Models\\User', 6),
(41, 'App\\Models\\User', 6),
(42, 'App\\Models\\User', 6),
(43, 'App\\Models\\User', 6),
(45, 'App\\Models\\User', 6),
(46, 'App\\Models\\User', 6),
(4, 'App\\Models\\User', 7),
(5, 'App\\Models\\User', 7),
(6, 'App\\Models\\User', 7),
(7, 'App\\Models\\User', 7),
(8, 'App\\Models\\User', 7),
(9, 'App\\Models\\User', 7),
(13, 'App\\Models\\User', 7),
(15, 'App\\Models\\User', 7),
(43, 'App\\Models\\User', 7),
(44, 'App\\Models\\User', 7),
(45, 'App\\Models\\User', 7),
(46, 'App\\Models\\User', 7),
(48, 'App\\Models\\User', 7),
(4, 'App\\Models\\User', 13),
(5, 'App\\Models\\User', 13),
(6, 'App\\Models\\User', 13),
(7, 'App\\Models\\User', 13),
(8, 'App\\Models\\User', 13),
(9, 'App\\Models\\User', 13),
(13, 'App\\Models\\User', 13),
(15, 'App\\Models\\User', 13),
(43, 'App\\Models\\User', 13),
(44, 'App\\Models\\User', 13),
(45, 'App\\Models\\User', 13),
(48, 'App\\Models\\User', 13),
(4, 'App\\Models\\User', 15),
(13, 'App\\Models\\User', 15),
(15, 'App\\Models\\User', 15),
(43, 'App\\Models\\User', 15),
(13, 'App\\Models\\User', 18),
(15, 'App\\Models\\User', 18),
(43, 'App\\Models\\User', 18);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `module_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `module_id`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'user.index', 'user', 'web', '2023-11-29 01:44:39', '2023-11-29 01:44:39'),
(2, 'user.create', 'user', 'web', '2023-11-29 01:44:39', '2023-11-29 01:44:39'),
(3, 'user.update', 'user', 'web', '2023-11-29 01:44:39', '2023-11-29 01:44:39'),
(4, 'customer-master.index', 'customer-master', 'web', '2023-11-29 01:48:37', '2023-11-29 01:48:37'),
(5, 'customer-master.create', 'customer-master', 'web', '2023-11-29 01:48:46', '2023-11-29 01:48:46'),
(6, 'customer-master.update', 'customer-master', 'web', '2023-11-29 01:48:56', '2023-11-29 01:48:56'),
(7, 'customer-deposit.index', 'customer-deposit', 'web', '2023-11-29 04:37:48', '2023-11-29 09:26:19'),
(8, 'customer-deposit.create', 'customer-deposit', 'web', '2023-11-29 04:37:54', '2023-11-29 09:26:14'),
(9, 'customer-deposit.update', 'customer-deposit', 'web', '2023-11-29 04:38:07', '2023-11-29 09:26:09'),
(10, 'product-master.index', 'product-master', 'web', '2023-11-29 05:01:53', '2023-11-29 05:01:53'),
(11, 'product-master.create', 'product-master', 'web', '2023-11-29 05:02:02', '2023-11-29 05:02:02'),
(12, 'product-master.update', 'product-master', 'web', '2023-11-29 05:02:09', '2023-11-29 05:02:09'),
(13, 'monitoring.index', 'monitoring', 'web', '2023-11-29 12:24:45', '2023-11-29 12:24:45'),
(15, 'monitoring.update', 'monitoring', 'web', '2023-11-29 12:25:03', '2023-11-29 12:25:03'),
(16, 'monitoring.destroy', 'monitoring', 'web', '2023-11-29 12:25:17', '2023-11-30 01:23:42'),
(17, 'customer-deposit.destroy', 'customer-deposit', 'web', '2023-11-29 12:25:36', '2023-11-29 12:25:36'),
(18, 'remark-brand.index', 'remark-brand', 'web', '2024-01-08 03:37:01', '2024-01-08 03:37:01'),
(19, 'remark-brand.create', 'remark-brand', 'web', '2024-01-08 05:02:29', '2024-01-08 05:02:29'),
(20, 'remark-brand.update', 'remark-brand', 'web', '2024-01-08 05:02:36', '2024-01-08 05:02:36'),
(21, 'remark-brand.destroy', 'remark-brand', 'web', '2024-01-08 05:03:20', '2024-01-08 05:03:20'),
(22, 'remark-size.index', 'remark-size', 'web', '2024-01-08 17:51:34', '2024-01-08 17:51:34'),
(23, 'remark-size.create', 'remark-size', 'web', '2024-01-08 17:51:50', '2024-01-08 17:51:50'),
(24, 'remark-size.update', 'remark-size', 'web', '2024-01-08 17:52:01', '2024-01-08 17:52:01'),
(25, 'remark-size.destroy', 'remark-size', 'web', '2024-01-08 17:52:25', '2024-01-08 17:52:25'),
(26, 'remark-pattern.index', 'remark-pattern', 'web', '2024-01-09 02:10:40', '2024-01-09 02:10:40'),
(27, 'remark-pattern.create', 'remark-pattern', 'web', '2024-01-09 02:10:54', '2024-01-09 02:10:54'),
(28, 'remark-pattern.update', 'remark-pattern', 'web', '2024-01-09 02:11:02', '2024-01-09 02:11:02'),
(29, 'remark-pattern.destroy', 'remark-pattern', 'web', '2024-01-09 02:11:11', '2024-01-09 02:11:11'),
(30, 'remark-color.index', 'remark-color', 'web', '2024-01-09 02:11:30', '2024-01-09 02:11:30'),
(31, 'remark-color.create', 'remark-color', 'web', '2024-01-09 02:11:43', '2024-01-09 02:11:43'),
(32, 'remark-color.update', 'remark-color', 'web', '2024-01-09 02:11:53', '2024-01-09 02:11:53'),
(33, 'remark-color.destroy', 'remark-color', 'web', '2024-01-09 02:12:02', '2024-01-09 02:12:02'),
(34, 'remark-defect.index', 'remark-defect', 'web', '2024-01-09 02:12:15', '2024-01-09 02:12:15'),
(35, 'remark-defect.create', 'remark-defect', 'web', '2024-01-09 02:12:23', '2024-01-09 02:12:23'),
(36, 'remark-defect.update', 'remark-defect', 'web', '2024-01-09 02:12:32', '2024-01-09 02:12:32'),
(37, 'remark-defect.destroy', 'remark-defect', 'web', '2024-01-09 02:12:43', '2024-01-09 02:12:43'),
(38, 'product-master.destroy', 'product-master', 'web', '2024-01-09 10:53:35', '2024-01-09 10:53:35'),
(39, 'product-selling-price.index', 'product-selling-price', 'web', '2024-01-10 03:41:44', '2024-01-10 03:41:44'),
(40, 'product-selling-price.create', 'product-selling-price', 'web', '2024-01-10 03:41:51', '2024-01-10 03:41:51'),
(41, 'product-selling-price.update', 'product-selling-price', 'web', '2024-01-10 03:42:01', '2024-01-10 03:42:01'),
(42, 'product-selling-price.destroy', 'product-selling-price', 'web', '2024-01-10 03:42:11', '2024-01-10 03:42:11'),
(43, 'transaction.index', 'transaction', 'web', '2024-01-11 02:29:57', '2024-01-11 02:29:57'),
(44, 'transaction.create', 'transaction', 'web', '2024-01-11 02:29:57', '2024-01-11 02:29:57'),
(45, 'transaction.update', 'transaction', 'web', '2024-01-11 02:29:57', '2024-01-11 02:29:57'),
(46, 'transaction.destroy', 'transaction', 'web', '2024-01-11 02:29:57', '2024-01-11 02:29:57'),
(47, 'customer-master.destroy', 'customer-master', 'web', '2023-11-29 01:48:56', '2023-11-29 01:48:56'),
(48, 'report.index', 'report', 'web', '2024-02-20 06:05:46', '2024-02-20 06:05:46');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `prefix_tags`
--

CREATE TABLE `prefix_tags` (
  `id` bigint UNSIGNED NOT NULL,
  `entity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prefix_tags`
--

INSERT INTO `prefix_tags` (`id`, `entity`) VALUES
(1, 'product'),
(2, 'remark_brand'),
(3, 'remark_size'),
(4, 'remark_pattern'),
(5, 'remark_color'),
(6, 'remark_defect');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('Pha8vCiMIInnZRyNwNbo12Mu7tyYQ7lcMDckAov1', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiSTN0M3hRWWh2TERHRnVna0tpR3JOSVBXYU1makVOQkZNYjdaTU85YyI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjEwNDoiaHR0cDovLzEyNy4wLjAuMTo4MjgyL2NvbnRyYWN0L2dlbmVyYXRlLWRhdGE/ZmlsdGVycz0lNUIlNUQmZ2xvYmFsRmlsdGVyPSZzaXplPTE1JnNvcnRpbmc9JTVCJTVEJnN0YXJ0PTAiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1720017110),
('u6Nv1v628KbywT4F1gAyxBMjjUXiuQ391n5Lylqi', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiaFRtaExsaDFQdUV2NzBibjZzMVJzY2hOOHRmUm9xZ2h3VEdCWTliWSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czo0ODoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2JvbnZpdm8taHEvY3VzdG9tZXItbWFzdGVyIjt9fQ==', 1720673435);

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint UNSIGNED NOT NULL,
  `team_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hosting_id` bigint UNSIGNED DEFAULT NULL,
  `timezone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Asia/Jakarta',
  `whatsapp_client_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `prefix` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'IDR',
  `status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `invoice_exp_date` tinyint NOT NULL DEFAULT '10',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `wa_qrcode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `wa_status` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'disconnect' COMMENT 'connect/disconnect',
  `wa_last_connected` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `team_no`, `name`, `slug`, `hosting_id`, `timezone`, `whatsapp_client_id`, `type`, `prefix`, `logo`, `currency`, `status`, `invoice_exp_date`, `email`, `contact`, `address`, `website`, `wa_qrcode`, `wa_status`, `wa_last_connected`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, '0001', 'Bonvivo HQ', 'bonvivo-hq', 1, 'Asia/Jakarta', 'bonvivo', 'hosting', 'BV', NULL, 'IDR', 'active', 10, 'bonvivo@gmail.com', NULL, 'Jln. Gaharu I, Cilandak - JAKARTA SELATAN · 12430', NULL, NULL, 'disconnect', NULL, '2023-12-21 02:38:06', 1, NULL, NULL, NULL, NULL),
(2, '0001001', 'Central Gunung Putri', 'central-gunung-putri', 1, 'Asia/Jakarta', 'bonvivo', 'central', '101', NULL, 'IDR', 'active', 10, 'bonvivo@gmail.com', NULL, NULL, NULL, NULL, 'disconnect', NULL, '2023-12-21 02:38:06', 1, NULL, NULL, NULL, NULL),
(3, '0001002', 'Bonvivo Puri Niaga', 'bonvivo-puri-niaga', 1, 'Asia/Jakarta', 'bonvivo', 'branch', '102', NULL, 'IDR', 'active', 10, 'bonvivo@gmail.com', NULL, NULL, NULL, NULL, 'disconnect', NULL, '2023-12-21 02:38:06', 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `user_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_department` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'adm',
  `user_status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active' COMMENT ' active/nonactive',
  `pricelevel` tinyint NOT NULL DEFAULT '1',
  `country_code_id` bigint UNSIGNED DEFAULT NULL,
  `mobile` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint UNSIGNED NOT NULL DEFAULT '1',
  `personal_team_id` bigint UNSIGNED NOT NULL DEFAULT '1',
  `superuser` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0/1',
  `last_login_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` bigint UNSIGNED DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_no`, `user_name`, `user_department`, `user_status`, `pricelevel`, `country_code_id`, `mobile`, `profile_img`, `email`, `email_verified_at`, `password`, `remember_token`, `current_team_id`, `personal_team_id`, `superuser`, `last_login_at`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, '00010001', 'WELMAN', 'adm', 'active', 5, 62, '81322224491', NULL, 'welman91ers@gmail.com', '2023-11-29 01:07:43', '$2y$10$.HR2JT63Fs.lc9Zq0RXviubvNdoxZFP1kZHs8x3AHBpmQ8wkhBs2q', NULL, 1, 1, 1, '2023-12-30 06:59:41', '2023-11-29 01:07:43', 1, '2024-02-15 15:19:12', 1, NULL, NULL),
(2, '00010002', 'Admin Bonvivo HQ', 'adm', 'active', 1, 62, '812345678', NULL, 'adminbhq1@gmail.com', NULL, '$2y$10$klGw8Lp/319pwCb9KGBtpONyfyHRVEWAvALl7dsfU4AH7XxVsRvCC', 'FKR64MXw3GxLQ31VyBWdYIlBiRfXAy7x5YHFAyesTKp7iZzQ6qlOZ4rloh29', 1, 1, 0, NULL, '2023-11-29 02:36:19', 1, '2024-05-03 04:49:01', 2, NULL, NULL),
(3, '00010003', 'Admin Central Gunung Putri', 'adm', 'active', 1, 62, '812121212212', NULL, 'admincgp1@gmail.com', NULL, '$2y$10$klGw8Lp/319pwCb9KGBtpONyfyHRVEWAvALl7dsfU4AH7XxVsRvCC', 'xEKi930PHhmm85lWg8Fj8uPpZZTRqO0swFfo0g6q46Ysjtg92hWwyq85EIsW', 2, 1, 0, NULL, '2023-11-29 04:32:47', 1, '2024-05-03 04:35:27', 3, NULL, NULL),
(4, '00010004', 'Admin Bonvivo Puri Niaga', 'adm', 'active', 1, 62, '812342222', NULL, 'adminbpn1@gmail.com', NULL, '$2y$10$klGw8Lp/319pwCb9KGBtpONyfyHRVEWAvALl7dsfU4AH7XxVsRvCC', 'pbvPiATdoqb5dXxlmjCcNSdisDVJXeVM5qdyxW5N8MPAThJqdMihI4CBYvAM', 3, 1, 0, NULL, '2023-11-29 02:36:19', 1, '2024-05-07 04:07:01', 4, NULL, NULL),
(5, '00010005', 'testuser1', 'adm', 'active', 1, 62, '809984606656', NULL, 'kujaropi@mailinator.com', NULL, '$2y$10$klGw8Lp/319pwCb9KGBtpONyfyHRVEWAvALl7dsfU4AH7XxVsRvCC', NULL, 1, 1, 0, NULL, '2024-01-18 04:19:49', 3, '2024-01-18 04:19:49', NULL, NULL, NULL),
(6, '00010006', 'testuser2', 'adm', 'active', 1, 62, '840680323385', NULL, 'pyjynilojy@mailinator.com', NULL, '$2y$10$klGw8Lp/319pwCb9KGBtpONyfyHRVEWAvALl7dsfU4AH7XxVsRvCC', NULL, 1, 1, 0, NULL, '2024-01-18 04:50:36', 3, '2024-01-18 04:50:36', NULL, NULL, NULL),
(7, '00010007', 'hoza', 'adm', 'active', 1, 62, '8111111111', NULL, 'hoza@bonvivo.co.id', NULL, '$2y$10$4BRD/mgBUuIIKwHJ1wtNzu5g3ybYonaKGBeiLZaI8P1lk3bEKv0q.', '2pyaOSHvMzVC9ZHUXG0fHN6u8IyWvxtO695XpScjHXkIDw7ib5Ya2FMzUjR9', 3, 1, 0, NULL, '2024-05-02 02:50:29', 2, '2024-05-14 07:20:52', 7, NULL, NULL),
(13, '00010008', 'Emi', 'adm', 'active', 1, 62, '8997654321', NULL, 'emi@bonvivo.co.id', NULL, '$2y$10$iFyQX1NmmvDE/AxXDcCeDuPqiZnzxj0Qoj4/S.ylTJAEQlUnoi2im', NULL, 3, 1, 0, NULL, '2024-05-02 07:09:56', 2, '2024-05-02 07:09:56', NULL, NULL, NULL),
(15, '00010009', 'Firdaus', 'adm', 'active', 1, 62, '88555552121', NULL, 'firdaus@bonvivo.co.id', NULL, '$2y$10$Ady.KYij5Wi070NraHAvwuqsYDa4fLqZsyLBY2VTByige27g3Ex..', 'K5GZWkWmLHeo7Z7BWQOXnQ5YxE8pwRPEtDTJ6SyAUmgycDUSYIcJV5FRyyWi', 2, 1, 0, NULL, '2024-05-03 04:38:05', 2, '2024-05-14 09:24:41', 15, NULL, NULL),
(18, '00010010', 'Ardi', 'adm', 'active', 1, 62, '8111111', NULL, 'ardi@bonvivo.co.id', NULL, '$2y$10$fZJb4jYSXQkMqfC6uvQ2EOGPXnFXFAz67wM48rzhylLkslLZY1fhi', NULL, 2, 1, 0, NULL, '2024-05-03 04:47:58', 1, '2024-05-03 04:47:58', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer_masters`
--
ALTER TABLE `customer_masters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `log_errors`
--
ALTER TABLE `log_errors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_team_no` (`team_no`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `unique_user_no` (`user_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer_masters`
--
ALTER TABLE `customer_masters`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `log_errors`
--
ALTER TABLE `log_errors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
