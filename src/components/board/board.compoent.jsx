import { useEffect } from 'react';
import { Cell } from '../';
import './board.css';

function Board({ board, onSelect }) {
  useEffect(() => {
    console.log('Board: ', board);
  }, [board]);

  return (
    <section id="board" className="">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((letter, colIndex) => (
            <Cell key={colIndex} letter={letter} onSelect={() => onSelect(rowIndex, colIndex)} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Board;
