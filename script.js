let userWinCount = 0;
let computerWinCount = 0;
let drawIdentify = false;
let playerPrompt = prompt();
const playerSelection = playerPrompt.toLowerCase();


// Validating user input
function inputValidator(playerPrompt) {
    if (playerPrompt === 'rock' || 'paper' || 'scissors') {
        return playerSelection;
    } else {
        console.log('Cannot identify user input...');
        return playerPrompt = prompt();
    }
};

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
};

function playRound(playerInput, getComputedChoice) {
    // Draws
    if (playerInput === getComputedChoice) {
        console.log(`Both players selected ${playerSelection}, draw!`);
    }
    // Player inputs paper
    if (playerInput === 'paper' && getComputedChoice === 'rock') {
        userWinCount++;
        console.log('Paper beats rock, player wins!');
    } else if (playerInput === 'paper' && getComputedChoice === 'scissors') {
        computerWinCount++;
        console.log('Scissors beats paper, computer wins!');
    }
    // Player inputs scissors
    if (playerInput === 'scissors' && getComputedChoice === 'paper') {
        userWinCount++;
        console.log('Scissors beats paper, player wins!');
    } else if (playerInput === 'scissors' && getComputedChoice === 'rock') {
        computerWinCount++;
        console.log('Rock beats scissors, computer wins!');
    }
    // Player inputs rock
    if (playerInput === 'rock' && getComputedChoice === 'paper') {
        computerWinCount++;
        console.log('Paper beats rock, computer wins!');
    } else if (playerInput === 'rock' && getComputedChoice === 'scissors') {
        userWinCount++;
        console.log('Rock beats scissors, player wins!');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(inputValidator(), getComputedChoice())
    }
};

function winTest() {
    if (userWinCount > computerWinCount) {
        drawIdentify = false;
        console.log(`Player wins with ${userWinCount} to ${computerWinCount}`);
    } else if (computerWinCount > userWinCount) {
        drawIdentify = false;
        console.log(`Computer wins with ${computerWinCount} to ${userWinCount}`);
    } else {
        drawIdentify = true;
        while (drawIdentify === true) {
            console.log(`It's a draw! ${userWinCount} to ${computerWinCount}`);
            console.log('Retrying...');
            playGame();
            drawIdentify = false;
        }
        console.log(`After the long and tedious battle the final score is: Player with ${userWinCount} and Computer with ${computerWinCount} ...`);
        userWinCount > computerWinCount ? console.log('Player wins!') : console.log('Computer wins!');
    }
}

playGame();
winTest();

