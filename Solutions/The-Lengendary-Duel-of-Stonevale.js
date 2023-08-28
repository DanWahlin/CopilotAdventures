// Define the moves for each player
const player1Moves = ['scissors', 'paper', 'scissors', 'rock', 'rock'];
const player2Moves = ['rock', 'rock', 'paper', 'scissors', 'paper'];

// Initialize scores for both players
let player1Score = 0;
let player2Score = 0;

// Function to determine the winner of each round
function determineWinner(move1, move2) {
    if (move1 === move2) return 'draw';

    if ((move1 === 'rock' && move2 === 'scissors') ||
        (move1 === 'scissors' && move2 === 'paper') ||
        (move1 === 'paper' && move2 === 'rock')) {
        return 'player1';
    }

    if ((move2 === 'rock' && move1 === 'scissors') ||
        (move2 === 'scissors' && move1 === 'paper') ||
        (move2 === 'paper' && move1 === 'rock')) {
        return 'player2';
    }
}


// Function to assign points based on the winning move
function assignPoints(winningMove) {
    if (winningMove === 'rock') return 1;
    if (winningMove === 'paper') return 2;
    if (winningMove === 'scissors') return 3;
    return 0; // This will be the score for a draw
}

// Play the game for 10 rounds
for (let i = 0; i < 10; i++) {
    const player1Move = player1Moves[i];
    const player2Move = player2Moves[i];

    const winner = determineWinner(player1Move, player2Move);

    if (winner === 'player1') {
        player1Score += assignPoints(player1Move);
    } else if (winner === 'player2') {
        player2Score += assignPoints(player2Move);
    } // No points are added if it's a draw
}

// Display the final scores
console.log(`Player 1 Score: ${player1Score}`);
console.log(`Player 2 Score: ${player2Score}`);

if (player1Score > player2Score) {
    console.log('Player 1 wins!');
} else if (player2Score > player1Score) {
    console.log('Player 2 wins!');
} else {
    console.log('It\'s a draw!');
}
