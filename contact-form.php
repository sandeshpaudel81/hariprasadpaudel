<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'sandeshpaudel81@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "harichssp@gmail.com";
    
    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
    
?>