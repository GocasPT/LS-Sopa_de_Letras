import { LEVELS_CONFIG } from '../../constants';
import './board.css';

function Board({ board, boardSize, onSelect, cellsWords }) {
    const classNameGrid =
        boardSize === LEVELS_CONFIG.Easy.size
            ? 'board--easy'
            : boardSize === LEVELS_CONFIG.Medium.size
              ? 'board--normal'
              : boardSize === LEVELS_CONFIG.Hard.size
                ? 'board--hard'
                : '';

    /* onMouseEnter={} */

    return (
        <div className={'board ' + classNameGrid}>
            {board.map((item, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(item.row, item.col)}>
                    {/* TODO: highlight system (switch colors) */}
                    {item.letter}
                </button>
            ))}
            <svg>
                {cellsWords.map((cell, index) => (
                    <line
                        key={index}
                        x1={cell.cell1.col * 46 + 23}
                        y1={cell.cell1.row * 46 + 23}
                        x2={cell.cell2.col * 46 + 23}
                        y2={cell.cell2.row * 46 + 23}
                        stroke={cell.color}
                    />
                ))}
            </svg>
        </div>
    );
}

export default Board;
