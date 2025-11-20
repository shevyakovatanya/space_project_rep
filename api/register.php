<?php
session_start();
require 'db.php';

$payload = json_decode(file_get_contents('php://input'), true);
$username = trim($payload['username'] ?? '');
$password = $payload['password'] ?? '';
$role = $payload['role'] ?? '';

if (!$username || !$password || !$role) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing username, password or role']);
    exit;
}

// Проверяем уникальность
$stmt = $pdo->prepare('SELECT id FROM users WHERE username = ?');
$stmt->execute([$username]);
if ($stmt->fetch()) {
    http_response_code(409);
    echo json_encode(['error' => 'Username already exists']);
    exit;
}

// Хешируем пароль и вставляем пользователя
$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)');
$stmt->execute([$username, $hash, $role]);

echo json_encode(['success' => true]);
