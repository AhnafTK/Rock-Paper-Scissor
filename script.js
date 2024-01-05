
const logic = {"rock":"scissor","paper":"rock","scissor":"paper"};
const options = {0:"rock",1:"paper",2:"scissor"}
let playerChoice;

function getComputerChoice(){
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (logic[playerSelection] == computerSelection){
        console.log("player wins");
    }
    else if (playerSelection == computerSelection){
        console.log("TIE");
    }
    else {
        console.log("Computer wins");
    } 
}
// rock = 0, paper = 1, scissor = 2
// rock -> scissor
// scissor -> paper
// paper -> rock

function game(){
    const computerChoice = getComputerChoice()
    console.log(playerChoice + " VS " + computerChoice)
    playRound(playerChoice, computerChoice)
}

playerChoice = "rock";
game()