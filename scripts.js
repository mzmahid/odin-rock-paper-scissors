function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getHumanChoice() {
    let move = prompt("What is your next move? ");
    if(!move) {
        return "canceled";
    }
    else {
        return move.toUpperCase();
    }
}

function showMoves(humanMove, computerMove) {
    console.log(`Your picked      = ${humanMove}`);
    console.log(`Computer picked  = ${computerMove}`)
}

function showScore(humanScore, computerScore) {
    console.log(`Your score      = ${humanScore}`);
    console.log(`Computer Score  = ${computerScore}`)
}

function getWinner(humanMove, computerMove) {
    switch(humanMove){
        case "ROCK":
            if(computerMove === "PAPER") return "computer";
            else return "player";
        case "PAPER":
            if(computerMove === "ROCK") return "player";
            else return "computer";
        case "SCISSORS":
            if(computerMove === "PAPER") return "player";
            else return "computer";
        default:
            return null;
    }
}

function playRound() {
    let humanMove = getHumanChoice();
    if(humanMove === "canceled") {
        console.log("Invalid user input");
        return;
    }
    let computerMove = getComputerChoice();
    showMoves(humanMove, computerMove);

    if(humanMove === computerMove) {
        console.log(`It's a draw, both picked ${humanMove}`);
        showScore(humanScore, computerScore);
        return;
    }

    let winner = getWinner(humanMove, computerMove);
    if(!winner){
        console.log("Invalid user input");
        return;
    }
    else if(winner === "player") {
        console.log(`You win, ${humanMove} beats ${computerMove}`);
        humanScore++;
    }
    else {
        console.log(`You lose, ${computerMove} beats ${humanMove}`);
        computerScore++;
    }
    showScore(humanScore, computerScore);
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for(let i = 0 ; i < 5 ; i++) {
        playRound();
    }
    let finalWinner = "";
    let isDraw = false;
    if(humanScore === computerScore)
        isDraw = true;
    else if(humanScore > computerScore) 
        finalWinner = "You";
    else 
        finalWinner = "Computer";
    
    if(!isDraw)
        console.log(`Final winner is ${finalWinner}`);
    else 
        console.log("It's a draw, No one wins");
}

playGame();