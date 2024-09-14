import { useEffect } from 'react';
import { Cell } from '../';
import './board.css';

function Board({ board, onSelect }) {
  useEffect(() => {
    console.log('Board: ', board);
  }, [board]);

  return (
    <section id="board" className="">
      {board.map((row, index) => (
        <div className="row" key={index}>
          {row.map((data, index) => (
            <Cell key={index} letter={data} onSelect={() => onSelect(index)} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Board;
