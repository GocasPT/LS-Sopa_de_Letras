import { generateBoard } from '.';

const Diraction = [
    { row: -1, col: 0 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
    { row: -1, col: -1 },
    { row: -1, col: 1 },
    { row: 1, col: -1 },
    { row: 1, col: 1 },
];

function fillBoardWithWords(size, words) {
    const board = generateBoard(size);

    words = words.map((word) => word.toUpperCase());

    words.forEach((word) => {
        let wordPlaced = false;
        while (!wordPlaced) {
            const wordSize = word.length;
            const chooseDirection =
                Diraction[Math.floor(Math.random() * Diraction.length)];
            const row = Math.floor(Math.random() * size);
            const col = Math.floor(Math.random() * size);

            if (canPlaceWord(board, word, row, col, chooseDirection)) {
                for (let i = 0; i < wordSize; i++) {
                    board.find(
                        (cell) =>
                            cell.row === row + i * chooseDirection.row &&
                            cell.col === col + i * chooseDirection.col,
                    ).letter = word[i];
                }
                wordPlaced = true;
            }
        }
    });

    for (let i = 0; i < size * size; i++) {
        if (board[i].letter === '') {
            board[i].letter = String.fromCharCode(
                65 + Math.floor(Math.random() * 26),
            );
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

        if (
            board.find((cell) => cell.row === x && cell.col === y)?.letter !==
                '' &&
            board.find((cell) => cell.row === x && cell.col === y)?.letter !==
                word[i]
        ) {
            return false;
        }
    }
    return true;
}

export default fillBoardWithWords;
