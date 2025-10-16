
let scorePlayer = 0;
let  scoreComputer = 0;
let draw = 0;


// computer choice 

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if(computerChoice === 1) {
        return "rock";

    } else if(computerChoice === 2) {
        return "paper";

    } else {
       return "scissors" 
    }
}


// Players choice input

function getPlayerChoice() {
    let playerChoice = prompt("Enter Rock or Paper or Scissors").toLowerCase();

    if(playerChoice === "rock") {
        return "rock";
        
    } else if(playerChoice === "paper") {
        return "paper";

    } else if(playerChoice === "scissors") {
        return "scissors";

    } else {
        return "Invalid input"
    }
}


// player and computer play

function playGame(player, computer) {
    let message = document.querySelector("#message");
    let playerScore = document.querySelector("#playerScore");
    let computerScore = document.querySelector("#compScore");
    let draws = document.querySelector("#draw");

    if(player === "rock" && computer === "scissors") {
        message.textContent = "Player wins!! 🎉 Rock beats Scissors";
        playerScore.textContent = ++scorePlayer;

    } else if(player === "scissors" && computer === "paper") {
        message.textContent = "Player wins!! 🎉Scissors cuts Paper";
        playerScore.textContent = ++scorePlayer;

    } else if(player === "paper" && computer === "rock") {
        message.textContent = "Player wins!! 🎉 Paper wraps Rock";
        playerScore.textContent = ++scorePlayer;

    } else if(computer === "rock" && player === "scissors") {
        message.textContent = "Computer wins!! 🎉 Rock beats Scissors";
        computerScore.textContent = ++scoreComputer;

    } else if(computer === "scissors" && player === "paper") {
        message.textContent = "Computer wins!! 🎉 Scissors cuts Paper";
        computerScore.textContent = ++scoreComputer;

    } else if(computer === "paper" && player === "rock") {
        message.textContent = "Computer wins!! 🎉 Paper wraps Rock";
        computerScore.textContent = ++scoreComputer;

    } else if (player === computer) {
        message.textContent = "It's a draw 🤝 Nice one."
        draws.textContent = ++draw;

    } else {
        message.textContent = "Enter Rock or Paper or Scissors to play game"
        
    }
 }



function playROund() {
    for(i = 0; i < 5; i++) {
        playGame(getPlayerChoice(), getComputerChoice())
    }
}

playROund()