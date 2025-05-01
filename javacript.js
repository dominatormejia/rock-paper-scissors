// Global Variables
let humanScore = 0;
let computerScore = 0;

const computerChoiceDisplay = document.querySelector(
  ".computer-choice-display"
);
const play = document.querySelector(".play");
const titleCard = document.querySelector(".title-pic");
const outputs = document.querySelector(".outputs");
const humanTally = document.querySelector(".human-score");
const computerTally = document.querySelector(".computer-score");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const humanChoiceDisplay = document.querySelector(".human-choice-display");
const playAgain = document.querySelector(".play-again");
const title = document.querySelector(".secondTitle");
const img = document.querySelector(".back-img");

function getComputerChoice() {
  randomNumber = Math.trunc(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoiceDisplay.textContent = "Computer Choice: Rock";
    return "rock";
  } else if (randomNumber === 1) {
    computerChoiceDisplay.textContent = "Computer Choice: Scissors";
    return "scissors";
  } else if (randomNumber === 2) {
    computerChoiceDisplay.textContent = "Computer Choice: Paper";
    return "paper";
  }
}

// Game logic using if..else to decide round winner
function playRound(humanChoice, computerChoice) {
  let result;

  if (humanChoice === computerChoice) {
    result = 0;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result = 2;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = 2;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result = 2;
  } else {
    result = 1;
  }

  if (result === 0) {
    outputs.textContent = "Wow that's a tie!";
  } else if (result === 1) {
    outputs.textContent = "Hmm, you lost this round.";
    ++computerScore;
  } else if (result === 2) {
    outputs.textContent = "You won this round!";
    ++humanScore;
  }

  let humanScoreAnnounce = `My Score: ${humanScore}`;
  let computerScoreAnnounce = `Computer Score: ${computerScore}`;
  humanTally.textContent = humanScoreAnnounce;
  computerTally.textContent = computerScoreAnnounce;
}

// Loop function and game decider

function gameLoop() {
  rock.addEventListener("click", () => {
    humanChoiceDisplay.textContent = "Your Choice: Rock";
    playRound("rock", getComputerChoice());
    if (humanScore === 5) {
      endGame("human");
    } else if (computerScore === 5) {
      endGame("computer");
    }
  });
  paper.addEventListener("click", () => {
    humanChoiceDisplay.textContent = "Your Choice: Paper";
    playRound("paper", getComputerChoice());
    if (humanScore === 5) {
      endGame("human");
    } else if (computerScore === 5) {
      endGame("computer");
    }
  });
  scissors.addEventListener("click", () => {
    humanChoiceDisplay.textContent = "Your Choice: Scissors";
    playRound("scissors", getComputerChoice());
    if (humanScore === 5) {
      endGame("human");
    } else if (computerScore === 5) {
      endGame("computer");
    }
  });

  function endGame(winner) {
    if (winner === "human") {
      outputs.textContent = "You win the game!";
    } else if (winner === "computer") {
      outputs.textContent = "The computer wins the game! AI rules the world!";
    }
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    playAgain.classList.remove("hidden");
  }
}

play.addEventListener("click", () => {
  titleCard.classList.add("hidden");

  rock.classList.remove("hidden");
  paper.classList.remove("hidden");
  scissors.classList.remove("hidden");
  outputs.classList.remove("hidden");
  humanTally.classList.remove("hidden");
  computerTally.classList.remove("hidden");
  computerChoiceDisplay.classList.remove("hidden");
  humanChoiceDisplay.classList.remove("hidden");
  title.classList.remove("hidden");
  img.classList.remove("hidden");

  outputs.textContent = "Click an option to start!";

  gameLoop();
});

playAgain.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;

  outputs.textContent = "Click an option to start!";
  humanTally.textContent = "My Score: 0";
  computerTally.textContent = "Computer Score: 0";
  playAgain.classList.add("hidden");

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
});
