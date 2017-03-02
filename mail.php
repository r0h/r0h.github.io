<?php

$recepient = "davaypotom@ukr.net";
$sitename = "TheForms";

$name = trim($_GET["name"]);
$mail = trim($_GET["mail"]);
$text = trim($_GET["text"]);

$pagetitle = "Новое сообщение с сайта \"$sitename\"";
$message = "Имя: $name \nМэил: $mail \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");