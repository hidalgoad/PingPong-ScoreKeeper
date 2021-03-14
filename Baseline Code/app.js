let isGameOver = false;
let scoreLimit = document.querySelector("#scoreLimitInput");
let resetButton = document.querySelector("#resetButton");
let winningScore = document.querySelector("#initial-score");

const playerOne = {
  name: "Player One",
  display: document.querySelector("#P1DOMScore"),
  button: document.querySelector("#P1DOMButton"),
  score: 0,
};
const playerTwo = {
  name: "Player Two",
  display: document.querySelector("#P2DOMScore"),
  button: document.querySelector("#P2DOMButton"),
  score: 0,
};

function updateScore(player, opponent) {
  if (scoreLimit.value === "0" || scoreLimit.value === "") {
    isGameOver = true;
  }
  if (!isGameOver) {
    player.score++;
    if (
      player.score === opponent.score &&
      parseInt(scoreLimit.value) - player.score < 2
    ) {
      scoreLimit.value = parseInt(scoreLimit.value) + 1;
    }
    if (player.score === parseInt(scoreLimit.value)) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      player.button.disabled = true;
      opponent.display.classList.add("has-text-danger");
      opponent.button.disabled = true;
      winningScore.textContent = `${player.name} has won!.`;
      scoreLimit.value = 0;
    }
    player.display.textContent = player.score;
  }
}
function resetPlayer() {
  isGameOver = false;
  for (p of [playerOne, playerTwo]) {
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
    p.display.textContent = 0;
    p.score = 0;
  }
  winningScore.textContent = "Please enter a winning score.";
}

scoreLimit.addEventListener("change", () => {
  isGameOver = false;
  resetPlayer();
  if (scoreLimit.value > "0") winningScore.textContent = "Good Luck!";
});
playerOne.button.addEventListener("click", () => {
  updateScore(playerOne, playerTwo);
});
playerTwo.button.addEventListener("click", () => {
  updateScore(playerTwo, playerOne);
});
resetButton.addEventListener("click", () => {
  resetPlayer();
});
