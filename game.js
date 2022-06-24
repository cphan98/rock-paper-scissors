function computerPlay() {
    const weapon = ["rock", "paper", "scissors"];
    return weapon[Math.floor(Math.random() * weapon.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    const tie = "It's a tie! ";
    const win = "You win! ";
    const lose = "You lose! ";
    const declaration = ["Rock beats scissors.", "Paper beats rock.", "Scissors beat paper."];
    if (playerSelection == computerSelection) {
        console.log(tie);
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log(lose + declaration[1]);
            return lose;
        } else {
            console.log(win + declaration[0]);
            return win;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log(win + declaration[1]);
            return win;
        } else {
            console.log(lose + declaration[2]);
            return lose;
        }
    } else {
        if (computerSelection == "rock") {
            console.log(lose + declaration[0]);
            return lose;
        } else {
            console.log(win + declaration[2]);
            return win;
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your weapon.", "");
        playerSelection.toLowerCase();
        result = playRound(playerSelection, computerSelection);
        if (result == "You win! ") {
            console.log(`You ${++playerScore} - Computer ${computerScore}`);
        } else if (result == "You lose! ") {
            console.log(`You ${playerScore} - Computer ${++computerScore}`);
        } else {
            console.log(`You ${playerScore} - Computer ${computerScore}`);
        }
    }
    if (playerScore > computerScore) {
        console.log("YAY! You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose. Try again!");
    } else {
        console.log("It's a tie!");
    }
}

game();