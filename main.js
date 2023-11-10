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
      console.log('playRound Error');
  }
}
function styleResults(result) {
  result.style.backgroundColor = 'rgb(48, 79, 79)';
  result.style.padding = '20px';
  result.style.borderRadius = '10px';
  result.style.marginBottom = '30px';
  result.style.width = '235px';
  result.style.textAlign = 'left';
  result.style.boxShadow = '15px 15px 10px 10px rgba(0, 0, 0, 0.5)';
}

function styleWinLose(winLose) {
  winLose.style.backgroundColor = 'rgb(48, 79, 79)';
  winLose.style.padding = '20px';
  winLose.style.borderRadius = '10px';
  winLose.style.marginBottom = '30px';
  winLose.style.textAlign = 'center';
  winLose.style.boxShadow = '15px 15px 10px 10px rgba(0, 0, 0, 0.5)';
}

function printScores(round) {
  container.appendChild(resultsDiv);
  styleWinLose(winLose);
  winLose.textContent = round;
  resultsDiv.appendChild(winLose);

  styleResults(playerScore);
  playerScore.textContent = `Player's score: ${playerWins}`;
  resultsDiv.appendChild(playerScore);

  styleResults(cpuScore);
  cpuScore.textContent = `Computer's score: ${cpuWins}`;
  resultsDiv.appendChild(cpuScore);

  styleResults(tieScore);
  tieScore.textContent = `Tie games: ${ties}`;
  resultsDiv.appendChild(tieScore);
}

function styleRestartModal() {
  restartModal.style.position = 'fixed';
  restartModal.style.width = '100%';
  restartModal.style.height = '100%';
  restartModal.style.display = 'flex';
  restartModal.style.justifyContent = 'center';
  restartModal.style.alignItems = 'center';
  restartModal.style.backgroundColor = 'rgba(0, 0, 0, 0.5';
}

function styleRestartModalContent() {
  restartModalContent.style.backgroundColor = 'rgb(48, 79, 79)';
  restartModalContent.style.padding = '30px';
  restartModalContent.style.borderRadius = '10px';
  restartModalContent.style.boxShadow =
    '15px 15px 10px 10px rgba(0, 0, 0, 0.5)';
  restartModalContent.style.display = 'flex';
  restartModalContent.style.flexDirection = 'column';
  restartModalContent.style.alignItems = 'center';
}

function styleRestartBtn() {
  restartBtn.style.width = '100px';
  restartBtn.style.height = '100px';
  restartBtn.style.borderRadius = '50%';
  restartBtn.style.borderStyle = 'none';
  restartBtn.style.boxShadow = '15px 15px 10px 10px rgba(0, 0, 0, 0.5)';
  restartBtn.style.fontSize = '90%';
  restartBtn.style.fontWeight = 'bolder';
}

function endGame(winner, loser, winnerScore, loserScore) {
  document.body.appendChild(restartModal);
  styleRestartModal();
  restartModal.appendChild(restartModalContent);
  styleRestartModalContent();
  restartPara.textContent = `${winner} beats ${loser} ${winnerScore} to ${loserScore}!`;
  restartPara.style.padding = '0 0 20px 0';
  restartBtn.textContent = 'Restart';
  styleRestartBtn();
  restartModalContent.append(restartPara, restartBtn);

  choice.removeEventListener('click', choiceHandler);
  restartBtn.addEventListener('click', () => {
    cpuWins = 0;
    playerWins = 0;
    ties = 0;
    printScores('So your going to try again.');
    restartModalContent.remove(restartBtn, restartPara, restartModalContent);
    document.body.removeChild(restartModal);
    choice.addEventListener('click', choiceHandler);
  });
}

function checkNumWins() {
  if (playerWins === numOfRounds) {
    endGame('Player', 'Computer', playerWins, cpuWins);
  } else if (cpuWins === numOfRounds) {
    endGame('Computer', 'Player', cpuWins, playerWins);
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
      console.log('choiceHandler Error');
  }
}

const choice = document.querySelector('#choice');
const container = document.querySelector('#container');
const winLose = document.createElement('p');
const playerScore = document.createElement('p');
const cpuScore = document.createElement('p');
const tieScore = document.createElement('p');
const winner = document.createElement('p');
const resultsDiv = document.createElement('div');

const restartModal = document.createElement('div');
const restartModalContent = document.createElement('div');
const restartPara = document.createElement('p');
const restartBtn = document.createElement('button');

resultsDiv.style.display = 'flex';
resultsDiv.style.flexDirection = 'column';
resultsDiv.style.alignItems = 'center';

const numOfRounds = 5;

let playerWins = 0;
let cpuWins = 0;
let ties = 0;

choice.addEventListener('click', choiceHandler);