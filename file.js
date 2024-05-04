var player = prompt('Please type your nickname here: ')

var itemsForGame = ["Rock", "Paper", "Scissors"];

var text = "The chosen item is: "

function getComputerChoice()    {

    let randomItem; 
    randomItem = Math.floor(Math.random() * 3);

    if (randomItem === 0)   {
        return text + itemsForGame[0];

    } else if (randomItem === 1)    {
        return  text + itemsForGame[1];

    } else if (randomItem === 2)    {
        return text + itemsForGame[2];
    }
    
}
console.log(getComputerChoice())


function getHumanChoice()   {

    let HumanChoice;
    HumanChoice = prompt("What item do you choose, Rock, Paper or Scissors?");
    HumanChoice = HumanChoice.toLowerCase();

    if (HumanChoice === "rock") {
        return text + itemsForGame[0];

    } else if (HumanChoice === "paper") {
        return text + itemsForGame[1];

    } else if (HumanChoice === "scissors")  {
        return text + itemsForGame[2];

    } 

}
console.log(getHumanChoice())

var humanScore = 0;
var computerScore = 0;
var playerWin = player + " wins.";
var playerLose = player + " Lose.";

function playRound(humanChoice, computerChoice)    {
     
    if (humanSelection === computerSelection)   {
        return "It's a draw!";
    }

    if (humanSelection == "Rock" && computerSelection == "Paper")   {
        return playerWin;
    }

    if (humanSelection == "Paper" && computerSelection == "Scissors")   {
        return playerLose;
    }
}
console.log(playRound(humanSelection, computerSelection))

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame() {

}

