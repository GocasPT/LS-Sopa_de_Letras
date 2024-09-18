function getWord(startCell, endCell, board) {
    const { row: startRow, col: startCol } = startCell
    const { row: endRow, col: endCol } = endCell

    const deltaX = endCol - startCol
    const deltaY = endRow - startRow

    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    let word = ''

    if (absDeltaX === absDeltaY || deltaX === 0 || deltaY === 0) {
        const stepX = deltaX === 0 ? 0 : deltaX / absDeltaX
        const stepY = deltaY === 0 ? 0 : deltaY / absDeltaY

        let currentRow = startRow
        let currentCol = startCol

        while (currentRow !== endRow + stepY || currentCol !== endCol + stepX) {
            word += board.find(
                (cell) => cell.row === currentRow && cell.col === currentCol
            ).letter
            currentRow += stepY
            currentCol += stepX
        }

        return word
    }
    return null
}

export default getWord
