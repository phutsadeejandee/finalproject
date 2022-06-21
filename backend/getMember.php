<?php
include "Config.php";
$data = array();
$q = mysqli_query($con, "SELECT * FROM `member`");

while ($row = mysqli_fetch_opject($q)){
  $data[] = $row
}

echo json_encode($data);
echo mysqli_error($con);
?>
