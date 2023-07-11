document.getElementById('monFormulaire').addEventListener('submit', function(event) 
{
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    // Réinitialiser les messages d'erreur
    effacerErreur();
  
    // Validation du prénom
    let prenomInput = document.getElementById('prenom');
    let prenomErreur = document.getElementById('prenomErreur');
    if (prenomInput.value.trim() === '') 
    {
      montrerErreur(prenomErreur, 'Vous devez entrer votre prénom');
    } else if (!estAlphabetique(prenomInput.value)) 
    {
      montrerErreur(prenomErreur, 'Seuls les caractères alphabétiques sont autorisés');
    }
  
    // Validation du nom
    let nomInput = document.getElementById('nom');
    let nomErreur = document.getElementById('nomErreur');
    if (nomInput.value.trim() === '')
    {
      montrerErreur(nomErreur, 'Vous devez entrer votre nom');
    } else if (!estAlphabetique(nomInput.value)) 
    {
      montrerErreur(nomErreur, 'Seuls les caractères alphabétiques sont autorisés');
    }
  
    // Validation de l'email
    let emailInput = document.getElementById('email');
    let emailErreur = document.getElementById('emailErreur');
    if (emailInput.value.trim() === '') 
    {
      montrerErreur(emailErreur, 'Vous devez entrer votre adresse email');
    } else if (!emailValide(emailInput.value)) 
    {
      montrerErreur(emailErreur, 'Email invalide');
    }
  
    // Validation du mot de passe
    let mdpInput = document.getElementById('mdp');
    let mdpErreur = document.getElementById('mdpErreur');
    if (mdpInput.value.trim() === '') 
    {
      montrerErreur(mdpErreur, 'Vous devez entrer votre mot de passe');
    } else if (!validationMDP(mdpInput.value)) 
    {
      montrerErreur(mdpErreur, 'Mot de passe invalide');
    }
  
    // Validation générale du formulaire
    let ErreurGeneral = document.getElementById('ErreurGeneral');
    if (contientErreur()) 
    {
      montrerErreur(ErreurGeneral, 'Veuillez corriger les erreurs dans le formulaire');
    } else 
    {
      // Le formulaire est valide
      alert('Formulaire soumis avec succès !');
      // Réinitialisation du formulaire
      effacerFormulaire();
    }
  });
  
  //Afficher le message d'erreur correspondant
  function montrerErreur(element, message) 
  {
    element.textContent = message;
  }
  //Effacer les messages d'erreurs
  function effacerErreur() 
  {
    let erreurElements = document.getElementsByClassName('error');
    for (let i = 0; i < erreurElements.length; i++) 
    {
      erreurElements[i].textContent = '';
    }
  }
  //S'assurer que les entrées dans les champ nom et prenom sois bien des Lettre
  function estAlphabetique(value) 
  {
    return /^[A-Za-z]+$/.test(value);
  }
  //S'assurer que se sois bien un email qui est entrée
  function emailValide(value) 
  {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  //S'assurer que le mot de passe est securitaire(1 maj,1 min,1 chiffre,1 char special et min 8 char)
  function validationMDP(value) 
  {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
  }
  //Vérifie si le formulaire contient une erreur
  function contientErreur() 
  {
    let erreurElements = document.getElementsByClassName('error');
    for (let i = 0; i < erreurElements.length; i++) 
    {
      if (erreurElements[i].textContent !== '') 
      {
        return true;
      }
    }
    return false;
  }
  //Efface les données entrées dans le formulaire
  function effacerFormulaire() 
  {
    document.getElementById('monFormulaire').reset();
    effacerErreur();
  }
  