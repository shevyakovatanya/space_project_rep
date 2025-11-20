<?php
require 'db.php';

$stmt = $pdo->query('SELECT id, name, description, image, background, questions FROM planets ORDER BY id');
$planets = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($planets);
