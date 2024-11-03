// Récupération des éléments HTML
const blagueTexte = document.getElementById('blague-text');
const blaguesReponses = document.getElementById('blague-reponse');
const suivantBtn = document.getElementById('suivant-btn');

// Initialisation des variables
let indexBlague = 0;
let blagues = [];

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Récupération des données de blague depuis le fichier JSON
fetch('bb_blagues2.json')
    .then(response => response.json())
    .then(data => {
        blagues = data.blagues;
        shuffleArray(blagues); // Mélange les blagues au chargement
        afficherBlague();      // Affiche la première blague
    })
    .catch(error => console.error(error));

// Fonction pour afficher la blague actuelle
function afficherBlague() {
    blagueTexte.textContent = blagues[indexBlague].blague;
    blaguesReponses.textContent = blagues[indexBlague].reponse;
}

// Écouteur d'événement pour le bouton "Suivant"
suivantBtn.addEventListener('click', () => {
    // Affiche la réponse
    blaguesReponses.style.display = "block";
    
    // Passe à la blague suivante
    indexBlague++;

    // Si toutes les blagues ont été affichées, remélange et recommence
    if (indexBlague >= blagues.length) {
        shuffleArray(blagues);
        indexBlague = 0;
    }

    // Affiche la blague suivante
    afficherBlague();
});



