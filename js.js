function getComputerChoice() {
    let n = getRandomInt(3);
    switch (n) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getHumanChoice() {
    let a = prompt("Choose Rock Paper or Scissors");
    return a;
}
let humanScore = 0;
let computerScore = 0;
let roundCounter=0;

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice) console.log("Is a Tie!");
    if (humanChoice=="rock" && computerChoice=="scissors") {
        humanScore++; console.log("You win! Rock beats Scissors")
    } else if (humanChoice=="rock" && computerChoice=="paper") {
        computerScore++; console.log("You lose! Rock loses asgainst Paper")
    } else if (humanChoice=="paper" && computerChoice=="rock") {
        humanScore++; console.log("You win! Paper beats Rock")
    } else if (humanChoice=="paper" && computerChoice=="scissors") {
        computerScore++; console.log("You lose! Paper loses against Scissors") 
    } else if (humanChoice=="scissors" && computerChoice=="rock") {
        computerScore++; console.log("You lose! Scissors loses against Rock")
    } else if (humanChoice=="scissors" && computerChoice=="paper") {
        humanScore++; console.log("You win! Scissors beats Paper")
    }
}
while(roundCounter<5) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection,computerSelection);
    ++roundCounter;
}
console.log("You: " + humanScore);
console.log("Computer: " + computerScore);