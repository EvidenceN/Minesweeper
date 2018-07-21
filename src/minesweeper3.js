const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let numberOfRowsIndex = 1; numberOfRowsIndex < numberOfRows.length; numberOfRows++) {
    let row = [];
    for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns.length; numberOfColumns++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let numberOfRowsIndex = 1; numberOfRowsIndex < numberOfRows.length; numberOfRows++) {
    let row = [];
    for (let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns.length; numberOfColumns++) {
      row.push(null);
    };
    board.push(row);
  };

  let numberOfBombsPlaced = 0; {
    while (numberOfBombsPlaced < numberOfBombs);
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  /* The code in this while loop has the potential to place bombs on top of already existing bombs.
  This will be fixed when i apply control flow*/
  };

  return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3 , 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board');
printBoard(bombBoard);
