const startButton = document.querySelector(".start-btn");
const choicesButtons = document.querySelectorAll(".choices button");
const scoreBoard = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result");
const roundCounter = document.querySelector(".round-counter");

let round = 0;
let totalRounds = 5;
let playerScore = 0;
let computerScore = 0;
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}
function playGame(playerChoice, computerChoice) {
  startButton.style.display = "none";
  const result = getWinner(playerChoice, computerChoice);
  updateScoreBoard(playerScore, computerScore);
  updateRoundCounter();
  showResultText(playerChoice, computerChoice, result);
}
function endGame() {
  if (playerScore > computerScore) {
    resultDiv.textContent = "Congratulations! You won the game!";
  } else if (computerScore > playerScore) {
    resultDiv.textContent = "Computer wins the game! Better luck next time!";
  } else {
    resultDiv.textContent = "It's a tie! No one wins the game!";
  }
  scoreBoard.style.display = "none";
  resultDiv.style.display = "block";
}
function updateScoreBoard(playerScore, computerScore) {
  scoreBoard.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}
function updateRoundCounter() {
  roundCounter.textContent = `Round: ${round} Of ${totalRounds}`;
  round++;
}
function showResultText(playerChoice, computerChoice, result) {
  if (round > totalRounds) {
    endGame();
    choicesButtons.forEach((button) => (button.disabled = true));
    startButton.style.display = "block";
    startButton.textContent = "Play Again";
  } else {
    resultDiv.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
  }
}
function startGame() {
  startButton.style.display = "none";
  round = 0;
  playerScore = 0;
  computerScore = 0;
  scoreBoard.style.display = "block";
  roundCounter.style.display = "block";
  resultDiv.textContent = "Ready to play? Click a choice to begin!";
  updateScoreBoard(playerScore, computerScore);
  updateRoundCounter();
  choicesButtons.forEach((button) => (button.disabled = false));
}

startButton.addEventListener("click", () => {
  startGame();
});
choicesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.textContent;
    const computerChoice = getComputerChoice();
    playGame(playerChoice, computerChoice);
  });
});
 
//initial UI setup
choicesButtons.forEach((button) => (button.disabled = true));
scoreBoard.style.display = "none";
roundCounter.style.display = "none";
resultDiv.textContent = "Welcome! Click 'Start Game' to begin.";
