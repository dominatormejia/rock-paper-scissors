// Global Variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  randomNumber = Math.trunc(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "scissors";
  } else if (randomNumber === 2) {
    return "paper";
  }
}

function getHumanChoice() {
  let lowerCase = prompt("Rock, Paper, or Scissors", "");
  return lowerCase?.toLowerCase();
}

// ^Reworked and simplified choice functions^

// Game logic using if..else to decide round winner
function gameLogic(humanChoice, computerChoice) {
  let result;

  if (humanChoice === computerChoice) {
    result = 0;
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      result = 2;
    } else if (computerChoice === "paper") {
      result = 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      result = 2;
    } else if (computerChoice === "scissors") {
      result = 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      result = 2;
    } else if (computerChoice === "rock") {
      result = 1;
    }
  }

  if (result === 0) {
    console.log("Wow that's a tie!");
  } else if (result === 1) {
    console.log("Hmm, you lost this round.");
    ++computerScore;
  } else if (result === 2) {
    console.log("You won this round!");
    ++humanScore;
  }

  let humanScoreAnnounce = `My Score: ${humanScore}`;
  let computerScoreAnnounce = `Computer Score: ${computerScore}`;
  console.log(humanScoreAnnounce);
  console.log(computerScoreAnnounce);
}

// Loop function and game decider

function gameLoop(getHumanChoice, getComputerChoice, gameLogic) {
  let rounds = 15;
  for (let i = 0; i < rounds; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    gameLogic(humanChoice, computerChoice);

    console.log(`Player Choice: ${humanChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log("----------------------");

    if (humanScore === 3) {
      console.log("You are the winner!");
      break;
    } else if (computerScore === 3) {
      console.log("The computer is the winner!");
      break;
    }
  }
}

gameLoop(getHumanChoice, getComputerChoice, gameLogic);
