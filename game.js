function computerPlay() {
    const weapon = ["rock", "paper", "scissors"];
    return weapon[Math.floor(Math.random() * weapon.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    const tie = "It's a tie! ";
    const win = "You win! ";
    const lose = "You lose! ";
    const declaration = ["Rock beats scissors.", "Paper beats rock.", "Scissors beat paper."];
    if (playerSelection === computerSelection) {
        return tie;
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return lose + declaration[1];
        } else {
            return win + declaration[0];
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return win + declaration[1];
        } else {
            return lose + declaration[2];
        }
    } else {
        if (computerSelection == "rock") {
            return lose + declaration[0];
        } else {
            return win + declaration[2];
        }
    }
}

const playerSelection = prompt("choose your weapon", "");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))