function getComputerChoice() {
  const choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (choice === 1) {
    return 'rock';
  } else if (choice === 2) {
    return 'paper';
  } else if (choice === 3) {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      ties += 1;
      return `It\'s a tie! Player\'s: ${playerSelection} matches Computer\'s: ${computerSelection}.`;
    case (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')):
      cpuWins += 1;
      return `You lose! Computer\'s: ${computerSelection} beats Player\'s: ${playerSelection}.`;
    case (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')):
      playerWins += 1;
      return `You win! Player\'s: ${playerSelection} beats Computer\'s: ${computerSelection}.`;
    default:
      return 'Incorrect choice';
  }
}

function printScores(round) {
  winLose.textContent = round;
  container.appendChild(winLose);

  playerScore.textContent = `Player's score: ${playerWins}`;
  container.appendChild(playerScore);
  
  cpuScore.textContent = `Computer's score: ${cpuWins}`;
  container.appendChild(cpuScore);
  
  tieScore.textContent = `Tie games: ${ties}`;
  container.appendChild(tieScore);
}

function checkNumWins() {
  if (playerWins === numOfRounds) {
    winner.textContent = `Player wins best of ${numOfRounds}`;
    container.appendChild(winner);
    choice.removeEventListener('click', choiceHandler);
  } else if (cpuWins === numOfRounds) {
    winner.textContent = `Computer wins best of ${numOfRounds}`;
    container.appendChild(winner);
    choice.removeEventListener('click', choiceHandler);
  }
}

function game(playerChoice) {
  const round = playRound(playerChoice, getComputerChoice());
  printScores(round);
  checkNumWins();
  
}

const choice = document.querySelector('#choice');
const container = document.querySelector('#container');
const winLose = document.createElement('p');
const playerScore = document.createElement('p');
const cpuScore = document.createElement('p');
const tieScore = document.createElement('p');
const winner = document.createElement('p');
const numOfRounds = 5;

let playerWins = 0;
let cpuWins = 0;
let ties = 0;

function choiceHandler(e) {
  const target = e.target;
  switch (target.id) {
    case 'rock':
      game(target.id);
      break;
    case 'paper':
      game(target.id);
      break;
    case 'scissors':
      game(target.id);
      break;
    default:
      return 'error';
  }
}

choice.addEventListener('click', choiceHandler);

