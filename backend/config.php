<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Method: POST, GET, DELETE, PUT, PATCH, OPTIONS');
  header('Access-Control-Allow-Headers: token, Content-Type');
  header('Access-Control-Max-AGE: 1728000');
  header('Content-Length: 0');
  header('Content-Type: text/plain');
  $con = mysqli_connect("localhost", "root", "","alwayshappy") or die("Could not connect DB");
?>
