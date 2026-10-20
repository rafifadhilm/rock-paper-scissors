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