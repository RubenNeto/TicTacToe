let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function loadTheGame() {
  const ticTacToeDiv = document.getElementById("tic_tac_toe");
  ticTacToeDiv.innerHTML = "";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  document.querySelector(".game_over").style.display = "none";
  document.querySelector(".current_player").textContent = currentPlayer;

  for (let i = 0; i < 9; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.addEventListener("click", () => handleClick(i));
    ticTacToeDiv.appendChild(cellDiv);
  }
}

function handleClick(index) {
  if (gameBoard[index] === "" && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementById("tic_tac_toe").children[index].textContent =
      currentPlayer;
    if (checkWin()) {
      gameActive = false;
      document.querySelector(
        ".game_over"
      ).textContent = `${currentPlayer} Wins!`;
      document.querySelector(".game_over").style.display = "block";
    } else if (!gameBoard.includes("")) {
      gameActive = false;
      document.querySelector(".game_over").textContent = "Draw!";
      document.querySelector(".game_over").style.display = "block";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.querySelector(".current_player").textContent = currentPlayer;
    }
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    if (pattern.every((index) => gameBoard[index] === currentPlayer)) {
      pattern.forEach((index) => {
        document
          .getElementById("tic_tac_toe")
          .children[index].classList.add("win-cell");
      });
      return true;
    }
  }
  return false;
}

document.addEventListener("DOMContentLoaded", loadTheGame);
