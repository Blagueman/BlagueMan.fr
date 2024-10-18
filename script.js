// Récupération des éléments HTML
const blagueTexte = document.getElementById('blague-text');
const blaguesReponses = document.getElementById('blague-reponse');
const suivantBtn = document.getElementById('suivant-btn');
const canvas = document.querySelector('#confetti-canvas');

// Initialisation des variables
let indexBlague = 0;
let blagues = [];

// Récupération des données de blague depuis le fichier JSON
fetch('blagues.json')
    .then(response => response.json())
    .then(data => {
        blagues = data.blagues;
        afficherBlague();
    })
    .catch(error => console.error(error));

// Fonction pour afficher la blague
function afficherBlague() {
    blagueTexte.textContent = blagues[indexBlague].blague;
    blaguesReponses.textContent = blagues[indexBlague].reponse;
    // Générer un index aléatoire entre 0 et la longueur des blagues - 1
    indexBlague = Math.floor(Math.random() * blagues.length);
    blagueTexte.textContent = blagues[indexBlague].blague;
    blaguesReponses.textContent = blagues[indexBlague].reponse;
}

// Écouteur d'événement pour le bouton "Suivant"
suivantBtn.addEventListener('click', () => {
    // Incrémenter l'index de blague
    indexBlague++;

    // Si on arrive à la fin des blagues, revenir au début
    if (indexBlague >= blagues.length) {
        indexBlague = 0;
    }

    // Afficher la blague suivante
    afficherBlague();
    var myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true
      });
    myConfetti({
        particleCount: 160,
        spread: 160
      });
      blaguesReponses.style.animation = "200ms linear ReponseQnnim";
});

setTimeout(function() {
    document.getElementById("blague-reponse").classList.remove("joke-reponse");
  }, 3000);



// expression 



// Récupération des éléments HTML
const expressionTexte = document.getElementById('expression-text');
const BTNsuivant = document.getElementById('suivant-btn1');
const confettis = document.querySelector('#confetti-canvas1');

// Initialisation des variables
let indexExp = 0;
let exp = [];

// Récupération des données d'expression depuis le fichier JSON
// fetch('expressions.json')
//     .then(response => response.json())
//     .then(data => {
//         expression = data.expression;
//         afficherexpression();
//     })
//     .catch(error => console.error(error));

fetch('expressions.json')
  .then(data => {
    const expression = data.expression; // Récupérer la propriété "blague"
    afficherexpression(exp); // Appeler la fonction d'affichage de la blague avec la blague récupérée
  })
  .catch(error => console.error(error));


// Fonction pour afficher l'expression
function afficherexpression() {
    expressionTexte.textContent = exp[indexExp].expression;
    // Générer un index aléatoire entre 0 et la longueur des expressions - 1
    indexExp = Math.floor(Math.random() * exp.length);
    expressionTexte.textContent = exp[indexExp].expression;
}

// Écouteur d'événement pour le bouton "Suivant"
BTNsuivant.addEventListener('click', () => {
    // Incrémenter l'index d'expression
    indexExp++;

    // Si on arrive à la fin des expressions, revenir au début
    if (indexExp >= exp.length) {
        indexExp = 0;
    }

    // Afficher l'expression suivante
    afficherexpression();
    var myConfetti1 = confetti.create(canvas, {
        resize: true,
        useWorker: true
      });
    myConfetti1({
        particleCount: 160,
        spread: 160
      });
    //   Reponses.style.animation = "200ms linear ReponseQnnim";
});

// setTimeout(function() {
//     document.getElementById("blague-reponse").classList.remove("joke-reponse");
//   }, 3000);



