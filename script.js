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
    if (computerSelection === 'rock') {
        return 'Computer selected rock, draw!'
    } else if (computerSelection === 'paper') {
        return 'Computer selected paper, computer wins!'
    } else {
        return 'Computer selected scissors, you win!';
    }
}

const playerSelection = 'rock';
const computerSelection = getComputedChoice();
console.log(playRound(playerSelection, computerSelection))