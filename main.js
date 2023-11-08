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
function styleResults(result) {
  result.style.backgroundColor = 'rgb(48, 79, 79)';
  result.style.padding = '20px';
  result.style.borderRadius = '10px';
  result.style.margin = '20px';
  result.style.width = '450px';
  result.style.textAlign = 'center';

}
function printScores(round) {
  styleResults(winLose);
  winLose.textContent = round;
  container.appendChild(winLose);

  styleResults(playerScore);
  playerScore.textContent = `Player's score: ${playerWins}`;
  container.appendChild(playerScore);

  styleResults(cpuScore);
  cpuScore.textContent = `Computer's score: ${cpuWins}`;
  container.appendChild(cpuScore);

  styleResults(tieScore);
  tieScore.textContent = `Tie games: ${ties}`;
  container.appendChild(tieScore);
}

function checkNumWins() {
  if (playerWins === numOfRounds) {
    styleResults(winner);
    winner.textContent = `Player wins best of ${numOfRounds}`;
    container.appendChild(winner);
    choice.removeEventListener('click', choiceHandler);
  } else if (cpuWins === numOfRounds) {
    styleResults(winner);
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

choice.addEventListener('click', choiceHandler);

