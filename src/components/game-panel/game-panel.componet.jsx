import { useEffect, useState } from 'react';
import { Board } from '../';
import { generateBoard, generateBoardWithWords, getWord, highlightCells } from '../../helpers';
import './game-panel.css';

function GamePanel({ boardSize, wordsList }) {
  const [board, setBoard] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  const checkWord = () => {
    const [cell1, cell2] = selectedCells;
    let selectedWord = getWord(cell1, cell2, board);

    wordsList.forEach((word) => {
      word = word.toUpperCase();

      if (word === selectedWord || word === selectedWord.split('').reverse().join('')) {
        setFoundWords((previouseState) => [...previouseState, word]);
        setBoard(highlightCells(cell1, cell2, board));
      }
    });

    setSelectedCells([]);
  };

  useEffect(() => {
    if (wordsList.length === 0) {
      setBoard(generateBoard(boardSize));
    } else {
      setBoard(generateBoardWithWords(boardSize, wordsList));
    }
  }, [boardSize, wordsList]);

  useEffect(() => {
    if (selectedCells.length === 2) {
      checkWord();
    }
  }, [selectedCells]);

  return (
    <section className="gamePanel">
      {boardSize > 0 ? (
        <Board
          board={board}
          boardSize={boardSize}
          onSelect={(row, col) =>
            setSelectedCells((previouseState) => [...previouseState, { row: row, col: col }])
          }
        />
      ) : null}
      {wordsList.length ? (
        <div>
          <p>Words:</p>
          <ul>
            {wordsList.map((word, index) => (
              <li key={index} className={foundWords.includes(word.toUpperCase()) ? 'done' : ''}>
                {word}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export default GamePanel;
