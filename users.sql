-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:8889
-- Время создания: Ноя 20 2025 г., 15:28
-- Версия сервера: 8.0.40
-- Версия PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `space_project`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL,
  `results` json NOT NULL DEFAULT (_utf8mb4'{"sun":0,"mars":0,"earth":0,"venus":0,"saturn":0,"uranus":0,"jupiter":0,"mercury":0,"neptune":0}')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `results`) VALUES
(1, '123', '$2y$10$PyswhaRH/ZBScoX9Ty7rHukvMNpjBsLuzSQ3Tc.Ll4NWJfeB7eykO', 'student', '{\"sun\": 0, \"mars\": 0, \"earth\": 0, \"venus\": 0, \"saturn\": 0, \"uranus\": 0, \"jupiter\": 0, \"mercury\": 0, \"neptune\": 0}'),
(2, 'tanya', '$2y$10$KRUjlXKuGUNAAtgo5B48seJcAB2XEFBGq9nO0hwh7VYShUSQLkObm', 'student', '{\"sun\": 2, \"mars\": 0, \"earth\": 5, \"venus\": 0, \"saturn\": 4, \"uranus\": 0, \"jupiter\": 3, \"mercury\": 0, \"neptune\": 0}'),
(3, 'bigbob', '$2y$10$NkPXCh6jQOMHFT0UCF4dO.q009sLqQ3iPq1UCVwnkumYxk0oLyhrW', 'teacher', '{\"sun\": 0, \"mars\": 0, \"earth\": 0, \"venus\": 0, \"saturn\": 0, \"uranus\": 0, \"jupiter\": 0, \"mercury\": 0, \"neptune\": 0}'),
(5, 'test4', '$2y$10$1538IlkWlVJlFW0zBntAHeA5kYCKmUNB6PNcU7RtJ9pydUjA1DJGW', 'student', '{\"sun\": 0, \"mars\": 0, \"earth\": 0, \"venus\": 0, \"saturn\": 0, \"uranus\": 0, \"jupiter\": 0, \"mercury\": 0, \"neptune\": 0}'),
(6, 'qwerty', '$2y$10$64NALqgFTj0pHDIlh2cd0.d4vN0cdTVZo2UlOIIImDQdfv8EHm192', 'teacher', '{\"sun\": 0, \"mars\": 0, \"earth\": 0, \"venus\": 0, \"saturn\": 0, \"uranus\": 0, \"jupiter\": 0, \"mercury\": 0, \"neptune\": 0}'),
(7, 'yara', '$2y$10$GENEqr4sd28oQi6en3yeUeiSvErw5.lK0g9Vm8FyWzkWSclGM0g2C', 'student', '{\"sun\": 0, \"mars\": 0, \"earth\": 0, \"venus\": 0, \"saturn\": 0, \"uranus\": 0, \"jupiter\": 0, \"mercury\": 0, \"neptune\": 0}');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
