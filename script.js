// Etape 1 - Sélectionner nos éléments
let formulaire = document.querySelector('#formulaire');
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let instructions = document.querySelector('#instructions');
let button = document.querySelector('button');

// Etape 2 - Cacher l'erreur
error.classList.add('d-none');

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.round(Math.random() * 1000);
nombreAleatoire = parseInt(nombreAleatoire);
console.log(nombreAleatoire);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {

    instruction = document.createElement('div');

    if (nombre < nombreAleatoire) {                             // Le nombre est plus petit
        instruction.textContent = `(${coups}) C'est plus !`;
        instruction.className = "instruction plus";
    } else if (nombre > nombreAleatoire) {                      // Le nombre est plus grand
        instruction.textContent = `(${coups}) C'est moins !`;
        instruction.className = "instruction moins";

    } else {                                                    // Le nombre est bon
        instruction.textContent = `${nombre} est le juste prix et vous avez trouvé en ${coups} coups, bravo !`;
        instruction.className = "instruction fini";
        input.disabled = true;

        // On affiche le bouton pour recommencer
        button.textContent = `Recommencer`;
        button.addEventListener('click', () => {
            location.reload();
        })
    }

    instructions.prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.classList.remove('d-none');
    } else {
        error.classList.add('d-none');
    }
})

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == "") {
        input.style.border = "red solid 1px";
    } else {
        coups++;
        input.style.border = "silver solid 1px";
        nombreChoisi = input.value;
        verifier(nombreChoisi);
        input.value = '';
    }

})

