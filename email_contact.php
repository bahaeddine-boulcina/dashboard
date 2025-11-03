<?php

$allowedOrigins = [
  'https://idealwin.dz',
  'https://www.idealwin.dz',
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
  header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
} else {
  header('Access-Control-Allow-Origin: null');
}
header('Access-Control-Allow-Methods: POST, OPTIONS'); // Allow POST and OPTIONS methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow Content-Type header
header('Content-Type: application/json; charset=UTF-8');

// If the request method is OPTIONS, terminate the script early.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'vendor/autoload.php'; // Include PHPMailer via Composer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// SMTP settings
$smtpHost = 'whm0.icosnethosting.com'; // Replace with your SMTP host
$recipientEmail = 'contact@idealwin.dz'; // Replace with the recipient's email

try {
    // Get and decode the JSON input
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        throw new Exception('Invalid JSON payload');
    }

    // Get and sanitize input data
    $name = htmlspecialchars($input['name'] ?? '', ENT_QUOTES, 'UTF-8');
    $firstname = htmlspecialchars($input['firstname'] ?? '', ENT_QUOTES, 'UTF-8');
    $email = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars($input['phone'] ?? '', ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($input['message'] ?? '', ENT_QUOTES, 'UTF-8');

    if (!$name || !$firstname || !$email || !$phone || !$message) {
        throw new Exception('Incomplete form submission');
    }

    // Prepare email
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = false;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';

    $mail->setFrom($email, 'Contact de ' . $name . ' ' . $firstname);
    $mail->addAddress($recipientEmail);
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'Contact mail ' . date('Ymd_His');
    $mail->isHTML(true);

    $mail->Body = '
    <html>
      <body>
        <h3>Demande de Devis</h3>
        <table border="1" cellpadding="5">
          <tr><th>Nom</th><td>' . $name . '</td></tr>
          <tr><th>Prénom</th><td>' . $firstname . '</td></tr>
          <tr><th>Email</th><td>' . $email . '</td></tr>
          <tr><th>Téléphone</th><td>' . $phone . '</td></tr>
          <tr><th>Message</th><td>' . $message . '</td></tr>
        </table>
      </body>
    </html>';

    // Send email
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} catch (Exception $e) {
    http_response_code(400); // Bad request
    echo json_encode(['success' => false, 'message' => 'Failed to send message: ' . $e->getMessage()]);
}
?>