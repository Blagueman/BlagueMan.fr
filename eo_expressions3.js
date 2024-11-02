





// expression 



// Récupération des éléments HTML
const expressionTexte = document.getElementById('expression-text');
const BTNsuivant = document.getElementById('suivant-btn');
const confettis = document.getElementById('confetti-canvas');

// Initialisation des variables
let indexExp = 0;
let exp = [];

// Récupération des données d'expression depuis le fichier JSON
fetch('eo_expressions3.json')
    .then(response => response.json())
    .then(data => {
        exp = data.expressions; // Assurez-vous que le JSON a bien une clé 'expressions'
        afficherexpression(); // Afficher la première expression
    })
    .catch(error => console.error("Erreur lors du chargement du fichier JSON:", error));

// Fonction pour afficher l'expression
function afficherexpression() {
    indexExp = Math.floor(Math.random() * exp.length); // Générer un index aléatoire
    expressionTexte.textContent = exp[indexExp].expression; // Afficher l'expression
}

// Écouteur d'événement pour le bouton "Suivant"
BTNsuivant.addEventListener('click', () => {
    afficherexpression();

    // Déclenchement des confettis
    const myConfetti1 = confetti.create(confettis, {
        resize: true,
        useWorker: true
    });
    myConfetti1({
        particleCount: 160,
        spread: 160
    });
});




