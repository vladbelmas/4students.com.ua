<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$name = $_POST['name'];
$phone = $_POST['phone'];
//$email = $_POST['work_email'];
$work_type = $_POST['work_type'];
$work_theme = $_POST['work-subject'];
//$subject = $_POST['subject'];
$date = $_POST['deadline'];
//$unic = $_POST['unicum'];
//$pages = $_POST['pages'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'uashared15.twinservers.net';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'admin@4students.com.ua'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'gPT4Q3ESvtwqC8w'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom('admin@4students.com.ua'); // от кого будет уходить письмо?
$mail->addAddress('4studentsgroup@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments

?>