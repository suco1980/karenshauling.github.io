<?php
// var_dump($_SERVER);
if($_SERVER['REQUEST_METHOD'] != 'POST'){
  header("Location: index.html");

}
 require 'PHPMailer/PHPMailer.php';
 require 'PHPMailer/Exception.php';
 use PHPMailer\PHPMailer\PHPMailer;



// if (! isset($_POST['name'])) {
//     header("location:index.html");
// }

$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if(empty(trim($name)))$name = 'anonymous';
if(empty(trim($company)))$company = '';

// var_dump($name);

$body = " 

  <h1>CONTACT PAGE</h1>
  <P>$name <br> $company <br>$email <br> $phone</P>
  <h2>Message</h2>
  $message
 ";

 $mailer = new PHPMailer();
 $mailer->setFrom($email,"$name");
 $mailer->addaddress('renewinteriors@karenshauling.com');
 $mailer->Subject = "Contact Form.";
 $mailer->msgHTML($body);
 $mailer->$AlBody = strip_tags($body);
 $rta = $mailer->send();
//  var_dump($rta);
