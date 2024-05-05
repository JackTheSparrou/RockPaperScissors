
var itemsForGame = ["Rock", "Paper", "Scissors"];
// var humanchoice = prompt("What do you choose, Rock, Paper or Scissors?");

function getHumanChoice()   {
    let humanchoice = prompt("What do you choose, Rock, Paper or Scissors?");
    humanchoice = humanchoice.toLowerCase();

    if (humanchoice === "rock") {
        humanchoice = itemsForGame[0];
        return humanchoice;

    } else if (humanchoice === "paper")  {
        humanchoice = itemsForGame[1];
        return humanchoice;

    } else if (humanchoice === "scissors")   {
        humanchoice = itemsForGame[2];
        return humanchoice;

    } else {
        alert("This option is not valid!");
        return getHumanChoice();
    }
}

// We get the computer random item

function getComputerChoice()    {

    let randomItem; 
    randomItem = Math.floor(Math.random() * 3);

    if (randomItem === 0)   {
        randomItem = itemsForGame[0];
        return randomItem;

    } else if (randomItem === 1)    {
        randomItem = itemsForGame[1];
        return randomItem;

    } else if (randomItem === 2)    {
        randomItem = itemsForGame[2];
        return randomItem;
    }   
}

var humanScore = 0;
var computerScore = 0;


function playRound(humanselection, computerselection)    {

    if (humanselection === computerselection)  {
        humanScore;
        computerScore;
        return "Your choice: " + humanselection + "\nComputer random: " + computerselection + "\nIt's a tie!" + 
        "\nPlayer score: " + humanScore + "\nComputer score: " + computerScore;
    }

    if ((humanselection == "Rock" && computerselection == "Paper") ||
       (humanselection == "Paper" && computerselection == "Scissors") ||
       (humanselection == "Scissors" && computerselection == "Rock"))   {
        humanScore;
        computerScore++;
        return "Your choice: " + humanselection + "\nComputer random: " + computerselection + "\nLoser!" + 
        "\nPlayer score: " + humanScore + "\nComputer score: " + computerScore; 
       }
    
    if ((humanselection == "Paper" && computerselection == "Rock") || 
       (humanselection == "Scissors" && computerselection == "Paper") || 
       (humanselection == "Rock" && computerselection == "Scissors"))   {
        humanScore++;
        computerScore;
        return "Your choice: " + humanselection + "\nComputer random: " + computerselection + "\nYou won, congratulations!" + 
        "\nPlayer score: " + humanScore + "\nComputer score: " + computerScore;
        }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);





function playGame() {
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
}
console.log(playGame())
