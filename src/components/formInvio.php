<?php
// Recupero i valori inseriti nel form

$Nome = $_POST['Nome'];
$Cognome = $_POST['Cognome'];
$Email = $_POST['Email'];
$Servizio = $_POST['Servizio'];
$Messaggio = $_POST['Testo'];

?>

<?php

/* NON SERVE USARE QUESTO CODICE!
$headers = 'MIME-Version: 1.0\n';  
$headers .= 'Content-type: text/html; charset=iso-8859-1\n';

*/ 


// Da il mittente dell'e-mail sull'intestazione e permette di rispondere

$headers = "From: $Email\n";
$headers .= "Reply-To: $Email\n"; 

?>

<?php

// compilo un messaggio combinando i dati recuperati dal form

$testo =    "Nome:" . $Nome . "\n"
            . "Cognome:" . $Cognome . "\n"
            . "Email:" . $Email . "\n"
            . "Servizio:" . $Servizio . "\n"
            . "Messaggio:" . $Messaggio . "\n";



// uso la funzione mail di PHP per inviare questi dati al mio indirizzo di posta

mail('lorenzo-giralda@outlook.it', 'Richiesta Form contatti' , $testo, $headers);


?>