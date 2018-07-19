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

generatePlayerBoard(3, 3);
console.log(generatePlayerBoard(5, 2));
