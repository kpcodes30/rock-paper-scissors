// console only game
let playerScore = 0;
let computerScore = 0;
const rounds = 5;
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}
for(let i = 1; i <=rounds; i++) {
    const playerChoice = prompt('Enter rock, paper, or scissors:').toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i}:`);
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    const winner = getWinner(playerChoice, computerChoice);
    
    if (winner === 'player') {
        playerScore++;
        console.log('Player wins this round!');
    } else if (winner === 'computer') {
        computerScore++;
        console.log('Computer wins this round!');
    } else {
        console.log('This round is a draw!');
    }
    
    console.log(`Current Score - Player: ${playerScore}, Computer: ${computerScore}`);
}
console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
if (playerScore > computerScore) {
    console.log('Player wins the game!');
}else if (computerScore > playerScore) {
    console.log('Computer wins the game!');
} else {
    console.log('The game is a draw!');
}