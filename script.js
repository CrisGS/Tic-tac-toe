let moves = 1;
let xScore = 0;
let oScore = 0;
let currentPlayer = "X";
const currentPlayerTurn = document.getElementById("turn");
const resetButton = document.getElementById("replay");
const gameGrid = document.getElementById('grid').getElementsByTagName('div');
document.getElementById("xScore").innerHTML = xScore;
document.getElementById("oScore").innerHTML = oScore;

// Asign a function to every cell in the grid.
const cellsFunction = document.querySelectorAll('.cell').forEach(cell => cell.addEventListener("click", gameStatus));

// Display the sign of the current player in the chosen box, counting the number of played cells and display whose player's turn it is.
function gameStatus(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
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

// Check which player won the game.
function winner() {

  // Variables that help me find out if the game ends in a tie
  let xWin = false, oWin = false;
  // Check if I have a complete line with the same sign.
  for (let i = 0; i < 3; i += 3) {
    let firstLineElement = gameGrid[i].textContent;
    let secLineElement = gameGrid[i + 1].textContent;
    let thirdLineElement = gameGrid[i + 2].textContent;
    if (firstLineElement == "X" && secLineElement == "X" && thirdLineElement == "X") {
      currentPlayerTurn.innerHTML = "X PLAYER WIN";
      xWin = true;
      break;
    } else if (firstLineElement == "O" && secLineElement == "O" && thirdLineElement == "O") {
      currentPlayerTurn.innerHTML = "O PLAYER WIN";
      oWin = true;
      break;
    }
  }
  
  // Check if I have a complete column with the same sign.
  for (let i = 0; i < 3; ++i) {
    let firstColElement = gameGrid[i].textContent;
    let secColElement = gameGrid[i + 3].textContent;
    let thirdColElement = gameGrid[i + 6].textContent;
    if (firstColElement == "X" && secColElement == "X" && thirdColElement == "X") {
      currentPlayerTurn.innerHTML = "X PLAYER WIN";
      xWin = true;
      break;
    } else if (firstColElement == "O" && secColElement == "O" && thirdColElement == "O") {
      currentPlayerTurn.innerHTML = "O PLAYER WIN";
      oWin = true;
      break;
    }
  }
  
  // Store diagonal elements in variables.
  let firstMainDiagElement = gameGrid[0].textContent;
  let secondMainDiagElement = gameGrid[4].textContent;
  let thirdMainDiagElement = gameGrid[8].textContent;
  let firstSecDiagElement = gameGrid[2].textContent;
  let secondSecDiagElement = gameGrid[4].textContent;
  let thirdSecDiagElement = gameGrid[6].textContent;
  
  // Check if I have a complete diagonal with the same sign.
  if (firstMainDiagElement == "X" && secondMainDiagElement == "X" && thirdMainDiagElement == "X") {
    currentPlayerTurn.innerHTML = "X PLAYER WIN";
    xWin = true;
  } else if (firstMainDiagElement == "O" && secondMainDiagElement == "O" && thirdMainDiagElement == "O") {
    currentPlayerTurn.innerHTML = "O PLAYER WIN";
    oWin = true;
  } else if (firstSecDiagElement == "X" && secondSecDiagElement == "X" && thirdSecDiagElement == "X") {
    currentPlayerTurn.innerHTML = "X PLAYER WIN";
    xWin = true;
  } else if (firstSecDiagElement == "O" && secondSecDiagElement == "O" && thirdSecDiagElement == "O") {
    currentPlayerTurn.innerHTML = "O PLAYER WIN";
    oWin = true;
  }

  if (xWin == true) {
    ++xScore;
    document.getElementById("xScore").innerHTML = xScore;
  } else if (oWin == true) {
    ++oScore;
    document.getElementById("oScore").innerHTML = oScore;
  }
  if (xScore > 0 || oScore > 0) {
    document.getElementById("resetScore").disabled = false;
  }

  // Check if the game it's end with a tie
  let tieGame = false;
  if (xWin == false && oWin == false && moves === 10) {
    currentPlayerTurn.innerHTML = "TIE";
    tieGame = true;
  }
  // If the game is over, the reset button will be activated
  if (xWin == true || oWin == true || tieGame == true) {
    resetButton.disabled = false;
  }
}
  
// Reset the game.
function resetGame () {
  for (let i = 0; i < gameGrid.length; ++i) {
    gameGrid[i].innerHTML = "";
  }
  currentPlayerTurn.innerHTML = "Tic Tac Toe";
  moves = 1;
}

// Reset the score
function resetScore() {
  location.reload();
}
