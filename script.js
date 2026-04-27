// let currentPlayer = "X";
// let gameBoard = ["", "", "", "", "", "", "", "", ""];
// let gameActive = true;

// function handleCellClick(clickedCellEvent) {
//   const clickedCell = clickedCellEvent.target;

//   const clickedCellIndex = parseInt(
//     clickedCell.getAttribute("data-cell-index"),
//     10,
//   );

//   if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
//     return;
//   }

//   gameBoard[clickedCellIndex] = currentPlayer;
//   clickedCell.innerText = currentPlayer;
//   checkResult();
// }

// function checkResult() {
//   const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   let roundWon = false;
//   for (let i = 0; i <= 7; i++) {
//     const winCondition = winningConditions[i];
//     const a = gameBoard[winCondition[0]];

//     const b = gameBoard[winCondition[1]];
//     const c = gameBoard[winCondition[2]];
//     if (a === "" || b === "" || c === "") {
//       continue;
//     }
//     if (a === b && b === c) {
//       roundWon = true;
//       break;
//     }
//   }

//   if (roundWon) {
//     alert("Player " + currentPlayer + " has won!");
//     gameActive = false;
//     return;
//   }

//   if (!gameBoard.includes("")) {
//     alert("It's a draw!");
//     gameActive = false;
//     return;
//   }

//   currentPlayer = currentPlayer === "X" ? "O" : "X";
// }

// function resetGame() {
//   currentPlayer = "X";
//   gameBoard = ["", "", "", "", "", "", "", "", ""];
//   gameActive = true;
//   const cells = document.querySelectorAll(".box");
//   cells.forEach((cell) => {
//     cell.innerText = "";
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const cells = document.querySelectorAll(".box");
//   cells.forEach((cell, index) => {
//     cell.setAttribute("data-cell-index", index);
//     cell.addEventListener("click", handleCellClick);
//   });

//   const resetBtn = document.getElementById("reset-btn");
//   resetBtn.addEventListener("click", resetGame);
// });
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "red";
let score = 0;

function checkMatch(clickedColor) {
  if (clickedColor === targetColor) {
    score++;
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    updateDisplay();
  } else {
    alert("Wrong color! Try again.");
    score = 0;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("target-color").style.backgroundColor = targetColor;
  document.getElementById("score").innerText = "Score: " + score;
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize display
  updateDisplay();

  // Add event listeners to color buttons
  colors.forEach((color) => {
    const btn = document.getElementById(color + "-btn");
    if (btn) {
      btn.addEventListener("click", function () {
        checkMatch(color);
      });
    }
  });

  // Reset button
  const resetBtn = document.getElementById("reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      score = 0;
      targetColor = colors[Math.floor(Math.random() * colors.length)];
      updateDisplay();
    });
  }
});
