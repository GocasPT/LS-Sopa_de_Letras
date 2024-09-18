function generateBoard(size) {
    let board = []

    for (let i = 0; i < size * size; i++) {
        board.push({
            letter: '',
            row: Math.floor(i / size),
            col: i % size,
            highlight: false,
        })
    }

    return board
}

export default generateBoard
