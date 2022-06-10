let moves = 0;
let xScore = 0;
let oScore = 0;
let xSign = false;
let oSign = false;
let currentPlayer = "X";
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

  // Variables that help me find out if the game ends in a tie, or one of the player has won
  let xWin = false, oWin = false;
  let j = 0;
  for (let i = 0; i < 3; ++i) {
    if (i == 0 && gameGrid[i].textContent == currentPlayer && gameGrid[i + 4].textContent == currentPlayer && gameGrid[i + 8].textContent == currentPlayer) {
      xWin = true;
      break;
    } else if (i == 0 && gameGrid[i].textContent == currentPlayer && gameGrid[i + 4].textContent == currentPlayer && gameGrid[i + 8].textContent == currentPlayer) {
      oWin = true;
      break;
    } else if (i == 2 && gameGrid[i].textContent == currentPlayer && gameGrid[i + 2].textContent == currentPlayer && gameGrid[i + 4].textContent == currentPlayer) {
      xWin = true;
      break;
    } else if (gameGrid[2].textContent == currentPlayer && gameGrid[4].textContent == currentPlayer && gameGrid[6].textContent == currentPlayer) {
      oWin = true;
      break;
    }
    if (gameGrid[j].textContent == currentPlayer && gameGrid[j + 1].textContent == currentPlayer && gameGrid[j + 2].textContent == currentPlayer) {
      xWin = true;
      break;
    } else if (gameGrid[j].textContent == currentPlayer && gameGrid[j + 1].textContent == currentPlayer && gameGrid[j + 2].textContent == currentPlayer) {
      oWin = true;
      break;
    } else if (gameGrid[i].textContent == currentPlayer && gameGrid[i + 3].textContent == currentPlayer && gameGrid[i + 6].textContent == currentPlayer) {
      xWin = true;
      break;
    } else if (gameGrid[i].textContent == currentPlayer && gameGrid[i + 3].textContent == currentPlayer && gameGrid[i + 6].textContent == currentPlayer) {
      oWin = true;
      break;
    }
    j += 3;
  }
  
  // Check wich player has completed a line, colum, or diagonal with the same sign
  // Display the win message
  // Increment and display the score for the player who won
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
  }
  if (xSign == true) {
    if (xWin == false && oWin == false && moves === 9) {
      currentPlayerTurn.innerHTML = "TIE";
      isGameOver = true;
    }
  } else if (oSign == true) {
    if (xWin == false && oWin == false && moves === 10) {
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
  moves = 0;
  isGameOver = false;
  resetButton.disabled = "true";
}

// Let the player choose another sign
function chooseSignAgain() {
  document.getElementById("gameContent").style.visibility = "hidden";
  document.getElementById("chooseSignMsg").style.visibility = "visible";
  document.getElementById("chooseSign").style.visibility = "visible";
  resetGame();
}

// Reset the score
function resetScore() {
  xScore = 0;
  oScore = 0;
  document.getElementById("xScore").innerHTML = xScore;
  document.getElementById("oScore").innerHTML = oScore;
}
