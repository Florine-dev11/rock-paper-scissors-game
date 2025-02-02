// Select the button element for the "Rock" option
const rockButton = document.querySelector('.rock');

// Select the button element for the "Paper" option
const paperButton = document.querySelector('.paper');

// Select the button element for the "Scissors" option
const scissorButton = document.querySelector('.scissor');

// Select the element that displays the player's score
const playerScoreElement = document.querySelector('.p-count');

// Select the element that displays the computer's score
const computerScoreElement = document.querySelector('.c-count');

// Select the element that displays the number of moves left
const movesLeftElement = document.querySelector('.movesleft');

// Select the element that displays the result of each round
const resultElement = document.querySelector('.result');

// Select the button element to reload/reset the game
const reloadButton = document.querySelector('.reload');

// Initialize the player's score to 0
let playerScore = 0;

// Initialize the computer's score to 0
let computerScore = 0;

// Set the total number of moves allowed in the game
let movesLeft = 20;

/**
 * Function to handle the player's move.
 * @param {string} choice - The player's choice ('rock', 'paper', or 'scissors').
 */
function playerMove(choice) {
  // Check if there are remaining moves
  if (movesLeft > 0) {
    // Decrement the number of moves left by 1
    movesLeft--;

    // Generate the computer's choice
    const computerChoice = computerMove();

    // Determine the winner of the round
    const winner = determineWinner(choice, computerChoice);

    // Display the result of the round
    displayResult(winner, computerChoice);

    // Update the displayed scores and moves left
    updateDisplay();
  } else {
    // If no moves are left, display the final result of the game
    displayFinalResult();
  }
}

/**
 * Function to randomly generate the computer's move.
 * @returns {string} - The computer's choice ('rock', 'paper', or 'scissors').
 */
function computerMove() {
  // Array containing the possible choices
  const choices = ['rock', 'paper', 'scissors'];

  // Generate a random index between 0 and 2
  const randomIndex = Math.floor(Math.random() * 3);

  // Return the computer's choice based on the random index
  return choices[randomIndex];
}

/**
 * Function to determine the winner of a round.
 * @param {string} player - The player's choice.
 * @param {string} computer - The computer's choice.
 * @returns {string} - The result of the round ('player', 'computer', or 'draw').
 */
function determineWinner(player, computer) {
  // Check if both choices are the same
  if (player === computer) {
    // It's a draw
    return 'draw';
  } else if (
    // Check if the player wins
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    // Increment the player's score by 1
    playerScore++;

    // Return 'player' indicating the player wins
    return 'player';
  } else {
    // Increment the computer's score by 1
    computerScore++;

    // Return 'computer' indicating the computer wins
    return 'computer';
  }
}

/**
 * Function to display the result of the current round.
 * @param {string} winner - The winner of the round ('player', 'computer', or 'draw').
 * @param {string} computerChoice - The computer's choice in the round.
 */
function displayResult(winner, computerChoice) {
  // Check if the player wins
  if (winner === 'player') {
    // Display a message indicating the player wins and show the computer's choice
    resultElement.textContent = `You win! Computer chose ${computerChoice}.`;
  } else if (winner === 'computer') {
    // Display a message indicating the computer wins and show its choice
    resultElement.textContent = `You lose! Computer chose ${computerChoice}.`;
  } else {
    // Display a message indicating it's a draw and show the computer's choice
    resultElement.textContent = `It's a draw! Computer also chose ${computerChoice}.`;
  }
}

/**
 * Function to update the displayed scores and moves left.
 */
function updateDisplay() {
  // Update the player's score display
  playerScoreElement.textContent = playerScore;

  // Update the computer's score display
  computerScoreElement.textContent = computerScore;

  // Update the display of moves left
  movesLeftElement.textContent = `Moves Left: ${movesLeft}`;
}

/**
 * Function to display the final result when no moves are left.
 */
function displayFinalResult() {
  // Compare the player's score with the computer's score
  if (playerScore > computerScore) {
    // Display a message indicating the player won the game
    resultElement.textContent = 'Game over! You won the game!';
  } else if (playerScore < computerScore) {
    // Display a message indicating the player lost the game
    resultElement.textContent = 'Game over! You lost the game!';
  } else {
    // Display a message indicating the game is a tie
    resultElement.textContent = 'Game over! It\'s a tie!';
  }
}

/**
 * Function to reset the game to its initial state.
 */
function resetGame() {
  // Reset the player's score to 0
  playerScore = 0;

  // Reset the computer's score to 0
  computerScore = 0;

  // Reset the number of moves left to 20
  movesLeft = 20;

  // Clear the result display
  resultElement.textContent = '';

  // Update the displayed scores and moves left
  updateDisplay();
}

// Add a click event listener to the "Rock" button
rockButton.addEventListener('click', function() {
  // Call the playerMove function with 'rock' as the player's choice
  playerMove('rock');
});

// Add a click event listener to the "Paper" button
paperButton.addEventListener('click', function() {
  // Call the playerMove function with 'paper' as the player's choice
  playerMove('paper');
});

// Add a click event listener to the "Scissors" button
scissorButton.addEventListener('click', function() {
  // Call the playerMove function with 'scissors' as the player's choice
  playerMove('scissors');
});

// Add a click event listener to the "Reload" button
reloadButton.addEventListener('click', resetGame);

