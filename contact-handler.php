<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['email'];
  $website = $_POST['website'];
  $message = $_POST['message'];

  $mailTo = "email@farzadgo.xyz";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.html?mailsent");
}

?>
