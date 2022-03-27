var choices = ["rock", "paper", "scissors"];

var playerCount = 0;
var computerCount = 0;

function playGround() {
  for (let i = 0; i < 5; i++) {
    var userInputRaw = prompt("What's your choice?", "");
    var computersChoice = choices[Math.floor(Math.random() * choices.length)];
    var userInput = userInputRaw.toLowerCase;

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

  resultOfPlay(computerCount, playerCount);
}

function resultOfPlay(computerCount, playerCount) {
  if (computerCount > playerCount) {
    console.log("You sucker!");
  } else if (playerCount > computerCount) {
    console.log("You Win!");
  } else {
    console.log("Another round?");
  }
}

//Another efficient way

const weapons = {
  rock: { strongTo: "scissors", weakTo: "paper" },
  scissors: { strongTo: "paper", weakTo: "rock" },
  paper: { strongTo: "rock", weakTo: "scissors" },
};

function playGroundEff(userInputEff, computersChoice) {
  for (let i = 0; i < 5; i++) {
    let userInputRawEff = prompt("What's your choice EFF? ", "");
    let computersChoice = choices[Math.floor(Math.random() * choices.length)];
    let userInputEff = userInputRawEff.toLowerCase();

    if (weapons[computersChoice].strongTo === userInputEff) {
      console.log("Eff you lose");
    } else if (weapons[computersChoice].weakTo === userInputEff) {
      console.log("EFF you win");
    }
  }

  resultOfPlay(computerCount, playerCount);
}

//playGround();

playGroundEff();
