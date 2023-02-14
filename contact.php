<?php
$con = mysqli_connect('WITHHELD', 'WITHHELD', 'WITHHELD','WITHHELD');

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$sql = "INSERT INTO `WITHHELD` (`c_name`, `c_email`, `c_subject`, `c_message`)
VALUES ('$name', '$email', '$subject', '$message')";

$rs = mysqli_query($con, $sql);

exec('/WITHHELD/php -f /WITHHELD/contactScript.php');
?>