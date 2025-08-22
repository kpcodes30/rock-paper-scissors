// DOM Elements
const startBtn = document.querySelector(".start-btn");
const choicesButtons = document.querySelectorAll(".choices button");
const roundCounter = document.querySelector(".round-counter");
const scoreBoard = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result");

let round = 0;
let playerScore = 0;
let computerScore = 0;
const totalRounds = 5;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "draw";
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "player";
  }
  return "computer";
}

// UI update functions
function updateRoundCounter() {
  roundCounter.textContent = `Round ${round} of ${totalRounds}`;
}

function updateScoreBoard() {
  scoreBoard.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}

function showResultText(msg) {
  resultDiv.textContent = msg;
  resultDiv.style.opacity = 0.2;
  setTimeout(() => {
    resultDiv.style.opacity = 1;
  }, 120);
}

function endGame() {
  choicesButtons.forEach((btn) => (btn.disabled = true));
  startBtn.textContent = "Play Again";
  startBtn.style.display = "inline-block";

  if (playerScore > computerScore) {
    showResultText("🏆 Congratulations, you won the match!");
  } else if (playerScore < computerScore) {
    showResultText("🤖 Computer takes the win this time!");
  } else {
    showResultText("🤝 It's a tie overall!");
  }
}

// Main game logic
function playRound(playerChoice) {
  if (round >= totalRounds) return;

  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);

  if (winner === "player") playerScore++;
  else if (winner === "computer") computerScore++;

  round++;
  updateRoundCounter();
  updateScoreBoard();

  let roundMsg = `You chose ${playerChoice}, Computer chose ${computerChoice}. `;
  if (winner === "player") roundMsg += "You win this round! 🎉";
  else if (winner === "computer") roundMsg += "Computer wins this round! 💻";
  else roundMsg += "It's a tie!";
  showResultText(roundMsg);

  if (round === totalRounds) {
    endGame();
  }
}

function resetGame() {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  updateRoundCounter();
  updateScoreBoard();
  showResultText("Ready to play? Click a choice to begin!");
  choicesButtons.forEach((btn) => (btn.disabled = false));
  startBtn.style.display = "none";
}

// Event Listeners
startBtn.addEventListener("click", () => {
  resetGame();
});

choicesButtons.forEach((btn) => {
  btn.addEventListener("click", () => playRound(btn.dataset.choice));
});

// --- Initial UI setup ---
choicesButtons.forEach((btn) => (btn.disabled = true));
updateRoundCounter();
updateScoreBoard();
showResultText("Welcome! Click 'Start Game' to begin.");
