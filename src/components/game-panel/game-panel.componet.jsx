import { useEffect, useState } from 'react';
import { Board } from '../';
import { generateBoard, generateBoardWithWords } from '../../helpers';
import './game-panel.css';

function GamePanel({ boardSize, wordsList }) {
  const [board, setBoard] = useState([[]]);

  const handleSelect = (row, col) => {
    console.log('Select event: ', row, col);
  };

  useEffect(() => {
    if (wordsList.length === 0) {
      setBoard(generateBoard(boardSize));
    } else {
      setBoard(generateBoardWithWords(boardSize, wordsList));
    }
  }, [boardSize, wordsList]);

  return (
    <section>
      {boardSize === 0 ? null : (
        <Board board={board} onSelect={(row, col) => handleSelect(row, col)} />
      )}
      {wordsList.length ? (
        <div>
          <p>Words:</p>
          <ul>
            {wordsList.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export default GamePanel;
