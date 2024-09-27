import { LEVELS_CONFIG } from '../../constants';
import './board.css';

function Board({ board, boardSize, onSelect }) {
    const classNameGrid =
        boardSize === LEVELS_CONFIG[1].size
            ? 'board--easy'
            : boardSize === LEVELS_CONFIG[2].size
              ? 'board--normal'
              : boardSize === LEVELS_CONFIG[3].size
                ? 'board--hard'
                : '';

    return (
        <div className={'board ' + classNameGrid}>
            {board.map((item, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(item.row, item.col)}
                    className={item.highlight ? 'highlight' : ''}
                    id={item.highlight ? '1' : ''}>
                    {/* TODO: highlight system (switch colors) */}
                    {item.letter}
                </button>
            ))}
        </div>
    );
}

export default Board;
