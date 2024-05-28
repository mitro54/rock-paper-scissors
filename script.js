// Wincounts to keep track of score
let userWinCount = 0;
let computerWinCount = 0;

// Function to get user choice from button click
function setUserChoice(choice) {
    playRound(choice, getComputedChoice());
    updateScores();
    checkGameEnd();
}

// Random computer output
function getComputedChoice() {
    let randomNumber = Math.floor(Math.random() * 99) + 1;
    if (randomNumber <= 33) {
        return 'rock';
    } else if (randomNumber > 33 && randomNumber <= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// The logic behind the game, plays one round
function playRound(playerSelection, computerSelection) {
    let resultMessage;
    if (playerSelection === computerSelection) {
        resultMessage = `Both players selected ${playerSelection}, draw!`;
        console.log(resultMessage);
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper' ||
               playerSelection === 'rock' && computerSelection === 'scissors') {
        userWinCount++;
        resultMessage = `Player wins! ${playerSelection} beats ${computerSelection}`;
        console.log(resultMessage);
    } else {
        computerWinCount++;
        resultMessage = `Computer wins! ${computerSelection} beats ${playerSelection}`;
        console.log(resultMessage);
    }
    document.querySelector('.result').innerText = resultMessage;
}

// Update scores in the HTML
function updateScores() {
    document.querySelector('#player-score').innerText = userWinCount;
    document.querySelector('#computer-score').innerText = computerWinCount;
}

// Check if the game has ended
function checkGameEnd() {
    if (userWinCount === 5 || computerWinCount === 5) {
        let winner = userWinCount > computerWinCount ? 'Player' : 'Computer';
        alert(`${winner} wins the game! Final score: Player ${userWinCount} - Computer ${computerWinCount}`);
        resetGame();
    }
}

// Reset the game
function resetGame() {
    userWinCount = 0;
    computerWinCount = 0;
    updateScores();
    document.querySelector('.result').innerText = '';
}

document.querySelector('#reset-button').addEventListener('click', resetGame);
