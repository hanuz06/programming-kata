// Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
// Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.


let whiteQueen = [0, 5];
let blackQueen = [5, 0];

let generateBoard = function(whiteQueen, blackQueen) {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  // Place the queens onto the board
  //rows
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (whiteQueen[0] === i && whiteQueen[1] === j) {
        board[i][j] = 1;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (blackQueen[0] === i && blackQueen[1] === j) {
        board[i][j] = 1;
      }
    }
  }
  return board;
};

let queenThreat = function() {
  let queenThreat;
  if (whiteQueen[1] === blackQueen[1] || whiteQueen[0] === blackQueen[0] || ((blackQueen[0] - whiteQueen[0]) / (blackQueen[1] - whiteQueen[1])) === -1 ||
    ((blackQueen[0] - whiteQueen[0]) / (blackQueen[1] - whiteQueen[1])) === 1) {
    queenThreat = true;
  } else {
    queenThreat = false;
  }
  return queenThreat;
};
console.log(generateBoard(whiteQueen, blackQueen));
console.log(queenThreat());