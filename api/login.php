<?php
session_start();
require 'db.php';

$payload = json_decode(file_get_contents('php://input'), true);
$username = trim($payload['username'] ?? '');
$password = $payload['password'] ?? '';
$role = $payload['role'] ?? ''; // проверяем роль

if (!$username || !$password || !$role) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing username, password or role']);
    exit;
}

// Находим пользователя с заданной ролью
$stmt = $pdo->prepare('SELECT id, username, password, role FROM users WHERE username = ? AND role = ? LIMIT 1');
$stmt->execute([$username, $role]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user || !password_verify($password, $user['password'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid credentials or role']);
    exit;
}

// Устанавливаем сессию
$_SESSION['user_id'] = $user['id'];
$_SESSION['username'] = $user['username'];
$_SESSION['role'] = $user['role'];

echo json_encode([
    'success' => true,
    'username' => $user['username'],
    'role' => $user['role']
]);
