const body = document.querySelector("body");
const gameWindow = document.querySelector(".gameWindow");
const roundInfo = document.querySelector("#roundInfo");
const hMove = document.querySelector("#hMove");
const cMove = document.querySelector("#cMove");
const hScore = document.querySelector("#hScore");
const cScore = document.querySelector("#cScore");
const btns = document.querySelector(".btns");
const roundRes = document.querySelector("#roundRes");
const winner = document.querySelector("#winner");
const winnerTxt = document.querySelector(".winnerTxt");

let roundPlayed = 1;
totalRounds = 5;
let canPlay = true;
let humanScore = 0;
let computerScore = 0;

function createResetBtn () {
    let newGameBtn = document.createElement("button");
    newGameBtn.innerText = "Play again";
    newGameBtn.classList.add("newGameBtn");
    newGameBtn.addEventListener("click", resetGame);
    winnerTxt.appendChild(newGameBtn);
}

function resetGame() {
    hMove.innerText = "";
    cMove.innerText = "";
    roundRes.innerText = "Waiting for you first move";
    hScore.innerText = 0;
    cScore.innerText = 0;
    humanScore = 0;
    computerScore = 0;
    roundPlayed = 1;
    roundInfo.innerText = "Round " + roundPlayed + "/" + totalRounds;
    winnerTxt.innerText = "";
    canPlay = true;
}

btns.addEventListener("click", (e) => {
    let humanMove = e.target.innerText.toUpperCase();
    if(canPlay){
        playRound(humanMove);
    }
    if(roundPlayed > totalRounds) {
        canPlay = false;
        checkStatus(roundPlayed, humanScore, computerScore);
    }

})

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

function showMoves(humanMove, computerMove) {
    hMove.innerText = humanMove;
    cMove.innerText = computerMove;
}

function showScore(humanScore, computerScore) {
        hScore.innerText = humanScore;
        cScore.innerText = computerScore;
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

function playRound(humanMove) {
    roundPlayed++;
    roundInfo.innerText = "Round " + roundPlayed + "/5";
    let computerMove = getComputerChoice();
    showMoves(humanMove, computerMove);

    if(humanMove === computerMove) {
        roundRes.innerText = "It's a draw";
        showScore(humanScore, computerScore);
        return;
    }

    let winner = getWinner(humanMove, computerMove);

    if(winner === "player") {
        roundRes.innerText = `You win, ${humanMove} beats ${computerMove}`
        humanScore++;
    }
    else {
        roundRes.innerText = `You lose, ${humanMove} beats ${computerMove}`
        computerScore++;
    }
    showScore(humanScore, computerScore);
}

function checkStatus(roundPlayed, humanScore, computerScore) {
    let winnerName = "";
    let isDraw = false;
    if(humanScore === computerScore)
        isDraw = true;
    else if(humanScore > computerScore) 
        winnerName = "You";
    else 
        winnerName = "Billy";
    
    if(!isDraw)
        winnerTxt.innerText = "Winner is " + winnerName;
    else 
        winnerTxt.innerText = "It's a draw, No one wins";

    roundInfo.innerText = "Game Over";
    createResetBtn();
}
