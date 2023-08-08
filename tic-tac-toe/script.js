// create array to hold board data
let boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

// define game variables
let player = 1;
let gameOver = false;

// pull in cells from DOM
const cellElements = document.querySelectorAll('.cell')
//pull in result text from DOM
const resultElement = document.getElementById('result');

// add event listener
cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        placeMarker(index);
    });
});

// create function for placing markers
function placeMarker(index) {
    // determine row and column for index
    let col = index % 3
    let row = (index - col) / 3
    // check if current cell is empty
    if(boardData[row][col] == 0 && gameOver == false) {
    boardData[row][col] = player;
    //change player
    player *= -1;
    //update screen with markers
    drawMarkers();
    //check if anyone has won
    checkResult()
    // console.log(boardData);
    }
}

// create function for drawing player markers
function drawMarkers() {
    // iterate over rows
    for (let row = 0; row < 3; row++) {
        //iterate over columns
        for (let col = 0; col < 3; col++) {
            //check if player 1's marker
            if (boardData[row][col] == 1) {
                // update cell class to add a cross
                cellElements[(row * 3) + col].classList.add('cross');
            } else if (boardData[row][col] == -1) {
                // update cell class to add a cross
                cellElements[(row * 3) + col].classList.add('circle');
            }
        }
    }
}

//create function for checking game results
function checkResult() {
    // Check rows and columns
    for(let i = 0; i < 3; i++) {
      let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
      let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];
      if(rowSum == 3 || colSum == 3) {
        // Player 1 wins
        endGame(1);
        return
      } else if(rowSum == -3 || colSum == -3) {
        // Player 2 wins
        endGame(2);
        return
      }
    }

    //check diagnols
        let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
        let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
        if (diagonalSum1 == 3 || diagonalSum2 == 3) {
            //player 1 wins
            endGame(1);
            return
        } else if (diagonalSum1 == -3 || diagonalSum2 == -3) {
            //player 2 wins
            endGame(2);
            return
        }

        //check for tie
        if (boardData[0].indexOf(0) == -1 &&
        boardData[1].indexOf(0) == -1 &&
        boardData[2].indexOf(0) == -1) {
            endGame(0);
            return
        }
}

// function to end game and display results
function endGame(winner) {
    // Trigger game over
    gameOver = true;
    // Check if game ended in a tie
    if(winner == 0) {
      resultElement.innerText = "It's a tie!"
    } else {
      resultElement.innerText = `Player ${winner} wins!`
    }
  }

// restart game
const restartButton = document.getElementById('restart')
//add event listener to restart button
restartButton.addEventListener('click', () => {
    //reset game variables
     boardData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
        ]
        
       player = 1;
       gameOver = false; 
       //reset game board
       cellElements.forEach(cell => {
        cell.classList.remove('cross', 'circle')
       });
       //reset winner
       resultElement.innerText = ""
});