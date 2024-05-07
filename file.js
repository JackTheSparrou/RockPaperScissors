// items that the computer can choose from
var itemsForGame = ["Rock", "Paper", "Scissors"];

// we get the human prompted choice
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

// scores for the round and the game function
var humanScore = 0;
var computerScore = 0;

// function that returns the player choice and the computer random choice and increments or decrements the score
function playRound(humanselection, computerselection)    {

    if (humanselection === computerselection)  {
        console.log("Your choice: " + humanselection + "\nComputer random: " + computerselection + "\nIt's a tie!" + 
        "\nPlayer score: " + humanScore + "\nComputer score: " + computerScore);
    }

    if ((humanselection == "Rock" && computerselection == "Paper") ||
       (humanselection == "Paper" && computerselection == "Scissors") ||
       (humanselection == "Scissors" && computerselection == "Rock"))   {
        computerScore++;
        console.log("Your choice: " + humanselection + "\nComputer random: " + computerselection + "\nLoser!" + 
        "\nPlayer score: " + humanScore + "\nComputer score: " + computerScore); 
       }
    
    if ((humanselection == "Paper" && computerselection == "Rock") || 
       (humanselection == "Scissors" && computerselection == "Paper") || 
       (humanselection == "Rock" && computerselection == "Scissors"))   {
        humanScore++;
        console.log("Your choice: " + humanselection + "\nComputer random: " + computerselection + "\nYou won, congratulations!" + 
        "\nPlayer score: " + humanScore + "\nComputer score: " + computerScore);
        }
}

function playGame() {

    for (var i = 0; i <= 10; i++)    {

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

        if (humanScore === 3)   {
            console.log("You won the game!");
            break;

        } else if (computerScore === 3) {
            console.log("The computer wins the game!");
            break;
        }
    }
}
playGame();




