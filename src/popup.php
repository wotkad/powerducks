<?php
$to      = 'mail@mail.ru';
$subject = 'Заявка с сайта';
$message = 'Заявка.  Имя: ' . $_POST["name-popup"] . ', Телефон: ' . $_POST["phone-popup"] . ', Почта: ' . $_POST["email-popup"] . ', Текст: ' . $_POST["text-popup"];
$headers = 'From: mail@mail.ru' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: mail@mail.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>

