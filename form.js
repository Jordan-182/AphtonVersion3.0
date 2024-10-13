document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche le rechargement de la page
  
    // Requête reCAPTCHA v3
    grecaptcha.ready(function() {
      grecaptcha.execute('CLE CAPTCHA CLIENT A CHANGER', {action: 'submit'}).then(function(token) {
        // Ajoute le token reCAPTCHA au formulaire
        const formData = new FormData(document.getElementById('contactForm'));
        formData.append('g-recaptcha-response', token);
  
        // Envoie la requête AJAX au serveur
        fetch('contact.php', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            document.getElementById('contactForm').reset();  // Réinitialise les champs
            document.getElementById('formMessage').innerText = 'Votre message a été envoyé avec succès !';
          } else {
            document.getElementById('formMessage').innerText = 'Échec de l’envoi. Veuillez réessayer.';
          }
        })
        .catch(error => {
          document.getElementById('formMessage').innerText = 'Erreur : ' + error;
        });
      });
    });
  });
  