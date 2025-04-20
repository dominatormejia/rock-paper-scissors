// function to have the computers choice, the number generator
//  could be more accurate as I believe it could be even, bur
// sufficient for now.

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 100) + 1;

  //   console.log(randomNumber);

  if (randomNumber <= 33) {
    return "rock";
  } else if (randomNumber > 33 && randomNumber <= 66) {
    return "scissors";
  } else if (randomNumber > 66 && randomNumber <= 100) {
    return "paper";
  }
}

// Function gets human choice, currently only works for specifically
//  "Rock", "Scissors", "Paper". May need to be reworked to be case
// insensitive. As well as currently returns  if another word it put
//  or misspelling.

function getHumanChoice() {
  return prompt("Pick: Rock, Paper, or Scissors", "");
  //    if (choice === "Rock") {
  //     return "Rock" ;
  //    } else if (choice === "Paper") {
  //     return "Paper" ;
  //    } else if (choice === "Scissors")
  //     return "Scissors" ;
}

// function playGame (){}

let humanScore = 0;
let computerScore = 0;

// This went through several iterations. I found this method the
//  easiest to wrap my head around. I know i could have opted for
// ternary, but it would have broke my brain more. it might not be
//  the cleanest and lots of if..else, but it currently works lol

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice?.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("Oh my, it's a tie!");
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("Oh wow! You won! Congrats!");
      humanScore++;
    } else if (computerChoice === "paper") {
      console.log("Dang it, you lost.");
      computerScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("Oh wow! You won! Congrats!");
      humanScore++;
    } else if (computerChoice === "scissors") {
      console.log("Dang it, you lost.");
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("Oh wow! You won! Congrats!");
      humanScore++;
    } else if (computerChoice === "rock") {
      console.log("Dang it, you lost.");
      computerScore++;
    }
  }
  // console.log(humanChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// console.log(humanScore);
// console.log(computerScore);
