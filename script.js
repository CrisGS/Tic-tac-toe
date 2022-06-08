let moves = 1;
let xScore = 0;
let oScore = 0;
let currentPlayer = "X";
let isGameOver = false;
const currentPlayerTurn = document.getElementById("turn");
const resetButton = document.getElementById("replay");
const gameGrid = document.getElementById('grid').getElementsByTagName('div');
document.getElementById("xScore").innerHTML = xScore;
document.getElementById("oScore").innerHTML = oScore;

// Asign a function to every cell in the grid.
  const cellsFunction = document.querySelectorAll('.cell').forEach(cell => cell.addEventListener("click", gameStatus));

// Display the sign of the current player in the chosen box, counting the number of played cells and display whose player's turn it is.
function gameStatus(clickedCellEvent) {
  if (isGameOver == false) {
    const clickedCell = clickedCellEvent.target;
    if (clickedCell.textContent == "") {
      if (moves % 2 != 0) {
        currentPlayer = "X";
        clickedCell.innerHTML = currentPlayer;
        currentPlayerTurn.innerHTML = "O player turn";
      } else if(moves % 2 == 0) {
        currentPlayer = "O";
        clickedCell.innerHTML = currentPlayer;
        currentPlayerTurn.innerHTML = "X player turn";
      }
      ++moves;
      winner();
    }
  }
}

// Check which player won the game.
function winner() {
  for (let i = 0; i < gameGrid.length; ++i) {
    if (gameGrid[i].textContent == "") {
      gameGrid[i].disabled = true;
    }
  }
  // Variables that help me find out if the game ends in a tie
  let xWin = false, oWin = false;
  let j = 0;
  for (let i = 0; i < 3; ++i) {
    if (i == 0 && gameGrid[i].textContent == "X" && gameGrid[i + 4].textContent == "X" && gameGrid[i + 8].textContent == "X") {
      xWin = true;
      break;
    } else if (i == 0 && gameGrid[i].textContent == "O" && gameGrid[i + 4].textContent == "O" && gameGrid[i + 8].textContent == "O") {
      oWin = true;
      break;
    } else if (i == 2 && gameGrid[i].textContent == "X" && gameGrid[i + 2].textContent == "X" && gameGrid[i + 4].textContent == "X") {
      xWin = true;
      break;
    } else if (gameGrid[2].textContent == "O" && gameGrid[4].textContent == "O" && gameGrid[6].textContent == "O") {
      oWin = true;
      break;
    }
    if (gameGrid[j].textContent == "X" && gameGrid[j + 1].textContent == "X" && gameGrid[j + 2].textContent == "X") {
      xWin = true;
      break;
    } else if (gameGrid[j].textContent == "O" && gameGrid[j + 1].textContent == "O" && gameGrid[j + 2].textContent == "O") {
      oWin = true;
      break;
    } else if (gameGrid[i].textContent == "X" && gameGrid[i + 3].textContent == "X" && gameGrid[i + 6].textContent == "X") {
      xWin = true;
      break;
    } else if (gameGrid[i].textContent == "O" && gameGrid[i + 3].textContent == "O" && gameGrid[i + 6].textContent == "O") {
      oWin = true;
      break;
    }
    j += 3;
  }
  
  if (xScore > 0 || oScore > 0) {
    document.getElementById("resetScore").disabled = false;
  }
  
  // If the game is over, the reset button will be activated
  if (xWin == true || oWin == true || (xWin == false && oWin == false)) {
    resetButton.disabled = false;
  }
  
  if (xWin == true) {
    currentPlayerTurn.innerHTML = "X PLAYER WIN";
    ++xScore;
    document.getElementById("xScore").innerHTML = xScore;
    isGameOver = true;
  } else if (oWin == true) {
    currentPlayerTurn.innerHTML = "O PLAYER WIN";
    ++oScore;
    document.getElementById("oScore").innerHTML = oScore;
    isGameOver = true;
  } else if (xWin == false && oWin == false && moves === 10) {
    currentPlayerTurn.innerHTML = "TIE";
    isGameOver = true;
  }
}
  
// Reset the game.
function resetGame () {
  for (let i = 0; i < gameGrid.length; ++i) {
    gameGrid[i].innerHTML = "";
  }
  currentPlayerTurn.innerHTML = "Tic Tac Toe";
  moves = 1;
  isGameOver = false;
}

// Reset the score
function resetScore() {
  location.reload();
}
