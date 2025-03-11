
let nombreSecret;
let essaisRestants = 5;

function startGame() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("game").style.display = "block";
    nombreSecret = Math.floor(Math.random() * 100) + 1;
}

function gameOver() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("gameOver").style.display = "block";
}

function verifierNombre() {
    let proposition = parseInt(document.getElementById("guessInput").value);

    if (isNaN(proposition) || proposition < 1 || proposition > 100) {
        alert("Veuillez entrer un nombre valide entre 1 et 100.");
        return;
    }

    essaisRestants--;

    if (proposition === nombreSecret) {
        alert("Félicitations ! Vous avez trouvé le bon nombre !");
        location.reload(); // Recharge la page pour recommencer le jeu
    } else {
        if (essaisRestants > 0) {
            alert(`Ce n'est pas le bon nombre. Il vous reste ${essaisRestants} tentatives.`);
        } else {
            gameOver();
        }
    }
}
