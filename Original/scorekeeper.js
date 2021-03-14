const playerOneScoreSpan = document.querySelector("#p1");
const playerTwoScoreSpan = document.querySelector("#p2");
const scoreLimit = document.querySelector("#numberselect");
const playerOneButton = document.querySelector("#p1button");
const playerTwoButton = document.querySelector("#p2button");
const resetButton = document.querySelector("#resetbutton");

playerOneButton.addEventListener("click", () => {
  let playerOneScore = parseInt(playerOneScoreSpan.innerText);
  let insideScore = parseInt(scoreLimit.value);
  if (playerOneScore < insideScore) {
    playerOneScore++;
    playerOneScoreSpan.innerText = playerOneScore;
  }
  if (playerOneScore >= insideScore) {
    playerOneButton.disabled = true;
    playerTwoButton.disabled = true;
    playerOneScoreSpan.style.color = "green";
    playerTwoScoreSpan.style.color = "red";
  }
});

playerTwoButton.addEventListener("click", () => {
  let playerTwoScore = parseInt(playerTwoScoreSpan.innerText);
  let insideScore = parseInt(scoreLimit.value);
  if (playerTwoScore < insideScore) {
    playerTwoScore++;
    playerTwoScoreSpan.innerText = playerTwoScore;
  }
  if (playerTwoScore >= insideScore) {
    playerOneButton.disabled = true;
    playerTwoButton.disabled = true;
    playerOneScoreSpan.style.color = "red";
    playerTwoScoreSpan.style.color = "green";
  }
});

resetButton.addEventListener("click", () => {
  playerOneScoreSpan.innerText = 0;
  playerTwoScoreSpan.innerText = 0;
  playerOneButton.disabled = false;
  playerTwoButton.disabled = false;
  playerOneScoreSpan.style.color = "black";
  playerTwoScoreSpan.style.color = "black";
});
