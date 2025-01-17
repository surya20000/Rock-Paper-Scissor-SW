function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


document.getElementById("rock").addEventListener("click", () => handlePlayerChoice("Rock"));
document.getElementById("paper").addEventListener("click", () => handlePlayerChoice("Paper"));
document.getElementById("scissors").addEventListener("click", () => handlePlayerChoice("Scissors"));
