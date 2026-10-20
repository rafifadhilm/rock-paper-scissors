let humanScore = 0;
let computerScore = 0;

/**
   * rock     => 1
   * paper    => 2
   * scissors => 3
   */  
function getComputerChoice () {
  let result;
  const randomNum = Math.round(Math.random() * 2) + 1;

  if (randomNum === 1) {
    return result = "rock";
  } else if (randomNum === 2) {
    return result = "paper";
  }

  return result = "scissors";
}

function getHumanChoice () {
  return (prompt("Choose rock, paper, or scissors: ", "rock").toLowerCase());
}

function playRound(humanChoice, computerChoice) {

  console.log(`Human Pick: ${humanChoice}`);
  console.log(`Computer Pick: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log(`Tie! ${humanChoice} and ${computerChoice}`);
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`)
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`)
  } else {
    computerScore += 1;
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`)
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);