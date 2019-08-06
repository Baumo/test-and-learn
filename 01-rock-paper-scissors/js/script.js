//variables
let playerSelection;
let maxRounds = 3;
let playedRounds = 0;
let playerScore = 0;
let computerScore = 0;
let winnerMessage;

//selectors
let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let btnRestart = document.querySelector('#restart');
let btns = document.querySelectorAll('input[type=button]');
let txtMessage = document.querySelector('#message');
let txtPScore = document.querySelector('#pscore');
let txtCScore = document.querySelector('#cscore');

//event handler
btnRock.addEventListener('click', function() { playRound("rock") });
btnPaper.addEventListener('click', function() { playRound("paper") });
btnScissors.addEventListener('click', function() { playRound("scissors") });
btnRestart.addEventListener('click', restartGame);

function computerPlay(){
    let selection = Math.floor(Math.random() * 3);
    console.log(selection);
    switch(selection){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection){
    if (playedRounds >= maxRounds) {
        if (playerScore == computerScore) {
            winnerMessage = "Draw!";
        } else if (playerScore > computerScore) {
            winnerMessage = "You Win!";
        } else {
            winnerMessage= "You Lose!";
        }
        txtMessage.textContent= winnerMessage;
        toggleButtons();
    } else {
        let computerSelection = computerPlay();
        if (playerSelection == computerSelection) {
            txtMessage.textContent = "Draw!";
            playedRounds--;
        } else {
            switch(playerSelection){
                case "rock":
                    if (computerSelection == "scissors") { 
                        txtMessage.textContent = "You Win! Rock beats Scissors";
                        playerScore++;
                    }
                    if (computerSelection == "paper") {
                        txtMessage.textContent = "You Lose! Paper beats Rock";
                        computerScore++;
                    }
                    break;
                case "paper":
                    if (computerSelection == "rock") { 
                        txtMessage.textContent = "You Win! Paper beats Rock";
                        playerScore++;
                    }
                    if (computerSelection == "scissors") {
                        txtMessage.textContent = "You Lose! Scissors beats Paper";
                        computerScore++;
                    }
                    break;
                case "scissors":
                    if (computerSelection == "paper") { 
                        txtMessage.textContent = "You Win! Scissors beats Paper";
                        playerScore++;
                    }
                    if (computerSelection == "rock") { 
                        txtMessage.textContent = "You Lose! Rock beats Scissors";
                        computerScore++;
                    }
                    break;
            }
        }
    }
    updateScore();
    playedRounds++;
}

function updateScore() {
    txtCScore.textContent = computerScore;
    txtPScore.textContent = playerScore;
}

function toggleButtons() {
    btns.forEach(function(button) {
        button.classList.toggle("hidden");
    });
}

function restartGame() {
    toggleButtons();
    playedRounds = 0;
    playerScore = 0;
    computerScore = 0;
    updateScore();
}