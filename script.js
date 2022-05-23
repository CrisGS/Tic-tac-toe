let currentPlayer = "X";
let currentPlayerTurn = document.getElementById("turn");
let moves = 1;

function gameStatus(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  if (moves < 10) {
    document.getElementById("replay").disabled = false;
  }
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

function winner() {
  const cellOne = document.getElementById("box-one");
  const cellTwo = document.getElementById("box-two");
  const cellThree = document.getElementById("box-three");
  const cellFor = document.getElementById("box-for");
  const cellFive = document.getElementById("box-five");
  const cellSix = document.getElementById("box-six");
  const cellSeven = document.getElementById("box-seven");
  const cellEight = document.getElementById("box-eigth");
  const cellNine = document.getElementById("box-nine");

  let xWin = false;
  if (cellOne.textContent == "X" && cellTwo.textContent == "X" && cellThree.textContent == "X") {
    xWin = true;
    cellOne.style.backgroundColor = "green";
    cellTwo.style.backgroundColor = "green";
    cellThree.style.backgroundColor = "green";
  } else if (cellFor.textContent == "X" && cellFive.textContent == "X" && cellSix.textContent == "X") {
    xWin = true;
    cellFor.style.backgroundColor = "green";
    cellFive.style.backgroundColor = "green";
    cellSix.style.backgroundColor = "green";
  } else if (cellSeven.textContent == "X" && cellEight.textContent == "X" && cellNine.textContent == "X") {
    xWin = true;
    cellSeven.style.backgroundColor = "green";
    cellEight.style.backgroundColor = "green";
    cellNine.style.backgroundColor = "green";
  } else if (cellOne.textContent == "X" && cellFor.textContent == "X" && cellSeven.textContent == "X") {
    xWin = true;
    cellOne.style.backgroundColor = "green";
    cellFor.style.backgroundColor = "green";
    cellSeven.style.backgroundColor = "green";
  } else if (cellTwo.textContent == "X" && cellFive.textContent == "X" && cellEight.textContent == "X") {
    xWin = true;
    cellTwo.style.backgroundColor = "green";
    cellFive.style.backgroundColor = "green";
    cellEight.style.backgroundColor = "green";
  } else if (cellThree.textContent == "X" && cellSix.textContent == "X" && cellNine.textContent == "X") {
    xWin = true;
    cellThree.style.backgroundColor = "green";
    cellSix.style.backgroundColor = "green";
    cellNine.style.backgroundColor = "green";
  } else if (cellOne.textContent == "X" && cellFive.textContent == "X" && cellNine.textContent == "X") {
    xWin = true;
    cellOne.style.backgroundColor = "green";
    cellFive.style.backgroundColor = "green";
    cellNine.style.backgroundColor = "green";
  } else if (cellThree.textContent == "X" && cellFive.textContent == "X" && cellSeven.textContent == "X") {
    xWin = true;
    cellThree.style.backgroundColor = "green";
    cellFive.style.backgroundColor = "green";
    cellSeven.style.backgroundColor = "green";
  }

  if (xWin === true) {
    currentPlayerTurn.innerHTML = "X PLAYER WIN";
  }
  
  let oWin = false;
  if (cellOne.textContent == "O" && cellTwo.textContent == "O" && cellThree.textContent == "O") {
    oWin = true;
    cellOne.style.backgroundColor = "green";
    cellTwo.style.backgroundColor = "green";
    cellThree.style.backgroundColor = "green";
  } else if (cellFor.textContent == "O" && cellFive.textContent == "O" && cellSix.textContent == "O") {
    oWin = true;
    cellFor.style.backgroundColor = "green";
    cellFive.style.backgroundColor = "green";
    cellSix.style.backgroundColor = "green";
  } else if (cellSeven.textContent == "O" && cellEight.textContent == "O" && cellNine.textContent == "O") {
    oWin = true;
    cellSeven.style.backgroundColor = "green";
    cellEight.style.backgroundColor = "green";
    cellNine.style.backgroundColor = "green";
  } else if (cellOne.textContent == "O" && cellFor.textContent == "O" && cellSeven.textContent == "O") {
    oWin = true;
    cellOne.style.backgroundColor = "green";
    cellFor.style.backgroundColor = "green";
    cellSeven.style.backgroundColor = "green";
  } else if (cellTwo.textContent == "O" && cellFive.textContent == "O" && cellEight.textContent == "O") {
    oWin = true;
    cellTwo.style.backgroundColor = "green";
    cellFive.style.backgroundColor = "green";
    cellEight.style.backgroundColor = "green";
  } else if (cellThree.textContent == "O" && cellSix.textContent == "O" && cellNine.textContent == "O") {
    oWin = true;
    cellThree.style.backgroundColor = "green";
    cellSix.style.backgroundColor = "green";
    cellNine.style.backgroundColor = "green";
  } else if (cellOne.textContent == "O" && cellFive.textContent == "O" && cellNine.textContent == "O") {
    oWin = true;
    cellOne.style.backgroundColor = "green";
    cellFive.style.backgroundColor = "green";
    cellNine.style.backgroundColor = "green";
  } else if (cellThree.textContent == "O" && cellFive.textContent == "O" && cellSeven.textContent == "O") {
    oWin = true;
    cellThree.style.backgroundColor = "green";
    cellFive.style.backgroundColor = "green";
    cellSeven.style.backgroundColor = "green";
  }

  if (oWin === true) {
    currentPlayerTurn.innerHTML = "O PLAYER WIN";
  }

  if (xWin === false && oWin === false && moves === 10) {
    currentPlayerTurn.innerHTML = "TIE";
    document.getElementById("grid").style.backgroundColor = "yellow";
  }
}

function resetGame () {
  location.reload();
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener("click", gameStatus));
