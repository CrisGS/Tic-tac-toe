let moves = 0;
let xScore = 0;
let oScore = 0;
let xSign = false;
let oSign = false;
let currentPlayer;
let isGameOver = false;
const currentPlayerTurn = document.getElementById("turn");
const resetButton = document.getElementById("replay");
const gameGrid = document.getElementById('grid').getElementsByTagName('div');
document.getElementById("xScore").innerHTML = xScore;
document.getElementById("oScore").innerHTML = oScore;
document.getElementById("gameContent").style.visibility = "hidden";

// Asign a function to every cell in the grid.
const cellsFunction = document.querySelectorAll('.cell').forEach(cell => cell.addEventListener("click", gameStatus));

// Function that let the player choose the sign he want to play with
function chooseSign(clickedButton) {
  document.getElementById("gameContent").style.visibility = "visible";
  if (clickedButton == 1) {
    moves = 0;
    xSign = true;
  } else {
    moves = 1;
    oSign = true;
  }
  document.getElementById("chooseSignMsg").style.visibility = "hidden";
  document.getElementById("chooseSign").style.visibility = "hidden";
}


// Display the sign of the current player in the chosen box, counting the number of played cells and display whose player's turn it is.
function gameStatus(clickedCellEvent) {
  if (isGameOver == false) {
    const clickedCell = clickedCellEvent.target;
    if (clickedCell.textContent == "") {
      if (moves % 2 == 0) {
        currentPlayer = "X";
        clickedCell.innerHTML = currentPlayer;
        currentPlayerTurn.innerHTML = "O player turn";
      } else if(moves % 2 != 0) {
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
let xWin = false, oWin = false, j = 0;
for (let i = 0; i < 3; ++i) {
  if (i == 0 && gameGrid[i].textContent == gameGrid[i + 4].textContent && gameGrid[i + 4].textContent == gameGrid[i + 8].textContent) {
    if (gameGrid[i + 4].textContent == 'X') {
      isGameOver = true;
      break;
    } else if (gameGrid[i + 4].textContent == 'O') {
      isGameOver = true;
      break;
    }
  } else if (i == 2 && gameGrid[i].textContent == gameGrid[i + 2].textContent && gameGrid[i + 2].textContent == gameGrid[i + 4].textContent) {
    if (gameGrid[i + 2].textContent == 'X') {
      isGameOver = true;
      break;
    } else if (gameGrid[i + 2].textContent == 'O') {
      isGameOver = true;
      break;
    }
  }
  if (gameGrid[j].textContent == gameGrid[j + 1].textContent && gameGrid[j + 1].textContent == gameGrid[j + 2].textContent) {
    if (gameGrid[j + 1].textContent == 'X') {
      isGameOver = true;
      break;
    } else if (gameGrid[j + 1].textContent == 'O') {
      isGameOver = true;
      break;
    }
  } else if (gameGrid[i].textContent == gameGrid[i + 3].textContent && gameGrid[i + 3].textContent == gameGrid[i + 6].textContent) {
    if (gameGrid[i + 3].textContent == 'X') {
      isGameOver = true;
      break;
    } else if (gameGrid[i + 3].textContent == 'O') {
      isGameOver = true;
      break;
    }
  }
  j += 3;
}
  
  // Check wich player has completed a line, colum, or diagonal with the same sign
  // Display the win message
  // Increment and display the score for the player who won
  if (isGameOver == true && currentPlayer == 'X') {
    currentPlayerTurn.innerHTML = "X PLAYER WIN";
    ++xScore;
    document.getElementById("xScore").innerHTML = xScore;
  } else if (isGameOver == true && currentPlayer == 'O') {
    currentPlayerTurn.innerHTML = "O PLAYER WIN";
    ++oScore;
    document.getElementById("oScore").innerHTML = oScore;
  } else if (xSign == true) {
    if (isGameOver == false && moves === 9) {
      currentPlayerTurn.innerHTML = "TIE";
      isGameOver = true;
    }
  } else if (oSign == true) {
    if (isGameOver == false && moves === 10) {
      currentPlayerTurn.innerHTML = "TIE";
      isGameOver = true;
    }
  }

  // Activate the reset score button
  if (xScore > 0 || oScore > 0) {
    document.getElementById("resetScore").disabled = false;
  }

  // If the game is over, the reset button will be activated
  if (xWin == true || oWin == true || (xWin == false && oWin == false)) {
    resetButton.disabled = false;
  }
}
  
// Reset the game.
function resetGame () {
  for (let i = 0; i < gameGrid.length; ++i) {
    gameGrid[i].innerHTML = "";
  }
  currentPlayerTurn.innerHTML = "Tic Tac Toe";
  if (xSign == true) {
    moves = 0;
  } else if (oSign == true) {
    moves = 1;
  }
  isGameOver = false;
  resetButton.disabled = "true";
}

// Reset the score
function resetScore() {
  xScore = 0;
  oScore = 0;
  document.getElementById("xScore").innerHTML = xScore;
  document.getElementById("oScore").innerHTML = oScore;
}

// Back to the main page where you can choose your sign
function backToChooseSign() {
  location.reload();
}
