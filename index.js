let playerScore = 0;
let computerScore = 0;
const winAudio = new Audio("winSound.mp3");
const looseAudio = new Audio("looseSound.mp3");
const tieAudio = new Audio("tieSound.mp3");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    tieAudio.play();
    return "It's a tie!";
  }

  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    winAudio.play();
    return "You win!";
  }

  computerScore++;
  looseAudio.play();
  return "Computer wins!";
}

function handlePlayerChoice(playerChoice) {
  const computerChoice = getComputerChoice();
  const resultMessage = determineWinner(playerChoice, computerChoice);

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
        You chose: <span class="choice">${playerChoice}</span>, 
        Computer chose: <span class="choice">${computerChoice}</span>. 
        <strong>${resultMessage}</strong>
    `;

  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("result").innerText = "";
}

document
  .getElementById("rock")
  .addEventListener("click", () => handlePlayerChoice("Rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => handlePlayerChoice("Paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => handlePlayerChoice("Scissors"));

document.getElementById("reset").addEventListener("click", resetGame);
