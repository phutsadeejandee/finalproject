<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode(input,true);
$message = array();
$username = $data['username'];
$password = $data['password'];
$fname = $data['fname'];
$lname = $data['lname'];
$mail = $data['mail'];
$tel = $data['tel'];

$q = mysqli_query($con, "INSERT INTO `member` (`id`, `username`, `password`, `fname`, `lname`, `mail`, `tel`) VALUES (NULL, '$username',' $password', '$fname', '$lname', '$mail', '$tel')")

if($q) {
  http_response_code(201);
  $message['status'] = "Success";
}else{
  http_response_code(422);
  $message['status'] = "ERROR";
}

echo json_encode($message);
echo mysqli_error($con);
