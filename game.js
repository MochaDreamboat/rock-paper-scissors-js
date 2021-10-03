const options = ['rock', 'paper', 'scissors'];
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore'); 
const winner = document.querySelector('#winner');
const btns = document.querySelectorAll('button');
const results = document.querySelector('results');

let pScore = 0;
let cScore = 0;
let rounds = 0;

function computerPlay () {
    let computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    return computerChoice;
}

function round (playerChoice) {
    computerChoice = computerPlay();
    if (playerChoice == computerChoice) {
        console.log('It\'s a tie!')
        return 2
    } else if (playerChoice != computerChoice) {
        if (playerChoice == 'rock') {
            if (computerChoice == 'scissors') {
                console.log('You win!')
                return 0
            } else {
                console.log('You lose!')
                return 1
            }
        } else if (playerChoice == 'paper') {
            if (computerChoice == 'rock') {
                console.log('You win!')
                return 0
            } else {
                console.log('You lose!')
                return 1
            }
        } else if (playerChoice == 'scissors') {
            breakme3: if (computerChoice == 'paper') {
                console.log('You win!')
                return 0
            } else {
                console.log('You lose!')
                return 1
            }
        } 
    }
}


function game(result) {
    while (rounds < 4) {
        rounds += 1;
        if (result == 0) {
            pScore += 1;
            playerScore.textContent = `Player: ${pScore}`;
            winner.textContent = 'You win this round!'
            return
        } else if (result == 1) {
            cScore += 1;
            computerScore.textContent = `Computer: ${cScore}`;
            winner.textContent = 'You lose this one! Oof!'
            return
        } else {
            winner.textContent = 'We have a tie!';
            return
        }
    } 
    if (pScore > cScore) {
        winner.textContent = 'You win the game! Here is a cookie!';
    } else if (cScore > pScore) {
        winner.textContent = 'You lose! Better luck next time, chump!';
    } else {
        winner.textContent = 'It\'s a tie! Who woulda thunk it?';
    }
    return
}



btns.forEach((button) => {
    button.addEventListener('click', () => {
        let choice = button.value;
        let result = round(choice);
        game(result);
    });
});









    /*let playerWins = 0;
    let computerWins = 0;
    for (let rounds = 0; rounds <= 4; rounds += 1) {
        result = round();
        console.log(result);
        if (result == 'You win!') {
            playerWins += 1;
        } else if (result == 'You lose!') {
            computerWins += 1;
        }
        console.log(`You - ${playerWins} Computer - ${computerWins}`)
    }
    if (computerWins > playerWins) {
        console.log('You lost! Better luck next time!')
    } else if (computerWins == playerWins) {
        console.log('It\'s a tie! Close call!')
    } else {
        console.log('You win! Hooray!')
    }
    return console.log('GAME OVER') */
