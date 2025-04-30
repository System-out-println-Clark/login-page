<?php

$email = $_POST['email'];
$password = $_POST['password'];
$sqlconnect = mysqli_connect("localhost", "root", "");
$loginkey = mysqli_select_db($sqlconnect, "loginkey");

$select = "SELECT * FROM logininfo WHERE Email = '$email' AND Password = '$password'";

$result_out = mysqli_query($sqlconnect, $select);
while ($row = mysqli_fetch_array($result_out)) {
    $emaildb = $row['Email'];
    $passworddb = $row['Password']; 
    if ($email == $emaildb && $password == $passworddb) {
        header("Location: Structure.html");
    }
    }
     if ($email != $emaildb || $password != $passworddb) {
        echo "<script>alert('Invalid email or password');</script>";
        echo "<script>window.location.href='login.html';</script>";
        exit;
    }
    
?>