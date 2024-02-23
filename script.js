let userWinCount = 0;
let computerWinCount = 0;
let drawIdentify = false;
let playerPrompt = prompt();
let playerSelection = playerPrompt.toLowerCase();

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

function playRound(playerSelection, getComputedChoice) {
    // Draws
    if (playerSelection === getComputedChoice) {
        console.log(`Both players selected ${playerSelection}, draw!`);
    }
    // Player inputs paper
    if (playerSelection === 'paper' && getComputedChoice === 'rock') {
        userWinCount++;
        console.log('Paper beats rock, player wins!');
    } else if (playerSelection === 'paper' && getComputedChoice === 'scissors') {
        computerWinCount++;
        console.log('Scissors beats paper, computer wins!');
    }
    // Player inputs scissors
    if (playerSelection === 'scissors' && getComputedChoice === 'paper') {
        userWinCount++;
        console.log('Scissors beats paper, player wins!');
    } else if (playerSelection === 'scissors' && getComputedChoice === 'rock') {
        computerWinCount++;
        console.log('Rock beats scissors, computer wins!');
    }
    // Player inputs rock
    if (playerSelection === 'rock' && getComputedChoice === 'paper') {
        computerWinCount++;
        console.log('Paper beats rock, computer wins!');
    } else if (playerSelection === 'rock' && getComputedChoice === 'scissors') {
        userWinCount++;
        console.log('Rock beats scissors, player wins!');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, getComputedChoice())
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
            winTest();
        }
        //  console.log(`After the long and tedious battle the final score is: Player with ${userWinCount} and Computer with ${computerWinCount} ...`);
        //   userWinCount > computerWinCount ? console.log('Player wins!') : console.log('Computer wins!');
    }
};
function inputValidator(playerSelection) {
    switch (playerSelection) {
        case 'rock':
            return true;
        case 'paper':
            return true;
        case 'scissors':
            return true;
        default:
            return false;
    }
};

if (inputValidator(playerSelection) === true) {
    setTimeout(() => {
        playGame();
        winTest();
    }, 500);
} else {
    console.log('Please input rock, paper or scissors, refresh the page!');
}

