import { Cell } from '../'
import './board.css'

function Board({ board, boardSize, onSelect }) {
    return (
        <div
            className="board"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
                gridTemplateRows: `repeat(${boardSize}, 1fr)`,
            }}
        >
            {board.map((item, index) => (
                <Cell
                    key={index}
                    item={item}
                    onSelect={() => onSelect(item.row, item.col)}
                />
            ))}
        </div>
    )
}

export default Board
