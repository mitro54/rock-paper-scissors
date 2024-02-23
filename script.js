// Random computer output
function getComputedChoice() {
    let randomNumber = Math.floor(Math.random() * 99) + 1
    if (randomNumber <= 33) {
        return 'rock';
    } else if (randomNumber > 33 && randomNumber <= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function playRound(playerSelection, computerSelection) {
    // Draws
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Both players selected rock, draw!'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Both players selected paper, draw!'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Both players selected scissors, draw!'
    }
    // Player inputs paper
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Paper beats rock, player wins!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Scissors beats paper, computer wins!'
    }
    // Player inputs scissors
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Scissors beats paper, player wins!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Rock beats scissors, computer wins!'
    }
    // Player inputs rock
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Paper beats rock, computer wins!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Rock beats scissors, player wins!'
    }
}

const playerSelection = prompt();
const playerSelectionFixer = playerSelection.toLowerCase();
const computerSelection = getComputedChoice();
console.log(playRound(playerSelectionFixer, computerSelection))

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt(), computerSelection)
    }
} playGame();
