import { generateBoard } from './';

const Diraction = [
  { row: -1, col: 0 },
  { row: 1, col: 0 },
  { row: 0, col: -1 },
  { row: 0, col: 1 },
  { row: -1, col: -1 },
  { row: -1, col: 1 },
  { row: 1, col: -1 },
  { row: 1, col: 1 }
];

function generateBoardWithWords(size, words) {
  let board = generateBoard(size);

  words.forEach((word) => {
    let wordPlaced = false;
    while (!wordPlaced) {
      const wordSize = word.length;
      const chooseDirection = Diraction[Math.floor(Math.random() * Diraction.length)];
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);

      if (canPlaceWord(board, word, row, col, chooseDirection)) {
        for (let i = 0; i < wordSize; i++) {
          board[row + i * chooseDirection.row][col + i * chooseDirection.col] = word[i];
        }
        wordPlaced = true;
      }
    }
  });

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === '') {
        board[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  }

  return board;
}

function canPlaceWord(board, word, row, col, direction) {
  for (let i = 0; i < word.length; i++) {
    const x = row + i * direction.row;
    const y = col + i * direction.col;

    if (x < 0 || x >= board.length || y < 0 || y >= board.length) {
      return false;
    }

    if (board[x][y] !== '' && board[x][y] !== word[i]) {
      return false;
    }
  }
  return true;
}

export default generateBoardWithWords;
