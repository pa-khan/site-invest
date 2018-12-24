<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['intresting'])) {$intresting = $_POST['intresting'];}
if (isset($_POST['form_name'])) {$form_name = $_POST['form_name'];}

$message;

if ($name) {
	$message .= "\nИмя: $name";
}
if ($phone) {
	$message .= "\nТелефон: $phone";
}
if ($intresting) {
	$message .= "\nИнтересует: $intresting";
}
if ($form_name) {
	$message .= "\nНазвание формы: $form_name";
}

$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новая заявка с сайта";

$to = "e5ash.bro@gmail.com";
$send = mail($to, $subject, $message, $headers);

$to = "fabrica.pro@gmail.com";
$send = mail($to, $subject, $message, $headers);
?>