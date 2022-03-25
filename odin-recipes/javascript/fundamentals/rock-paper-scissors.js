var choices = ["rock", "paper", "scissors"];


var playerCount = 0;
var computerCount = 0;

function playGround() {
  for (let i = 0; i < 5; i++) {
    var userInput = prompt("What's your choice?", "");
    var computersChoice = choices[Math.floor(Math.random() * choices.length)];

    if (computersChoice === userInput) {
      console.log("Try Again");
    } else if (computersChoice == "rock" && userInput == "scissors") {
      console.log("You Lose! Rock beats Scissors!");
      computerCount++;
    } else if (computersChoice == "rock" && userInput == "paper") {
      console.log("You Win! Paper beats Rock!");
      playerCount++;
    } else if (computersChoice == "scissors" && userInput == "rock") {
      console.log("You Win! Rock beats Scissors!");
      playerCount++;
    } else if (computersChoice == "scissors" && userInput == "paper") {
      console.log("You Lose! Scissor beats Paper!");
      computerCount++;
    } else if (computersChoice == "paper" && userInput == "scissors") {
      console.log("You Win! Scissors beats Paper!");
      playerCount++;
    } else if (computersChoice == "paper" && userInput == "rock") {
      console.log("You Lose! Paper beats Rock!");
      computerCount++;
    }
  }

  resultOfPlay(computerCount, playerCount)
}

function resultOfPlay(computerCount, playerCount){

    if(computerCount > playerCount){
        console.log("You sucker!")
    } else if(playerCount > computerCount){
        console.log("You Win!")
    } else {
        console.log("Another round?")
    }
}

playGround();