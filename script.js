const choices=['rock','paper','scissors'];
function getUserChoice(){
    while(true){
    let input= prompt(' Enter rock , paper or scissors ');
    if (input === null) {
        return null; // User cancelled the prompt
    }
    input = input.toLowerCase().trim();
    // Validate input
    if (input === ''|| !choices.includes(input)) {
        console.log(' Invalid choice! Please Try Again ');
    }
    else {
     return input;
    }
}
}

function getcomputerChoice(){
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

// Function to determine the winner of a round
function getWinner(user,computer){
    if(user === computer){
        return 'tie';
    } else if ((user === 'rock' && computer === 'scissors') || 
               (user === 'paper' && computer === 'rock') || 
               (user === 'scissors' && computer === 'paper')) {
        return 'user';
    } else {
        return 'computer';      
}
}

// Main game function
function playGame(){
    let userScore = 0;
    let computerScore = 0;
    console.log('Welcome to Rock, Paper, Scissors!');
    console.log('You will play 5 rounds against the computer.');
    
    for(let i=0; i<5; i++){
        let userChoice = getUserChoice();
    if (userChoice === null) {
        console.log('Game cancelled by user.');
        return;
    }
    let computerChoice = getcomputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`User choice: ${userChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        let winner = getWinner(userChoice, computerChoice);
        if (winner === 'tie') {
            console.log('It\'s a tie!');

        } else if (winner === 'user') {
            console.log('User wins this round!');
            userScore++;
        } else {
            console.log('Computer wins this round!');
            computerScore++;
        }
    }
    console.log(`Final Score - User: ${userScore}, Computer: ${computerScore}`);
    if (userScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (userScore < computerScore) {
        console.log('Computer wins the game! Better luck next time!');
    } else {    
        console.log('The game is a tie!');


}

}
playGame();
