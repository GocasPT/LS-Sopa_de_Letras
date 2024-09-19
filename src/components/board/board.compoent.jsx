import { Cell } from '../';
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
                <Cell
                    key={index}
                    item={item}
                    onSelect={() => onSelect(item.row, item.col)}
                />
            ))}
        </div>
    );
}

export default Board;
