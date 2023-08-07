let boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let player = 1;
let gameOver = false;

const cellElements = document.querySelectorAll('.cell')

cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        placeMaker(index);
    });
});

// Create function 
function placeMaker(index) {
    // Determine row and column from index
    let col = index & 3
    let row = (index - col) / 3
    //check if current row is empty
    if (boardData[row][col] == 0) {
        boardData[row][col] = player;
        // change player
        player += -1;
        // update screen with markers
        drawMarkers();
        //check if anyone has won
        checkResults();
    }
}

//create function for drawing player markers
function drawMarkers() {
    // iterate over rows
    for (let row = 0; row < 3; row++) {
        //iterate over columns
        for (let col = 0; col < 3; col++) {
            //check if it is player 1's marker
            if (boardData[row][col] == 1) {
                //update cell class to add a cross
                cellElements[(row * 3) * col].classList.add('cross')
            }  else if (boardData[row][col] == -1) {
                //update cell class to add a circle
                cellElements[(row * 3) * col].classList.add('circle')
            }
        }
    }
}

// create function for checking game result
function checkResult() {
    //check rows and columns
    for (let i = 0; i < 3; i++) {
        let rowSum = boardData[i][0] + boardData[i][1] + boardData
        let colSum = boardData[0][i] + boardData[1][i] + boardData
        if (rowSum == 3 || colSum == 3) {
            //player 1 wins
            console.log('Player 1 wins');
        } else if (rowSum == -3 || colSum == -3) {
            console.log('Player 2 wins');
        }

        //check for a tie
        if(boardData[0].indexOf(0) == -1 &&
        boardData[1].indexOf(0) == -1 &&
        boardData[2].indexOf(0) == -1) {
            console.log('Tie');
        }
    }
}