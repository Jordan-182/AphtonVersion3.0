<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Fonction pour nettoyer les données utilisateur
    function clean_input($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }

    // Récupération et nettoyage des données
    $firstName = clean_input($_POST['FirstName']);
    $lastName = clean_input($_POST['LastName']);
    $email = clean_input($_POST['E-mail']);
    $phone = clean_input($_POST['phone']);
    $message = clean_input($_POST['Message']);

    // Validation des champs requis
    if (empty($firstName) || empty($lastName) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        die("Erreur : Tous les champs requis doivent être correctement remplis.");
    }

    // Adresse email sécurisée (non visible côté client)
    $to = "aphton@hotmail.fr";  // Remplace par ton adresse email
    $subject = "Nouveau message de $firstName $lastName";
    $body = "Prénom : $firstName\nNom : $lastName\nEmail : $email\nTéléphone : $phone\n\nMessage :\n$message";
    $headers = "From: contact@harmonieinterieure.fr";

    // Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
} else {
    echo "Méthode de requête non autorisée.";
}
?>
