// Establishes choices of rock, paper, or scissors in an array. To be referenced by options[x] in computerChoice.
let options = ['rock', 'paper', 'scissors']

// Has computer randomly select an index from options and prints choice to console. Stores item in computerChoice.
function computerPlay () {
    let computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    return computerChoice;
}

// Plays a round of Rock, Paper, Scissors utilizing options and computerPlay()
function round (playerChoice, computerChoice) {
    playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase(); // Prompts user to type in rock, paper, or scissors. Converts input to lowercase to match options format. Stores in playerChoice.
    computerChoice = computerPlay(); // Calls function to select rock, paper, or scissors from options array. (Maybe I should change the variable name in this function to distinguish from function's value))

    if (playerChoice == computerChoice) { // Condition if player chooses same option as computer. Covers three game states (rock/rock, paper/paper, scissor/scissor).
        return 'It\'s a tie!'
    } else if (playerChoice != computerChoice) { // Umbrella condition if player and computer choices do not match up.
        if (playerChoice == 'rock') { // If/elif chain acknowledging different player choices
            if (computerChoice == 'scissors') { // Given player choice, reflects win state if computer's choice relative to player's will lose the game.
                return 'You win!'
            } else {
                return 'You lose!';
            }
        } else if (playerChoice == 'paper') {
            breakme2: if (computerChoice == 'rock') {
                return 'You win!'
            } else {
                return 'You lose!';
            }
        } else if (playerChoice == 'scissors') {
            breakme3: if (computerChoice == 'paper') {
                return 'You win!'
            } else {
                return 'You lose!';
            }
        } 
    }
}

/* Description: Uses for loop to conduct 5 different rounds and logs points earned by Player/Computer.
Logs score and returns statement declaring the winner. */
function game () { 
    let playerWins = 0;
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
    return 'GAME OVER'
}