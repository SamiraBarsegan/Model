<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $mobile = trim($_POST["mobile"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Проверяем данные на валидность
    if (empty($name) || empty($email) || empty($mobile) || empty($subject) || empty($message)) {
        echo "Ошибка: заполните все поля.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Ошибка: неправильный формат email.";
        exit;
    }

    // Настройки для отправки email
    $to = "samirabarsegansamira@gmail.com"; // Замените на свой email
    $email_subject = "Сообщение от $name: $subject";
    $email_message = "Имя: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Номер телефона: $mobile\n";
    $email_message .= "Тема: $subject\n\n";
    $email_message .= "Сообщение:\n$message";

    $headers = "From: $email";

    // Отправляем email
    if (mail($to, $email_subject, $email_message, $headers)) {
        // Если сообщение успешно отправлено, перенаправляем на главную страницу
        header("Location: index.html"); // Замените "index.php" на вашу главную страницу
        exit;
    } else {
        echo "Ошибка: не удалось отправить сообщение.";
    }
}
?>
