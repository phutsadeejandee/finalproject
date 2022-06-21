<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$username = $data['username'];
$password = $data['password'];
$fname = $data['fname'];
$lname = $data['lname'];
$mail = $data['mail'];
$tel = $data['tel'];
$id = $_GET['id'];

$q = mysqli_query($con, "UPDATE `member` SET (`id`, `username`, `password`, `fname`, `lname`, `mail`, `tel`) VALUES (NULL, '$username',' $password', '$fname', '$lname', '$mail', '$tel') WHERE `id` = '{$id}' LIMIT 1");

if($q) {
  http_response_code(201);
  $message['status'] = "Success";
}else{
  http_response_code(422);
  $message['status'] = "ERROR";
}

echo json_encode($message);
echo mysqli_error($con);
