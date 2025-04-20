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
    return "tie";
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      return "won";
    } else if (computerChoice === "paper") {
      return "lost";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      return "won";
    } else if (computerChoice === "scissors") {
      return "lost";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      return "won";
    } else if (computerChoice === "rock") {
      return "lost";
    }
  }
  // console.log(humanChoice);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// playRound(humanChoice, computerChoice);

function playGame() {
  let result = playRound(humanChoice, computerChoice);

  if ((result = "won")) {
    console.log("Oh wow! You won! Congrats!");
    humanScore++;
  } else if ((result = "lost")) {
    console.log("Dang it, you lost.");
    computerScore++;
  } else if ((result = "tie")) {
    console.log("Oh my, it's a tie!");
  }

  if (humanScore >= 3) {
    alert("You win!");
  } else if (computerScore >= 3) {
    alert("Computer Wins!");
  }
}

// playGame()
console.log(humanScore);
console.log(computerScore);

function game() {
  for (i = 1; humanScore < 3 && computerScore < 3; i++) {
    playGame();
  }
}

game();
