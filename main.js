const url = 'https://blockchain.info/ticker' // Besoin d'une URL pour récupérer du JSON 
function recupererPrix () {
// Créer une requête 
let requete = new XMLHttpRequest () // crée un objet 
requete.open ('GET', url) // ouvrir la requête 2 paramètre : 1er Get ou Post 2nd param = Url de l'api 
requete.responseType = 'json'              // Préciser le retour attendu
requete.send() // Envoi de la requête 

// Lorsque l'on recoit une réponse cette fonction est exécutée : 
  requete.onload =  function () {
    if (requete.readyState /*Etat actuel de la requête*/ === XMLHttpRequest.DONE) { //Vérifie l'état de la requête (valeur et type)
      if (requete.status === 200) {
        let reponse = requete.response // Stock la réponse 
        let prixEnEuros = reponse.EUR.last // Récupère le dernier prix en EURO
        document.querySelector ('#price_label').textContent = prixEnEuros // Affiche le prix dans mon HTML
        // Créer un interval qui toutes les 5sc réactualise le prix du btc 
        
        }
      else {
        alert ('Un problème est survenu, merci de revenir plus tard')
      }
    }
  }
  console.log ('prix')
}

setInterval(recupererPrix, 2000)