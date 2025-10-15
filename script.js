

// computer generation of Rock paper and scissors
 let    cScore = 0;
let      pScore = 0;

let mgs = document.querySelector("#mgs")


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random () * 3) + 1;

    if(computerChoice === 1) {
        return "rock"

    } else if(computerChoice === 2) {
        return "paper"

    } else {
        return "scissors"
    }
}




// FUnction handling players input

function getPlayerChoice() {
    let playersChoice = prompt("Enter Rock or Paper or Scissors").toLowerCase();

    if(playersChoice === "rock") {
        return "rock"

    } else if(playersChoice === "paper") {
        return "paper"

    } else if(playersChoice === "scissors") {
        return "scissors"

    } else {
        return "Invalid input"
    }
}



// collection of both player and computer choices

function playGame(player, computer) {
    // let mgs = document.querySelector("#mgs")
    let computerScore = document.querySelector("#compScore");
    let playerScore = document.querySelector("#playerScore");



    if(player === "rock" && computer === "scissors") {
        mgs.textContent = "Player wins!!🎉 Rock beats Scissors";
        playerScore.textContent = ++pScore
        // return

    } else if(player === "scissors" && computer === "paper") {
        mgs.textContent = "Player wins!! 🎉 Scissors cuts Paper";
        playerScore.textContent = ++pScore;
        // return

    } else if(player === "paper" && computer === "rock") {
        mgs.textContent = "Player win!! 🎉 Paper wraps Rock";
        playerScore.textContent = ++pScore;
        // return

    } else if(computer === "rock" && player === "scissors") {
       computerScore.textContent =  mgs.textContent = "Computer wins!! 🎉 Rock beats Scissors";
        // return

    } else if (computer === "scissors" && player === "paper" ) {
        mgs.textContent = "Computer wins!! 🎉 Scissors cuts Paper";
        computerScore.textContent = ++cScore
        // return

    } else if (computer === "paper" && player === "rock" ) {
        mgs.textContent = "Computer wins!! 🎉 Paper wraps Rock";
        computerScore.textContent = ++cScore
        // return

    } else if(player === computer) {
        mgs.textContent = "It's draw🤝 Nice one";

    } else {
        mgs.textContent = "Incorrect input"
    }
}

// playGame(getPlayerChoice(), getComputerChoice());



function playRound() {
    for(i = 0; i < 5; i++) {
        playGame(getPlayerChoice(), getComputerChoice());   

 }

    // if

}


playRound()

